require("dotenv").config();

const express = require("express");

const app = express();

const {
  handleGetJokes,
  handleAddJoke,
  handleGetJokeRandom,
  handleDeleteJoke,
  handleUpdateJoke,
  handleAddVote,
} = require("./utils/requestHandlers");

const port = process.env.PORT || 3131;
app.use(express.json());

const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
const appName = process.env.APP_NAME;

const appVersion = process.env.APP_VERSION;

app.get(`/${appName}/${appVersion}/`, (req, res) => {
  res.status(200);
  res.send("test");
});

//get all jokes
app.get(`/${appName}/${appVersion}/jokes`, async (req, res) => {
  try {
    const jokes = await handleGetJokes(req.body);
    res.status(200).json({ message: jokes });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

//get random joke
app.get(`/api/joke`, async (req, res) => {
  try {
    const joke = await handleGetJokeRandom();

    res.status(200).json({ message: joke });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

//add joke
app.post(`/${appName}/${appVersion}/joke`, async (req, res) => {
  try {
    await handleAddJoke(req.body);
    res.status(201).json({ message: "joke added" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

//update joke
app.put(`/api/joke/:id`, async (req, res) => {
  try {
    await handleUpdateJoke(req);
    res.status(201).json({ message: "joke updated" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

//get delete joke
app.delete(`/api/joke/:id`, async (req, res) => {
  try {
    await handleDeleteJoke(req);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

//add vote
app.post(`/api/joke/:id`, async (req, res) => {
  try {
    await handleAddVote(req);
    res.status(200).send();
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

app.listen(port, (error) => {
  if (!error) console.log("Server is Successfully Running, and App is listening on port " + port);
  else console.log("Error occurred, server can't start", error);
});
