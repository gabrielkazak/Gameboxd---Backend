/*
  Warnings:

  - You are about to alter the column `rating` on the `GamesList` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "GamesList" ALTER COLUMN "rating" SET DATA TYPE INTEGER;
