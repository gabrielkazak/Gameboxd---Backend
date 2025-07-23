/*
  Warnings:

  - The primary key for the `GamesList` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `GamesList` table. All the data in the column will be lost.
  - The primary key for the `GamesWishList` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `GamesWishList` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "GamesList" DROP CONSTRAINT "GamesList_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "GamesList_pkey" PRIMARY KEY ("userId", "gameId");

-- AlterTable
ALTER TABLE "GamesWishList" DROP CONSTRAINT "GamesWishList_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "GamesWishList_pkey" PRIMARY KEY ("userId", "gameId");
