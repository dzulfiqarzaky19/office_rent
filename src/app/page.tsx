"use client";

import Navbar from "@/shared/components/layout/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    title: "COLLECT",
    desc: "Curate your desk, chair, and accessories in our minimalist builder",
  },
  {
    title: "PREVIEW",
    desc: "Visualize your workspace in a high-fidelity 3D studio environment",
  },
  {
    title: "RENT",
    desc: "Confirm your selection for complimentary delivery and setup in Bali",
  },
];

const testimonials = [
  {
    name: "SARAH K.",
    role: "UX DESIGNER",
    text: "Meticulously designed workspace rentals. The builder experience is unparalleled.",
  },
  {
    name: "MARCO T.",
    role: "DEVELOPER",
    text: "The aesthetic precision of the furniture perfectly complements my digital workflow.",
  },
  {
    name: "LISA M.",
    role: "FOUNDER",
    text: "Functional excellence meets minimalist design. Essential for the modern nomad.",
  },
];

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-[calc(var(--page-pt)+40px)] pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 border border-border-light px-4 py-2 mb-10"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-10"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-black"></span>
            </span>
            <span className="font-prada text-[9px] text-text-muted tracking-[0.2em] uppercase">
              Now available across Bali
            </span>
          </motion.div>

          <h1 className="font-prada text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-light leading-none tracking-tight text-black mb-12">
            WORKSPACE
            <br />
            <span className="font-prada opacity-30">COLLECTION</span>
          </h1>

          <p className="mt-12 text-[10px] sm:text-[11px] text-text-secondary max-w-xl mx-auto leading-loose font-prada tracking-[0.25em] uppercase">
            Curated premium office equipment for the modern digital nomad. 
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
        </motion.div>

        {/* Floating workspace preview mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-32 max-w-6xl mx-auto border border-border-main p-1"
        >
          <div className="bg-bg-offset p-6 sm:p-12 relative overflow-hidden">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-border-main"></div>
                <div className="w-2 h-2 rounded-full bg-border-main"></div>
                <div className="w-2 h-2 rounded-full bg-border-main"></div>
              </div>
              <span className="font-prada text-[9px] text-text-muted tracking-[0.2em] uppercase">
                WORKSPACE STUDIO PREVIEW
              </span>
            </div>
            
            <div className="relative aspect-21/9 w-full bg-white border border-border-light overflow-hidden">
               {/* Simplified Isometric Illustration */}
               <svg viewBox="0 0 800 340" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  {/* Floor */}
                  <path d="M0 240 L800 240 L800 340 L0 340 Z" fill="#f9f9f9" />
                  <line x1="0" y1="240" x2="800" y2="240" stroke="#eeeeee" strokeWidth="1" />
                  
                  {/* Desk - Minimalist Wood */}
                  <rect x="250" y="180" width="300" height="10" fill="#f5f5f5" stroke="#e5e5e5" />
                  <rect x="270" y="190" width="4" height="60" fill="#e5e5e5" />
                  <rect x="526" y="190" width="4" height="60" fill="#e5e5e5" />
                  
                  {/* Monitor */}
                  <rect x="350" y="100" width="100" height="60" rx="1" fill="#000000" />
                  <rect x="395" y="160" width="10" height="20" fill="#e5e5e5" />
                  <rect x="380" y="180" width="40" height="2" fill="#e5e5e5" />
                  
                  {/* Chair */}
                  <circle cx="400" cy="230" r="15" fill="#000000" />
                  <rect x="398" y="245" width="4" height="20" fill="#000000" />
                  
                  {/* Callouts */}
                  <g className="font-prada">
                    <line x1="450" y1="130" x2="520" y2="100" stroke="#000000" strokeWidth="0.5" strokeDasharray="2,2" />
                    <text x="530" y="103" className="text-[10px] fill-black tracking-widest font-bold">STUDIO DISPLAY</text>
                    
                    <line x1="415" y1="230" x2="480" y2="210" stroke="#000000" strokeWidth="0.5" strokeDasharray="2,2" />
                    <text x="490" y="213" className="text-[10px] fill-black tracking-widest font-bold">TASK CHAIR</text>
                  </g>
               </svg>
            </div>
          </div>
        </motion.div>
      </section>

      {/* How it works */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border-main">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div>
             <span className="font-prada text-[10px] text-text-muted tracking-[0.4em] uppercase mb-4 block">DESIGN DIRECTION</span>
             <h2 className="font-prada text-3xl sm:text-4xl font-light tracking-tight text-black uppercase">
               THE COLLECTION PROCESS
             </h2>
          </div>
          <p className="font-prada text-[9px] text-text-muted tracking-[0.2em] max-w-xs uppercase leading-relaxed">
            A seamless transition from digital curation to physical workspace implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="font-prada text-[11px] text-black mb-8 pb-4 border-b border-border-light tracking-[0.3em] font-bold">
                0{i + 1}
              </div>
              <h3 className="font-prada text-sm font-bold mb-6 tracking-[0.3em] text-black">
                {step.title}
              </h3>
              <p className="font-prada text-[10px] text-text-secondary leading-loose tracking-[0.15em] uppercase">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border-main">
         <div className="mb-24">
            <span className="font-prada text-[10px] text-text-muted tracking-[0.4em] uppercase mb-4 block">VOICE</span>
            <h2 className="font-prada text-3xl sm:text-4xl font-light tracking-tight text-black uppercase">
               CLIENT ARCHIVE
            </h2>
         </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="font-prada text-[11px] text-black mb-12 leading-loose tracking-[0.1em] uppercase">
                &quot;{t.text}&quot;
              </p>
              <div className="flex flex-col gap-2 pt-8 border-t border-border-light">
                <p className="font-prada text-[10px] font-bold tracking-[0.3em] text-black">{t.name}</p>
                <p className="font-prada text-[9px] text-text-muted tracking-[0.2em]">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-48 px-4 sm:px-6 lg:px-8 bg-black text-white overflow-hidden relative">
         <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white rounded-full"></div>
         </div>
         
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
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
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-4 border-t border-border-main bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-16">
          <div className="flex flex-col gap-6">
            <span className="font-prada text-[12px] text-black tracking-[0.4em] font-bold">
              MONIS.RENT
            </span>
            <p className="font-prada text-[9px] text-text-muted tracking-[0.2em] leading-relaxed max-w-[200px] uppercase">
               PREMIUM WORKSPACE RENTALS FOR THE MODERN DIGITAL ERA.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-16">
             <div className="flex flex-col gap-4">
                <span className="font-prada text-[10px] text-black font-bold tracking-[0.2em]">PLATFORM</span>
                <Link href="/" className="font-prada text-[9px] text-text-muted hover:text-black tracking-[0.2em] transition-colors">COLLECTION</Link>
                <Link href="/builder" className="font-prada text-[9px] text-text-muted hover:text-black tracking-[0.2em] transition-colors">STUDIO</Link>
             </div>
             <div className="flex flex-col gap-4">
                <span className="font-prada text-[10px] text-black font-bold tracking-[0.2em]">COMPANY</span>
                <a href="#" className="font-prada text-[9px] text-text-muted hover:text-black tracking-[0.2em] transition-colors">ABOUT</a>
                <a href="#" className="font-prada text-[9px] text-text-muted hover:text-black tracking-[0.2em] transition-colors">CONTACT</a>
             </div>
             <div className="flex flex-col gap-4">
                <span className="font-prada text-[10px] text-black font-bold tracking-[0.2em]">SUPPORT</span>
                <a href="#" className="font-prada text-[9px] text-text-muted hover:text-black tracking-[0.2em] transition-colors">HELP</a>
                <a href="#" className="font-prada text-[9px] text-text-muted hover:text-black tracking-[0.2em] transition-colors">T&C</a>
             </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-24 mt-24 border-t border-border-light flex justify-between items-center">
           <span className="font-prada text-[8px] text-text-muted tracking-widest">© 2024 MONIS.RENT</span>
           <span className="font-prada text-[8px] text-text-muted tracking-[0.2em]">BALI, INDONESIA</span>
        </div>
      </footer>
    </main>
  );
}
