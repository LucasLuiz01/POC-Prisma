import { Response, Request } from "express";
import { insertGenreService } from "../services/genre.services.js";
import { genreSchema } from "../schemas/genre.schema.js";

export async function insertGenres(req:Request, res:Response){
    const {name} = req.body;
    const nome: string = name
    const {error} = genreSchema.validate(req.body);
    if( error){
        return res.status(400).send({
            message: error.message
        })
    }
    if(!nome){
        return res.sendStatus(400);
    }
    try{
        await insertGenreService(nome)
        res.status(200).send("INSIRIDO COM SUCESSO");
    }catch(err){
        console.log(err);
       return res.status(400).send(err)
    }

}
