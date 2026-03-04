import { FadeIn } from "@/shared/motion/FadeIn";

const TESTIMONIALS = [
  { name: "SARAH K.",  role: "UX DESIGNER", text: "Meticulously designed workspace rentals. The builder experience is unparalleled." },
  { name: "MARCO T.", role: "DEVELOPER",    text: "The aesthetic precision of the furniture perfectly complements my digital workflow." },
  { name: "LISA M.",  role: "FOUNDER",      text: "Functional excellence meets minimalist design. Essential for the modern nomad." },
];

export const Testimonials = () =>  (
    <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border-main">
      <FadeIn y={15} duration={0.5} className="mb-24">
        <span className="font-prada text-[10px] text-text-muted tracking-[0.4em] uppercase mb-4 block">
          VOICE
        </span>
        <h2 className="font-prada text-3xl sm:text-4xl font-light tracking-tight text-black uppercase">
          CLIENT ARCHIVE
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
        {TESTIMONIALS.map((t, i) => (
          <FadeIn key={t.name} delay={i * 0.12} y={20}>
            <p className="font-prada text-[11px] text-black mb-12 leading-loose tracking-[0.1em] uppercase">
              &quot;{t.text}&quot;
            </p>
            <div className="flex flex-col gap-2 pt-8 border-t border-border-light">
              <p className="font-prada text-[10px] font-bold tracking-[0.3em] text-black">{t.name}</p>
              <p className="font-prada text-[9px] text-text-muted tracking-[0.2em]">{t.role}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
