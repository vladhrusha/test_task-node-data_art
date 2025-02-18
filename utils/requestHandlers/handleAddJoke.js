const { addJoke } = require("../../services/joke.service");

const handleAddJoke = async (reqBody) => {
  const { question, answer, availableVotes } = reqBody;

  addJoke({ question, answer, availableVotes });
};

module.exports = handleAddJoke;
