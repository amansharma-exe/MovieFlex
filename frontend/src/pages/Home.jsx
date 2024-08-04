import React from "react";
import Navbar from "../components/Navbar";
import GetMovies from "../components/GetMovies";
import GetTVShows from "../components/GetTVShows";

const Home = () => {
  return (
    <div className="h-full w-full">
      <div className="mb-3 p-3">
        <h1> </h1>
      </div>
      <div >
        <GetMovies />
        <GetTVShows />
      </div>
      
    </div>
  );
};

export default Home;
