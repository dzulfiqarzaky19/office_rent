"use client";

import Link from "next/link";
import { useCatalogStore } from "../../store/useCatalogStore";
import { ExpandCollapse } from "@/shared/components/motion/ExpandCollapse";
import { MotionButton } from "@/shared/components/motion/MotionButton";

export const SummaryFooter = () => {
  const rentalPeriod = useCatalogStore((s) => s.rentalPeriod);
  const monthlySavings = useCatalogStore((s) => s.monthlySavings);
  const totalPrice = useCatalogStore((s) => s.totalPrice);
  const itemCount = useCatalogStore((s) => s.itemCount);

  return (
    <div className="mt-8 pt-6 border-t border-black shrink-0">
      {rentalPeriod === "monthly" && monthlySavings > 0 && (
        <ExpandCollapse className="flex items-center justify-between mb-4 border border-border-light px-2 py-1">
          <span className="font-prada text-[8px] text-text-muted tracking-widest uppercase">
            MONTHLY SAVINGS
          </span>
          <span className="font-prada text-[10px] font-bold text-black">
            -${monthlySavings}
          </span>
        </ExpandCollapse>
      )}
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="font-prada text-[9px] text-text-muted tracking-widest uppercase mb-1">
            TOTAL ESTIMATE
          </p>
          <p className="font-prada text-3xl font-light text-black tracking-tight">
            ${totalPrice}
            <span className="text-[10px] text-text-muted font-normal tracking-widest uppercase ml-2">
              / {rentalPeriod === "weekly" ? "WK" : "MO"}
            </span>
          </p>
        </div>
      </div>
      <Link href="/checkout" className="block">
        <MotionButton
          disabled={itemCount === 0}
          className={`w-full py-4 font-prada text-[11px] tracking-[0.3em] font-bold transition-all cursor-pointer border ${
            itemCount > 0
              ? "bg-black text-white border-black hover:bg-zinc-800"
              : "bg-white text-text-muted border-border-light cursor-not-allowed uppercase"
          }`}
        >
          {itemCount > 0 ? "CONTINUE TO CHECKOUT" : "SELECT ITEMS"}
        </MotionButton>
      </Link>
      <p className="text-center font-prada text-[8px] text-text-muted tracking-widest mt-6 uppercase">
        Complimentary delivery & setup in Bali
      </p>
    </div>
  );
};
