"use client";

import { motion, HTMLMotionProps } from "framer-motion";

export const ActiveTabUnderline = (props: HTMLMotionProps<"div">) => {
  return (
    <motion.div
      layoutId="activeTabUnderline"
      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-black"
      transition={{ type: "spring", duration: 0.5, bounce: 0 }}
      {...props}
    />
  );
};
