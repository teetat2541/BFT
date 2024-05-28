/*
  Warnings:

  - You are about to drop the column `position` on the `user` table. All the data in the column will be lost.
  - Added the required column `positionId` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable


 
    ALTER TABLE `user` DROP COLUMN `position`,
    ADD COLUMN `positionId` INTEGER NOT NULL DEFAULT '0';
    

-- CreateTable
CREATE TABLE `position` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_positionId_fkey` FOREIGN KEY (`positionId`) REFERENCES `position`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
