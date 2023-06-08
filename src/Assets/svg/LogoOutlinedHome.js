import React from "react";
import { motion } from "framer-motion";

const LogoOutlinedHome = () => {
  const logoOutlinedVariants = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,
      transition: {
        duration: 5,
        type: "spring",
        bounce: 0,
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.svg
      className="logo-outlined-svg"
      style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        opacity: 1,
        height: "100%",
        width: "70%",
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="210mm"
      height="297mm"
      version="1.1"
      viewBox="0 0 210 297"
    >
      <g>
        <motion.path
          variants={logoOutlinedVariants}
          initial="hidden"
          animate="visible"
          style={{ lineHeight: "1.25", InkscapeFontSpecification: "Magneto" }}
          fill="none"
          fillOpacity="1"
          stroke="#F0F0F0"
          strokeDasharray="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="5"
          strokeOpacity=".8"
          strokeWidth="7"
          d="M209.585 96.992L107.636 65.053V54.83c0-9.768-2.896-18.693-8.692-26.774-7.48-10.33-19.026-18.042-34.639-23.137A95.985 95.985 0 0034.435.175C22.47.175 13.401 2.3 7.232 6.552 2.372 9.925-.061 14.072-.061 18.99c0 16.9 28.422 34.205 85.262 51.913v16.18L12.28 77.177v18.867l72.92 9.909v23.752l-50.482-6.73c-3.086-.385-5.845-.578-8.275-.578-9.441 0-14.163 2.599-14.163 7.8v20.29c0 2.53 1.402 4.902 4.207 7.116 3.56 2.866 8.89 4.79 15.98 5.78-3.445.913-6.578 2.074-9.39 3.495-8.88 4.463-13.229 10.84-13.042 19.132.089 7.132 4.395 12.93 12.903 17.392 8.882 4.673 21.127 7.256 36.74 7.748 4.02.141 8.742-.158 14.165-.896 5.516-.738 9.301-1.686 11.358-2.846v25.44l-72.921-9.682v7.854c0 2.67 1.355 4.953 4.067 6.85 2.056 1.441 6.451 3.55 13.182 6.325 26.738 11.279 42.35 17.727 46.837 19.343l-39.124-5.43c-3.646-.491-7.011-.737-10.096-.737-9.91 0-14.866 2.407-14.866 7.22v20.714c0 2.529 1.402 4.9 4.207 7.115 3.926 3.161 10.004 5.182 18.23 6.061v-21.661l37.863 5.164c4.207.562 7.899.844 11.077.844 10.003 0 15.006-2.443 15.006-7.327v-4.004l33.656 12.226v-12.121l-55.672-21.03 104.752 14.02v-18.974l-73.763-9.793v-48.181c0-7.73-4.252-13.914-12.758-18.552-8.041-4.357-19.119-6.992-33.236-7.905a108.806 108.806 0 00-7.572-.264c-7.243 0-13.694.636-19.352 1.906v-21.3l146.681 19.658v-18.658l-73.763-9.833v-23.897l101.95 13.598zm-23.279 4.006l-78.67-11.332V77.913zM85.201 57.938c-11.593-3.092-23.046-7.501-34.358-13.228-13.089-6.536-19.632-11.982-19.632-16.339 0-3.162 4.02-4.743 12.06-4.743 9.443 0 18.371 2.196 26.785 6.588C80.153 35.522 85.2 44.762 85.2 57.938zm0 125.594v12.07l-53.148-7.01a9.6 9.6 0 01-.141-1.74c0-5.621 4.02-8.433 12.06-8.433 1.683 0 3.459.123 5.33.37z"
          fontFamily="Magneto"
          fontSize="70.556"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          letterSpacing="0"
          opacity="0.75"
          paintOrder="stroke markers fill"
          wordSpacing="0"
        ></motion.path>
      </g>
    </motion.svg>
  );
};

export default LogoOutlinedHome;
