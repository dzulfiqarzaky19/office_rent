"use client";

import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useCatalogStore } from "../../store/useCatalogStore";
import { PopLayoutItem } from "@/shared/components/motion/PopLayoutItem";

export const SummaryItems = () => {
  const selectedDesk = useCatalogStore((s) => s.selectedDesk);
  const selectedChair = useCatalogStore((s) => s.selectedChair);
  const accessories = useCatalogStore((s) => s.accessories);
  const removeAccessory = useCatalogStore((s) => s.removeAccessory);
  const rentalPeriod = useCatalogStore((s) => s.rentalPeriod);
  const itemCount = useCatalogStore((s) => s.itemCount);

  const items = [
    ...(selectedDesk ? [{ ...selectedDesk, type: "DESK" as const }] : []),
    ...(selectedChair ? [{ ...selectedChair, type: "CHAIR" as const }] : []),
    ...accessories.map((acc) => ({
      ...acc,
      type: "ACCESSORY" as const,
      onRemove: () => removeAccessory(acc.id),
    })),
  ];

  return (
    <div className="flex-1 min-h-0 overflow-y-auto space-y-4 pr-1">
      <AnimatePresence mode="popLayout">
        {items.map((item) => (
          <PopLayoutItem
            key={item.id}
            className="group flex items-center justify-between py-3 border-b border-border-light min-w-0 gap-4"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-12 h-12 bg-bg-offset border border-border-light shrink-0 overflow-hidden relative">
                <Image
                  src={item.imageSrc}
                  alt={item.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <p className="font-prada text-[10px] font-bold text-black tracking-widest truncate uppercase">
                    {item.name}
                  </p>

                  {"onRemove" in item && item.onRemove && (
                    <button
                      onClick={item.onRemove}
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-text-muted hover:text-black cursor-pointer"
                    >
                      ✕
                    </button>
                  )}
                </div>
                <p className="font-prada text-[8px] text-text-muted tracking-widest uppercase mt-0.5">
                  {item.type}
                </p>
              </div>
            </div>
            <span className="font-prada text-[10px] text-black tracking-tighter shrink-0">
              $
              {rentalPeriod === "weekly" ? item.weeklyPrice : item.monthlyPrice}
            </span>
          </PopLayoutItem>
        ))}
      </AnimatePresence>
      {itemCount === 0 && (
        <div className="text-center py-12 border border-dashed border-border-light">
          <p className="font-prada text-[9px] text-text-muted tracking-[0.2em] uppercase">
            NO ITEMS SELECTED
          </p>
        </div>
      )}
    </div>
  );
};
