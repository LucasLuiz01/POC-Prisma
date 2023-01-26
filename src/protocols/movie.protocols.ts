export type movieDados = {
    id: number,
    name: string,
    idGenre: number,
    idPlatform: number,
    idMovie: number,
    username: string,
    watched: boolean,
    note?: string,
    summary?: string
}
export type QtdPorPlataforma  =
    {
        platforma: string,
        Quantidade: number | string;
    }
    export type platformProtocols  =
    {
        id: number,
        name:  string
    }
   export type userMovieStatusGet = Omit<movieDados,"name" | "idGenre" | "idplatform">
   export type MovieGet = Omit<movieDados,"idMovie" | "username" | "idplatform"| "watched"| "note"| "summary">

export type moviePlatform = Omit<movieDados, "id" | "watched"| "note"| "summary"| "username"| "idMovie">
export type userMovieStatus = Omit<movieDados, "id" | "name" | "idGenre" | "idplatform">
export type updateMovieStatus = Omit<movieDados,  "name" | "idGenre" | "idplatform"| "idMovie"| "username">