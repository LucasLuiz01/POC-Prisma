import express, { json, Request, Response } from "express";
import { genreRouter } from "./routes/genre.routes.js";
import { platformRouter } from "./routes/platform.routes.js";
import { movieRouter } from "./routes/movie.routes.js";
const app = express();
app.use(json());
app.use(genreRouter);
app.use(platformRouter);
app.use(movieRouter)
app.listen(4000, ()=>{
    console.log("SERVER RODANDO NA PORTA 4000")
})