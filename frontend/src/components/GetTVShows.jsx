import React, { useState } from "react";

const GetTVShows = () => {
  const [tvshowdata, setTVShowData] = useState([]);
  const [tvshowid, setTVShowID] = useState([]);

  const fetchData = () => {
    fetch("https://vidsrc.to/vapi/movie/new")
      .then((response) => response.json())
      .then((data) => {
        const tvshows = data.result.items;
        setTVShowData(tvshows);
        const ids = tvshows.map((tvshow) => tvshow.imdb_id);
        setTVShowID(ids);
      })
      .catch((err) => console.log(err));
  };

  console.log("Showing Movie Data", tvshowdata);
  console.log("Showing Movie IDs", tvshowid);

  return (
    <>
      <div className="flex gap-2 justify-center items-center">
        <div> Latest TV Shows Collection...</div>
        <div>
          <button onClick={fetchData} className="flex bg-white text-blue-800">
            Click here to get the TV Show list
          </button>
        </div>
      </div>
      <div className="flex">
        <h3 className="text-lg items-center justify-center px-16 mt-4">
          TV Show List:
        </h3>
      </div>
      <div className="gap-2">
        <ul className=" px-16 mt-4 items-center justify-center">
          {tvshowdata.map((tv) => (
            <li key={tv.imdb_id}>
              {tv.title}
              <a
                href={`https://vidsrc.to/embed/tv/${tv.imdb_id}`}
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

export default GetTVShows;
