import { FadeIn } from "@/shared/motion/FadeIn";

export const CheckoutHeader = () => (
  <FadeIn delay={0} duration={0.6} y={-10} viewport={true} className="text-center mb-16">
    <h1 className="font-prada text-4xl sm:text-5xl font-light tracking-tight text-black">
      CHECKOUT
    </h1>
    <p className="font-prada text-[10px] text-text-muted mt-4 tracking-[0.3em] uppercase">
      Review and finalize your workspace collection
    </p>
  </FadeIn>
);
