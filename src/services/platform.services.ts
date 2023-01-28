import { getMovies } from "../repositories/platform.repositories.js";
import { insertPlat } from "../repositories/platform.repositories.js";
export async function insertPlatServices (nome:string): Promise<void> {
    await insertPlat(nome);
}
export async function getMoviesServices(){
    const movie = await getMovies();
    return movie;
}
