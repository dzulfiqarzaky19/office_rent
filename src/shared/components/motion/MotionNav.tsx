"use client";

import { HTMLMotionProps, motion } from "framer-motion";

export const MotionNav = (props: HTMLMotionProps<"nav">) => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      {...props}
    />
  );
};
