const { getAllJokes } = require("../../services/joke.service");

const handleGetJokes = async () => {
  const { jokes, amountJokes } = await getAllJokes();

  if (jokes && amountJokes) {
    return {
      jokes: jokes.map((entity) => {
        return {
          question: entity.question,
          answer: entity.answer,
        };
      }),
      amountJokes,
    };
  } else {
    return "null or undefined";
  }
};

module.exports = handleGetJokes;
