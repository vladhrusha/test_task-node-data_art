const { getJokeRandom } = require("../../services/joke.service");

const handleGetJokeRandom = async () => {
  const dbResponse = await getJokeRandom();

  return {
    id: dbResponse._id,
    question: dbResponse.question,
    answer: dbResponse.answer,
    votes: dbResponse.votes,
    availableVotes: dbResponse.votes,
  };
};

module.exports = handleGetJokeRandom;
