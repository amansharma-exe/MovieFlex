const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;


// Enable CORS for all routes
app.use(cors());

// Route to fetch IMDb movie ID
app.get('/imdb-movie-id', async (req, res) => {
  try {
      const movieName ="John Wick";
      //const movieName = req.query.title;
      const api = `https://www.omdbapi.com/?t=${movieName}&apikey=54373b60`;
      const formattedTitle = encodeURIComponent(movieName);
      //const searchUrl = `https://www.imdb.com/find?q=${formattedTitle}&s=tt&ttype=ft`;

      const response = await fetch(api);
      if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.text();
      res.send(data);
  } catch (error) {
      console.error('Error fetching data from IMDb:', error);
      res.status(500).json({ error: 'Failed to fetch data from IMDb.' });
  }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
