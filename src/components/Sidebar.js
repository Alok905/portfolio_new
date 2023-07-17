import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimationControls } from "framer-motion";
import "./Sidebar.scss";
import LogoFilled from "../Assets/svg/LogoFilled";

const Sidebar = ({setCursorScale}) => {
  const navIconBounceControl = useAnimationControls();
  const socialIconBounceControl = useAnimationControls();

  const [navLinkAnimation, setnavLinkAnimation] =
    useState(navIconBounceControl);

  const navLinkIconVariants = {
    rest: {
      scale: 1,
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "easeIn",
      },
    },
    hover: {
      color: "#ffd700",
      scale: 1.25,
      x: "1rem",
      // cursor: "none",
      transition: {
        duration: 0.4,
        type: "spring",
        mass: 0.5,
        stiffness: 100,
        bounce: 3,
      },
    },
  };
  // const navLinkIconVariants = {
  //   rest: {
  //     x: 0,
  //     transition: {
  //       duration: 0.2,
  //       type: "tween",
  //       ease: "easeIn",
  //     },
  //   },
  //   hover: {
  //     opacity: 0,
  //     transition: {
  //       duration: 0.2,
  //       type: "tween",
  //       ease: "easeOut",
  //     },
  //   },
  // };
  const navLinkTextVariants = {
    rest: {
      x: 0,
      y: 0,
      rotate: -90,
      opacity: 0,
      ease: "easeOut",
      duration: 0.1,
      type: "tween",
    },
    hover: {
      opacity: 1,
      x: "-2rem",
      rotate: -90,
      transition: {
        opacity: {
          duration: 0.4,
          type: "spring",
          mass: 0.5,
          stiffness: 100,
          bounce: 3,
        },
      },
    },
  };

  useEffect(() => {
    //for initial bounce animation of nav icons
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

    //for initial bounce animation of social link icons
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

    //for stopping the controls after executed once
    setTimeout(() => {
      navIconBounceControl.stop();
      socialIconBounceControl.stop();

      setnavLinkAnimation("rest");
    }, 6000);
  }, []);

  const nav_links_array = [
    { icon: "fa-house", custom: 8, text: "HOME", link: "/" },
    { icon: "fa-user", custom: 6, text: "ABOUT", link: "/about" },
    { icon: "fa-code", custom: 4, text: "WORK", link: "/work" },
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
        <LogoFilled setCursorScale={setCursorScale} />
      </div>
      <ul className="nav-links">
        {nav_links_array.map(({ icon, custom, text, link }, i) => (
          <motion.li
            initial="rest"
            whileHover="hover"
            // animate="rest"
            custom={custom}
            animate={navLinkAnimation}
            onMouseEnter={() => setCursorScale(1.6)}
            onMouseLeave={() => setCursorScale(1)}
          >
            <Link to={link}>
              <motion.span variants={navLinkTextVariants}>{text}</motion.span>
              <motion.i
                variants={navLinkIconVariants}
                className={`fa fa-solid ${icon}`}
                aria-hidden="true"
              ></motion.i>
            </Link>
          </motion.li>
        ))}
      </ul>
      <ul className="social-links">
        {social_links_array.map(({ custom, icon, link }, i) => (
          <motion.li custom={custom} animate={socialIconBounceControl} 
            onMouseEnter={() => setCursorScale(1.6)}
            onMouseLeave={() => setCursorScale(1)}>
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
