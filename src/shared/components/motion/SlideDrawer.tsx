"use client";

import { HTMLMotionProps, motion } from "framer-motion";

export const SlideDrawer = (props: HTMLMotionProps<"div">) => {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "spring", damping: 25 }}
      {...props}
    />
  );
};
