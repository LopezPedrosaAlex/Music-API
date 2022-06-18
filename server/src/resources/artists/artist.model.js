const mongoose = require("mongoose");
const { Schema } = mongoose;

const artistSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    typeArtist: {
      type: Array,
    },
  },
  { timestamps: true }
);

const Artist = mongoose.model("artists", artistSchema);

module.exports = Artist;
