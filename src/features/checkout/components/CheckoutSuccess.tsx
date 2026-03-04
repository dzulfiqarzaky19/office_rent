import Link from "next/link";
import { FadeIn } from "@/shared/motion/FadeIn";
import { MotionButton } from "@/shared/components/motion/MotionButton";

interface CheckoutSuccessProps {
  email: string;
  itemCount: number;
  rentalPeriod: "weekly" | "monthly";
  totalPrice: number;
}

export const CheckoutSuccess = ({ email, itemCount, rentalPeriod, totalPrice }: CheckoutSuccessProps) => {
  return (
    <div className="pt-[calc(var(--page-pt)+40px)] pb-12 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto text-center relative z-10">
      <FadeIn y={20} duration={0.6} viewport={true}>
        <div className="border border-border-main p-10 sm:p-16 bg-white shadow-sm">
          <h1 className="font-prada text-3xl font-light mb-6 tracking-tight text-black">
            THANK YOU
          </h1>
          <p className="font-prada text-[10px] text-text-secondary mb-2 tracking-[0.2em] uppercase">
            Your rental request has been received.
          </p>
          <p className="font-prada text-[10px] text-text-secondary mb-12 tracking-[0.2em] uppercase">
            Our team will contact you at <span className="text-black font-bold">{email}</span> shortly.
          </p>

          <div className="border border-border-light p-6 mb-12">
            <div className="flex items-center justify-between">
              <span className="font-prada text-[9px] text-text-muted tracking-widest uppercase">
                {itemCount} ITEMS • {rentalPeriod === "weekly" ? "WEEKLY" : "MONTHLY"}
              </span>
              <span className="font-prada text-2xl font-bold text-black tracking-tight">
                ${totalPrice}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/builder">
              <MotionButton
                className="px-8 py-4 border border-border-main text-black font-prada text-[10px] tracking-[0.3em] hover:bg-zinc-50 transition-all cursor-pointer"
              >
                MODIFY SETUP
              </MotionButton>
            </Link>
            <a href="https://monis.rent" target="_blank" rel="noopener noreferrer">
              <MotionButton
                className="px-10 py-4 bg-black text-white font-prada text-[10px] tracking-[0.3em] font-bold cursor-pointer"
              >
                RETURN HOME
              </MotionButton>
            </a>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};
