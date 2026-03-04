import { FadeIn } from "@/shared/motion/FadeIn";

const STEPS = [
  { title: "COLLECT", desc: "Curate your desk, chair, and accessories in our minimalist builder" },
  { title: "PREVIEW", desc: "Visualize your workspace in a high-fidelity 3D studio environment" },
  { title: "RENT",    desc: "Confirm your selection for complimentary delivery and setup in Bali" },
];

export function HowItWorks() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border-main">
      <FadeIn y={15} duration={0.5} className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
        <div>
          <span className="font-prada text-[10px] text-text-muted tracking-[0.4em] uppercase mb-4 block">
            DESIGN DIRECTION
          </span>
          <h2 className="font-prada text-3xl sm:text-4xl font-light tracking-tight text-black uppercase">
            THE COLLECTION PROCESS
          </h2>
        </div>
        <p className="font-prada text-[9px] text-text-muted tracking-[0.2em] max-w-xs uppercase leading-relaxed">
          A seamless transition from digital curation to physical workspace implementation.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
        {STEPS.map((step, i) => (
          <FadeIn key={step.title} delay={i * 0.12} y={20}>
            <div className="font-prada text-[11px] text-black mb-8 pb-4 border-b border-border-light tracking-[0.3em] font-bold">
              0{i + 1}
            </div>
            <h3 className="font-prada text-sm font-bold mb-6 tracking-[0.3em] text-black">
              {step.title}
            </h3>
            <p className="font-prada text-[10px] text-text-secondary leading-loose tracking-[0.15em] uppercase">
              {step.desc}
            </p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
