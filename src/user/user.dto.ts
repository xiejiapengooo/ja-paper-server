import { IsNotEmpty, IsString } from "class-validator";

export class PatchMeDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
