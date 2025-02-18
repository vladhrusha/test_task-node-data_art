const { deleteJoke } = require("../../services/joke.service");

const handleDeleteJoke = (req) => {
  const { id } = req.params;

  deleteJoke(id);
};

module.exports = handleDeleteJoke;
