import COS, { UploadBody } from "cos-nodejs-sdk-v5";
import STS, { CredentialData } from "qcloud-cos-sts";
import { v7 as uuidv7 } from "uuid";
import * as process from "process";

export const COS_GET_OBJECTS_URL_DURATION = 7200;

export const STS_TYPE = {
  PUT: "put",
  GET: "get",
  DELETE: "delete",
} as const;

export const COS_FOLDER_NAME = {
  IMAGE: "image",
  VIDEO: "video",
  AUDIO: "audio",
  FILE: "file",
} as const;

export type ObjectListItem = {
  name: string;
  key: string;
  size: string;
  updatedAt: string;
};

export type GetImagesUrlOptions = {
  isFullUrl: boolean;
};

export class CosUtils {
  static credentialData: CredentialData;

  static generateCosKey(folder: typeof COS_FOLDER_NAME, ext?: string) {
    return `${folder}/${uuidv7()}${ext ? `.${ext}` : ""}`;
  }

  static generateResource(cosKeys: string[]) {
    const Region = process.env.COS_REGION!;
    const Bucket = process.env.COS_BUCKET!;
    const AppId = Bucket.slice(Bucket.lastIndexOf("-") + 1);
    return cosKeys.map((cosKey) => `qcs::cos:${Region}:uid/${AppId}:${Bucket}/${cosKey}`);
  }

  static getSts({
    type,
    durationSeconds,
    cosKeys = [],
  }: {
    type: (typeof STS_TYPE)[keyof typeof STS_TYPE];
    durationSeconds: number;
    cosKeys?: string[];
  }): Promise<CredentialData> {
    return new Promise((resolve, reject) => {
      const SecretId = process.env.COS_SECRET_ID!;
      const SecretKey = process.env.COS_SECRET_KEY!;

      let action: string[] = [];
      let resource: string[] = [];
      const condition: {
        numeric_greater_than?: { "cos:content-length": number };
        numeric_greater_than_equal?: { "cos:content-length": number };
        numeric_less_than?: { "cos:content-length": number };
        numeric_less_than_equal?: { "cos:content-length": number };
      } = {};
      if (type === STS_TYPE.PUT) {
        action = [
          // COS actions: https://cloud.tencent.com/document/product/436/31923
          // CI actions: https://cloud.tencent.com/document/product/460/41741
          //简单上传操作
          "name/cos:PutObject",
          //表单上传对象
          "name/cos:PostObject",
          //分块上传：初始化分块操作
          "name/cos:InitiateMultipartUpload",
          //分块上传：List 进行中的分块上传
          "name/cos:ListMultipartUploads",
          //分块上传：List 已上传分块操作
          "name/cos:ListParts",
          //分块上传：上传分块操作
          "name/cos:UploadPart",
          //分块上传：完成所有分块上传操作
          "name/cos:CompleteMultipartUpload",
          //取消分块上传操作
          "name/cos:AbortMultipartUpload",
        ];
        // condition = {
        //   "numeric_greater_than_equal": { "cos:content-length": 1 },
        //   "numeric_less_than": { "cos:content-length": 10 * 1024 * 1024 }
        // };
        resource = this.generateResource(cosKeys);
      } else if (type === STS_TYPE.GET) {
        action = ["name/cos:GetObject"];
        resource = ["*"];
      } else if (type === STS_TYPE.DELETE) {
        action = ["name/cos:DeleteObject", "name/cos:DeleteMultipleObjects"];
        resource = this.generateResource(cosKeys);
      }

      STS.getCredential(
        {
          secretId: SecretId,
          secretKey: SecretKey,
          durationSeconds,
          policy: {
            version: "2.0",
            statement: [
              {
                condition,
                action,
                resource,
                effect: "allow",
              },
            ],
          },
        },
        function (error, data) {
          if (error) {
            reject(error);
          } else {
            resolve(data);
          }
        },
      );
    });
  }

  static getObjectsUrl(cosKeys: string[]): Promise<string[]> {
    return new Promise(async (resolve, reject) => {
      if (!cosKeys || !cosKeys.length) {
        resolve([]);
        return;
      }

      const Region = process.env.COS_REGION!;
      const Bucket = process.env.COS_BUCKET!;
      const durationSeconds = COS_GET_OBJECTS_URL_DURATION;

      try {
        if (!this.credentialData || this.credentialData.expiredTime * 1000 < Date.now()) {
          this.credentialData = await this.getSts({
            type: STS_TYPE.GET,
            durationSeconds,
          });
        }

        const cos = new COS({
          SecretId: this.credentialData.credentials.tmpSecretId,
          SecretKey: this.credentialData.credentials.tmpSecretKey,
          SecurityToken: this.credentialData.credentials.sessionToken,
        });

        const urls: string[] = [];
        for (const cosKey of cosKeys) {
          const url = await new Promise<string>((resolve, reject) => {
            cos.getObjectUrl(
              {
                Bucket,
                Region,
                Key: cosKey,
                Expires: durationSeconds,
              },
              (error, data) => {
                if (error) {
                  reject(error);
                } else {
                  resolve(data.Url);
                }
              },
            );
          });
          urls.push(url);
        }

        resolve(urls);
      } catch (error) {
        reject(error);
      }
    });
  }

