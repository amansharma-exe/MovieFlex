import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Animation from "../Animation/Animation.json";
import Lottie from "lottie-react";

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 1500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="flex relaive items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="flex fixed ">
        {/* <Lottie animationData={Animation} /> */}
        <motion.div
          className="text-4xl font-bold"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          MovieFlex
        </motion.div>
      </div>
    </div>
  );
};

export default SplashScreen;
