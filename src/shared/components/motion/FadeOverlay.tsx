"use client";

import { HTMLMotionProps, motion } from "framer-motion";

export const FadeOverlay = (props: HTMLMotionProps<"div">) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      {...props}
    />
  );
};
