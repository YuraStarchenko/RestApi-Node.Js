const Joi = require("joi");

  // {
  //   name: {
  //     type: String,
  //     required: [true, 'Set name for contact'],
  //   },
  //   email: {
  //     type: String,
  //   },
  //   phone: {
  //     type: String,
  //   },
  //   favorite: {
  //     type: Boolean,
  //     default: false,
  //   },
  // }

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
});

module.exports = {
  addSchema,
};