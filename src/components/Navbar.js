import React from "react";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <>
      <motion.div
        className="navbar-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 4 }}
      >
        <nav>
          <div className="nav-linkbox">
            <HashLink smooth to="/#about_me">
              <li>About me</li>
            </HashLink>
            <HashLink smooth to="/#portfolio">
              <li>Portfolio</li>
            </HashLink>
            <HashLink smooth to="/#resume">
              <li>Resume</li>
            </HashLink>
          </div>
          <div className="nav-socialbox">
            <a href="https://www.linkedin.com/in/nolan-crenshaw-a10b381a0/">
              <motion.img
                whileHover={{
                  scale: 1.2,
                  transition: {
                    duration: 0.3,
                  },
                }}
                src="https://img.icons8.com/color/48/000000/linkedin.png"
              />
            </a>
            <a href="https://angel.co/u/nolan-crenshaw">
              <motion.img
                whileHover={{
                  scale: 1.2,
                  transition: {
                    duration: 0.3,
                  },
                }}
                src="https://img.icons8.com/color/50/000000/angelist.png"
              />
            </a>
          </div>
          <motion.li
            whileHover={{
              scale: 1.2,
              transition: {
                duration: 0.3,
              },
            }}
            className="call_to_action"
          >
            Let's Talk
          </motion.li>
        </nav>
      </motion.div>
    </>
  );
};

export default Navbar;
