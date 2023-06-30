/*
  Warnings:

  - The values [hibrido] on the enum `FuelOptions` will be removed. If these variants are still used in the database, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `Address` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "FuelOptions_new" AS ENUM ('Gasolina', 'Diesel', 'Alcool', 'Flex', 'Eletrico', 'Hibrido');
ALTER TABLE "Car" ALTER COLUMN "fuelType" TYPE "FuelOptions_new" USING ("fuelType"::text::"FuelOptions_new");
ALTER TYPE "FuelOptions" RENAME TO "FuelOptions_old";
ALTER TYPE "FuelOptions_new" RENAME TO "FuelOptions";
DROP TYPE "FuelOptions_old";
COMMIT;

-- CreateIndex
CREATE UNIQUE INDEX "Address_userId_key" ON "Address"("userId");
