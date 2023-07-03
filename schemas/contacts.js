const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "missing required name field",
  }),

  email: Joi.string().email().required().messages({
    "any.required": "missing required email field",
  }),

  phone: Joi.string()
    .pattern(/^\(\d{3}\) \d{3}-\d{4}$/)
    .required()
    .messages({
      "any.required": "missing required phone field",
      "string.pattern.base": "Invalid phone number format.",
    }),

  favorite: Joi.boolean(),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const schemas = { addSchema, updateFavoriteSchema };

module.exports = {
  addSchema,
  schemas,
};
