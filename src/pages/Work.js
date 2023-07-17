import React, { createRef, useRef, useState } from "react";
import "./Work.scss"
import {motion, animate} from 'framer-motion'

const Work = () => {
  const arr = [1, 2];
  const [center, setCenter] = useState(null)
  const [ref, setRef] = useState(null)
  const [style, setStyle] = useState("rotate3d(0, 0, 0, 0)")

  // console.log(mouse)
  const mouseEnter = (e) => {
    setRef(createRef())
  }
  
  const mouseMove = (e) => {
    const mouse = { x: e.clientX, y: e.clientY }
    if(ref){
      const curr = ref.current.getBoundingClientRect()
      setCenter({x: (curr.left + curr.right) / 2, y: (curr.top + curr.bottom) / 2})
    }
    if (center) {
      const leftX = center.x - mouse.x, topY = center.y - mouse.y;
      setStyle(`rotateX(${-topY / 30}deg) rotateY(${leftX / 30}deg) scale3d(1.025, 1.025, 1.025)`)
    }
  }
  const mouseLeave = () => {
    setRef(null)
    setCenter(null)
    setStyle("rotate3d(0, 0, 0, 0)")
  }

  
  const cardRowVariants = {
    hidden: {
      background : "#0000"
    },
    hover: (i) => ({
      gradientTranform: i % 2 == 1 ?  "rotate(-90deg)" : "rotate(90deg)"
    })
  }

  const cardTextVariants = {
    hidden: (i) => {
      // return { x: "0rem" };
      return i % 2 == 0 ? { x: "100rem" } : { x: "-100rem" };
    },
    hover: {
      x: 0,
      transition: {
        duration: 0.2,
        type: "easeIn"
      }
    },
  }

  return <div className="page work-page">
    <motion.div className="cards-container" initial={{gradientUnits: "#000, #0000"}}>
      {
        arr.map((values, i) => (
          <motion.div className={`card-row card-row-${i + 1}`} key={i} whileHover="hover" initial="hidden" variants={cardRowVariants} custom={i}>
            <div className="card-wrapper" onMouseEnter={mouseEnter} onMouseMove={mouseMove} onMouseLeave={mouseLeave} >
              <div className="card-container" style={{ transform: style }} ref={ref}>
                <div className="card">
                  <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                  <span className="image-mask" style={{
                    background: i % 2 == 0 ? "linear-gradient(90deg, #0000, #0000, #0000, #0006, #000)" : "linear-gradient(-90deg, #0000, #0000, #0000, #0006, #000)"
                  }}></span>
                </div>
                <h1 className="card-heading" style={i % 2 == 0 ? {right: "4.5rem"} : {left: "7rem"}}>The <br /> card <br /> heading</h1>
              </div>
            </div>
            <motion.div className="card-text-container">
              <motion.div className="card-text" variants={cardTextVariants} custom={i}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, optio. Blanditiis at voluptatum alias doloribus, eum repellendus consectetur ad omnis temporibus unde, cum, quos animi possimus ducimus. Rerum harum, beatae debitis ut repellendus quam modi doloribus omnis culpa ex impedit nihil ullam ab fuga obcaecati, perspiciatis odit soluta quo. Possimus.
              </motion.div>
            </motion.div>
          </motion.div>
        ))
      }      
    </motion.div>
  </div>
};

export default Work;
