-- CreateTable
CREATE TABLE `usuarios` (
    `id` VARCHAR(191) NOT NULL,
    `apelido` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `create_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `adms` (
    `id` VARCHAR(191) NOT NULL,
    `entrada` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `create_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `caregorias` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `create_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `catalogo` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `desc` VARCHAR(191) NOT NULL,
    `forca` INTEGER NOT NULL DEFAULT 0,
    `defesa` INTEGER NOT NULL DEFAULT 0,
    `precisao` INTEGER NOT NULL DEFAULT 0,
    `taxaCrit` INTEGER NOT NULL DEFAULT 0,
    `multCrit` DECIMAL(9, 2) NOT NULL,
    `categoriaId` VARCHAR(191) NOT NULL,
    `create_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `invGeral` (
    `id` VARCHAR(191) NOT NULL,
    `equipado` BOOLEAN NOT NULL DEFAULT false,
    `quantidade` INTEGER NOT NULL DEFAULT 1,
    `catalogoId` VARCHAR(191) NOT NULL,
    `usuarioId` VARCHAR(191) NOT NULL,
    `create_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `inimigos` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `desc` VARCHAR(191) NOT NULL,
    `vida` INTEGER NOT NULL DEFAULT 1,
    `forca` INTEGER NOT NULL DEFAULT 0,
    `precisao` INTEGER NOT NULL DEFAULT 0,
    `create_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dropInimigos` (
    `id` VARCHAR(191) NOT NULL,
    `quantidade` INTEGER NOT NULL DEFAULT 1,
    `inimigoId` VARCHAR(191) NOT NULL,
    `catalogoId` VARCHAR(191) NOT NULL,
    `create_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `catalogo` ADD CONSTRAINT `catalogo_categoriaId_fkey` FOREIGN KEY (`categoriaId`) REFERENCES `caregorias`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `invGeral` ADD CONSTRAINT `invGeral_catalogoId_fkey` FOREIGN KEY (`catalogoId`) REFERENCES `catalogo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `invGeral` ADD CONSTRAINT `invGeral_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `dropInimigos` ADD CONSTRAINT `dropInimigos_inimigoId_fkey` FOREIGN KEY (`inimigoId`) REFERENCES `inimigos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `dropInimigos` ADD CONSTRAINT `dropInimigos_catalogoId_fkey` FOREIGN KEY (`catalogoId`) REFERENCES `catalogo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
