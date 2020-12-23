import React from "react";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";

import SplashSVG from "./SplashSVG";
import DownArrowSVG from "./svg_library/DownArrowSVG";

import Navbar from "./Navbar";

const Splash = () => {
  return (
    <motion.div
      className="splash-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.img
        id="splash_background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5 }}
        alt="splash background"
        src="./images/greg-rakozy-oMpAz-DN-9I-unsplash.jpg"
      />
      <Navbar />
      <motion.section
        initial={{ opacity: 0, y: -450, scale: 1 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1, duration: 4 }}
      >
        <div className="scrim">
          <p>Hello. My name is </p>
          <h1>Nolan Crenshaw</h1>
        </div>
        <div>
          <h2>and I am a </h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1 }}
            id="splash_svg"
          >
            <SplashSVG />
          </motion.div>
        </div>
      </motion.section>
      <div className="next_arrow-container">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.2 }}
          transition={{
            delay: 8,
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="next_arrow"
        >
          <HashLink smooth to="/#about_me">
            <DownArrowSVG />
          </HashLink>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Splash;
