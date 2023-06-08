import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimationControls } from "framer-motion";
import "./Sidebar.scss";
import LogoFilled from "../Assets/svg/LogoFilled";

const Sidebar = () => {
  const navLinkIconVariantss = {
    hover: {
      color: "#ffd700",
      scale: 1.25,
      transition: {
        duration: 0.5,
      },
    },
  };
  const navIconBounceControl = useAnimationControls();
  const socialIconBounceControl = useAnimationControls();

  const [navLinkAnimation, setnavLinkAnimation] =
    useState(navIconBounceControl);

  const navLinkIconVariants = {
    rest: {
      x: 0,
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "easeIn",
      },
    },
    hover: {
      opacity: 0,
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "easeOut",
      },
    },
  };
  const navLinkTextVariants = {
    rest: {
      opacity: 0,
      scale: 0,
      ease: "easeOut",
      duration: 0.2,
      type: "tween",
    },
    hover: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        type: "spring",
        // ease: "easeIn",
        mass: 0.5,
        stiffness: 100,
        bounce: 3,
      },
    },
  };
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
        duration: 1,
        type: "tween",
        delay: i / 10,
      },
    }));

    setTimeout(() => {
      navIconBounceControl.stop();
      socialIconBounceControl.stop();

      setnavLinkAnimation("rest");
    }, 6000);
  }, []);

  const nav_links_array = [
    { icon: "fa-house", custom: 8, text: "HOME", link: "/" },
    { icon: "fa-user", custom: 6, text: "ABOUT", link: "/about" },
    { icon: "fa-diagram-project", custom: 4, text: "WORK", link: "/work" },
    { icon: "fa-envelope", custom: 2, text: "CONTACT", link: "/contact" },
  ];
  const social_links_array = [
    { icon: "fa-github", custom: 1, link: "#" },
    { icon: "fa-linkedin", custom: 2, link: "#" },
    { icon: "fa-instagram", custom: 3, link: "#" },
    { icon: "", custom: 4, link: "#" },
    { icon: "", custom: 5, link: "#" },
    { icon: "", custom: 6, link: "#" },
    { icon: "", custom: 7, link: "#" },
  ];
  return (
    <div className="nav-bar">
      <div className="logo-container">
        <LogoFilled />
      </div>
      <ul className="nav-links">
        {nav_links_array.map(({ icon, custom, text, link }) => (
          <motion.li
            initial="rest"
            whileHover="hover"
            animate="rest"
            custom={custom}
            animate={navLinkAnimation}
          >
            <Link to={link}>
              <motion.span variants={navLinkTextVariants}>{text}</motion.span>
              <motion.i
                variants={navLinkIconVariants}
                className={`fa fa-solid ${icon}`}
              ></motion.i>
            </Link>
          </motion.li>
        ))}
      </ul>
      <ul className="social-links">
        {social_links_array.map(({ custom, icon, link }, i) => (
          <motion.li custom={1} animate={socialIconBounceControl}>
            {i <= 2 && (
              <motion.a
                whileHover={{ rotate: 20, color: "#ffd700" }}
                href={link}
              >
                <i className={`fa fa-brands ${icon}`}></i>
              </motion.a>
            )}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
