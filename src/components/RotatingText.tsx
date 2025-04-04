"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const words = ["Tour Operators", "Travel Agencies", "Wholesalers", "OTAs"];

export default function RotatingText() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const onHover = () => setPaused(true);
  const onLeave = () => setPaused(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [paused]);

  const letters = words[index].split("");

  return (
    <div
      className="text-h-purple-800 inline-block min-w-[12ch]"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
            hidden: {},
            exit: {
              transition: {
                staggerChildren: 0.02,
                staggerDirection: -1,
              },
            },
          }}
          className="inline-flex"
        >
          {letters.map((letter, i) => (
            <motion.span
              key={`${letter}-${i}`}
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: 20 },
              }}
              transition={{
                duration: 0.3,
                ease: "circInOut",
                type: "spring",
                bounce: 0.5,
                delay: i * 0.05,
              }}
              className="inline-block"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
