import { IsArray, IsEnum, IsNotEmpty, IsObject, IsString } from "class-validator";
import { PaperLevel } from "@prisma/client";

export class GetPaperDto {
  @IsEnum(PaperLevel)
  level: PaperLevel;

  @IsString()
  @IsNotEmpty()
  yearMonth: string;
}

export class PostPaperDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsArray()
  @IsObject()
  questionAnswerList: {
    questionId: string;
    answer: string | string[];
  }[]
}

export class GetSectionsDto {
  @IsString()
  @IsNotEmpty()
  partId: string;
}

export class GetSectionDto {
  @IsString()
  @IsNotEmpty()
  id: string;
}
