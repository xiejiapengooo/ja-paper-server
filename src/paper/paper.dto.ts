import { IsArray, IsEnum, IsNotEmpty, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PaperLevel } from "@prisma/client";

export class QuestionAnswerListItem {
  @IsString()
  @IsNotEmpty()
  questionId: string;

  answer: string | string[];
}

export class GetPaperDto {
  @IsEnum(PaperLevel)
  level: PaperLevel;

  @IsString()
  @IsNotEmpty()
  yearMonth: string;
}

export class PostPaperDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QuestionAnswerListItem)
  questionAnswerList: QuestionAnswerListItem[];
}
