import { Inject, Injectable, Logger } from "@nestjs/common";
import { ResetPassDto, SignInDto, SignUpDto, StsForUploadDto, TokenAddressDto } from "./dto";
import { PrismaService } from "../prisma/prisma.service";
import { StatusCode } from "../interceptor";
import * as argon from "argon2";
import { JwtService } from "@nestjs/jwt";
import { RequestService } from "../request/request.service";
import type { AddressTokenPayload, ROLES, UserTokenPayload } from "./decorator";
import { ConfigService } from "@nestjs/config";
import { CosUtils, STS_TYPE } from "../utils/cos";
import type { User, Certificate } from "@prisma/client";
import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Cache } from "cache-manager";
import { CACHE_KEY_LOGIN_TOKEN } from "../constant/cacheKey";
import { parseToken } from "../utils";
import { CERTIFICATE_TYPE, USER_STATUS } from "../constant";
import { getLocaleDate } from "../utils/date";

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
    private readonly request: RequestService,
    private readonly config: ConfigService,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
  ) {}

  private async onApplicationBootstrap() {
    const certificates = await this.prisma.certificate.findMany({
      where: {
        type: CERTIFICATE_TYPE.LOGIN,
        expiredAt: {
          gt: getLocaleDate().toISOString(),
        },
      },
    });
    const map = new Map();
    for (const certificate of certificates) {
      const payload = parseToken<UserTokenPayload>(certificate.content);
      if (map.has(payload.userId)) {
        map.get(payload.userId).push(certificate.content);
      } else {
        map.set(payload.userId, [certificate.content]);
      }
    }
    for (const [userId, tokens] of map) {
      await this.setUserTokenCache(userId, tokens);
    }
  }

  private getToken(headers: Headers): string {
    const [_, token] = headers["authorization"]?.split(" ") ?? [];
    return token || "";
  }

  private signUserToken(user: User) {
    return this.jwt.signAsync({
      userId: user.id,
      username: user.username || "",
      role: user.role as ROLES,
      certificateType: CERTIFICATE_TYPE.LOGIN,
    });
  }

  private async getUserTokenCache(userId: number) {
    const cacheKey = `${CACHE_KEY_LOGIN_TOKEN}/${userId}`;
    const tokens: string[] = await this.cacheManager.get(cacheKey);
    return tokens || [];
  }

  private async setUserTokenCache(userId: number, tokens: string[]) {
    const cacheKey = `${CACHE_KEY_LOGIN_TOKEN}/${userId}`;
    await this.cacheManager.set(cacheKey, tokens);
  }

  async removeUserTokenCache(userId: number) {
    const cacheKey = `${CACHE_KEY_LOGIN_TOKEN}/${userId}`;
    await this.cacheManager.del(cacheKey);
  }

  private async setUserNewToken(user: User, headers: Headers) {
    const token = await this.signUserToken(user);
    const payload = parseToken<UserTokenPayload>(token);
    const headersToken = this.getToken(headers);
    const certificate = await this.prisma.certificate.findFirst({
      where: {
        content: headersToken,
      },
    });
    let result: Certificate;
    if (certificate?.id) {
      result = await this.prisma.certificate.update({
        where: {
          id: certificate.id,
        },
        data: {
          expiredAt: getLocaleDate(payload.exp * 1000).toISOString(),
          content: token,
          userAgent: headers["user-agent"] || "",
        },
      });
    } else {
      result = await this.prisma.certificate.create({
        data: {
          expiredAt: getLocaleDate(payload.exp * 1000).toISOString(),
          type: CERTIFICATE_TYPE.LOGIN,
          content: token,
          userAgent: headers["user-agent"] || "",
        },
      });
    }
    const tokens = await this.getUserTokenCache(user.id);
    tokens.push(result.content);
    await this.setUserTokenCache(user.id, tokens);

    return {
      token,
      payload,
    };
  }

  private async checkUser(user: User | null, dto?: { role: ROLES }) {
    if (!user) {
      return {
        code: StatusCode.USER_UNKNOWN,
        message: "未知用户",
        data: null,
      };
    }
    if (user.status !== USER_STATUS.OK) {
      return {
        code: StatusCode.USER_DISABLED,
        message: "已禁用",
        data: null,
      };
    }
    if (!user.password) {
      return {
        code: StatusCode.PASS_UPDATE,
        message: "密码变更",
        data: null,
      };
    }
    if (dto && user.role !== dto.role) {
      return {
        code: StatusCode.ROLE_MISMATCH,
        message: "权限变更",
        data: null,
      };
    }

    return null;
  }

  async resetPass(dto: ResetPassDto, headers: Headers) {
    try {
      const jscode2sessionRes = await this.request.jscode2session(dto.jsCode);
      if (jscode2sessionRes.code !== StatusCode.OK) {
        throw jscode2sessionRes;
      }

      const { openid } = jscode2sessionRes.data;
      const user = await this.prisma.user.findFirst({
        where: {
          openid,
        },
      });

      const updatedUser = await this.prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          password: await argon.hash(dto.password),
        },
      });

      return {
        code: StatusCode.OK,
        message: "密码保存成功",
        data: await this.setUserNewToken(updatedUser, headers),
      };
    } catch (error) {
      this.logger.error(error);
      return {
        code: StatusCode.FAIL,
        message: "密码保存失败",
        data: error,
      };
    }
  }

  async signUp(dto: SignUpDto, headers: Headers) {
    try {
      if (
        !(await this.prisma.user.findFirst({
          where: {
            phone: dto.phone,
            openid: "",
          },
        }))
      ) {
        return {
          code: StatusCode.FAIL,
          message: "不允许添加该手机号成员",
          data: null,
        };
      }

      const jscode2sessionRes = await this.request.jscode2session(dto.jsCode);
      if (jscode2sessionRes.code !== StatusCode.OK) {
        throw jscode2sessionRes;
      }

      const { openid } = jscode2sessionRes.data;
      const updatedUser = await this.prisma.user.update({
        where: {
          phone: dto.phone,
        },
        data: {
          openid,
          password: await argon.hash(dto.password),
        },
      });

      return {
        code: StatusCode.OK,
        message: "用户注册成功",
        data: await this.setUserNewToken(updatedUser, headers),
      };
    } catch (error) {
      this.logger.error(error);
      return {
        code: StatusCode.FAIL,
        message: "用户注册失败",
        data: error,
      };
    }
  }

  async signIn(dto: SignInDto, headers: Headers) {
    try {
      const jscode2sessionRes = await this.request.jscode2session(dto.jsCode);
      if (jscode2sessionRes.code !== StatusCode.OK) {
        throw jscode2sessionRes;
      }

      const { openid } = jscode2sessionRes.data;
      const user = await this.prisma.user.findFirst({
        where: {
          openid,
        },
      });

      const checkResult = await this.checkUser(user);
      if (checkResult) {
        return checkResult;
      }

      if (!(await argon.verify(user.password, dto.password))) {
        return {
          code: StatusCode.FAIL,
          message: "密码不正确",
          data: null,
        };
      }

      return {
        code: StatusCode.OK,
        message: "success",
        data: await this.setUserNewToken(user, headers),
      };
    } catch (error) {
      this.logger.error(error);
      return {
        code: StatusCode.FAIL,
        message: "登陆失败",
        data: error,
      };
    }
  }

  async refreshUser(headers: Headers) {
    try {
      const token = this.getToken(headers);
      const payload = parseToken<UserTokenPayload>(token);
      const certificate = await this.prisma.certificate.findFirst({
        where: {
          content: token,
        },
      });
      if (!certificate) {
        return {
          code: StatusCode.FAIL,
          message: "无效凭证",
          data: null,
        };
      }

      const user = await this.prisma.user.findUnique({
        where: {
          id: payload.userId,
        },
      });

      const checkResult = await this.checkUser(user, { role: payload.role });
      if (checkResult) {
        return checkResult;
      }

      return {
        code: StatusCode.OK,
        message: "success",
        data: await this.setUserNewToken(user, headers),
      };
    } catch (error) {
      this.logger.error(error);
      return {
        code: StatusCode.FAIL,
        message: "fail",
        data: error,
      };
    }
  }

  async tokenAddress(dto: TokenAddressDto, headers: Headers) {
    try {
      const expiredAt = getLocaleDate().add(1, "day").toISOString();
      const payload: Omit<AddressTokenPayload, "exp" | "iat"> = {
        relationId: dto.relationId,
        certificateType: CERTIFICATE_TYPE.ADDRESS,
      };
      const token = await this.jwt.signAsync(payload, {
        expiresIn: "1d",
      });

      await this.prisma.certificate.create({
        data: {
          expiredAt,
          type: CERTIFICATE_TYPE.ADDRESS,
          content: token,
          userAgent: headers["user-agent"] || "",
        },
      });

      return {
        code: StatusCode.OK,
        message: "获取地址临时凭证成功",
        data: {
          token,
        },
      };
    } catch (error) {
      this.logger.error(error);
      return {
        code: StatusCode.FAIL,
        message: "获取地址临时凭证失败",
        data: error,
      };
    }
  }

  async stsForUpload(dto: StsForUploadDto) {
    try {
      const cosKeys = dto.exts.map((ext) => CosUtils.generateCosKey(dto.folder, ext));

      if (cosKeys.length !== dto.exts.length) {
        return {
          code: StatusCode.FAIL,
          message: "生成cosKey失败",
          data: null,
        };
      }

      const credentialData = await CosUtils.getSts({
        type: STS_TYPE.PUT,
        durationSeconds: 1800,
        cosKeys,
      });

      return {
        code: StatusCode.OK,
        message: "获取临时签名成功",
        data: {
          ...credentialData,
          region: this.config.get("COS_REGION"),
          bucket: this.config.get("COS_BUCKET"),
          cosKeys,
        },
      };
    } catch (error) {
      return {
        code: StatusCode.FAIL,
        message: "获取临时签名失败",
        data: error,
      };
    }
  }
}
