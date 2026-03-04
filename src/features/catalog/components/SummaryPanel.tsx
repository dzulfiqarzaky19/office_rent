"use client";

import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FadeOverlay } from "@/shared/components/motion/FadeOverlay";
import { SlideDrawer } from "@/shared/components/motion/SlideDrawer";
import { SummaryBanner } from "./summary/SummaryBanner";
import { SummaryHeader } from "./summary/SummaryHeader";
import { SummaryPricingToggle } from "./summary/SummaryPricingToggle";
import { SummaryItems } from "./summary/SummaryItems";
import { SummaryFooter } from "./summary/SummaryFooter";

export const SummaryPanel = () => {
  const [showMobileSummary, setShowMobileSummary] = useState(false);

  return (
    <>
      <SummaryBanner onOpen={() => setShowMobileSummary(true)} />

      {showMobileSummary && (
        <AnimatePresence>
          <FadeOverlay
            key="summary-overlay"
            onClick={() => setShowMobileSummary(false)}
            className="fixed inset-0 bg-black/60 z-50 lg:hidden"
          />
          <SlideDrawer
            key="summary-drawer"
            className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border-main p-6 max-h-[80vh] flex flex-col lg:hidden"
          >
            <div className="w-12 h-1 bg-text-muted rounded-full mx-auto mb-4 shrink-0" />
            <button
              onClick={() => setShowMobileSummary(false)}
              className="absolute top-4 right-4 text-text-muted hover:text-foreground cursor-pointer z-10"
            >
              ✕
            </button>

            <div className="flex flex-col h-full min-h-0 bg-white relative">
              <SummaryHeader />

              <SummaryPricingToggle />

              <SummaryItems />

              <SummaryFooter />
            </div>
          </SlideDrawer>
        </AnimatePresence>
      )}
    </>
  );
};
