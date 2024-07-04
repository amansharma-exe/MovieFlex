import React, { useState, useEffect } from "react";

const GetTVShows = () => {
  const [tvshowdata, setTVShowData] = useState([]);
  const [tvshowid, setTVShowid] = useState([]);
  const [count, setCount] = useState(1);
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    fetchData();
  }, [count]);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://vidsrc.to/vapi/tv/new/${count}`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      const tvshows = data.result.items;
      setTVShowData(tvshows);
      const ids = tvshows.map((tvshow) => tvshow.imdb_id);
      setTVShowid(ids);
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
      <div className="flex gap-2 justify-center items-center mt-8 ">
        <div className="text-white">Latest TV Shows Collection...</div>
        
        {dataFetched && (
          <>
            <div>
              <button onClick={decrementCount} className="bg-white text-blue-800 p-2 rounded ml-4 ">
                Previous
              </button>
            </div>
            <div>
              <button onClick={incrementCount} className="bg-white text-blue-800 p-2 rounded ml-4">
                Next
              </button>
            </div>
          </>
        )}
      </div>
      {dataFetched && (
        <>
          <div className="flex justify-center mt-4">
            <h3 className="text-lg text-white">TV Shows List (Page {count}):</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-16 mt-4 ">
            {tvshowdata.map((tvshow) => (
              <div key={tvshow.imdb_id} className="bg-white backdrop-blur-sm bg-opacity-25 shadow-sm rounded p-4">
                <h4 className="text-white text-lg font-semibold">{tvshow.title}</h4>
                <a
                  href={`https://vidsrc.to/embed/tv/${tvshow.imdb_id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline mt-2 block"
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

export default GetTVShows;
