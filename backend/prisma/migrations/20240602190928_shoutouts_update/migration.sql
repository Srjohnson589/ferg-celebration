/*
  Warnings:

  - You are about to drop the column `userId` on the `Shoutout` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.
  - Added the required column `fromuserId` to the `Shoutout` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shoutoutuserId` to the `Shoutout` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstname` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastname` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Shoutout" DROP CONSTRAINT "Shoutout_userId_fkey";

-- DropIndex
DROP INDEX "User_username_key";

-- AlterTable
ALTER TABLE "Shoutout" DROP COLUMN "userId",
ADD COLUMN     "fromuserId" INTEGER NOT NULL,
ADD COLUMN     "shoutoutuserId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "password",
DROP COLUMN "username",
ADD COLUMN     "firstname" TEXT NOT NULL,
ADD COLUMN     "lastname" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Shoutout" ADD CONSTRAINT "Shoutout_shoutoutuserId_fkey" FOREIGN KEY ("shoutoutuserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shoutout" ADD CONSTRAINT "Shoutout_fromuserId_fkey" FOREIGN KEY ("fromuserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
