/*
  Warnings:

  - Added the required column `gameId` to the `GamesWishList` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GamesWishList" ADD COLUMN     "gameId" INTEGER NOT NULL;
