const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleMongooseError } = require("../Helpers");

const emailRegexp = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

// const { Schema, model } = require("mongoose");
// const Joi = require("joi");
// const { handleMongooseError } = require("../Helpers");

// const emailRegexp = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;

// const userSchema = new Schema(
//   {
//     email: {
//       type: String,
//       match: emailRegexp,
//       required: [true, "Email is required"],
//       unique: true,
//     },

//     password: {
//       type: String,
//       required: [true, "Set password for user"],
//       minlength: 6,
//     },

//     subscription: {
//       type: String,
//       enum: ["starter", "pro", "business"],
//       default: "starter",
//     },
//     token: String,
//   },
//   { versionKey: false }
// );

// userSchema.post("save", handleMongooseError);

// const registerSchema = Joi.object({
//   email: Joi.string().pattern(emailRegexp).required(),
//   password: Joi.string().email().min(6).required(),
//   subscription: Joi.string().valid("starter", "pro", "business"),
// });

// const loginSchema = Joi.object({
//   email: Joi.string().email().pattern(emailRegexp).required(),
//   password: Joi.string().min(6).required(),
// });

// const schemas = { registerSchema, loginSchema };

// const User = model("users", userSchema);

// module.exports = { User, schemas };