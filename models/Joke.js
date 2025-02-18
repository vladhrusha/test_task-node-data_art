const mongoose = require("mongoose");

const jokeSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  votes: [
    {
      value: { type: Number, required: true },
      label: { type: String, required: true },
    },
  ],
  availableVotes: [{ type: String, required: true }],
});

const Joke = mongoose.model("Joke", jokeSchema, "jokes");

module.exports = Joke;
