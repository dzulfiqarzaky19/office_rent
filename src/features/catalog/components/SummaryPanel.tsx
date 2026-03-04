"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useCatalogStore } from "../store/useCatalogStore";

export default function SummaryPanel() {
  const selectedDesk = useCatalogStore((s) => s.selectedDesk);
  const selectedChair = useCatalogStore((s) => s.selectedChair);
  const accessories = useCatalogStore((s) => s.accessories);
  const rentalPeriod = useCatalogStore((s) => s.rentalPeriod);
  const setRentalPeriod = useCatalogStore((s) => s.setRentalPeriod);
  const removeAccessory = useCatalogStore((s) => s.removeAccessory);
  const totalPrice = useCatalogStore((s) => s.totalPrice);
  const itemCount = useCatalogStore((s) => s.itemCount);
  const monthlySavings = useCatalogStore((s) => s.monthlySavings);

  return (
    <div className="flex flex-col h-full min-h-0 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 shrink-0">
        <h2 className="font-prada text-[11px] font-bold tracking-[0.2em] text-black">YOUR SETUP</h2>
        <span className="font-prada text-[9px] text-text-muted tracking-widest uppercase border border-border-light px-2 py-1">{itemCount} ITEMS</span>
      </div>

      {/* Pricing toggle */}
      <div className="flex border border-border-light mb-8 shrink-0 w-full">
        <button onClick={() => setRentalPeriod("weekly")} className={`flex-1 py-3 text-[10px] font-prada tracking-widest transition-all duration-200 cursor-pointer ${rentalPeriod === "weekly" ? "bg-black text-white" : "text-text-muted hover:text-black"}`}>WEEKLY</button>
        <button onClick={() => setRentalPeriod("monthly")} className={`flex-1 py-3 text-[10px] font-prada tracking-widest transition-all duration-200 cursor-pointer border-l border-border-light ${rentalPeriod === "monthly" ? "bg-black text-white" : "text-text-muted hover:text-black"}`}>MONTHLY</button>
      </div>

      {/* Items list */}
      <div className="flex-1 min-h-0 overflow-y-auto space-y-4 pr-1">
        <AnimatePresence mode="popLayout">
          {selectedDesk && (
            <motion.div key={selectedDesk.id} layout initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex items-center justify-between py-3 border-b border-border-light min-w-0 gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-12 h-12 bg-bg-offset border border-border-light shrink-0 overflow-hidden relative">
                  <Image src={selectedDesk.imageSrc} alt={selectedDesk.name} fill className="object-contain" />
                </div>
                <div className="min-w-0">
                  <p className="font-prada text-[10px] font-bold text-black tracking-widest truncate uppercase">{selectedDesk.name}</p>
                  <p className="font-prada text-[8px] text-text-muted tracking-widest uppercase mt-0.5">DESK</p>
                </div>
              </div>
              <span className="font-prada text-[10px] text-black tracking-tighter shrink-0">${rentalPeriod === "weekly" ? selectedDesk.weeklyPrice : selectedDesk.monthlyPrice}</span>
            </motion.div>
          )}
          {selectedChair && (
            <motion.div key={selectedChair.id} layout initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex items-center justify-between py-3 border-b border-border-light min-w-0 gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-12 h-12 bg-bg-offset border border-border-light shrink-0 overflow-hidden relative">
                  <Image src={selectedChair.imageSrc} alt={selectedChair.name} fill className="object-contain" />
                </div>
                <div className="min-w-0">
                  <p className="font-prada text-[10px] font-bold text-black tracking-widest truncate uppercase">{selectedChair.name}</p>
                  <p className="font-prada text-[8px] text-text-muted tracking-widest uppercase mt-0.5">CHAIR</p>
                </div>
              </div>
              <span className="font-prada text-[10px] text-black tracking-tighter shrink-0">${rentalPeriod === "weekly" ? selectedChair.weeklyPrice : selectedChair.monthlyPrice}</span>
            </motion.div>
          )}
          {accessories.map((acc) => (
            <motion.div key={acc.id} layout initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="group flex items-center justify-between py-3 border-b border-border-light min-w-0 gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-12 h-12 bg-bg-offset border border-border-light shrink-0 overflow-hidden relative">
                  <Image src={acc.imageSrc} alt={acc.name} fill className="object-contain" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-prada text-[10px] font-bold text-black tracking-widest truncate uppercase">{acc.name}</p>
                    <button onClick={() => removeAccessory(acc.id)} className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-text-muted hover:text-black cursor-pointer">✕</button>
                  </div>
                  <p className="font-prada text-[8px] text-text-muted tracking-widest uppercase mt-0.5">ACCESSORY</p>
                </div>
              </div>
              <span className="font-prada text-[10px] text-black tracking-tighter shrink-0">${rentalPeriod === "weekly" ? acc.weeklyPrice : acc.monthlyPrice}</span>
            </motion.div>
          ))}
        </AnimatePresence>
        {itemCount === 0 && (
          <div className="text-center py-12 border border-dashed border-border-light">
            <p className="font-prada text-[9px] text-text-muted tracking-[0.2em] uppercase">NO ITEMS SELECTED</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mt-8 pt-6 border-t border-black shrink-0">
        {rentalPeriod === "monthly" && monthlySavings > 0 && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="flex items-center justify-between mb-4 border border-border-light px-2 py-1">
            <span className="font-prada text-[8px] text-text-muted tracking-widest uppercase">MONTHLY SAVINGS</span>
            <span className="font-prada text-[10px] font-bold text-black">-${monthlySavings}</span>
          </motion.div>
        )}
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="font-prada text-[9px] text-text-muted tracking-widest uppercase mb-1">TOTAL ESTIMATE</p>
            <p className="font-prada text-3xl font-light text-black tracking-tight">
              ${totalPrice}
              <span className="text-[10px] text-text-muted font-normal tracking-widest uppercase ml-2">/ {rentalPeriod === "weekly" ? "WK" : "MO"}</span>
            </p>
          </div>
        </div>
        <Link href="/checkout" className="block">
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            disabled={itemCount === 0}
            className={`w-full py-4 font-prada text-[11px] tracking-[0.3em] font-bold transition-all cursor-pointer border ${
              itemCount > 0 ? "bg-black text-white border-black hover:bg-zinc-800" : "bg-white text-text-muted border-border-light cursor-not-allowed uppercase"
            }`}
          >
            {itemCount > 0 ? "CONTINUE TO CHECKOUT" : "SELECT ITEMS"}
          </motion.button>
        </Link>
        <p className="text-center font-prada text-[8px] text-text-muted tracking-widest mt-6 uppercase">Complimentary delivery & setup in Bali</p>
      </div>
    </div>
  );
}
