import { Router } from "express";
import { insertGenres } from "../controllers/genre.controllers.js"

export const genreRouter = Router();

genreRouter.post("/genre", insertGenres)