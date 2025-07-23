/*
  Warnings:

  - Added the required column `gameId` to the `GamesList` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GamesList" ADD COLUMN     "gameId" INTEGER NOT NULL;
