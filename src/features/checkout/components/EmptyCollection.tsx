import Link from "next/link";
import { FadeIn } from "@/shared/motion/FadeIn";
import { MotionButton } from "@/shared/components/motion/MotionButton";

export const EmptyCollection = () => (
  <FadeIn delay={0} duration={0.6} y={0} scale={1} viewport={true} className="text-center py-24 border border-dashed border-border-light">
    <p className="font-prada text-[10px] text-text-muted mb-8 tracking-[0.2em]">
      YOUR WORKSPACE COLLECTION IS EMPTY
    </p>
    <Link href="/builder">
      <MotionButton
        className="px-12 py-4 bg-black text-white font-prada text-[10px] tracking-[0.3em] font-bold cursor-pointer"
      >
        GO TO BUILDER
      </MotionButton>
    </Link>
  </FadeIn>
);
