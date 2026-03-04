"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { desks, chairs, accessories } from "../data/products";
import { useCatalogStore } from "../store/useCatalogStore";
import ProductCard from "./ProductCard";

type Tab = "desks" | "chairs" | "accessories";
const tabs: { id: Tab; label: string }[] = [
  { id: "desks", label: "DESKS" },
  { id: "chairs", label: "CHAIRS" },
  { id: "accessories", label: "ACCESSORIES" },
];

export default function CategoryPanel() {
  const [activeTab, setActiveTab] = useState<Tab>("desks");
  const selectedDesk = useCatalogStore((s) => s.selectedDesk);
  const selectedChair = useCatalogStore((s) => s.selectedChair);
  const rentalPeriod = useCatalogStore((s) => s.rentalPeriod);
  const selectDesk = useCatalogStore((s) => s.selectDesk);
  const selectChair = useCatalogStore((s) => s.selectChair);
  const hasAccessory = useCatalogStore((s) => s.hasAccessory);
  const toggleAccessory = useCatalogStore((s) => s.toggleAccessory);

  return (
    <div className="flex flex-col h-full min-h-0 bg-white">
      <div className="flex border-b border-border-light mb-6 shrink-0">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative flex-1 py-3 px-1 text-[10px] font-prada tracking-[0.2em] transition-all duration-200 cursor-pointer ${
              activeTab === tab.id ? "text-black" : "text-text-muted hover:text-black"
            }`}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTabUnderline"
                className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-black"
                transition={{ type: "spring", duration: 0.5, bounce: 0 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto pr-1">
        <AnimatePresence mode="wait">
          {activeTab === "desks" && (
            <motion.div key="desks" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="space-y-4">
              {desks.map((desk) => (
                <ProductCard key={desk.id} product={desk} isSelected={selectedDesk?.id === desk.id} onSelect={() => selectDesk(desk)} rentalPeriod={rentalPeriod} />
              ))}
            </motion.div>
          )}
          {activeTab === "chairs" && (
            <motion.div key="chairs" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="space-y-4">
              {chairs.map((chair) => (
                <ProductCard key={chair.id} product={chair} isSelected={selectedChair?.id === chair.id} onSelect={() => selectChair(chair)} rentalPeriod={rentalPeriod} />
              ))}
            </motion.div>
          )}
          {activeTab === "accessories" && (
            <motion.div key="accessories" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="space-y-4">
              {accessories.map((acc) => (
                <ProductCard key={acc.id} product={acc} isSelected={hasAccessory(acc.id)} onSelect={() => toggleAccessory(acc)} rentalPeriod={rentalPeriod} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
