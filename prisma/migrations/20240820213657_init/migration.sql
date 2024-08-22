-- CreateTable
CREATE TABLE "AuthorizedPointOfSale" (
    "id" SERIAL NOT NULL,
    "logo" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "branches" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AuthorizedPointOfSale_pkey" PRIMARY KEY ("id")
);
