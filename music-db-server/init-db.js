const mongodb = require("mongodb");

const url = "mongodb://admin:fullstack@localhost:27017";
const musicDatabase = new mongodb.MongoClient(url, {
  useUnifiedTopology: true,
});

async function main() {
  await musicDatabase.connect();
  const db = musicDatabase.db("music-mongo");
  let artistId = mongodb.ObjectId();
  let songId = mongodb.ObjectId();

  const artists = await db.collection("artists").insertMany([
    {
      _id: artistId,
      name: "Artfce",
    },
  ]);

  const songs = await db.collection("songs").insertMany([
    {
      idFrom: artistId,
      name: "School of Rock",
      durationSong: 186,
      typeSong: ["rock", "progressive"],
    },
  ]);

  console.log("The database has been initialized");
  musicDatabase.close();
}

main();
