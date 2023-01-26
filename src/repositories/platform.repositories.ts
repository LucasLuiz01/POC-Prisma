import prisma from "../database/db.js";
import { QueryResult } from "pg";
import { QtdPorPlataforma } from "../protocols/movie.protocols.js";

export async function insertPlat (nome:string): Promise<void> {
    //await connection.query('INSERT INTO platform (name) VALUES ($1)', [nome]);  
    await prisma.platform.create({
        data:{
            name: nome
        }
    })
}
export async function getMovies (): Promise<QueryResult<QtdPorPlataforma>> {
//const movies = await prisma.platform.findMany() .query(`SELECT p.name AS "Plataforma", COUNT(s.id) AS "Quantidade de filmes" FROM platform p LEFT JOIN "moviePlatform" m ON p.id = "idPlatform" LEFT JOIN movie s ON m."idMovie" = s.id GROUP BY p.id`);
return []
}