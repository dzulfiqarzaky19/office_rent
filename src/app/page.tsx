import Navbar from "@/shared/components/layout/Navbar";
import { HeroSection } from "@/features/home/components/HeroSection";
import { WorkspaceMockup } from "@/features/home/components/WorkspaceMockup";
import { HowItWorks } from "@/features/home/components/HowItWorks";
import { Testimonials } from "@/features/home/components/Testimonials";
import { FinalCTA } from "@/features/home/components/FinalCTA";
import { Footer } from "@/features/home/components/Footer";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />

      <HeroSection />

      <WorkspaceMockup />

      <HowItWorks />

      <Testimonials />

      <FinalCTA />

      <Footer />
    </main>
  );
}
