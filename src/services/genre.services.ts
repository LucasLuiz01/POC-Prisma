import { insertGenre } from "../repositories/genre.repositories.js";



export async function insertGenreService (nome:string): Promise<void> {
    await insertGenre(nome);
}