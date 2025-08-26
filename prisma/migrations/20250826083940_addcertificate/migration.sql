-- CreateEnum
CREATE TYPE "public"."CertificateType" AS ENUM ('REFRESH_TOKEN');

-- CreateTable
CREATE TABLE "public"."Certificate" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "expiredAt" TIMESTAMP(3) NOT NULL,
    "usedAt" TIMESTAMP(3) NOT NULL,
    "userAgent" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "type" "public"."CertificateType" NOT NULL,
    "relatedId" TEXT,

    CONSTRAINT "Certificate_pkey" PRIMARY KEY ("id")
);
