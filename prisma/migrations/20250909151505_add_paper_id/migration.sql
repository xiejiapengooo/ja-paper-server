/*
  Warnings:

  - Added the required column `paperId` to the `PaperQuestion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `partId` to the `PaperQuestion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."PaperQuestion" ADD COLUMN     "paperId" TEXT NOT NULL,
ADD COLUMN     "partId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."PaperQuestion" ADD CONSTRAINT "PaperQuestion_paperId_fkey" FOREIGN KEY ("paperId") REFERENCES "public"."Paper"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PaperQuestion" ADD CONSTRAINT "PaperQuestion_partId_fkey" FOREIGN KEY ("partId") REFERENCES "public"."PaperPart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
