import React, { useState, useEffect } from "react";

const GetMovies = () => {
  const [moviedata, setMovieData] = useState([]);
  const [moviedid, setMovieID] = useState([]);
  const [count, setCount] = useState(1);
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    fetchData();
  }, [count]);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://vidsrc.xyz/movies/latest/page-${count}.json`); 
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      console.log(data);
      const movies = data.result;
      setMovieData(movies);
      console.log(movies);
      const ids = movies.map((movie) => movie.imdb_id);
      setMovieID(ids);
      console.log(ids);
      setDataFetched(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleClick = () => {
    if (!dataFetched) {
      fetchData();
    }
  };

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <>
      <div className="flex gap-2  justify-center pt-4 items-center mt-8">
        <div className="text-white">Latest Movies Collection...</div>

        {dataFetched && (
          <>
            <div>
              <button
                onClick={decrementCount}
                className="bg-white text-blue-800 p-2 rounded ml-4"
              >
                Previous
              </button>
            </div>
            <div>
              <button
                onClick={incrementCount}
                className="bg-white text-blue-800 p-2 rounded ml-4"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
      {dataFetched && (
        <>
          <div className="flex justify-center mt-4">
            <h3 className="text-lg text-white">Movies List (Page {count}):</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-16 mt-4">
            {moviedata.map((movie) => (
              <div
                key={movie.imdb_id}
                className="bg-white backdrop-blur-sm shadow-sm bg-opacity-25 rounded p-4"
              >
                <h4 className="text-white text-lg font-semibold">
                  {movie.title}
                </h4>
                <a
                  href={`https://vidsrc.xyz/embed/movie/${movie.imdb_id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-50 hover:underline mt-2 block"
                >
                  Watch Now
                </a>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default GetMovies;
