import FueHeader from "@/components/fue/fue-header";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { useEffect } from "react";
import { initFadeInAnimations } from "@/lib/utils";
import FueReasons from "@/components/fue/fue-reasons";
import FueHowItWorks from "@/components/fue/fue-how-it-works";
import FueProcess from "@/components/fue/fue-process";
import FueExpertConsultations from "@/components/fue/fue-expert-consultations";
import FuePersonalized from "@/components/fue/fue-personalized";
import FueAllDevices from "@/components/fue/fue-all-devices";
import FueCompareOurPlans from "@/components/fue/fue-compare-our-plans";
import FueResults from "@/components/fue/fue-results-from-real-patients";

export default function Fue() {
  useEffect(() => {

      // Scroll to top on route change
      window.scrollTo(0, 0);

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
        
        <FueHeader />
        <FueReasons />
        <FueHowItWorks />
        <FueProcess />
        <FueResults />
        {/* <FueExpertConsultations />
        <FuePersonalized />
        <FueAllDevices />
        <FueCompareOurPlans /> */}
      </main>
      <SiteFooter />
    </div>
  );
}
