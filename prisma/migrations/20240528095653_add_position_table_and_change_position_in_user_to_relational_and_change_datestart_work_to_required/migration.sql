/*
  Warnings:

  - Made the column `datestartwork` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `datestartwork` DATE NOT NULL;
