import Joi from "joi";
export const userMovieStatusSchema = Joi.object({
username: Joi.string().required().min(3),
watched: Joi.boolean().required(),
idMovie: Joi.number().required().min(1),
note: Joi.string().min(3),
summary: Joi.string().min(3)
})