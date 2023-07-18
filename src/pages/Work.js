import React, { createRef, useEffect, useRef, useState } from "react";
import "./Work.scss"
import { motion, animate } from 'framer-motion'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import NetworkWifi3BarIcon from '@mui/icons-material/NetworkWifi3Bar';

const Work = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [center, setCenter] = useState(null)
  const [ref, setRef] = useState(null)
  const [style, setStyle] = useState("rotate3d(0, 0, 0, 0)")
  const [hoveringRow, setHoveringRow] = useState(null)
  const screen = {width: window.innerWidth, height: window.innerHeight}

  // console.log(mouse)
  const mouseEnter = (e) => {
    setRef(createRef())
  }
  
  const mouseMove = (e) => {
    const mouse = { x: e.clientX, y: e.clientY }
    if(ref && ref.current){
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

  

  const cardTextVariants = {
    hidden: (i) => {
      if (screen.width <= 420)
        return { y : "-100%"}
      if (screen.width <= 1169)
        return { x: "-100%" };
      return i % 2 == 0 ? { x: "30rem" } : { x: "-30rem" };
    },
    hover: () => {
      if (screen.width <= 420)
        return {
          y: 0,
          transition: {
            duration: 0.2,
            type: "easeIn"
          }
        }
      return {
        x: 0,
        transition: {
          duration: 0.2,
          type: "easeIn"
        }
      }
    },
  }
  return <div className="page work-page">
    
    <VerticalTimeline>
      {
        arr.map((values, i) => (
          <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="2011 - present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  icon={<NetworkWifi3BarIcon />}
            >
                <motion.div className={`card-row card-row-${i + 1} ${i % 2 == 0 ? "even" : "odd"}`} key={i} whileHover="hover" initial="hidden" custom={i} onHoverStart={() => setHoveringRow(i)} onHoverEnd={() => setHoveringRow(null)}>
                  <div className={`card-wrapper`} onMouseEnter={mouseEnter} onMouseMove={mouseMove} onMouseLeave={mouseLeave}>
                    <div className="card-container" style={hoveringRow == i ? { transform: style }: {transform: "rotate3d(0, 0, 0, 0)"}} ref={hoveringRow == i ? ref : null} >
                      <div className="card">
                        <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
                        <span className={`image-mask ${i % 2 == 0 ? "even" : "odd"}`}></span>
                      </div>
                      <h1 className={`card-heading ${i % 2 == 0 ? "even" : "odd"}`}>The card heading</h1>
                    </div>
                  </div>
                  <motion.div className={`card-text-container ${i % 2 == 0 ? "even" : "odd"} ${hoveringRow == i ? "hovering" : "nonhovering"}`}>
                    <motion.div className={`card-text ${i % 2 == 0 ? "even" : "odd"}`} variants={cardTextVariants} custom={i}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, optio. Blanditiis at voluptatum alias doloribus, eum repellendus consectetur ad omnis temporibus unde, cum, quos animi possimus ducimus. Rerum harum, beatae 
                    </motion.div>
                  </motion.div>
              </motion.div>
            </VerticalTimelineElement>
        ))
      }      
    </VerticalTimeline>
  </div>
};

export default Work;
