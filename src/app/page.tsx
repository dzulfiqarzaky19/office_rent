/**
 * Home page — SERVER COMPONENT (no "use client").
 *
 * Client boundary is pushed down into individual feature components:
 * - HeroSection / FinalCTA  → "use client" (framer-motion interactions)
 * - WorkspaceMockup / HowItWorks / Testimonials / Footer → server components
 * - FadeIn                  → "use client" slot wrapper (content stays server-rendered)
 *
 * This means only the interactive components ship JavaScript —
 * the rest is pure server-rendered HTML.
 */
import Navbar from "@/shared/components/layout/Navbar";
import { HeroSection } from "@/features/home/components/HeroSection";
import { WorkspaceMockup } from "@/features/home/components/WorkspaceMockup";
import { HowItWorks } from "@/features/home/components/HowItWorks";
import { Testimonials } from "@/features/home/components/Testimonials";
import { FinalCTA } from "@/features/home/components/FinalCTA";
import { Footer } from "@/features/home/components/Footer";
import { FadeIn } from "@/shared/motion/FadeIn";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />

      <HeroSection />

      <FadeIn delay={0.4} duration={0.8} y={40} viewport={false}>
        <WorkspaceMockup />
      </FadeIn>

      <HowItWorks />

      <Testimonials />

      <FinalCTA />

      <Footer />
    </main>
  );
}
