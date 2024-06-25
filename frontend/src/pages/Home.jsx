import React from "react";
import Navbar from "../components/Navbar";
import GetMovies from "../components/GetMovies";
import GetTVShows from "../components/GetTVShows";

const Home = () => {
  return (
    <div>
      <GetMovies />
      <GetTVShows />
    </div>
  );
};

export default Home;
