/*
  Warnings:

  - The values [SINGLE_CHOICE,MULTI_CHOICE] on the enum `QuestionType` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `answerType` to the `PaperQuestion` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."AnswerType" AS ENUM ('SINGLE_CHOICE', 'MULTI_CHOICE');

-- AlterEnum
BEGIN;
CREATE TYPE "public"."QuestionType_new" AS ENUM ('CHINESE_PRONUNCIATION', 'CHINESE_WRITING', 'WORD_COMPOSITION', 'CONTEXT', 'SYNONYM_SUBSTITUTION', 'USAGE', 'SENTENCE_GRAMMAR_1', 'SENTENCE_GRAMMAR_2', 'ARTICLE_GRAMMAR', 'CONTENT_COMPREHENSION_SHORT', 'CONTENT_COMPREHENSION_MIDDLE', 'CONTENT_COMPREHENSION_LONG', 'SYNTHETICAL_COMPREHENSION_READ', 'THESIS_COMPREHENSION', 'INFORMATION_RETRIEVAL', 'QUESTION_COMPREHENSION', 'EMPHASIS_COMPREHENSION', 'OUTLINE_COMPREHENSION', 'LANGUAGE_EXPRESSION', 'INSTANT_RESPONSE', 'SYNTHETICAL_COMPREHENSION_LISTEN');
ALTER TABLE "public"."PaperQuestion" ALTER COLUMN "type" TYPE "public"."QuestionType_new" USING ("type"::text::"public"."QuestionType_new");
ALTER TYPE "public"."QuestionType" RENAME TO "QuestionType_old";
ALTER TYPE "public"."QuestionType_new" RENAME TO "QuestionType";
DROP TYPE "public"."QuestionType_old";
COMMIT;

-- AlterTable
ALTER TABLE "public"."PaperQuestion" ADD COLUMN     "answerType" "public"."AnswerType" NOT NULL;
