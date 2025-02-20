
const express = require('express');
const router = express.Router();
const { getAllSongs, getSongById, getSongsByArtist } = require('../Controllers/songController');

router.get('/songs', getAllSongs);
router.get('/songs/:id', getSongById);
router.get('/songs/artist/:artist', getSongsByArtist);

module.exports = router;
