import React, { useEffect, useState } from "react";
import LogoPage from "../Assets/svg/LogoPage";
import LogoOutlined from "../Assets/svg/LogoOutlined";
import "./Home.scss";
import { motion, useAnimationControls } from "framer-motion";
import profileImage from "../Assets/svg/alok_profile_image_final_svg.svg";

const Home = () => {
  const hello_text = ["H", "e", "l", "l", "o", " ", "I", "t", `'`, "s"];
  const name_text = [
    "A",
    "l",
    "o",
    "k",
    " ",
    "R",
    "a",
    "n",
    "j",
    "a",
    "n",
    " ",
    "J",
    "o",
    "s",
    "h",
    "i",
  ];
  const skill_text_first = ["A", "n", "d", " ", "I", `'`, "m", " ", "a", " "];
  const skill_text_second = [
    "F",
    "u",
    "l",
    "l",
    "s",
    "t",
    "a",
    "c",
    "k",
    " ",
    "W",
    "e",
    "b",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];
  const profileImageVariants = {
    hidden: {
      rotate: 90,
      y: "-50%",
    },
    visible: {
      x: ["-10rem", "-9rem", "-10rem"],
      y: "-50%",
      rotate: 90,
      transition: {
        duration: 4,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  const opacityControlls = useAnimationControls();
  const bouncingControlls = useAnimationControls();

  useEffect(() => {
    opacityControlls.set({ opacity: 0, scale: 0.4 });
    opacityControlls.start((i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.1,
        delay: i / 10,
        scale: {
          type: "spring",
          bounce: 1,
        },
      },
    }));
    bouncingControlls.set({ scale: 0.1, opacity: 0 });
    bouncingControlls.start((i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        scale: {
          duration: 0.1,
          type: "spring",
          mass: 2,
          stiffness: 400,
        },
        delay: i / 10,
      },
    }));

    setTimeout(() => {
      bouncingControlls.stop();
      opacityControlls.stop();
    }, 8000);
  }, []);
  return (
    <div className="page home-page">
      <div className="home-textarea">
        <span className="home-hello">
          {hello_text.map((t, i) => (
            <motion.span animate={opacityControlls} custom={i}>
              {t}
            </motion.span>
          ))}
        </span>
        <br />
        <span className="home-name">
          {name_text.map((t, i) => (
            <motion.span
              style={{
                display: t != " " ? "inline-block" : "inline",
                width: "fit-content",
              }}
              animate={bouncingControlls}
              custom={i + hello_text.length}
            >
              {t}
            </motion.span>
          ))}
        </span>
        <br />
        <span className="home-skill">
          {skill_text_first.map((t, i) => (
            <motion.span
              animate={opacityControlls}
              custom={i + hello_text.length + name_text.length}
            >
              {t}
            </motion.span>
          ))}
          <br />
          <span className="home-domain">
            {skill_text_second.map((t, i) => (
              <motion.span
                style={{
                  display: t != " " ? "inline-block" : "inline",
                  width: "fit-content",
                }}
                animate={bouncingControlls}
                custom={
                  i +
                  hello_text.length +
                  name_text.length +
                  skill_text_first.length
                }
              >
                {t}
              </motion.span>
            ))}
          </span>
        </span>
        <br />
        <p className="home-intro">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
          doloremque obcaecati quasi dolorum eos unde animi corrup Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Dolores doloremque
          obcaecati quasi dolorum eos unde animi corrup
        </p>
        <motion.button
          initial={{ boxShadow: "none" }}
          whileHover={{ boxShadow: "0 0 1.8rem rgb(0,255,234)" }}
          transition={{ duration: 0.3, type: "spring", bounce: 0, mass: 0.1 }}
          className="home-download-cv"
        >
          Download CV
        </motion.button>
      </div>
      <motion.div
        className="logo-home-container"
        initial={{ scale: 0.995, rotate: -90 }}
        animate={{ scale: [0.995, 1, 0.995] }}
        transition={{
          type: "linear",
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <LogoPage />
        <LogoOutlined />
        <div className="width-line">
          <motion.div
            variants={profileImageVariants}
            initial="hidden"
            animate="visible"
            id="profile-img"
          >
            <img src={profileImage} alt="" style={{ rotate: "90deg" }} />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
