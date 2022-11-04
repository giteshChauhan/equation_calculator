const { urlencoded, json } = require("express");
const mongoose = require("mongoose");
const express = require("express");
const config = require("config");
const cors = require("cors");
const app = express();

const alphabet = require("./route/alphabet");

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use("/api/alphabet/", alphabet);

mongoose
  .connect(config.get("db"))
  .then(() => console.log("Connected to db..."))
  .catch((error) => console.log(`Cannot connect...${error}`));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    req.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

let port = process.env.PORT || 3900;
app.listen(port, () => console.log(`Listening on port ${port}...`));
