import React, { useEffect, useState } from "react";
import "./About.scss";
import { motion, useAnimationControls } from "framer-motion";
import LogoAbout from "../Assets/svg/LogoAbout";
import LogoOutlinedAbout from "../Assets/svg/LogoOutlinedAbout";
import aboutProfileImage from "../Assets/svg/alok_about.svg";

const About = () => {
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

    profileImageControlls.set({ opacity: 0, x: "-10rem" });
    profileImageControlls.start({
      opacity: 1,
      x: "-10rem",
      transition: {
        type: "tween",
        duration: 3,
        ease: "easeIn",
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

  const domainVariants = {
    hidden: {
      x: "10rem",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeIn",
        type: "tween",
      },
    },
  };
  const aboutmeVariants = {
    hidden: {
      y: "-10rem",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeIn",
        type: "tween",
      },
    },
  };
  const aboutIntroVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeIn",
        type: "tween",
      },
    },
  };
  return (
    <div className="page about-page">
      <motion.div
        className="logo-about-container"
        initial={{ scale: 0.995, rotate: -90 }}
        animate={{ scale: [0.995, 1, 0.995] }}
        transition={{
          type: "linear",
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
        }}
      >
        <LogoAbout />
        <LogoOutlinedAbout />
        <div className="width-line">
          <motion.div
            variants={profileImageVariants}
            initial="hidden"
            animate={profileImageAnimation}
            id="profile-img"
          >
            <img src={aboutProfileImage} alt="" style={{ rotate: "90deg" }} />
          </motion.div>
        </div>
      </motion.div>
      <div className="about-textarea">
        <br />
        <motion.h1
          variants={aboutmeVariants}
          className="about-me"
          initial="hidden"
          animate="visible"
        >
          About <span>Me</span>
        </motion.h1>
        <motion.h3
          className="about-domain"
          variants={domainVariants}
          initial="hidden"
          animate="visible"
        >
          Fullstack Web Developer!
        </motion.h3>
        <motion.p
          className="about-intro"
          variants={aboutIntroVariants}
          initial="hidden"
          animate="visible"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
          rnatur consequatur fuga! Distinctio dolorum sequi cum fugiat! Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Ea neque doloribus
          <br />
          totam assumenda, rnatur consequatur fuga! Distinctio dolorum sequi cum
          fugiat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
          neque doloribus totam assumenda,
          <br />
        </motion.p>
      </div>
    </div>
  );
};

export default About;
