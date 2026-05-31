-- CreateEnum
CREATE TYPE "QuotaStatus" AS ENUM ('AVAILABLE', 'RESERVED', 'UNDER_ANALYSIS', 'UNAVAILABLE');

-- CreateTable
CREATE TABLE "FederalDraw" (
    "id" TEXT NOT NULL,
    "contestNumber" INTEGER NOT NULL,
    "drawDate" TIMESTAMP(3) NOT NULL,
    "firstPrize" TEXT NOT NULL,
    "secondPrize" TEXT NOT NULL,
    "thirdPrize" TEXT NOT NULL,
    "fourthPrize" TEXT NOT NULL,
    "fifthPrize" TEXT NOT NULL,
    "sourceUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FederalDraw_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DrawNumber" (
    "id" TEXT NOT NULL,
    "federalDrawId" TEXT NOT NULL,
    "prizePosition" INTEGER NOT NULL,
    "fullNumber" TEXT NOT NULL,
    "lastTwoDigits" TEXT NOT NULL,
    "lastThreeDigits" TEXT NOT NULL,
    "thousand" INTEGER NOT NULL,
    "hundredRange" INTEGER NOT NULL,
    "twoHundredRange" INTEGER NOT NULL,
    "fiveHundredRange" INTEGER NOT NULL,
    "drawDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DrawNumber_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConsortiumQuota" (
    "id" TEXT NOT NULL,
    "quotaNumber" TEXT NOT NULL,
    "groupCode" TEXT NOT NULL,
    "adminName" TEXT NOT NULL,
    "creditValue" DECIMAL(14,2) NOT NULL,
    "installmentValue" DECIMAL(14,2) NOT NULL,
    "status" "QuotaStatus" NOT NULL DEFAULT 'AVAILABLE',
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ConsortiumQuota_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuotaAnalysis" (
    "id" TEXT NOT NULL,
    "quotaId" TEXT NOT NULL,
    "analysisPeriod" TEXT NOT NULL,
    "lastTwoDigits" TEXT NOT NULL,
    "lastThreeDigits" TEXT NOT NULL,
    "rangeScore" DECIMAL(6,2) NOT NULL,
    "frequencyScore" DECIMAL(6,2) NOT NULL,
    "distributionScore" DECIMAL(6,2) NOT NULL,
    "concentrationRisk" DECIMAL(6,2) NOT NULL,
    "finalScore" DECIMAL(6,2) NOT NULL,
    "summary" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "QuotaAnalysis_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FederalDraw_contestNumber_key" ON "FederalDraw"("contestNumber");

-- CreateIndex
CREATE INDEX "FederalDraw_drawDate_idx" ON "FederalDraw"("drawDate");

-- CreateIndex
CREATE INDEX "FederalDraw_contestNumber_idx" ON "FederalDraw"("contestNumber");

-- CreateIndex
CREATE INDEX "DrawNumber_federalDrawId_idx" ON "DrawNumber"("federalDrawId");

-- CreateIndex
CREATE INDEX "DrawNumber_drawDate_idx" ON "DrawNumber"("drawDate");

-- CreateIndex
CREATE INDEX "DrawNumber_lastTwoDigits_idx" ON "DrawNumber"("lastTwoDigits");

-- CreateIndex
CREATE INDEX "DrawNumber_lastThreeDigits_idx" ON "DrawNumber"("lastThreeDigits");

-- CreateIndex
CREATE INDEX "DrawNumber_hundredRange_idx" ON "DrawNumber"("hundredRange");

-- CreateIndex
CREATE INDEX "DrawNumber_twoHundredRange_idx" ON "DrawNumber"("twoHundredRange");

-- CreateIndex
CREATE INDEX "DrawNumber_fiveHundredRange_idx" ON "DrawNumber"("fiveHundredRange");

-- CreateIndex
CREATE INDEX "ConsortiumQuota_quotaNumber_idx" ON "ConsortiumQuota"("quotaNumber");

-- CreateIndex
CREATE INDEX "ConsortiumQuota_groupCode_idx" ON "ConsortiumQuota"("groupCode");

-- CreateIndex
CREATE INDEX "ConsortiumQuota_adminName_idx" ON "ConsortiumQuota"("adminName");

-- CreateIndex
CREATE INDEX "ConsortiumQuota_status_idx" ON "ConsortiumQuota"("status");

-- CreateIndex
CREATE INDEX "QuotaAnalysis_quotaId_idx" ON "QuotaAnalysis"("quotaId");

-- CreateIndex
CREATE INDEX "QuotaAnalysis_analysisPeriod_idx" ON "QuotaAnalysis"("analysisPeriod");

-- CreateIndex
CREATE INDEX "QuotaAnalysis_finalScore_idx" ON "QuotaAnalysis"("finalScore");

-- AddForeignKey
ALTER TABLE "DrawNumber" ADD CONSTRAINT "DrawNumber_federalDrawId_fkey" FOREIGN KEY ("federalDrawId") REFERENCES "FederalDraw"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuotaAnalysis" ADD CONSTRAINT "QuotaAnalysis_quotaId_fkey" FOREIGN KEY ("quotaId") REFERENCES "ConsortiumQuota"("id") ON DELETE CASCADE ON UPDATE CASCADE;
