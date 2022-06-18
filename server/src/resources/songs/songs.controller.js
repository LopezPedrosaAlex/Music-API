const { mongoose } = require("mongoose");
const Song = require("./songs.model");
const Artist = require("../artists/artist.model");

const listSongs = async (req, res) => {
  try {
    const doc = await Song.find().lean().exec();
    res.status(200).json({ results: [doc] });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Internal error" });
  }
};

const createOneSong = async (req, res) => {
  try {
    const { artistId } = req.params;
    let body = req.body;

    const artist = await Artist.find({ _id: artistId });
    if (!artist) {
      return res
        .status(404)
        .json({ error: "The artist of the song doesn't exist" });
    }

    const newSong = { idFrom: artistId, ...body };
    const doc = await Song.create(newSong);
    res.status(200).json({ results: [doc] });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Creation Failed" });
  }
};

const songsByArtist = async (req, res) => {
  try {
    const { artistId } = req.params;
    const doc = await Song.find({ idFrom: artistId }).lean().exec();
    res.status(200).json({ results: [doc] });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Internal Error" });
  }
};

const updateOneSong = async (req, res) => {
  try {
    const { songId } = req.params;
    const doc = await Song.findOneAndUpdate({ _id: songId }, req.body, {
      new: true,
    });
    if (!doc) {
      return res.status(404).json({ error: "The song doesn't exist" });
    }
    res.status(202).json({ results: [doc] });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Update Failed" });
  }
};

const deleteOneSong = async (req, res) => {
  const { songId } = req.params;
  try {
    const doc = await Song.findOneAndDelete(
      { _id: songId },
      {
        new: true,
      }
    );
    if (!doc) {
      return res.status(404).json({ error: "The song doesn't exist" });
    }
    res.status(200).json({ results: [doc] });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Delete Failed" });
  }
};

module.exports = {
  listSongs,
  songsByArtist,
  createOneSong,
  updateOneSong,
  deleteOneSong,
};
