/** Alphabet route contains request handling method : GET , POST, DELETE & PUT*/

const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const { Alphabet, validate } = require("../model/alphabet");

router.get("/", async (req, res) => {
  const alphaDocs = await Alphabet.find();
  res.status(200).send(alphaDocs);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let alphaDoc = await Alphabet.findOne({ alphabet: req.body.alphabet });
  if (alphaDoc) return res.status(400).send("Alphabet already exists");

  alphaDoc = new Alphabet({
    alphabet: req.body.alphabet,
    number: req.body.number,
  });
  await alphaDoc.save();
  return res.status(200).send(alphaDoc);
});

router.put("/:id", async (req, res) => {
  const isValid = mongoose.isValidObjectId(req.params.id);
  if (!isValid) return res.status(400).send("Invalid Id");

  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const alphaDoc = await Alphabet.findByIdAndUpdate(
    req.params.id,
    {
      alphabet: req.body.alphabet,
      number: req.body.number,
    },
    { new: true }
  );
  if (!alphaDoc) return res.status(404).send("No such alphabet");
  res.status(200).send(alphaDoc);
});

router.delete("/:id", async (req, res) => {
  const isValid = mongoose.isValidObjectId(req.params.id);
  if (!isValid) return res.status(400).send("Invalid Id");

  const alphaDoc = await Alphabet.findByIdAndRemove(req.params.id);
  if (!alphaDoc) return res.status(404).send("No such alphabet");
  res.status(200).send(alphaDoc);
});

module.exports = router;
