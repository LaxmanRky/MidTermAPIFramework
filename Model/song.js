const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
  artistId: Number,
  name: String,
  country: String,
});

const songSchema = new mongoose.Schema({
  songId: Number,
  artistData: artistSchema,
  releaseDate: String,
  songTitle: String,
  genre: String,
});

module.exports = mongoose.model('Song', songSchema);