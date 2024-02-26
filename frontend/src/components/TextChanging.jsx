import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const words = ["Developer", "Designer", "Creator"];

function TypingAnimation() {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWord((currentWord) => (currentWord + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[currentWord]}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {words[currentWord]}
        </motion.span>
      </AnimatePresence>{" "}
      is typing...
    </div>
  );
}

export default TypingAnimation;
