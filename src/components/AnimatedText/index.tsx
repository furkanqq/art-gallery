"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const AnimatedText = ({ text }: { text: string }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        transition: { delay: i * 0.015 },
      }));
    }
  }, [controls, inView]);

  return (
    <p
      className="text-center text-dirty_white font-bold text-lg px-12"
      ref={ref}
      style={{ flexWrap: "wrap", whiteSpace: "pre-wrap" }}
    >
      {text.split("").map((char: string, index: number) => (
        <motion.span
          key={index}
          custom={index}
          initial={{ opacity: 0.1 }}
          animate={controls}
        >
          {char}
        </motion.span>
      ))}
    </p>
  );
};
