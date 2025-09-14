/*
  Warnings:

  - Added the required column `order` to the `QuestionChoice` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."PaperQuestion_sectionId_order_idx";

-- DropIndex
DROP INDEX "public"."PaperQuestion_type_idx";

-- DropIndex
DROP INDEX "public"."PaperSection_paperId_order_idx";

-- DropIndex
DROP INDEX "public"."PaperSection_type_idx";

-- AlterTable
ALTER TABLE "public"."QuestionChoice" ADD COLUMN     "order" INTEGER NOT NULL;
