import Joi from "joi";
export const movieSchema = Joi.object({
    name: Joi.string().required().min(3),
    idGenre: Joi.number().required().min(1),
    idPlatform: Joi.number().required().min(1),   
})
