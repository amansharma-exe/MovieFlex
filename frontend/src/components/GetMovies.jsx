import React, { useState } from "react";

const GetMovies = () => {
  const [moviedata, setMovieData] = useState([]);
  const [moviedid, setMovieID] = useState([]);

  const fetchData = () => {
    fetch("https://vidsrc.to/vapi/movie/new")
      .then((response) => response.json())
      .then((data) => {
        const movies = data.result.items;
        setMovieData(movies);
        const ids = movies.map((movie) => movie.imdb_id);
        setMovieID(ids);
      })
      .catch((err) => console.log(err));
  };

  console.log("Showing Movie Data", moviedata);
  console.log("Showing Movie IDs", moviedid);

  return (
    <>
      <div className="flex gap-2 justify-center items-center">
        <div> Latest Movies Collection...</div>
        <div>
          <button onClick={fetchData} className="flex bg-white text-blue-800">
            Click here to get the movies list
          </button>
        </div>
      </div>
      <div className="flex">
        <h3 className="text-lg items-center justify-center px-16 mt-4">
          Movies List:
        </h3>
      </div>
      <div className="gap-2">
        <ul className=" px-16 mt-4 items-center justify-center">
          {moviedata.map((movie) => (
            <li key={movie.imdb_id}>
              {movie.title}
              <a
                href={`https://vidsrc.to/embed/movie/${movie.imdb_id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Watch Now
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default GetMovies;
