"use client";

import { forwardRef } from "react";
import { HTMLMotionProps, motion } from "framer-motion";

export const PopLayoutItem = forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  (props, ref) => {
    return (
      <motion.div
        ref={ref}
        layout
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        {...props}
      />
    );
  },
);
PopLayoutItem.displayName = "PopLayoutItem";
