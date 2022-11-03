/** Alphabet model containing document of objects.
 * Object have two keys i.e. alphabet & number
 */

const mongoose = require("mongoose");
const Joi = require("joi");

const alphabetschema = new mongoose.Schema({
  alphabet: { type: String, required: true, unique: true, length: 1 },
  number: { type: Number, required: true },
});

const Alphabet = mongoose.model("alphabet", alphabetschema);

// joi validation method to cross-check the input

const validateAlphabet = (body) => {
  const schema = Joi.object({
    alphabet: Joi.string().required().length(1),
    number: Joi.number().required(),
  });
  return schema.validate(body);
};

exports.validate = validateAlphabet;
exports.Alphabet = Alphabet;
