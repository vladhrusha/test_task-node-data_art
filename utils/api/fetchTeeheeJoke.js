const fetchTeeheeJoke = async () => {
  const response = await fetch("https://teehee.dev/api/joke");

  const data = await response.json();
  return data;
};
module.exports = fetchTeeheeJoke;
