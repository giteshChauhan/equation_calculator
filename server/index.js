const mongoose = require("mongoose");
const express = require("express");
const config = require("config");
const app = express();

mongoose
  .connect(config.get("db"))
  .then(() => console.log("Connected to db..."))
  .catch((error) => console.log(`Cannot connect...${error}`));

let port = process.env.PORT || 3900;
app.listen(port, () => console.log(`Listening on port ${port}...`));
