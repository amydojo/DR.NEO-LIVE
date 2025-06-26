import { useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { smoothScrollTo } from "@/lib/utils";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import ContactSection from "@/components/contact-section";
import { Button } from "@/components/ui/button";

// VIP benefits list
const vipBenefits = [
  // {
  //   title: "Priority Scheduling",
  //   description: "Skip the waitlist with guaranteed appointments within 72 hours."
  // },
  // {
  //   title: "Exclusive Pricing",
  //   description: "Save up to 25% on maintenance treatments and products."
  // },
  // {
  //   title: "Early Access",
  //   description: "Be the first to try new innovative treatments and technologies."
  // },
  // {
  //   title: "VIP Support",
  //   description: "Direct access to our VIP concierge team for personalized care."
  // }

  // Priority Access to Care
  // Say goodbye to waiting weeks—or even months—to get the care you
  // deserve. As a VIGOR VIP, you’ll receive priority appointments with our
  // top-tier specialists, immediate access to our most sought-after
  // services, and ongoing support—without the long delays.
  // 2. Exclusive Treatments & Services
  // Gain access to high-demand medical services that are often limited or
  // unavailable to the general public. These cutting-edge treatments are
  // reserved exclusively for our VIP members.
  // 3. Concierge-Level Clinical Oversight
  // Enjoy more frequent check-ins, deeper clinical insights, and a greater-
  // degree of direct access to our team of experts. VIGOR VIPs
  // experience healthcare that’s focused on both addressing specific
  // concerns and optimizing your overall well-being.
  // 4. 40% Off Standard Pricing
  // Members enjoy a 40% discount on standard rates for most of our
  // services. In most cases, these savings exceed the monthly cost of
  // membership—making your investment in wellness both smart and rewarding.
  {
    title: "Priority Access to Care",
    description:
      "Say goodbye to waiting weeks—or even months—to get the care you deserve. As a VIGOR VIP, you’ll receive priority appointments with our top-tier specialists, immediate access to our most sought-after services, and ongoing support—without the long delays.",
  },
  {
    title: "Exclusive Treatments & Services",
    description:
      "Gain access to high-demand medical services that are often limited or unavailable to the general public. These cutting-edge treatments are reserved exclusively for our VIP members",
  },
  {
    title: "Concierge-Level Clinical Oversight",
    description:
      "Enjoy more frequent check-ins, deeper clinical insights, and a greater-degree of direct access to our team of experts. VIGOR VIPs experience healthcare that’s focused on both addressing specific concerns and optimizing your overall well-being.",
  },
  {
    title: "40% Off Standard Pricing",
    description:
      "Members enjoy a 40% discount on standard rates for most of our services. In most cases, these savings exceed the monthly cost of membership—making your investment in wellness both smart and rewarding.",
  },
];

export default function VIPMembership() {
  useEffect(() => {
    // Initialize page title
    document.title = "VIGOR VIP Membership | Dr. NEO";

    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section for VIP Membership */}
        <section className="pt-24 pb-16 bg-neutral-900 text-white">
          <div className="container mx-auto px-6">
            <div className="inline-block bg-primary/20 text-primary text-sm font-medium px-3 py-1 rounded-full mb-6">
              Exclusive Program
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              VIGOR VIP <br />
              Membership
            </h2>

            <p className="text-lg text-white/80 max-w-2xl mb-12">
              Join our exclusive membership program and receive priority access
              to care, exclusive treatments and services, concierge level
              clinical oversight, and 40% off standard pricing. Be the first to
              access to new technologies before they're available to the public.
            </p>

            <div className="space-y-6 mb-12">
              {vipBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-full mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{benefit.title}</h3>
                    <p className="text-white/60">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              className="bg-primary hover:bg-primary/90 text-neutral-900 px-8 py-6 text-base font-medium"
              onClick={() => smoothScrollTo("contact")}
            >
              Become a VIP Member
            </Button>
          </div>
        </section>

        {/* Membership Card Section */}
        <section className="py-16 bg-neutral-800 text-white">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Exclusive Member Benefits
            </h2>

            <div className="max-w-md mx-auto">
              {/* VIP Card */}
              <div className="w-full shadow-lg transform hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-lg p-6 mb-8">
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-primary">VIGOR VIP</h3>
                  <p className="text-white/60 text-sm">MEMBERSHIP</p>
                </div>
                <div className="mb-4 border-t border-neutral-700 pt-4">
                  <h4 className="text-white/80 text-sm">MEMBER NAME</h4>
                  <p className="text-white font-medium">JOHN SMITH</p>
                </div>
                <div className="mb-4">
                  <h4 className="text-white/80 text-sm">MEMBER SINCE</h4>
                  <p className="text-white font-medium">JANUARY 2023</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-white/60 text-xs">
                    DR. NEO HAIR RESTORATION
                  </p>
                  <img
                    src="/assets/NEO LOGO WHITE.png"
                    alt="Dr. NEO Logo"
                    className="h-6"
                  />
                </div>
              </div>

              <div className="text-center mb-8">
                <p className="text-lg mb-6">
                  Unlock premium benefits with our VIGOR VIP membership program.
                  Designed for patients who value convenience, savings, and
                  exclusive access.
                </p>
                <p className="text-white/60">
                  Membership is limited to ensure personalized service.
                </p>
              </div>

              <div className="text-center">
                <Button
                  className="bg-primary hover:bg-primary/90 text-neutral-900 px-8 py-6 text-base font-medium"
                  onClick={() => smoothScrollTo("contact")}
                >
                  Apply for Membership
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing and FAQs can be added here */}

        {/* Contact Section for membership inquiries */}
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
