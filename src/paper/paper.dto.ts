import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { PaperLevel } from "@prisma/client";

export class GetPaperDto {
  @IsEnum(PaperLevel)
  level: PaperLevel;

  @IsString()
  @IsNotEmpty()
  yearMonth: string;
}

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
