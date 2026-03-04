"use client";

import { HTMLMotionProps, motion } from "framer-motion";

export const ExpandCollapse = (props: HTMLMotionProps<"div">) => {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      {...props}
    />
  );
};
