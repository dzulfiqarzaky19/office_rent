"use client";

import { useCatalogStore } from "../../store/useCatalogStore";

export const SummaryHeader = () => {
  const itemCount = useCatalogStore((s) => s.itemCount);

  return (
    <div className="flex items-center justify-between mb-8 shrink-0">
      <h2 className="font-prada text-[11px] font-bold tracking-[0.2em] text-black">
        YOUR SETUP
      </h2>
      <span className="font-prada text-[9px] text-text-muted tracking-widest uppercase border border-border-light px-2 py-1">
        {itemCount} ITEMS
      </span>
    </div>
  );
};
