/*
  Warnings:

  - You are about to drop the column `descriptopn` on the `bookmarks` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "bookmarks" DROP COLUMN "descriptopn",
ADD COLUMN     "description" TEXT;
