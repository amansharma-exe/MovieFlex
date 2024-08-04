import React, { useEffect, useState } from "react";


import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);  
    }, 2500);

    return () => clearTimeout(timer); 
  }, []);
  return (
    <div>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} /> 
      ) : (
        <div>
          <BrowserRouter>
            <Navbar />
            <main className="flex-grow pb-16 pt-4 mb-4 bg-hero w-full overflow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </BrowserRouter>
        </div>
      )}
    </div>
  );
};

export default App;
