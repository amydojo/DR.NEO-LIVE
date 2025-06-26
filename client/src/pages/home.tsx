import { useEffect } from "react";
import HeroSection from "@/components/hero-section";
import HeroSectionEnhanced from "@/components/hero-section-enhanced-fixed";
import { HeroSectionOptimized } from "@/components/hero-section-optimized";
import { HeroSectionPremium } from "@/components/hero-section-premium";
import { HeroSectionRefined } from "@/components/hero-section-refined";
import { HeroSectionCohesive } from "@/components/hero-section-cohesive";
import { HeroSectionGodMode } from "@/components/hero-section-godmode";
import { HeroSectionUltimate } from "@/components/hero-section-ultimate";
import { HeroSectionImmersive } from "@/components/hero-section-immersive";
import TreatmentsSection from "@/components/treatments-section";
import TreatmentsSectionEnhanced from "@/components/treatments-section-enhanced";
import TestimonialsSectionPremium from "@/components/testimonials-section-premium";
import Frame_81 from "@/components/Frame_81";
import NeoDifferenceSection from "@/components/neo-difference-section";
import ContactSection from "@/components/contact-section";
import FaqSection from "@/components/faq-section";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { initFadeInAnimations } from "@/lib/utils";

export default function Home() {
  useEffect(() => {
    // Initialize fade-in animations
    const cleanup = initFadeInAnimations();

    // Add title to the page
    document.title = "SoCal Advanced Hair Restoration | Dr. NEO";

    return cleanup;
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Mobile: Use original components, Desktop: Use Apple-inspired enhanced components */}
        <HeroSection />
        <HeroSectionImmersive />
        <TreatmentsSection />
        <TreatmentsSectionEnhanced />
        <Frame_81 />
        <TestimonialsSectionPremium />
        <NeoDifferenceSection />
        <ContactSection />
        <FaqSection />
      </main>
      <SiteFooter />
    </div>
  );
}
