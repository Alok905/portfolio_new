import "./app.scss";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import ParticleJsBackground from "./components/particlejs/config/ParticleJsBackground";
import { motion } from "framer-motion";
import { useState } from "react";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const mouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };
  window.addEventListener("mousemove", mouseMove);
  const [cursorScale, setCursorScale] = useState(1);
  const [cursorBorder, setCursorBorder] = useState("2px solid #fff");
  const cursorVariants = {
    hidden: {
      top: 70,
      left: 70,
    },
    visible: (i) => ({
      top: mousePosition.y - i,
      left: mousePosition.x - i,
      scale: i == 11 ? cursorScale : 1,
      opacity: cursorScale == 1 ? 1 : 0.3,
      transition: {
        duration: i == 11 ? .1 : 0,
        type: "easeInOut",
        scale: {
          duration: 0.4,
        },
        opacity: {
          duration: 0.1
        }
      },
    }),
  };
  return (
    <>
      <motion.span
        style={{
          position: "absolute",
          background: "#fff",
          borderRadius: "50%",
          zIndex: 100,
          height: ".8rem",
          width: ".8rem",
          pointerEvents:"none",
        }}
        variants={cursorVariants}
        animate="visible"
        custom={4}
       />
      <motion.span
        style={{
          position: "absolute",
          background: "none",
          border:"2px solid #fff",
          borderRadius: "50%",
          zIndex: 100,
          height: "2.2rem",
          width: "2.2rem",
          pointerEvents: "none",
        }}
        variants={cursorVariants}
        animate="visible"
        custom={11}
      />
      <ParticleJsBackground />
      <Routes>
        <Route path="/" element={<Layout setCursorScale={setCursorScale}/>}>
          <Route index element={<Home setCursorScale={setCursorScale} cursorScale={ cursorScale} />} />
          <Route path="about" element={<About setCursorScale={setCursorScale} />} />
          <Route path="work" element={<Work setCursorScale={setCursorScale} />} />
          <Route path="contact" element={<Contact setCursorScale={setCursorScale} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
