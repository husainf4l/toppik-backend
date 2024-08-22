/*
  Warnings:

  - The primary key for the `AuthorizedPointOfSale` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "AuthorizedPointOfSale" DROP CONSTRAINT "AuthorizedPointOfSale_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "AuthorizedPointOfSale_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "AuthorizedPointOfSale_id_seq";
