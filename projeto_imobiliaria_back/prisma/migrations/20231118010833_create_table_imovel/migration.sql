-- CreateTable
CREATE TABLE `imoveis` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo` VARCHAR(191) NULL,
    `thumb` VARCHAR(191) NULL,
    `endereco` VARCHAR(191) NULL,
    `cidade` VARCHAR(191) NULL,
    `uf` VARCHAR(191) NULL,
    `valor` VARCHAR(191) NULL,
    `descricao` VARCHAR(191) NULL,
    `userID` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `imoveis` ADD CONSTRAINT `imoveis_userID_fkey` FOREIGN KEY (`userID`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
