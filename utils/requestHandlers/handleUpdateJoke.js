const { updateJoke } = require("../../services/joke.service");

const handleUpdateJoke = async (req) => {
  const { question, answer } = req.body;

  const { id } = req.params;

  updateJoke({ id, question, answer });
};
module.exports = handleUpdateJoke;
