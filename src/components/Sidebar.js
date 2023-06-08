import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimationControls } from "framer-motion";
import "./Sidebar.scss";
import LogoFilled from "../Assets/svg/LogoFilled";

const Sidebar = () => {
  const iconVariants = {
    hover: {
      color: "#ffd700",
      scale: 1.25,
      transition: {
        duration: 0.5,
        mass: 1,
        stiffness: 1000,
        type: "spring",
        bounce: 3,
      },
    },
  };
  const navIconBounceControl = useAnimationControls();
  const socialIconBounceControl = useAnimationControls();
  useEffect(() => {
    navIconBounceControl.set({ y: "-100vh", opacity: 0 });
    navIconBounceControl.start((i) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        mass: 0.15,
        bounce: 1,
        delay: i / 10,
      },
    }));

    socialIconBounceControl.set({ y: "100vh", opacity: 0 });
    socialIconBounceControl.start((i) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        delay: i / 10,
      },
    }));
  }, []);
  return (
    <div className="nav-bar">
      <div className="logo-container">
        <LogoFilled />
      </div>
      <ul className="nav-links">
        <motion.li custom={8} animate={navIconBounceControl}>
          <Link to="/">
            <motion.i
              variants={iconVariants}
              whileHover="hover"
              className="fa fa-solid fa-house"
            ></motion.i>
          </Link>
        </motion.li>
        <motion.li custom={6} animate={navIconBounceControl}>
          <Link to="/about">
            <motion.i
              variants={iconVariants}
              whileHover="hover"
              className="fa fa-solid fa-user"
            ></motion.i>
          </Link>
        </motion.li>
        <motion.li custom={4} animate={navIconBounceControl}>
          <Link to="/work">
            <motion.i
              variants={iconVariants}
              whileHover="hover"
              className="fa fa-solid fa-diagram-project"
            ></motion.i>
          </Link>
        </motion.li>
        <motion.li custom={2} animate={navIconBounceControl}>
          <Link to="/contact">
            <motion.i
              variants={iconVariants}
              whileHover="hover"
              className="fa fa-solid fa-envelope"
            ></motion.i>
          </Link>
        </motion.li>
      </ul>
      <ul className="social-links">
        <motion.li custom={1} animate={socialIconBounceControl}>
          <motion.a whileHover={{ rotate: 20, color: "#ffd700" }} href="">
            <i className="fa fa-brands fa-github"></i>
          </motion.a>
        </motion.li>
        <motion.li custom={2} animate={socialIconBounceControl}>
          <motion.a whileHover={{ rotate: 20, color: "#ffd700" }} href="">
            <i className="fa fa-brands fa-linkedin"></i>
          </motion.a>
        </motion.li>
        <motion.li custom={3} animate={socialIconBounceControl}>
          <motion.a whileHover={{ rotate: 20, color: "#ffd700" }} href="">
            <i className="fa fa-brands fa-instagram"></i>
          </motion.a>
        </motion.li>
        <motion.li custom={4} animate={socialIconBounceControl}></motion.li>
        <motion.li custom={5} animate={socialIconBounceControl}></motion.li>
        <motion.li custom={6} animate={socialIconBounceControl}></motion.li>
        <motion.li custom={7} animate={socialIconBounceControl}></motion.li>
      </ul>
    </div>
  );
};

export default Sidebar;
