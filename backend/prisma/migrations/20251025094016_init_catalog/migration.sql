-- CreateTable
CREATE TABLE "Sparkling" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "year" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "litres" DOUBLE PRECISION NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "image" TEXT,

    CONSTRAINT "Sparkling_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Whiskey" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "year" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "litres" DOUBLE PRECISION NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "image" TEXT,

    CONSTRAINT "Whiskey_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cognac" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "year" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "litres" DOUBLE PRECISION NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "image" TEXT,

    CONSTRAINT "Cognac_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Armagnac" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "year" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "litres" DOUBLE PRECISION NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "image" TEXT,

    CONSTRAINT "Armagnac_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rome" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "year" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "litres" DOUBLE PRECISION NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "image" TEXT,

    CONSTRAINT "Rome_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vodka" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "year" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "litres" DOUBLE PRECISION NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "image" TEXT,

    CONSTRAINT "Vodka_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Liquor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "year" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "litres" DOUBLE PRECISION NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "image" TEXT,

    CONSTRAINT "Liquor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Coctails" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "year" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "litres" DOUBLE PRECISION NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "image" TEXT,

    CONSTRAINT "Coctails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Delicacies" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "image" TEXT,

    CONSTRAINT "Delicacies_pkey" PRIMARY KEY ("id")
);
