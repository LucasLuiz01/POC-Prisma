-- CreateTable
CREATE TABLE "genre" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "genre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "movie" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "idGenre" INTEGER NOT NULL,

    CONSTRAINT "movie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "moviePlatform" (
    "id" SERIAL NOT NULL,
    "idMovie" INTEGER NOT NULL,
    "idPlatform" INTEGER NOT NULL,

    CONSTRAINT "moviePlatform_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "platform" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "platform_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userMovieStatus" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "idMovie" INTEGER NOT NULL,
    "watched" BOOLEAN NOT NULL,
    "note" TEXT,
    "summary" TEXT,

    CONSTRAINT "userMovieStatus_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "genre_name_key" ON "genre"("name");

-- CreateIndex
CREATE UNIQUE INDEX "movie_name_key" ON "movie"("name");

-- CreateIndex
CREATE UNIQUE INDEX "platform_name_key" ON "platform"("name");

-- AddForeignKey
ALTER TABLE "movie" ADD CONSTRAINT "movie_idGenre_fkey" FOREIGN KEY ("idGenre") REFERENCES "genre"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "moviePlatform" ADD CONSTRAINT "moviePlatform_idMovie_fkey" FOREIGN KEY ("idMovie") REFERENCES "movie"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "moviePlatform" ADD CONSTRAINT "moviePlatform_idPlatform_fkey" FOREIGN KEY ("idPlatform") REFERENCES "platform"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "userMovieStatus" ADD CONSTRAINT "userMovieStatus_idMovie_fkey" FOREIGN KEY ("idMovie") REFERENCES "movie"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
