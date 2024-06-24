// src/components/Navbar.js
import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [movieName, setMovieName] = useState("");
  //const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (movieName) {
      //navigate(`/search?query=${encodeURIComponent(movieName)}`);
      return <div>Loading...</div>
    }
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <h1 className="text-white text-2xl font-bold">MovieFlex</h1>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <div className="text-gray-300 hover:bg-gray-700 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </div>
                <div className="text-gray-300 hover:bg-gray-700 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">
                  About
                </div>
                <div className="text-gray-300 hover:bg-gray-700 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex gap-4">
            <form onSubmit={handleSearch} className="flex">
              <input
                type="text"
                value={movieName}
                onChange={(e) => setMovieName(e.target.value)}
                placeholder="Search for movies..."
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <button type="submit" className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md ">
                Search
              </button>
            </form>
            <form onSubmit={handleSearch} className="flex">
              <input
                type="text"
                value={movieName}
                onChange={(e) => setMovieName(e.target.value)}
                placeholder="Search for TV Shows..."
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <button type="submit" className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md ">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
