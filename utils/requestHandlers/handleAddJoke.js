const { addJoke } = require("../../services/joke.service");

const { fetchTeeheeJoke } = require("../api");

const handleAddJoke = async (req) => {
  const { question, answer } = await fetchTeeheeJoke();
  const { availableVotes } = req.body;

  addJoke({ question, answer, availableVotes });
};

module.exports = handleAddJoke;
