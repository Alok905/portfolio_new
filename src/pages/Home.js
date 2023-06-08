import React, { useEffect, useState } from "react";
import "./Home.scss";
import { motion, useAnimationControls } from "framer-motion";
import profileImage from "../Assets/svg/alok_home.svg";
import LogoHome from "../Assets/svg/LogoHome";
import LogoOutlinedHome from "../Assets/svg/LogoOutlinedHome";

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
  const profileImageControlls = useAnimationControls();

  const [profileImageAnimation, setProfileImageAnimation] = useState(
    profileImageControlls
  );

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
          mass: 10,
          stiffness: 1300,
          damping: 35,
        },
        delay: i / 10,
      },
    }));

    profileImageControlls.set({ scale: 0, opacity: 0, x: "-35rem" });
    profileImageControlls.start({
      scale: 1,
      opacity: 1,
      x: "-10rem",
      transition: {
        scale: {
          type: "tween",
          duration: 1,
          ease: "easeIn",
        },
        x: {
          type: "tween",
          duration: 1,
          ease: "easeIn",
        },
      },
    });

    setTimeout(() => {
      bouncingControlls.stop();
      opacityControlls.stop();
    }, 10000);

    setTimeout(() => {
      setProfileImageAnimation("visible");
    }, 2000);
  }, []);
  const nameHoverVariants = {
    hidden: {
      scale: 1,
      color: "#ffd700",
    },
    hover: {
      scale: 1.25,
      rotate: 10,
      color: "rgb(0, 255, 234)",
      transition: {
        duration: 0.1,
        mass: 0.7,
        stiffness: 1000,
        type: "spring",
        bounce: 10,
      },
    },
  };
  const domainHoverVariants = {
    hidden: {
      scale: 1,
      color: "rgb(0, 255, 234)",
    },
    hover: {
      scale: 1.25,
      rotate: 10,
      color: "#ffd700",
      transition: {
        duration: 0.1,
        mass: 0.7,
        stiffness: 1000,
        type: "spring",
        bounce: 10,
      },
    },
  };
  return (
    <div className="page home-page">
      <div className="home-textarea">
        <br />
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
              variants={nameHoverVariants}
              initial="hidden"
              whileHover="hover"
              animate={bouncingControlls}
              custom={i + hello_text.length}
            >
              {name_text[i + 1] === "J" &&
                ((window.innerWidth <= 950 && window.innerWidth >= 750) ||
                  window.innerWidth <= 410) && <br />}
              {name_text[i + 1] === "R" && window.innerWidth <= 303 && <br />}
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
                variants={domainHoverVariants}
                initial="hidden"
                whileHover="hover"
                animate={bouncingControlls}
                custom={
                  i +
                  hello_text.length +
                  name_text.length +
                  skill_text_first.length
                }
              >
                {skill_text_second[i + 1] === "W" &&
                  ((window.innerWidth <= 950 && window.innerWidth >= 750) ||
                    window.innerWidth <= 410) && <br />}
                {skill_text_second[i + 1] === "D" &&
                  window.innerWidth <= 327 && <br />}
                {t}
              </motion.span>
            ))}
          </span>
        </span>
        <br />
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
          duration: 4,
          ease: "easeInOut",
        }}
      >
        <LogoHome />
        <LogoOutlinedHome />
        <div className="width-line">
          <motion.div
            variants={profileImageVariants}
            initial="hidden"
            animate={profileImageAnimation}
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
