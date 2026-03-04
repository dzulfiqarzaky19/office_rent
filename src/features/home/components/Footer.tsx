import Link from "next/link";

const NAV_COLS = [
  {
    heading: "PLATFORM",
    links: [{ label: "COLLECTION", href: "/" }, { label: "STUDIO", href: "/builder" }],
  },
  {
    heading: "COMPANY",
    links: [{ label: "ABOUT", href: "#" }, { label: "CONTACT", href: "#" }],
  },
  {
    heading: "SUPPORT",
    links: [{ label: "HELP", href: "#" }, { label: "T&C", href: "#" }],
  },
];

export const Footer = () => (
    <footer className="py-24 px-4 border-t border-border-main bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-16">
        <div className="flex flex-col gap-6">
          <span className="font-prada text-[12px] text-black tracking-[0.4em] font-bold">MONIS.RENT</span>
          <p className="font-prada text-[9px] text-text-muted tracking-[0.2em] leading-relaxed max-w-[200px] uppercase">
            PREMIUM WORKSPACE RENTALS FOR THE MODERN DIGITAL ERA.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-16">
          {NAV_COLS.map((col) => (
            <div key={col.heading} className="flex flex-col gap-4">
              <span className="font-prada text-[10px] text-black font-bold tracking-[0.2em]">{col.heading}</span>
              {col.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-prada text-[9px] text-text-muted hover:text-black tracking-[0.2em] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-24 mt-24 border-t border-border-light flex justify-between items-center">
        <span className="font-prada text-[8px] text-text-muted tracking-widest">© 2024 MONIS.RENT</span>
        <span className="font-prada text-[8px] text-text-muted tracking-[0.2em]">BALI, INDONESIA</span>
      </div>
    </footer>
  );
