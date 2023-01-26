import { Router } from "express";
import { insertPlatform, getByPlatform } from "../controllers/platform.controller.js";

export const platformRouter = Router();

platformRouter.post("/platform", insertPlatform)
platformRouter.get("/moviesPlatform", getByPlatform)