const { mongoose } = require("mongoose");
const { Schema } = mongoose;

const songSchema = new mongoose.Schema(
  {
    idFrom: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    membersGroup: Number,
  },
  { timestamps: true }
);

const Song = mongoose.model("songs", songSchema);

module.exports = Song;
