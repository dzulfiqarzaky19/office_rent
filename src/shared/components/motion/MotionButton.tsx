"use client";

import { forwardRef } from "react";
import { HTMLMotionProps, motion } from "framer-motion";

export const MotionButton = forwardRef<
  HTMLButtonElement,
  HTMLMotionProps<"button">
>((props, ref) => {
  return (
    <motion.button
      ref={ref}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      {...props}
    />
  );
});
MotionButton.displayName = "MotionButton";
