/*
  Warnings:

  - You are about to drop the column `chosenIds` on the `UserQuestion` table. All the data in the column will be lost.
  - You are about to drop the column `isFavorite` on the `UserQuestion` table. All the data in the column will be lost.
  - You are about to drop the column `wrongCount` on the `UserQuestion` table. All the data in the column will be lost.
  - Added the required column `answer` to the `UserQuestion` table without a default value. This is not possible if the table is not empty.
  - Made the column `lastAnswerAt` on table `UserQuestion` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."UserQuestion" DROP COLUMN "chosenIds",
DROP COLUMN "isFavorite",
DROP COLUMN "wrongCount",
ADD COLUMN     "answer" TEXT NOT NULL,
ALTER COLUMN "lastAnswerAt" SET NOT NULL;
