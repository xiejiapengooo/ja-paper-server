-- AlterEnum
ALTER TYPE "public"."CertificateType" ADD VALUE 'PASSWORD_RESET';

-- AlterTable
ALTER TABLE "public"."Certificate" ALTER COLUMN "usedAt" DROP NOT NULL;
