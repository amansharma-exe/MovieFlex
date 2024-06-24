/*
<html>
<head>
  <title>Movie ID Lookup</title>
</head>
<body>
  <h1>Movie ID Lookup</h1>
  <input type="text" id="movieName" placeholder="Enter movie name" />
  <button onclick="searchMovie()">Search</button>
  <p id="result"></p>

    function searchMovie() {
      const apiKey = '54373b60';
      var movieName = encodeURIComponent(document.getElementById('movieName').value);
      var apiUrl = 'https://www.omdbapi.com/?t=' + movieName + '&apikey=' + apiKey;

      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          var movieId = data.imdbID;
          document.getElementById('result').innerHTML = 'Movie ID: ' + movieId;
        })
        .catch(error => {
          document.getElementById('result').innerHTML = 'Error occurred. Please try again.';
        });
    }
 
</body>
</html>
*/