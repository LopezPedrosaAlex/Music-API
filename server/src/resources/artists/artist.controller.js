const Artist = require("./artist.model");

const listArtists = async (req, res) => {
  try {
    const docs = await Artist.find().lean().exec();
    res.status(200).json({ results: docs });
  } catch (e) {
    res.status(500).json({
      error: "Internal error",
    });
  }
};

const createOneArtist = async (req, res) => {
  try {
    const newArtist = req.body;
    console.log(newArtist);
    const doc = await Artist.create(newArtist);
    res.status(202).json({ results: [doc] });
    console.log(doc);
  } catch (e) {
    console.log(e);
    res.status(500).json({
      error: "Creation Failed",
      description: e.message,
    });
  }
};

const updateOneArtist = async (req, res) => {
  const { id } = req.params;
  try {
    const doc = await Artist.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    if (!doc) {
      return res.status(404).json({ error: "The artist doesn't exist" });
    }
    res.status(200).json({ results: [doc] });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Update Failed" });
  }
};

const deleteOneArtist = async (req, res) => {
  const { id } = req.params;
  try {
    const doc = await Artist.findOneAndDelete(
      { _id: id },
      {
        new: true,
      }
    );
    if (!doc) {
      return res.status(404).json({ error: "The artist doesn't exist" });
    }
    res.status(200).json({ results: [doc] });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Delete Failed" });
  }
};

const findOneArtist = async (req, res) => {
  try {
    const { id } = req.params;
    const doc = await Artist.findById({ _id: id }).lean().exec();
    res.status(200).json({ results: [doc] });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Internal error" });
  }
};

module.exports = {
  listArtists,
  createOneArtist,
  updateOneArtist,
  deleteOneArtist,
  findOneArtist,
};
