const mongoose = require("mongoose");

require("dotenv").config();

const Db = process.env.ATLAS_URI;

let conn;

try {
  conn = mongoose.connect(Db, {});
} catch (err) {
  console.log(err);
}

module.exports = conn;
