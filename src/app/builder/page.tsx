"use client";

import { useState } from "react";
import Navbar from "@/shared/components/layout/Navbar";
import CategoryPanel from "@/features/catalog/components/CategoryPanel";
import WorkspaceScene from "@/features/workspace/components/WorkspaceScene";
import SummaryPanel from "@/features/catalog/components/SummaryPanel";
import { motion, AnimatePresence } from "framer-motion";
import { useCatalogStore } from "@/features/catalog/store/useCatalogStore";
import Link from "next/link";

export default function BuilderPage() {
  const [showMobileSummary, setShowMobileSummary] = useState(false);
  const itemCount = useCatalogStore((s) => s.itemCount);
  const totalPrice = useCatalogStore((s) => s.totalPrice);

  return (
    <main className="relative min-h-screen">
      <Navbar />

      <div className="pt-(--navbar-height) h-screen flex flex-col md:flex-row bg-white overflow-hidden">

        {/* Center: Live Preview Area */}
        <div className="flex-1 relative flex flex-col min-w-0 bg-[#f9f9f9]">
          <div className="absolute top-8 left-8 z-10">
            <h1 className="font-prada text-2xl font-light tracking-[0.2em] text-black">
              WORKSPACE <span className="opacity-40">STUDIO</span>
            </h1>
          </div>

          <div className="flex-1 flex items-center justify-center p-4">
            <div className="w-full max-w-[900px] aspect-4/3 bg-white border border-border-main overflow-hidden relative">
              <WorkspaceScene />
            </div>
          </div>

          {/* Floating Price Summary (Minimalist) */}
          <div className="absolute bottom-8 right-8 z-10 flex items-center gap-12">
             <div className="flex flex-col items-end">
                <span className="font-prada text-[10px] text-text-muted tracking-widest">TOTAL ESTIMATE</span>
                <span className="font-prada text-2xl font-bold text-black tracking-widest">
                  ${totalPrice}
                </span>
             </div>
             <Link href="/checkout">
                <button className="px-12 py-4 bg-black text-white font-prada text-[10px] tracking-[0.3em] hover:bg-zinc-800 transition-all cursor-pointer">
                  CONTINUE
                </button>
             </Link>
          </div>
        </div>

        {/* Right: Category/Product Selection Panel */}
        <aside className="w-full md:w-[450px] border-l border-border-main bg-white flex flex-col pt-8 h-full">
          <div className="px-6 mb-8">
            <h2 className="font-prada text-[11px] font-bold tracking-[0.2em] text-black mb-1">
              COLLECTION
            </h2>
            <p className="text-[9px] font-prada text-text-muted tracking-widest uppercase">
              Select items to add to your workspace
            </p>
          </div>
          
          <div className="flex-1 overflow-hidden px-6">
            <CategoryPanel />
          </div>
        </aside>

        {/* Mobile View Toggle/Summary (Simple Overlay) */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 z-40 bg-white border-t border-border-main flex items-center justify-between">
            <div className="flex flex-col">
                <span className="text-[10px] font-prada text-text-muted tracking-widest">{itemCount} ITEMS</span>
                <span className="font-prada text-lg font-bold">${totalPrice}</span>
            </div>
            <Link href="/checkout">
               <button className="px-8 py-3 bg-black text-white font-prada text-[10px] tracking-[0.2em]">CHECKOUT</button>
            </Link>
        </div>
      </div>

      {/* Mobile Summary Drawer */}
      <AnimatePresence>
        {showMobileSummary && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMobileSummary(false)}
              className="fixed inset-0 bg-black/60 z-50 lg:hidden"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border-main p-6 max-h-[80vh] overflow-y-auto lg:hidden"
            >
              <div className="w-12 h-1 bg-text-muted rounded-full mx-auto mb-4" />
              <button
                onClick={() => setShowMobileSummary(false)}
                className="absolute top-4 right-4 text-text-muted hover:text-foreground cursor-pointer"
              >
                ✕
              </button>
              <SummaryPanel />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
