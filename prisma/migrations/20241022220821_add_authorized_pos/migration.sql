/*
  Warnings:

  - You are about to drop the column `branches` on the `AuthorizedPointOfSale` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `AuthorizedPointOfSale` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "AuthorizedPointOfSale" DROP COLUMN "branches",
DROP COLUMN "description",
ADD COLUMN     "altLogo" TEXT,
ADD COLUMN     "latitude" DOUBLE PRECISION,
ADD COLUMN     "locationLink" TEXT,
ADD COLUMN     "longitude" DOUBLE PRECISION,
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "website" TEXT;
