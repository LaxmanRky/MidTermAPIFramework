const Song = require('../models/song');

// Get all songs
const getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    if (songs.length === 0) {
      return res.status(404).json({ message: 'No songs found' });
    }
    res.json(songs);
  } catch (err) {
    console.error('Error fetching songs:', err);
    res.status(500).json({ 
      message: 'Server error while fetching songs', 
      error: err.message 
    });
  }
};

// Get song by ID
const getSongById = async (req, res) => {
  try {
    // Validate input
    const songId = parseInt(req.params.id);
    if (isNaN(songId)) {
      return res.status(400).json({ message: 'Invalid song ID' });
    }

    const song = await Song.findOne({ songId: songId });
    if (!song) {
      return res.status(404).json({ message: `Song with ID ${songId} not found` });
    }
    res.json(song);
  } catch (err) {
    console.error('Error fetching song by ID:', err);
    res.status(500).json({ 
      message: 'Server error while fetching song', 
      error: err.message 
    });
  }
};

// Get songs by artist
const getSongsByArtist = async (req, res) => {
  try {
    // Validate input
    const artistName = req.params.artist;
    if (!artistName) {
      return res.status(400).json({ message: 'Artist name is required' });
    }

    const songs = await Song.find({ 'artistData.name': { $regex: artistName, $options: 'i' } });
    
    if (songs.length === 0) {
      return res.status(404).json({ message: `No songs found for artist: ${artistName}` });
    }
    
    res.json(songs);
  } catch (err) {
    console.error('Error fetching songs by artist:', err);
    res.status(500).json({ 
      message: 'Server error while fetching songs by artist', 
      error: err.message 
    });
  }
};

module.exports = { getAllSongs, getSongById, getSongsByArtist };
