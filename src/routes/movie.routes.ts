import { Router } from "express";
import { insertMovie,inserUserMovieStatus,updateUserMovieStatus,deleteUserMovieStatus } from "../controllers/movie.controllers.js";

export const movieRouter = Router();

movieRouter.post("/movie", insertMovie);
movieRouter.post("/userStatus", inserUserMovieStatus);
movieRouter.patch("/movie",updateUserMovieStatus);
movieRouter.delete("/movie/:id",deleteUserMovieStatus);