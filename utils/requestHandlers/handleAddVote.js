const { addVote } = require("../../services/joke.service");

const handleAddVote = async (req) => {
  const { id } = req.params;
  const { label } = req.body;

  addVote({ id, label });
};

module.exports = handleAddVote;
