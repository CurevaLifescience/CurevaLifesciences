// components/ui/animated-text.jsx
"use client";
import { motion } from "framer-motion";

export const AnimatedText = ({ text }) => {
  return (
    <motion.p className=" text-lg text-gray-600 font-sans">
      {text.split(" ").map((word, index) => (
        <motion.span
          key={`${word}-${index}`} // ✅ Unique key
          initial={{
            filter: "blur(10px)",
            opacity: 0,
            y: 5,
          }}
          animate={{
            filter: "blur(0px)",
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
            delay: 0.02 * index,
          }}
          className="inline-block"
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.p>
  );
};
