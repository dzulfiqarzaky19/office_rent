"use client";

import { HTMLMotionProps, motion } from "framer-motion";

export const MotionButton = (props: HTMLMotionProps<"button">) => {
  return (
    <motion.button
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      {...props}
    />
  );
};
