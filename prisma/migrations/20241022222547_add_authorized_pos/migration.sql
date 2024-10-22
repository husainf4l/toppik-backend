/*
  Warnings:

  - You are about to drop the column `locationLink` on the `AuthorizedPointOfSale` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "AuthorizedPointOfSale" DROP COLUMN "locationLink",
ADD COLUMN     "locationlink" TEXT;
