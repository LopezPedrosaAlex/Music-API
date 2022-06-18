const mongodb = require("mongodb");

const url = "mongodb://admin:fullstack@localhost:27017";
const musicDatabase = new mongodb.MongoClient(url, {
  useUnifiedTopology: true,
});

async function main() {
  await musicDatabase.connect();
  const db = musicDatabase.db("music-mongo");
  let artistsId = [];
  for (let i = 0; i < 5; i++) {
    artistsId.push(mongodb.ObjectId());
  }
  let songId = mongodb.ObjectId();

  const artists = await db.collection("artists").insertMany([
    {
      _id: artistsId[0],
      name: "Evidence",
      typeArtist: "rap, hip-hop",
      membersGroup: 1,
    },
    {
      _id: artistsId[1],
      name: "Metallica",
      typeArtist: "rock, metal",
      membersGroup: 4,
    },
    {
      _id: artistsId[2],
      name: "Mariah Carey",
      typeArtist: "pop",
      membersGroup: 1,
    },
    {
      _id: artistsId[3],
      name: "Shakira",
      typeArtist: "pop, reggeaton, Electro dance",
    },
    {
      _id: artistsId[4],
      name: "Frédéric Chopin",
      typeArtist: "Classical",
    },
  ]);

  const songs = await db.collection("songs").insertMany([
    {
      idFrom: artistsId[0],
      name: "Throw It All Away",
      durationSong: 188,
      typeSong: ["rap", "hip-hop"],
    },
    {
      idFrom: artistsId[0],
      name: "Unlearning",
      durationSong: 176,
      typeSong: ["rap", "hip-hop"],
    },
    {
      idFrom: artistsId[0],
      name: "Jim Dean",
      durationSong: 242,
      typeSong: ["rap", "hip-hop"],
    },
    {
      idFrom: artistsId[1],
      name: "Enter Sandman",
      durationSong: 331,
      typeSong: ["metal"],
    },
    {
      idFrom: artistsId[1],
      name: "Nothing Else Matters",
      durationSong: 388,
      typeSong: ["rock"],
    },
    {
      idFrom: artistsId[1],
      name: "Master Of Puppets",
      durationSong: 515,
      typeSong: ["rock, metal"],
    },
    {
      idFrom: artistsId[2],
      name: "Fantasy",
      durationSong: 243,
      typeSong: ["pop"],
    },
    {
      idFrom: artistsId[2],
      name: "Always Be My Baby",
      durationSong: 258,
      typeSong: ["pop"],
    },
    {
      idFrom: artistsId[2],
      name: "We Belong Together",
      durationSong: 201,
      typeSong: ["pop"],
    },
    {
      idFrom: artistsId[3],
      name: "Waka Waka",
      durationSong: 202,
      typeSong: ["pop electro dance"],
    },
    {
      idFrom: artistsId[3],
      name: "Hips Don't Lie",
      durationSong: 218,
      typeSong: ["pop, electro dance"],
    },
    {
      idFrom: artistsId[3],
      name: "Te Felicito",
      durationSong: 172,
      typeSong: ["pop, reggeaton"],
    },
    {
      idFrom: artistsId[4],
      name: "Nocturnes, Op. 9: II Andante",
      durationSong: 268,
      typeSong: ["Classical"],
    },
    {
      idFrom: artistsId[4],
      name: "Nocturne No. 1 In B Flat Minor, Op.9 No.1",
      durationSong: 286,
      typeSong: ["Classical"],
    },
    {
      idFrom: artistsId[4],
      name: "Nocturne No. 2 in E-Flat Major, Op. 9 No. 2",
      durationSong: 273,
      typeSong: ["Classical"],
    },
  ]);

  console.log("The database has been initialized");
  musicDatabase.close();
}

main();
