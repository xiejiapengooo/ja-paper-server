/*
  Warnings:

  - A unique constraint covering the columns `[content]` on the table `Certificate` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Certificate_content_key" ON "public"."Certificate"("content");
