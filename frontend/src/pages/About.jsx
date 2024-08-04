import Navbar from "../components/Navbar";
import React from 'react';


const About = () => {
  return (
    <div className="w-full mx-auto p-6 w-full h-screen">
      <h2 className="text-3xl text-white font-bold pt-16 mb-4 text-center">About MovieFlex</h2>
      <p className="text-white pt-4 mb-4 text-pretty text-center">
        MovieFlex is a web application that provides direct access to watch movies without worrying for any subscriptions or ads. Watch your favorite shows & movies here. 
      </p>
      <p className="text-white mb-4 text-center">
        Whether you're looking for the latest blockbusters or classic films, MovieFlex has something for everyone. Explore our extensive database and discover your next favorite movie today! 
      </p>
      <p className="text-red-700 justify-center text-center text-xl">This project is under development !!!</p>
              
    </div>
  );
}; 

export default About;
