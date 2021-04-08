const mongoose = require("mongoose");

const playlistsSchema = new mongoose.Schema({
  members: {
    type: Array,
    default: [],
  },
  owners: {
    type: Array,
    default: [],
  },
  songs: {
    type: Array,
    default: [],
  },
});

const playlistsModel = mongoose.model("Playlists", playlistsSchema);

module.exports = playlistsModel;