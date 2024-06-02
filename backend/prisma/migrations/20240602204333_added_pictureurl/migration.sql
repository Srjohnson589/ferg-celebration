/*
  Warnings:

  - Added the required column `pictureurl` to the `Shoutout` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Shoutout" ADD COLUMN     "pictureurl" TEXT NOT NULL;
