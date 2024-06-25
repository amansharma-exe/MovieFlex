
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 fixed bottom-0 w-full">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <div className="flex-1 flex items-center justify-center">
            <p className="text-gray-400 text-sm">Copyright 2024. All rights reserved.</p>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <p className="text-gray-300 text-sm">@ Developed by Aman Sharma</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
