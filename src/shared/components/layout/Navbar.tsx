"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCatalogStore } from "@/features/catalog/store/useCatalogStore";
import { MotionNav } from "@/shared/components/motion/MotionNav";

export default function Navbar() {
  const itemCount = useCatalogStore((s) => s.itemCount);
  const totalPrice = useCatalogStore((s) => s.totalPrice);
  const pathname = usePathname();

  return (
    <MotionNav className="fixed top-0 left-0 right-0 z-100 bg-white border-b border-border-main h-(--navbar-height)">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-prada text-xl font-bold tracking-[0.2em]">
              MONIS<span className="text-text-secondary">.RENT</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`font-prada text-[10px] tracking-[0.2em] transition-all duration-200 ${pathname === "/" ? "text-black border-b border-black" : "text-text-muted hover:text-black"}`}
            >
              COLLECTION
            </Link>
            <Link
              href="/builder"
              className={`font-prada text-[10px] tracking-[0.2em] transition-all duration-200 ${pathname === "/builder" ? "text-black border-b border-black" : "text-text-muted hover:text-black"}`}
            >
              BUILDER
            </Link>
          </div>

          <div className="flex items-center gap-6">
            {itemCount > 0 && (
              <div className="hidden sm:flex flex-col items-end">
                <span className="font-prada text-[9px] text-text-muted tracking-widest">
                  {itemCount} ITEMS
                </span>
                <span className="font-prada text-[10px] text-black tracking-widest">
                  ${totalPrice}
                </span>
              </div>
            )}
            <Link
              href="/builder"
              className="font-prada text-[10px] tracking-[0.2em] bg-black text-white px-6 py-2.5 hover:bg-zinc-800 transition-colors"
            >
              START
            </Link>
          </div>
        </div>
      </div>
    </MotionNav>
  );
}
