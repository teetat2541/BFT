/*
  Warnings:

  - You are about to alter the column `datestartwork` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Date`.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `datestartwork` DATE NULL;
