"use client";

import Link from "next/link";
import { WorkspaceScene } from "./WorkspaceScene";
import { useCatalogStore } from "@/features/catalog/store/useCatalogStore";

export const WorkspaceLayout = () => {
  const totalPrice = useCatalogStore((s) => s.totalPrice);

  return (
    <div className="flex-1 relative flex flex-col min-w-0 bg-[#f9f9f9]">
      <div className="absolute top-8 left-8 z-10">
        <h1 className="font-prada text-2xl font-light tracking-[0.2em] text-black">
          WORKSPACE <span className="opacity-40">STUDIO</span>
        </h1>
      </div>

      <div className="flex-1 relative flex flex-col min-w-0 bg-[#f9f9f9]">
        <div className="absolute top-8 left-8 z-10">
          <h1 className="font-prada text-2xl font-light tracking-[0.2em] text-black">
            WORKSPACE <span className="opacity-40">STUDIO</span>
          </h1>
        </div>

        <div className="flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-[900px] aspect-4/3 bg-white border border-border-main overflow-hidden relative">
            <WorkspaceScene />
          </div>
        </div>

        <div className="absolute bottom-8 right-8 z-10 flex items-center gap-12">
          <div className="flex flex-col items-end">
            <span className="font-prada text-[10px] text-text-muted tracking-widest">
              TOTAL ESTIMATE
            </span>
            <span className="font-prada text-2xl font-bold text-black tracking-widest">
              ${totalPrice}
            </span>
          </div>
          <Link href="/checkout">
            <button className="px-12 py-4 bg-black text-white font-prada text-[10px] tracking-[0.3em] hover:bg-zinc-800 transition-all cursor-pointer">
              CONTINUE
            </button>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-10 flex items-center gap-12">
        <div className="flex flex-col items-end">
          <span className="font-prada text-[10px] text-text-muted tracking-widest">
            TOTAL ESTIMATE
          </span>
          <span className="font-prada text-2xl font-bold text-black tracking-widest">
            ${totalPrice}
          </span>
        </div>
        <Link href="/checkout">
          <button className="px-12 py-4 bg-black text-white font-prada text-[10px] tracking-[0.3em] hover:bg-zinc-800 transition-all cursor-pointer">
            CONTINUE
          </button>
        </Link>
      </div>
    </div>
  );
};
