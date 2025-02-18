const handleGetJokes = require("./handleGetJokes");
const handleGetJokeRandom = require("./handleGetJokeRandom");

const handleAddJoke = require("./handleAddJoke");
const handleUpdateJoke = require("./handleUpdateJoke");
const handleDeleteJoke = require("./handleDeleteJoke");

const handleAddVote = require("./handleAddVote");

module.exports = {
  handleGetJokes,
  handleGetJokeRandom,

  handleAddJoke,
  handleUpdateJoke,
  handleDeleteJoke,

  handleAddVote,
};
