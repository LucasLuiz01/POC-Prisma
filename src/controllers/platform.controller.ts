import { Response, Request } from "express";
import { platformSchema } from "../schemas/platform.schema.js";
import { insertPlat, getMovies } from "../repositories/platform.repositories.js";

export async function insertPlatform(req:Request, res:Response){
    const {name} = req.body;
    const nome : string = name
    const {error} = platformSchema.validate(req.body);
    if( error){
        return res.status(400).send({
            message: error.message
        })
    }
    if(!nome){
        return res.sendStatus(400);
    }
    try{
        await insertPlat(nome)
        res.status(200).send("INSIRIDO COM SUCESSO");
    }catch(err){
        console.log(err);
       return res.status(400).send(err)
    }

}

export async function getByPlatform(req:Request, res:Response){
    try{
      const movies = await getMovies()
        res.status(200).send(movies.rows);
    }catch(err){
        console.log(err);
       return res.status(400).send(err)
    }
}
