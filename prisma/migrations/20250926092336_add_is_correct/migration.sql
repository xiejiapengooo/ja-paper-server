/*
  Warnings:

  - Added the required column `isCorrect` to the `UserQuestion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."UserQuestion" ADD COLUMN     "isCorrect" BOOLEAN NOT NULL;
