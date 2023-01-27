import prisma from "../database/db.js";
import { QueryResult } from "pg";
import {  moviePlatform, userMovieStatus, updateMovieStatus, platformProtocols, userMovieStatusGet, MovieGet } from "../protocols/movie.protocols.js";
export async function insertMov (dados:moviePlatform): Promise<string> {
    //const platformExist: QueryResult<platformProtocols> = await connection.query('SELECT * FROM platform WHERE id = $1',[dados.idPlatform])
    const platformExist: QueryResult<platformProtocols> = await prisma.platform.findFirst({
        where: {
            id: dados.idPlatform
        }
    })
    if(!platformExist){
        return "Id da plataforma não existente";
    }
    //await connection.query('INSERT INTO movie (name, "idGenre") VALUES ($1, $2)', [dados.name, dados.idGenre]); 
    await prisma.movie.create({
        data: {
            name: dados.name,
            idGenre: dados.idGenre
        }
    })
    //const movieId: QueryResult<MovieGet> = await connection.query('SELECT id FROM movie WHERE name = $1',[dados.name])
    const movieId: QueryResult<MovieGet> = await prisma.movie.findFirst({
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

export async function insertuserMovieStats (userDados:userMovieStatus): Promise<string> {
   // const userStatusExistente: QueryResult<userMovieStatusGet> = await connection.query('SELECT * from "userMovieStatus" WHERE username = $1 AND "idMovie" = $2',[userDados.username, userDados.idMovie])
   const userStatusExistente: QueryResult<userMovieStatusGet> = await prisma.userMovieStatus.findFirst({
    where:{
        username: userDados.username,
        idMovie: userDados.idMovie
    }
   })
   console.log(userStatusExistente)
    if(userStatusExistente){
        return "FILME STATUS JÁ CADASTRADO PARA ESTE USÚARIO";
    }
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
export async function updateMovieStats (userDados:updateMovieStatus): Promise<string> {
    //const userStatusExistente: QueryResult<userMovieStatusGet> = await connection.query('SELECT * from "userMovieStatus" WHERE id = $1',[userDados.id])
    const userStatusExistente = prisma.userMovieStatus.findFirst({
        where: {
            id: userDados.id
        }
    })
    if(!userStatusExistente){
        return "User status não existente";
    }
   // await connection.query('UPDATE "userMovieStatus" SET watched = $1, summary = $2, note =$3 WHERE id = $4', [userDados.watched, userDados.summary, userDados.note, userDados.id])
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
export async function deleteUserStatus(id:number):Promise<string> {
    //const userStatusExistente: QueryResult<userMovieStatusGet> = await connection.query('SELECT * from "userMovieStatus" WHERE id = $1',[id])
    const userStatusExistente: QueryResult<userMovieStatusGet> = await prisma.userMovieStatus.findFirst({
        where:{
            id
        }
    })
    if(!userStatusExistente){
        return "User status não existente";
    }
    //await connection.query('DELETE FROM "userMovieStatus" WHERE id = $1', [id])
    await prisma.userMovieStatus.delete({
        where: {
            id
        }
    })
}