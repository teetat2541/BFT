-- CreateTable
CREATE TABLE `building` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `b_type` VARCHAR(191) NOT NULL,
    `b_name` VARCHAR(191) NOT NULL,
    `b_subdistrict` VARCHAR(191) NOT NULL,
    `b_district` VARCHAR(191) NOT NULL,
    `b_province` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
