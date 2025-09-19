/*
  Warnings:

  - Added the required column `order` to the `PaperPart` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."PaperPart" ADD COLUMN     "order" INTEGER NOT NULL;
