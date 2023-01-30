import { insertMov, insertuserMovieStats, updateMovieStats, deleteUserStatus, platformVerify, userExist, userMovieExist } from "../repositories/movie.repositories.js";
import {  moviePlatform, userMovieStatus, updateMovieStatus } from "../protocols/movie.protocols.js";
export async function insertMovServices (dados:moviePlatform): Promise<string> {
    const platformExist = await platformVerify(dados)
    if(!platformExist){
        return "Id da plataforma não existente";
    }
   await insertMov(dados);
}

export async function insertuserMovieStatsServices (userDados:userMovieStatus): Promise<string> {
    const userStatusExistente= await userExist(userDados);
     if(userStatusExistente){
         return "FILME STATUS JÁ CADASTRADO PARA ESTE USÚARIO";
     }
   await insertuserMovieStats(userDados)
 }

 export async function updateMovieStatsServices (userDados:updateMovieStatus): Promise<string> {
    const userStatusExistente = await userMovieExist(userDados.id)
    if(!userStatusExistente){
        return "User status não existente";
    }
    await updateMovieStats(userDados);  
}
export async function deleteUserStatusServices(id:number):Promise<string> {
    const userStatusExistente = await userMovieExist(id)
    if(!userStatusExistente){
        return "User status não existente";
    }
    await deleteUserStatus(id);
}