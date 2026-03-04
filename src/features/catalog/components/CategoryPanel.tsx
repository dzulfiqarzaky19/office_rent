"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { desks, chairs, accessories } from "../data/products";
import { useCatalogStore } from "../store/useCatalogStore";
import { ProductCard } from "./ProductCard";
import { PopLayoutItem } from "@/shared/components/motion/PopLayoutItem";
import { ActiveTabUnderline } from "@/shared/components/motion/ActiveTabUnderline";

type Tab = "desks" | "chairs" | "accessories";
const tabs: { id: Tab; label: string }[] = [
  { id: "desks", label: "DESKS" },
  { id: "chairs", label: "CHAIRS" },
  { id: "accessories", label: "ACCESSORIES" },
];

export const CategoryPanel = () => {
  const [activeTab, setActiveTab] = useState<Tab>("desks");
  const selectedDesk = useCatalogStore((s) => s.selectedDesk);
  const selectedChair = useCatalogStore((s) => s.selectedChair);
  const selectedAccessories = useCatalogStore((s) => s.accessories);
  const rentalPeriod = useCatalogStore((s) => s.rentalPeriod);
  const selectDesk = useCatalogStore((s) => s.selectDesk);
  const selectChair = useCatalogStore((s) => s.selectChair);
  const toggleAccessory = useCatalogStore((s) => s.toggleAccessory);

  return (
    <div className="flex flex-col h-full min-h-0 bg-white">
      <div className="flex border-b border-border-light mb-6 shrink-0">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative flex-1 py-3 px-1 text-[10px] font-prada tracking-[0.2em] transition-all duration-200 cursor-pointer ${
              activeTab === tab.id
                ? "text-black"
                : "text-text-muted hover:text-black"
            }`}
          >
            {activeTab === tab.id && <ActiveTabUnderline />}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto pr-1 pb-4">
        <AnimatePresence mode="wait">
          {activeTab === "desks" && (
            <PopLayoutItem key="desks" className="space-y-4">
              {desks.map((desk) => (
                <ProductCard
                  key={desk.id}
                  product={desk}
                  isSelected={selectedDesk?.id === desk.id}
                  onSelect={() => selectDesk(desk)}
                  rentalPeriod={rentalPeriod}
                />
              ))}
            </PopLayoutItem>
          )}
          {activeTab === "chairs" && (
            <PopLayoutItem key="chairs" className="space-y-4">
              {chairs.map((chair) => (
                <ProductCard
                  key={chair.id}
                  product={chair}
                  isSelected={selectedChair?.id === chair.id}
                  onSelect={() => selectChair(chair)}
                  rentalPeriod={rentalPeriod}
                />
              ))}
            </PopLayoutItem>
          )}
          {activeTab === "accessories" && (
            <PopLayoutItem key="accessories" className="space-y-4">
              {accessories.map((acc) => (
                <ProductCard
                  key={acc.id}
                  product={acc}
                  isSelected={selectedAccessories.some((a) => a.id === acc.id)}
                  onSelect={() => toggleAccessory(acc)}
                  rentalPeriod={rentalPeriod}
                />
              ))}
            </PopLayoutItem>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
