"use client";

/**
 * FadeIn — a "use client" slot wrapper.
 *
 * Next.js RSC optimization: by isolating the motion boundary here,
 * the CHILDREN can remain server-rendered (RSC payload). Only the
 * wrapping <motion.div> is a client component, so no JS is shipped
 * for the content itself.
 *
 * Usage:
 *   <FadeIn delay={0.2} y={20}>
 *     <ServerComponent />   ← stays a server component
 *   </FadeIn>
 */
import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  scale?: number;
  once?: boolean;
  viewport?: boolean; // true = whileInView, false = on mount
  className?: string;
}

const makeVariants = (y: number, x: number, scale: number, duration: number): Variants => ({
  hidden: { opacity: 0, y, x, scale },
  visible: { opacity: 1, y: 0, x: 0, scale: 1, transition: { duration, ease: "easeOut" } },
});

export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  y = 20,
  x = 0,
  scale = 1,
  once = true,
  viewport = true,
  className,
}: FadeInProps) {
  const variants = makeVariants(y, x, scale, duration);
  const animProps = viewport
    ? { initial: "hidden", whileInView: "visible", viewport: { once } }
    : { initial: "hidden", animate: "visible" };

  return (
    <motion.div
      variants={variants}
      {...animProps}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
