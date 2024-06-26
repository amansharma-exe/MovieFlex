
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); 
    },1500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <motion.div
        className="text-4xl font-bold"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        MovieFlex
      </motion.div>
    </div>
  );
};

export default SplashScreen;
