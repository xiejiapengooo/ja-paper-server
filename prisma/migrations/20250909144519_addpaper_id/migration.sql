/*
  Warnings:

  - Added the required column `paperId` to the `PaperPart` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."PaperPart" ADD COLUMN     "paperId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."PaperPart" ADD CONSTRAINT "PaperPart_paperId_fkey" FOREIGN KEY ("paperId") REFERENCES "public"."Paper"("id") ON DELETE CASCADE ON UPDATE CASCADE;
