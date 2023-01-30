import { movie } from "@prisma/client";
import prisma from "../database/db.js";
import { platform } from "@prisma/client";
import {  moviePlatform, userMovieStatus, updateMovieStatus, platformProtocols, userMovieStatusGet, MovieGet } from "../protocols/movie.protocols.js";

export async function userMovieExist (id: number){
     const userStatusExistente = await prisma.userMovieStatus.findFirst({
         where: {
             id
         }
     })
    return userStatusExistente
}
export async function platformVerify(dados:moviePlatform){
    const platformExist: platform = await prisma.platform.findFirst({
        where: {
            id: dados.idPlatform
        }
    })
    return platformExist
}
export async function userExist (userDados:userMovieStatus){
    const userStatusExistente= await prisma.userMovieStatus.findFirst({
        where:{
            username: userDados.username,
            idMovie: userDados.idMovie
        }
       })
    return userStatusExistente
}

export async function insertMov (dados:moviePlatform): Promise<void> {
    //await connection.query('INSERT INTO movie (name, "idGenre") VALUES ($1, $2)', [dados.name, dados.idGenre]); 
    await prisma.movie.create({
        data: {
            name: dados.name,
            idGenre: dados.idGenre
        }
    })
    //const movieId: QueryResult<MovieGet> = await connection.query('SELECT id FROM movie WHERE name = $1',[dados.name])
    const movieId: movie = await prisma.movie.findFirst({
        where: {
            name: dados.name
        }
    })

   // await connection.query('INSERT INTO "moviePlatform" ("idMovie", "idPlatform") VALUES ($1, $2)', [movieId.rows[0].id, dados.idPlatform])
   await prisma.moviePlatform.create({
    data: {
        idMovie: movieId.id,
        idPlatform: dados.idPlatform
    }
   })
}

export async function insertuserMovieStats (userDados:userMovieStatus): Promise<void> {
    //await connection.query('INSERT INTO "userMovieStatus" (username, "idMovie", watched, note, summary) VALUES ($1, $2, $3, $4, $5)', [userDados.username, userDados.idMovie, userDados.watched,userDados.note, userDados.summary]); 
    await prisma.userMovieStatus.create({
        data: {
            username: userDados.username,
            idMovie: userDados.idMovie,
            watched: userDados.watched,
            note: userDados.note || null,
            summary: userDados.summary || null
        }
    })
}
export async function updateMovieStats (userDados:updateMovieStatus): Promise<void> {
   await prisma.userMovieStatus.update({
    where: {
        id: userDados.id
    },
    data: {
        watched: userDados.watched,
        summary: userDados.summary,
        note: userDados.note
    }
   })
}
export async function deleteUserStatus(id:number):Promise<void> {
    //await connection.query('DELETE FROM "userMovieStatus" WHERE id = $1', [id])
    await prisma.userMovieStatus.delete({
        where: {
            id
        }
    })
}