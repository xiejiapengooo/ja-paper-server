-- CreateEnum
CREATE TYPE "public"."JLPTLevel" AS ENUM ('N1', 'N2', 'N3', 'N4', 'N5');

-- CreateEnum
CREATE TYPE "public"."SectionType" AS ENUM ('VOCAB_GRAMMAR', 'READING', 'LISTENING');

-- CreateEnum
CREATE TYPE "public"."QuestionType" AS ENUM ('SINGLE_CHOICE', 'MULTI_CHOICE');

-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."UserQuestion" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,
    "isFavorite" BOOLEAN NOT NULL,
    "wrongCount" INTEGER NOT NULL DEFAULT 0,
    "lastAnswerAt" TIMESTAMP(3),
    "chosenIds" TEXT[],
    "note" TEXT,

    CONSTRAINT "UserQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Paper" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "level" "public"."JLPTLevel" NOT NULL,
    "year" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT,

    CONSTRAINT "Paper_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."PaperSection" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "paperId" TEXT NOT NULL,
    "mediaId" TEXT,
    "type" "public"."SectionType" NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "order" INTEGER NOT NULL,
    "duration" INTEGER NOT NULL,

    CONSTRAINT "PaperSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."PaperPassage" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "sectionId" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "PaperPassage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."PaperQuestion" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "sectionId" TEXT NOT NULL,
    "passageId" TEXT,
    "type" "public"."QuestionType" NOT NULL,
    "order" INTEGER NOT NULL,
    "point" INTEGER NOT NULL,
    "prompt" TEXT NOT NULL,
    "mediaId" TEXT,

    CONSTRAINT "PaperQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."QuestionChoice" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "label" VARCHAR(8) NOT NULL,
    "text" TEXT NOT NULL,
    "isCorrect" BOOLEAN NOT NULL,
    "questionId" TEXT NOT NULL,

    CONSTRAINT "QuestionChoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."PaperMedia" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "key" TEXT NOT NULL,
    "duration" INTEGER,

    CONSTRAINT "PaperMedia_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserQuestion_userId_questionId_key" ON "public"."UserQuestion"("userId", "questionId");

-- CreateIndex
CREATE INDEX "Paper_level_year_month_idx" ON "public"."Paper"("level", "year", "month");

-- CreateIndex
CREATE INDEX "PaperSection_paperId_order_idx" ON "public"."PaperSection"("paperId", "order");

-- CreateIndex
CREATE INDEX "PaperSection_type_idx" ON "public"."PaperSection"("type");

-- CreateIndex
CREATE INDEX "PaperQuestion_sectionId_order_idx" ON "public"."PaperQuestion"("sectionId", "order");

-- CreateIndex
CREATE INDEX "PaperQuestion_type_idx" ON "public"."PaperQuestion"("type");

-- CreateIndex
CREATE INDEX "QuestionChoice_questionId_idx" ON "public"."QuestionChoice"("questionId");

-- AddForeignKey
ALTER TABLE "public"."UserQuestion" ADD CONSTRAINT "UserQuestion_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserQuestion" ADD CONSTRAINT "UserQuestion_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "public"."PaperQuestion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PaperSection" ADD CONSTRAINT "PaperSection_paperId_fkey" FOREIGN KEY ("paperId") REFERENCES "public"."Paper"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PaperSection" ADD CONSTRAINT "PaperSection_mediaId_fkey" FOREIGN KEY ("mediaId") REFERENCES "public"."PaperMedia"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PaperPassage" ADD CONSTRAINT "PaperPassage_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "public"."PaperSection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PaperQuestion" ADD CONSTRAINT "PaperQuestion_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "public"."PaperSection"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PaperQuestion" ADD CONSTRAINT "PaperQuestion_passageId_fkey" FOREIGN KEY ("passageId") REFERENCES "public"."PaperPassage"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PaperQuestion" ADD CONSTRAINT "PaperQuestion_mediaId_fkey" FOREIGN KEY ("mediaId") REFERENCES "public"."PaperMedia"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."QuestionChoice" ADD CONSTRAINT "QuestionChoice_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "public"."PaperQuestion"("id") ON DELETE CASCADE ON UPDATE CASCADE;
