const Joke = require("../models/Joke");

const mongoose = require("../db/index");

const getAllJokes = async () => {
  const jokes = await Joke.find();

  const amountJokes = await Joke.countDocuments();

  return { jokes, amountJokes };
};

const getJokeRandom = async () => {
  const [randomJoke] = await Joke.aggregate([{ $sample: { size: 1 } }]);
  return randomJoke;
};

const addJoke = async ({ question, answer, availableVotes }) => {
  const newJoke = new Joke({
    question,
    answer,
    votes: availableVotes.map((label) => ({ value: 0, label })),
    availableVotes,
  });
  await newJoke.save();
};

const updateJoke = async ({ id, question, answer }) => {
  await Joke.updateOne(
    { _id: id },
    {
      $set: {
        question,
        answer,
      },
    }
  );
};

const deleteJoke = async (id) => {
  await Joke.findByIdAndDelete(id);
};

const addVote = async ({ id, label }) => {
  await Joke.updateOne(
    {
      _id: id,
      "votes.label": label,
    },
    {
      $inc: { "votes.$.value": 1 },
    }
  );
};

module.exports = {
  getAllJokes,
  getJokeRandom,
  addJoke,
  deleteJoke,
  updateJoke,
  addVote,
};
