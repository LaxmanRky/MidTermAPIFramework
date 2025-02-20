const Song = require('../models/song');

// Get all songs
const getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get song by ID
const getSongById = async (req, res) => {
  try {
    const song = await Song.findOne({ songId: req.params.id });
    if (!song) return res.status(404).json({ message: 'Song not found' });
    res.json(song);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get songs by artist
const getSongsByArtist = async (req, res) => {
  try {
    const songs = await Song.find({ 'artistData.name': req.params.artist });
    res.json(songs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAllSongs, getSongById, getSongsByArtist };
