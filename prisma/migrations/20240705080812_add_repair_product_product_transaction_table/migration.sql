/*
  Warnings:

  - You are about to drop the column `b_district` on the `building` table. All the data in the column will be lost.
  - You are about to drop the column `b_province` on the `building` table. All the data in the column will be lost.
  - You are about to drop the column `b_subdistrict` on the `building` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `building` DROP COLUMN `b_district`,
    DROP COLUMN `b_province`,
    DROP COLUMN `b_subdistrict`;

-- CreateTable
CREATE TABLE `repair` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `buildingId` INTEGER NOT NULL,
    `problem_img` VARCHAR(191) NOT NULL,
    `problem_place` VARCHAR(191) NOT NULL,
    `problem_detail` VARCHAR(191) NOT NULL,
    `status` ENUM('inProgress', 'completed', 'cancelled') NOT NULL DEFAULT 'inProgress',
    `updatedAt` DATETIME(3) NOT NULL,
    `rp_img` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `supplier` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `s_name` VARCHAR(191) NOT NULL,
    `line` VARCHAR(191) NOT NULL,
    `tel` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `p_type` VARCHAR(191) NOT NULL,
    `p_name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `productTransaction` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `supplierId` INTEGER NOT NULL,
    `buildingId` INTEGER NOT NULL,
    `productId` INTEGER NOT NULL,
    `transactiontype` ENUM('add', 'withdraw') NOT NULL,
    `quantity` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `repair` ADD CONSTRAINT `repair_buildingId_fkey` FOREIGN KEY (`buildingId`) REFERENCES `building`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `productTransaction` ADD CONSTRAINT `productTransaction_supplierId_fkey` FOREIGN KEY (`supplierId`) REFERENCES `supplier`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `productTransaction` ADD CONSTRAINT `productTransaction_buildingId_fkey` FOREIGN KEY (`buildingId`) REFERENCES `building`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `productTransaction` ADD CONSTRAINT `productTransaction_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
