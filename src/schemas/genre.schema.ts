import Joi from "joi";
export const genreSchema = Joi.object({
    name: Joi.string().required().min(3)
})