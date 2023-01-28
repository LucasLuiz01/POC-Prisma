import { platform } from "@prisma/client";
import prisma from "../database/db.js";
import { insertMov, insertuserMovieStats, updateMovieStats, deleteUserStatus } from "../repositories/movie.repositories.js";
import {  moviePlatform, userMovieStatus, updateMovieStatus } from "../protocols/movie.protocols.js";
export async function insertMovServices (dados:moviePlatform): Promise<string> {
    //const platformExist: QueryResult<platformProtocols> = await connection.query('SELECT * FRO
    const platformExist: platform = await prisma.platform.findFirst({
        where: {
            id: dados.idPlatform
        }
    })
    if(!platformExist){
        return "Id da plataforma não existente";
    }
   await insertMov(dados);
}

export async function insertuserMovieStatsServices (userDados:userMovieStatus): Promise<string> {
    // const userStatusExistente: QueryResult<userMovieStatusGet> = await connection.query('SELECT *
    const userStatusExistente= await prisma.userMovieStatus.findFirst({
     where:{
         username: userDados.username,
         idMovie: userDados.idMovie
     }
    })
    console.log(userStatusExistente)
     if(userStatusExistente){
         return "FILME STATUS JÁ CADASTRADO PARA ESTE USÚARIO";
     }
   await insertuserMovieStats(userDados)
 }

 export async function updateMovieStatsServices (userDados:updateMovieStatus): Promise<string> {
    const userStatusExistente = await prisma.userMovieStatus.findFirst({
        where: {
            id: userDados.id
        }
    })
    if(!userStatusExistente){
        return "User status não existente";
    }
    await updateMovieStats(userDados);  
}
export async function deleteUserStatusServices(id:number):Promise<string> {
    const userStatusExistente = await prisma.userMovieStatus.findFirst({
        where:{
            id
        }
    })
    if(!userStatusExistente){
        return "User status não existente";
    }
    await deleteUserStatus(id);
}