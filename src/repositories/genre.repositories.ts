import prisma from "../database/db.js";

export async function insertGenre (nome:string): Promise<void> {
    //await connection.query('INSERT INTO genre (name) VALUES ($1)', [nome]);  
    await prisma.genre.create({
        data:{
            name: nome
        }
    })
}