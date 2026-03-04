"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/shared/motion/FadeIn";

export function FinalCTA() {
  return (
    <section className="py-48 px-4 sm:px-6 lg:px-8 bg-black text-white overflow-hidden relative">
      {/* Decorative rings */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white rounded-full" />
      </div>

      <FadeIn scale={0.98} y={0} duration={0.7} className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="font-prada text-4xl sm:text-5xl md:text-7xl font-light mb-16 tracking-tight leading-none uppercase">
          DESIGN YOUR
          <br />
          <span className="opacity-30 text-white">COLLECTION</span>
        </h2>

        <Link href="/builder">
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="px-20 py-6 bg-white text-black font-prada text-[11px] tracking-[0.5em] hover:bg-zinc-100 transition-all cursor-pointer font-bold"
          >
            ENTER STUDIO
          </motion.button>
        </Link>
      </FadeIn>
    </section>
  );
}
