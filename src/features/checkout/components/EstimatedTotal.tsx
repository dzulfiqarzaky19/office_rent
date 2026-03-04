import { MotionButton } from "@/shared/components/motion/MotionButton";
import { FadeIn } from "@/shared/motion/FadeIn";
import { CHECKOUT_FEATURES } from "../constants";

interface EstimatedTotalProps {
  rentalPeriod: "weekly" | "monthly";
  setRentalPeriod: (p: "weekly" | "monthly") => void;
  monthlySavings: number;
  totalPrice: number;
  onSubmit: (e: React.FormEvent) => void;
}

export const EstimatedTotal = ({ 
  rentalPeriod, 
  setRentalPeriod, 
  monthlySavings, 
  totalPrice,
}: EstimatedTotalProps) =>  (
  <FadeIn delay={0} duration={0.6} x={20} y={0} viewport={true}>
    <div className="border border-black p-8 bg-white">
      <h2 className="font-prada text-xs font-bold tracking-[0.2em] text-black mb-10">
        ESTIMATED TOTAL
      </h2>

      <div className="flex border border-border-light mb-10">
        <button
          onClick={() => setRentalPeriod("weekly")}
          className={`flex-1 py-3 text-[10px] font-prada tracking-widest transition-all duration-200 cursor-pointer ${
            rentalPeriod === "weekly" ? "bg-black text-white" : "text-text-muted hover:text-black"
          }`}
        >
          WEEKLY
        </button>
        <button
          onClick={() => setRentalPeriod("monthly")}
          className={`flex-1 py-3 text-[10px] font-prada tracking-widest transition-all duration-200 cursor-pointer border-l border-border-light ${
            rentalPeriod === "monthly" ? "bg-black text-white" : "text-text-muted hover:text-black"
          }`}
        >
          MONTHLY
        </button>
      </div>

      <div className="space-y-6 mb-10">
        {rentalPeriod === "monthly" && monthlySavings > 0 && (
          <div className="flex justify-between border border-border-light p-3">
            <span className="font-prada text-[9px] text-text-muted tracking-widest uppercase">SAVINGS</span>
            <span className="font-prada text-[10px] font-bold text-black tracking-tighter">
              -${monthlySavings}
            </span>
          </div>
        )}

        <div className="flex justify-between items-end pb-6 border-b border-border-light">
          <div>
            <p className="font-prada text-[11px] font-bold text-black tracking-tight">TOTAL</p>
            <p className="font-prada text-[8px] text-text-muted uppercase tracking-widest mt-1">INC. TAX & SETUP</p>
          </div>
          <div className="text-right">
            <p className="font-prada text-3xl font-light text-black tracking-tight leading-none">
              ${totalPrice}
            </p>
            <p className="font-prada text-[9px] text-text-muted uppercase tracking-widest mt-2 px-1">
              / {rentalPeriod === "weekly" ? "WEEK" : "MONTH"}
            </p>
          </div>
        </div>
      </div>

      <MotionButton
        type="submit"
        form="checkout-form"
        className="w-full py-5 bg-black text-white font-prada text-[11px] tracking-[0.3em] font-bold hidden lg:block cursor-pointer transition-colors hover:bg-zinc-800"
      >
        CONFIRM RENTAL
      </MotionButton>

      <div className="mt-10 space-y-4">
        {CHECKOUT_FEATURES.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
            <span className="font-prada text-[8px] text-text-muted tracking-widest uppercase">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  </FadeIn>
);
