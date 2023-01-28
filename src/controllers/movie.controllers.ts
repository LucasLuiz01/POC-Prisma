import { moviePlatform, userMovieStatus, updateMovieStatus } from "../protocols/movie.protocols.js";
import { Request, Response } from "express";
import { movieSchema } from "../schemas/movie.schema.js";
import { userMovieStatusSchema } from "../schemas/userMovieStatus.schema.js";
import { updateMovieStatusSchema } from "../schemas/updateUser.Schema.js";
import { insertMovServices, insertuserMovieStatsServices, updateMovieStatsServices,deleteUserStatusServices } from "../services/movie.services.js";

export async function insertMovie(req:Request, res:Response){
    const dados =  req.body as moviePlatform
    const {error} = movieSchema.validate(dados);
if( error){
    return res.status(400).send({
        message: error.message
    })
}
try {
    const insert: string = await insertMovServices(dados);
    if(insert){
        return res.status(404).send(insert)
    }
    res.status(200).send("INSIRIDO COM SUCESSO");
}catch(err){
    console.log(err);
    return res.status(400).send(err.meta);
}
}

export async function inserUserMovieStatus (req:Request, res: Response){
    const userDados = req.body as userMovieStatus;
    const {error} = userMovieStatusSchema.validate(userDados);
    if( error){
        return res.status(400).send({
            message: error.message
        })
    }
    try {
       const inserido: string = await insertuserMovieStatsServices(userDados)
       if(inserido){
        return res.status(409).send(inserido)
       }
        res.status(200).send("INSIRIDO COM SUCESSO");
    }catch(err){
        console.log(err);
        return res.status(400).send(err);
    }
}

export async function updateUserMovieStatus (req:Request, res:Response){
    const userDados = req.body as updateMovieStatus;
const {error} = updateMovieStatusSchema.validate(userDados);
if(error){
    return res.status(400).send({
        message: error.message
    })
}
try {
    const inserido: string = await updateMovieStatsServices(userDados)
if(inserido){
 return res.status(409).send(inserido)
}
 res.status(200).send("ATUALIZACAO INSIRIDA COM SUCESSO");
}catch(err){
    console.log(err);
    return res.status(400).send(err);
}
}
export async function deleteUserMovieStatus (req:Request, res:Response){
    const id: number = parseInt(req.params.id)
try {
    const inserido: string = await deleteUserStatusServices(id)
if(inserido){
 return res.status(409).send(inserido)
}
 res.status(200).send("DELECAO FEITA COM SUCESSO");
}catch(err){
    console.log(err);
    return res.status(400).send(err);
}
}