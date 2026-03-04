"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/shared/motion/FadeIn";

export function HeroSection() {
  return (
    <section className="relative pt-[calc(var(--page-pt)+40px)] pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <FadeIn viewport={false} delay={0} duration={0.8} y={30} className="text-center">
        {/* Availability badge */}
        <FadeIn viewport={false} delay={0.2} scale={0.9} y={0}>
          <div className="inline-flex items-center gap-2 border border-border-light px-4 py-2 mb-10">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-10" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-black" />
            </span>
            <span className="font-prada text-[9px] text-text-muted tracking-[0.2em] uppercase">
              Now available across Bali
            </span>
          </div>
        </FadeIn>

        <h1 className="font-prada text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-light leading-none tracking-tight text-black mb-12">
          WORKSPACE
          <br />
          <span className="font-prada opacity-30">COLLECTION</span>
        </h1>

        <p className="mt-12 text-[10px] sm:text-[11px] text-text-secondary max-w-xl mx-auto leading-loose font-prada tracking-[0.25em] uppercase">
          Curated premium office equipment for the modern digital nomad.{" "}
          Visual design meets functional excellence.
        </p>

        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/builder">
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="px-16 py-5 bg-black text-white font-prada text-[11px] tracking-[0.4em] hover:bg-zinc-800 transition-all cursor-pointer font-bold"
            >
              START BUILDING
            </motion.button>
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
