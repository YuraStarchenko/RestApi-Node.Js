const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleMongooseError } = require("../Helpers");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
      required: [true, "Set name for contact"],
    },
    phone: {
      type: String,
      required: [true, "Set name for contact"],
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post("save", handleMongooseError);

const Contact = model("contact", contactSchema);

module.exports = Contact;
