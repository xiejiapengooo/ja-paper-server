import { Body, Controller, Get, Headers, Post, Query, UsePipes } from "@nestjs/common";
import { AuthService } from "./auth.service";
import {
  ResetPassDto,
  resetPassSchema,
  SignInDto,
  signInSchema,
  SignUpDto,
  signUpSchema,
  StsForUploadDto,
  stsForUploadSchema,
  TokenAddressDto,
  tokenAddressSchema,
} from "./dto";
import { JoiValidationPipe } from "../pipe";
import { Public, Role, ROLES } from "./decorator";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post("signIn")
  @UsePipes(new JoiValidationPipe(signInSchema))
  signIn(@Body() dto: SignInDto, @Headers() headers: Headers) {
    return this.authService.signIn(dto, headers);
  }

  @Public()
  @Post("signUp")
  @UsePipes(new JoiValidationPipe(signUpSchema))
  signUp(@Body() dto: SignUpDto, @Headers() headers: Headers) {
    return this.authService.signUp(dto, headers);
  }

  @Public()
  @Post("resetPass")
  @UsePipes(new JoiValidationPipe(resetPassSchema))
  resetPass(@Body() dto: ResetPassDto, @Headers() headers: Headers) {
    return this.authService.resetPass(dto, headers);
  }

  @Get("refreshUser")
  @Role(ROLES.SUPER_ADMIN, ROLES.ADMIN, ROLES.USER)
  refreshUser(@Headers() headers: Headers) {
    return this.authService.refreshUser(headers);
  }

  @Get("token/address")
  @Role(ROLES.SUPER_ADMIN, ROLES.ADMIN)
  @UsePipes(new JoiValidationPipe(tokenAddressSchema))
  tokenAddress(@Query() dto: TokenAddressDto, @Headers() headers: Headers) {
    return this.authService.tokenAddress(dto, headers);
  }

  @Post("stsForUpload")
  @UsePipes(new JoiValidationPipe(stsForUploadSchema))
  stsForUpload(@Body() dto: StsForUploadDto) {
    return this.authService.stsForUpload(dto);
  }
}
