const Joke = require("../models/Joke");

const mongoose = require("../db/index");

const getAllJokes = async () => {
  const jokes = await Joke.find();

  const amountJokes = await Joke.countDocuments();

  return { jokes, amountJokes };
};

const addJoke = async ({ question, answer, availableVotes }) => {
  const newJoke = new Joke({
    question,
    answer,
    availableVotes,
  });
  await newJoke.save();
};

module.exports = {
  getAllJokes,
  addJoke,
};
