"use client";

import { useCatalogStore } from "../../store/useCatalogStore";

interface SummaryBannerProps {
  onOpen: () => void;
}

export const SummaryBanner = ({ onOpen }: SummaryBannerProps) => {
  const itemCount = useCatalogStore((s) => s.itemCount);
  const totalPrice = useCatalogStore((s) => s.totalPrice);

  return (
    <div className="md:hidden shrink-0 w-full p-4 z-40 bg-white border-t border-border-main flex items-center justify-between">
      <div className="flex flex-col">
        <span className="text-[10px] font-prada text-text-muted tracking-widest">
          {itemCount} ITEMS
        </span>
        <span className="font-prada text-lg font-bold">${totalPrice}</span>
      </div>

      <button
        onClick={onOpen}
        className="px-8 py-3 bg-black text-white font-prada text-[10px] tracking-[0.2em]"
      >
        SUMMARY
      </button>
    </div>
  );
};
