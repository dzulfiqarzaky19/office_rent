"use client";

import { useCatalogStore } from "../../store/useCatalogStore";

export const SummaryPricingToggle = () => {
  const rentalPeriod = useCatalogStore((s) => s.rentalPeriod);
  const setRentalPeriod = useCatalogStore((s) => s.setRentalPeriod);

  return (
    <div className="flex border border-border-light mb-8 shrink-0 w-full">
      <button
        onClick={() => setRentalPeriod("weekly")}
        className={`flex-1 py-3 text-[10px] font-prada tracking-widest transition-all duration-200 cursor-pointer ${
          rentalPeriod === "weekly"
            ? "bg-black text-white"
            : "text-text-muted hover:text-black"
        }`}
      >
        WEEKLY
      </button>
      <button
        onClick={() => setRentalPeriod("monthly")}
        className={`flex-1 py-3 text-[10px] font-prada tracking-widest transition-all duration-200 cursor-pointer border-l border-border-light ${
          rentalPeriod === "monthly"
            ? "bg-black text-white"
            : "text-text-muted hover:text-black"
        }`}
      >
        MONTHLY
      </button>
    </div>
  );
};
