import Joi from "joi";

const userValidator=Joi.object({
    name:Joi.string().regex(/^[a-zA-ZА-яёЁіІїЇєЄ]{1,20}$/).required().messages({
        'string.pattern.base':'Лише букви, мінімум 1 символ максимум 20 символів'
    }),
    username:Joi.string().regex(/a-zA-ZА-яёЁіІїЇєЄ{1,20}$/).required().messages({
        'string.pattern.base':'Лише букви, максимум 20 символів'
    }),
    email:Joi.string().regex(/a-zA-Z@-+_{1,50}$/).required().messages({
        'string.pattern.base':'Введіть ваш email'
    })
});

export {userValidator};