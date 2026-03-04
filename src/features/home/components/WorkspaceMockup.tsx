import { FadeIn } from "@/shared/motion/FadeIn";
import Image from "next/image";

export const WorkspaceMockup = () => (
  <FadeIn delay={0.4} duration={0.8} y={40} viewport={false}>
    <div className="mt-32 max-w-6xl mx-auto border border-border-main p-1">
      <div className="bg-bg-offset p-6 sm:p-12 relative overflow-hidden">
        <div className="flex items-center gap-4 mb-8">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-border-main" />
            <div className="w-2 h-2 rounded-full bg-border-main" />
            <div className="w-2 h-2 rounded-full bg-border-main" />
          </div>
          <span className="font-prada text-[9px] text-text-muted tracking-[0.2em] uppercase">
            WORKSPACE STUDIO PREVIEW
          </span>
        </div>

        <div className="relative aspect-21/9 w-full bg-white border border-border-light overflow-hidden">
          <Image
            src="/products/workspace_preview.webp"
            alt="Workspace Studio Preview"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  </FadeIn>
);
