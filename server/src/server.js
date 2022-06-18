const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { PORT } = require("./config");
const db = require("./db");

const app = express();
app.disable("x-powered-by");
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

const artistRouter = require("./resources/artists/artist.router");
app.use("/artists", artistRouter);

const songRouter = require("./resources/songs/songs.router");
app.use("/songs", songRouter);

const startServer = async () => {
  await db.connect();
  app.listen(PORT, () => {
    console.log(`I am listening at PORT: ${PORT}`);
  });
};

startServer();
