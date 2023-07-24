const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// express static file serving - public is the folder name
app.use( express.static('server/public') );

// Setup body parser for POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Start server listening on PORT
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}...`);
})

// Require in router
const bookRouter = require('./routers/book.router.js')

app.use('/book', bookRouter)


// Move movie code into a router
// Extract movieList and create a new route, just like we did for /book
  // /movie
  const movieRouter = require('./routers/movie.router.js')

  app.use('/movie', movieRouter) // The app.use as tageting the /movie url. 
                                //  So when you go to the movie.router.js module.
                                // The router.post and .get will only need '/'
