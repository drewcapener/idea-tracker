const Joi = require('joi')

module.exports = Joi.object({
    title: Joi.string()
        .min(2)
        .max(128)
        .required(),
    desc: Joi.string()
        .min(0)
        .max(2048)
        .required(),
});