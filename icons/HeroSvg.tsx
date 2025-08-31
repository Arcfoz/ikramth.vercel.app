"use client";

import { motion } from "framer-motion";

export default function HeroSvg() {
  return (
    <motion.div
      className="example"
      style={{
        border: "none",
        padding: "0",
        marginLeft: "auto",
        marginRight: "auto",
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="lgl:h-[450px] h-full w-full lg:w-[450px]"
      >
        <defs>
          <linearGradient
            id="paint0_linear_104_44"
            x1="0"
            y1="0"
            x2="200"
            y2="200"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#8774a3" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8774a3" stopOpacity="0" />
          </linearGradient>
          <clipPath id="clip0_104_44">
            <rect width="200" height="200" fill="white" />
          </clipPath>
        </defs>
        <g clipPath="url(#clip0_104_44)">
          <motion.path
            fill="url(#paint0_linear_104_44)"
            stroke="rgb(203,172,249)"
            strokeWidth="1"
            d="M120 0H80V51.7157L43.4315 15.1472L15.1472 43.4314L51.7158 80H0V120H51.7157L15.1472 156.568L43.4315 184.853L80 148.284V200H120V148.284L156.569 184.853L184.853 156.569L148.284 120H200V80H148.284L184.853 43.4314L156.569 15.1471L120 51.7157V0Z"
          />
          <motion.path
            initial={{ pathLength: 0, pathSpacing: 0.2, pathOffset: 0.5 }}
            animate={{ pathLength: 0.2, pathSpacing: 0, pathOffset: 0 }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 1,
            }}
            fill="none"
            stroke="rgb(103, 85, 130)"
            strokeWidth="1"
            d="M120 0H80V51.7157L43.4315 15.1472L15.1472 43.4314L51.7158 80H0V120H51.7157L15.1472 156.568L43.4315 184.853L80 148.284V200H120V148.284L156.569 184.853L184.853 156.569L148.284 120H200V80H148.284L184.853 43.4314L156.569 15.1471L120 51.7157V0Z"
          />
        </g>
      </motion.svg>
    </motion.div>
  );
}
