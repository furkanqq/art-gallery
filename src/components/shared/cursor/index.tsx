import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export const Cursor = (props: any) => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = {
    damping: 35,
    stiffness: 700,
    mass: 1,
  };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: any) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <motion.div
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
      className="fixed z-[99999] w-0 h-0 bg-orange-300"
    >
      {!props.hideCursor == true ? (
        <motion.div
          layoutId="cursor"
          className="absolute w-4 h-4 -top-4 -right-6 bg-orange-300 pointer-events-none rounded-full"
        ></motion.div>
      ) : null}
    </motion.div>
  );
};