  static getImagesUrl(list: string[], options: GetImagesUrlOptions = { isFullUrl: false }) {
    const urls = options.isFullUrl ? list : list.map((item) => `${process.env.COS_DOMAIN}/${item}`);
    return urls.map((item) => {
      const urlObject = new URL(item);
      const key = urlObject.pathname.slice(1);

      return {
        key,
        thumbnail: urlObject.search ? `${item}&eo-img.resize=w/100` : `${item}?eo-img.resize=w/100`,
        url: urlObject.search ? `${item}&eo-img.format=webp` : `${item}?eo-img.format=webp`,
        originalUrl: item,
      };
    });
  }

  static getUrl(list: string[]) {
    return list.map((item) => `${process.env.COS_DOMAIN}/${item}`);
  }

  static getObject(cosKey: string) {
    return new Promise((resolve, reject) => {
      const SecretId = process.env.COS_SECRET_ID;
      const SecretKey = process.env.COS_SECRET_KEY;
      const Region = process.env.COS_REGION!;
      const Bucket = process.env.COS_BUCKET!;

      const cos = new COS({
        SecretId,
        SecretKey,
      });
      cos.getObject(
        {
          Bucket,
          Region,
          Key: cosKey,
        },
        function (error, data) {
          if (error) {
            reject(error);
          } else if (data.statusCode === 200) {
            resolve(data.Body);
          } else {
            reject(data);
          }
        },
      );
    });
  }

  static putObject(cosKey: string, body: UploadBody) {
    return new Promise((resolve, reject) => {
      const SecretId = process.env.COS_SECRET_ID;
      const SecretKey = process.env.COS_SECRET_KEY;
      const Region = process.env.COS_REGION!;
      const Bucket = process.env.COS_BUCKET!;

      const cos = new COS({
        SecretId,
        SecretKey,
      });
      cos.putObject(
        {
          Bucket,
          Region,
          Key: cosKey,
          Body: body,
        },
        function (error, data) {
          if (error) {
            reject(error);
          } else if (data.statusCode === 200) {
            resolve(data);
          } else {
            reject(data);
          }
        },
      );
    });
  }

  static deleteObject(cosKey: string) {
    return new Promise((resolve, reject) => {
      const SecretId = process.env.COS_SECRET_ID;
      const SecretKey = process.env.COS_SECRET_KEY;
      const Region = process.env.COS_REGION!;
      const Bucket = process.env.COS_BUCKET!;

      const cos = new COS({
        SecretId,
        SecretKey,
      });
      cos.deleteObject(
        {
          Bucket,
          Region,
          Key: cosKey,
        },
        function (error, data) {
          if (error) {
            reject(error);
          } else if (data.statusCode === 204) {
            resolve(data);
          } else {
            reject(data);
          }
        },
      );
    });
  }

  static deleteMultipleObject(cosKeys: string[]): Promise<COS.DeleteMultipleObjectResult> {
    return new Promise((resolve, reject) => {
      if (!cosKeys.length) {
        resolve({ Deleted: [], Error: [] });
        return;
      }

      const SecretId = process.env.COS_SECRET_ID;
      const SecretKey = process.env.COS_SECRET_KEY;
      const Region = process.env.COS_REGION!;
      const Bucket = process.env.COS_BUCKET!;

      const cos = new COS({
        SecretId,
        SecretKey,
      });
      cos.deleteMultipleObject(
        {
          Bucket,
          Region,
          Objects: cosKeys.map((item) => ({ Key: item })),
        },
        function (error, data) {
          if (error) {
            reject(error);
          } else if (data.statusCode === 200) {
            resolve(data);
          } else {
            reject(data);
          }
        },
      );
    });
  }

  static getObjectList(prefix: string = ""): Promise<ObjectListItem[]> {
    return new Promise((resolve, reject) => {
      const SecretId = process.env.COS_SECRET_ID;
      const SecretKey = process.env.COS_SECRET_KEY;
      const Region = process.env.COS_REGION!;
      const Bucket = process.env.COS_BUCKET!;

      const cos = new COS({
        SecretId,
        SecretKey,
      });
      cos.getBucket(
        {
          Bucket,
          Region,
          Prefix: prefix + "/",
        },
        function (error, data) {
          if (error) {
            reject(error);
          } else if (data.statusCode === 200) {
            resolve(
              data.Contents.map((item) => {
                return {
                  name: item.Key.split("/")
                    .slice(-1)[0]
                    .replace(/\.[^/.]+$/, ""),
                  key: item.Key,
                  size: item.Size,
                  updatedAt: item.LastModified,
                };
              }),
            );
          } else {
            reject(data);
          }
        },
      );
    });
  }
}
