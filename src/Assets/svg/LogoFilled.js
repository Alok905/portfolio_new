import React from "react";
import { motion } from "framer-motion";

const logoVariants = {
  hidden: {
    opacity: 0,
    scale: 0.3,
    rotate: "-100",
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    pathLength: 1,
    transition: {
      duration: 0.6,
      delay: 0.8,
    },
  },
};

const LogoFilled = ({setCursorScale}) => {
  return (
    <motion.svg
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      drag
      dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
      variants={logoVariants}
      initial="hidden"
      animate="visible"
      xmlns="http://www.w3.org/2000/svg"
      width="210mm"
      height="297mm"
      version="1.1"
      viewBox="0 0 210 297"
      onMouseEnter={() => setCursorScale(1.7)}
      onMouseLeave={() => setCursorScale(1)}
    >
      <g>
        <path
          style={{ lineHeight: "1.25", InkscapeFontSpecification: "Magneto" }}
          fill="gold"
          fillOpacity="1"
          stroke="gold"
          strokeDasharray="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="5"
          strokeOpacity="1"
          strokeWidth="0.419"
          d="M48.522 125.56l-10.177 72.985-7.131 1.183c-6.813 1.13-12.695 4.13-17.643 9.004-6.318 6.279-10.326 15.018-12.027 26.218a64.505 64.505 0 00.237 20.85c1.42 8.133 3.978 14.05 7.676 17.752 2.93 2.913 6.11 4.087 9.542 3.518 11.788-1.955 20.484-23.273 26.09-63.953l11.285-1.871 1.744 50.707 13.16-2.182-1.743-50.707 16.567-2.747 1.298 35.09c.096 2.141.29 4.039.578 5.69 1.12 6.417 3.494 9.326 7.121 8.724l14.153-2.346c1.765-.293 3.253-1.52 4.464-3.683 1.576-2.75 2.286-6.595 2.135-11.529 1.045 2.236 2.227 4.231 3.552 5.977 4.167 5.52 9.13 7.738 14.892 6.652 4.965-.885 8.497-4.482 10.6-10.78 2.205-6.578 2.553-15.2 1.043-25.867-.378-2.749-1.147-5.924-2.306-9.524-1.169-3.664-2.28-6.127-3.333-7.39l17.744-2.943 1.902 50.681 5.478-.908c1.862-.309 3.294-1.494 4.296-3.556.76-1.565 1.71-4.795 2.847-9.691 4.693-19.477 7.337-30.834 7.932-34.07l.857 27.219c.09 2.535.317 4.85.684 6.947 1.176 6.735 3.443 9.825 6.8 9.268l14.448-2.395c1.764-.293 3.252-1.52 4.463-3.682 1.74-3.034 2.427-7.4 2.064-13.092l-15.109 2.505-.891-26.331c-.108-2.924-.35-5.465-.727-7.626-1.187-6.799-3.484-9.916-6.89-9.351l-2.794.463 4.534-24.289-8.455 1.402-8.06 40.27-2.655-72.817-13.234 2.194 1.924 51.266-33.606 5.573c-5.392.894-9.2 4.499-11.426 10.816-2.084 5.97-2.607 13.804-1.569 23.504.177 1.735.415 3.46.715 5.177.86 4.923 2.069 9.233 3.626 12.932l-14.857 2.464-3.697-101.967-13.014 2.158 1.896 51.27-16.668 2.764-2.616-70.863zm5.557 15.36l1.434 54.779-8.198 1.359zm-18.034 73.697c-.78 8.236-2.497 16.53-5.149 24.881-3.005 9.652-6.027 14.729-9.066 15.233-2.206.365-3.785-2.184-4.74-7.648-1.12-6.418-.648-12.74 1.417-18.967 2.502-7.476 8.348-11.975 17.538-13.5zm87.602-14.525l8.418-1.396 1.418 36.933c-.332.119-.73.22-1.196.297-3.921.65-6.36-1.758-7.314-7.222a27.508 27.508 0 01-.374-3.664z"
          fontFamily="Magneto"
          fontSize="70.556"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          letterSpacing="0"
          opacity="1"
          paintOrder="stroke markers fill"
          wordSpacing="0"
        ></path>
      </g>
    </motion.svg>
  );
};

export default LogoFilled;
