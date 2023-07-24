// Any code that relates to /book

const express = require('express')

// Make express router
const router = express.Router()

// Sever-side state for all books


// GET all books from server state
const movieList = [];

router.get('/', (req, res) => { // only a '/' is needed since this whole module is 
  res.send(movieList);          // the /movie url
});

router.post('/', (req, res) => { //same thing here only '/' needed.
  movieList.push(req.body);
  res.sendStatus(200);
});

module.exports = router;