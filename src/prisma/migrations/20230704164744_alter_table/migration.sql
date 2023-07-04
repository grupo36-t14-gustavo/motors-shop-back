/*
  Warnings:

  - Added the required column `priceFipe` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Car" ADD COLUMN     "priceFipe" TEXT NOT NULL,
ALTER COLUMN "year" SET DATA TYPE TEXT,
ALTER COLUMN "km" SET DATA TYPE TEXT,
ALTER COLUMN "price" SET DATA TYPE TEXT;
