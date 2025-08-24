import { COS_FOLDER_NAME } from "../../utils/cos";

export class SignInDto {
  password: string;
  jsCode: string;
}

export class SignUpDto {
  phone: string;
  password: string;
  jsCode: string;
}

export class ResetPassDto {
  password: string;
  jsCode: string;
}

export class StsForUploadDto {
  folder: COS_FOLDER_NAME;
  exts: string[];
}

export class TokenAddressDto {
  relationId: string;
}
