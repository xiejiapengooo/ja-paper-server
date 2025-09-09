/*
  Warnings:

  - You are about to drop the column `mediaId` on the `PaperQuestion` table. All the data in the column will be lost.
  - You are about to drop the column `passageId` on the `PaperQuestion` table. All the data in the column will be lost.
  - You are about to drop the column `point` on the `PaperQuestion` table. All the data in the column will be lost.
  - You are about to drop the column `duration` on the `PaperSection` table. All the data in the column will be lost.
  - You are about to drop the column `mediaId` on the `PaperSection` table. All the data in the column will be lost.
  - You are about to drop the `PaperMedia` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PaperPassage` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `level` on the `Paper` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `partId` to the `PaperSection` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."PaperLevel" AS ENUM ('N1', 'N2', 'N3', 'N4', 'N5');

-- CreateEnum
CREATE TYPE "public"."PaperFileType" AS ENUM ('AUDIO', 'VIDEO', 'IMAGE');

-- DropForeignKey
ALTER TABLE "public"."PaperPassage" DROP CONSTRAINT "PaperPassage_sectionId_fkey";

-- DropForeignKey
ALTER TABLE "public"."PaperQuestion" DROP CONSTRAINT "PaperQuestion_mediaId_fkey";

-- DropForeignKey
ALTER TABLE "public"."PaperQuestion" DROP CONSTRAINT "PaperQuestion_passageId_fkey";

-- DropForeignKey
ALTER TABLE "public"."PaperSection" DROP CONSTRAINT "PaperSection_mediaId_fkey";

-- AlterTable
ALTER TABLE "public"."Paper" DROP COLUMN "level",
ADD COLUMN     "level" "public"."PaperLevel" NOT NULL;

-- AlterTable
ALTER TABLE "public"."PaperQuestion" DROP COLUMN "mediaId",
DROP COLUMN "passageId",
DROP COLUMN "point",
ADD COLUMN     "analysis" TEXT,
ADD COLUMN     "listeningAudio" TEXT,
ADD COLUMN     "listeningContent" TEXT,
ADD COLUMN     "listeningContentTranslationZhHans" TEXT;

-- AlterTable
ALTER TABLE "public"."PaperSection" DROP COLUMN "duration",
DROP COLUMN "mediaId",
ADD COLUMN     "content" TEXT,
ADD COLUMN     "contentTranslationZhHans" TEXT,
ADD COLUMN     "imageContent" TEXT,
ADD COLUMN     "partId" TEXT NOT NULL;

-- DropTable
DROP TABLE "public"."PaperMedia";

-- DropTable
DROP TABLE "public"."PaperPassage";

-- DropEnum
DROP TYPE "public"."JLPTLevel";

-- CreateTable
CREATE TABLE "public"."PaperPart" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,

    CONSTRAINT "PaperPart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."PaperFile" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "key" TEXT NOT NULL,
    "type" "public"."PaperFileType" NOT NULL,
    "duration" INTEGER,

    CONSTRAINT "PaperFile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Paper_level_year_month_idx" ON "public"."Paper"("level", "year", "month");

-- AddForeignKey
ALTER TABLE "public"."PaperSection" ADD CONSTRAINT "PaperSection_partId_fkey" FOREIGN KEY ("partId") REFERENCES "public"."PaperPart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
