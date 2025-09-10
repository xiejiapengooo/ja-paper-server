import { IsNotEmpty, IsString } from "class-validator";

export class GetPartsDto {
  @IsString()
  @IsNotEmpty()
  paperId: string;
}

export class GetSectionDto {
  @IsString()
  @IsNotEmpty()
  id: string;
}
