import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { smoothScrollTo } from "@/lib/utils";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import Frame_17 from "@/components/Frame_17";
import Frame_18 from "@/components/Frame_18";
import Frame_19 from "@/components/Frame_19";
import Frame_20 from "@/components/Frame_20";
import Frame_21 from "@/components/Frame_21";
import { ArrowRight, PlusCircle, Info, Check } from "lucide-react";

// Treatment data
const treatments = [
  {
    id: 1,
    title: "FUE Hair Transplant",
    description:
      "The medical standard resulting in high-survivability hair transplants. Our FUE technique ensures natural-looking results with minimal recovery time.",
    image: "/assets/HAIR POKE.png",
    features: [
      "Permanent solution for hair loss",
      "Minimally invasive procedure",
      "Natural-looking hairline design",
      "Faster recovery than traditional methods",
    ],
    featured: true,
  },
  {
    id: 2,
    title: "Microneedling Growth Factors",
    description:
      "Synergistic services for enhanced results. Microneedling creates microchannels in the scalp to maximize absorption of growth factors.",
    image: "/assets/MICRONEEDLING PEN 3D MODEL 1.png",
    features: [
      "Stimulates natural hair growth",
      "Enhances blood flow to follicles",
      "Minimal downtime",
      "Complementary to other treatments",
    ],
  },
  {
    id: 3,
    title: "Injectable Growth Factors",
    description:
      "Concentrated growth factors to enhance the survivability of transplanted grafts and stimulate existing hair follicles.",
    image: "/assets/FOLLICULES.png",
    features: [
      "Promotes hair thickness",
      "Accelerates healing after transplants",
      "Custom formulations for your needs",
      "Can be used with or without surgery",
    ],
  },
  {
    id: 4,
    title: "Follicular Hypersomes™",
    description:
      "Restorative factors that stimulate follicular growth and revitalize dormant hair follicles for improved density.",
    image: "/assets/MOIST FOLLICLE.png",
    features: [
      "Exclusive Dr. Neo technology",
      "Targets inactive follicles",
      "Non-surgical approach",
      "Progressive improvements over time",
    ],
  },
  {
    id: 5,
    title: "Vigor VIP",
    description:
      "A membership devoted to thicker hair and male wellness. Ongoing treatments and consultations for long-term hair health.",
    image: "/assets/Pecker Johnson VIP Card Bottom Trademarks 1.png",
    features: [
      "Continuous care program",
      "Priority appointment scheduling",
      "Regular progress monitoring",
      "Exclusive member discounts",
    ],
  },
];

export default function TreatmentsSection() {
  // For animations and hover effects
  const [activeCardId, setActiveCardId] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isIntersecting = useIntersectionObserver({
    ref: sectionRef,
    threshold: 0.2,
    triggerOnce: false,
  });

  // For expandable features
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleFeatures = (id: number) => {
    if (expandedCard === id) {
      setExpandedCard(null);
    } else {
      setExpandedCard(id);
    }
  };

  return (
    <section
      id="treatments"
      className="bg-[#f5f5f7] overflow-hidden relative"
      ref={sectionRef}
    >
      {/* Background pattern elements */}
      <div className="hidden lg:block absolute top-20 right-0 w-72 h-72 rounded-full bg-[#A87B23]/3 blur-3xl"></div>
      <div className="hidden lg:block absolute bottom-40 left-0 w-96 h-96 rounded-full bg-[#A87B23]/5 blur-3xl"></div>

      {/* Mobile layout */}
      <div className="md:hidden bg-white">
        <div className="container mx-auto px-0 pb-16 flex flex-col gap-5">
          <div className="grid grid-cols-1 gap-6">
            <Frame_17 />
            <Frame_20 />
            <Frame_19 />
            <Frame_18 />
            <Frame_21 />
          </div>

          <div className="mt-12 text-center hidden">
            <a
              href="/treatments"
              className="inline-flex items-center justify-center h-12 px-8 text-base font-medium transition-colors bg-[#FAE151] text-[#625046] rounded-full hover:bg-[#f5d73d] shadow-sm hover:shadow"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/treatments";
              }}
            >
              View All Treatments
            </a>
          </div>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden">
        <div className="container mx-auto px-6 lg:px-8 pb-24 lg:pb-32 gap-5">
          <div className="max-w-screen-xl mx-auto">
            {/* Section header */}
            <div
              className={`text-center max-w-3xl mx-auto mb-16 lg:mb-20 pt-16 lg:pt-20 transform transition-all duration-700 ease-out ${isIntersecting ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              <div className="inline-block mb-4">
                <span className="inline-block bg-[#A87B23]/10 text-[#A87B23] px-4 py-2 rounded-full text-sm font-medium">
                  Backed by science
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-normal mb-8 lg:mb-10 text-[#625046]">
                Advanced Treatments
              </h2>
              <p className="text-[#625046] text-xl lg:text-2xl font-normal">
                Dr. Neo offers state-of-the-art treatments for hair restoration,
                each specially designed to deliver natural results that look and
                feel like your own hair.
              </p>
            </div>

            {/* Featured treatment */}
            {treatments
              .filter((t) => t.featured)
              .map((treatment) => (
                <div
                  key={treatment.id}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden mb-16 transform transition-all duration-700 ease-out ${isIntersecting ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                  onMouseEnter={() => setActiveCardId(treatment.id)}
                  onMouseLeave={() => setActiveCardId(null)}
                >
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 p-10 lg:p-12 xl:p-16 flex flex-col justify-center">
                      <h3 className="text-3xl lg:text-4xl font-normal mb-6 text-[#625046]">
                        {treatment.title}
                      </h3>
                      <p className="text-[#625046] text-lg lg:text-xl mb-8 font-normal">
                        {treatment.description}
                      </p>

                      {/* Key features */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 border-1 ">
                        {treatment.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="bg-[#A87B23]/10 rounded-full p-1 mt-0.5 shrink-0">
                              <Check className="text-[#A87B23] w-3 h-3" />
                            </div>
                            <span className="text-[#625046] text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-6">
                        <Button
                          variant="outline"
                          className="group text-[#a87b23] border-[#a87b23] hover:bg-[#a87b23] hover:text-white text-base font-medium px-6 py-3 rounded-full transition-all duration-300 relative overflow-hidden"
                          onClick={() => (window.location.href = "/treatments")}
                        >
                          <span className="relative z-10 flex items-center">
                            Learn more
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </span>
                          <span className="absolute bottom-0 left-0 h-0 w-full bg-[#a87b23] transition-all duration-300 group-hover:h-full -z-0"></span>
                        </Button>
                        <Button
                          className="bg-[#141414] text-white hover:bg-[#2a2a2a] text-base font-medium px-6 py-3 rounded-full transition-all hover:shadow-lg hover:scale-105"
                          onClick={() => smoothScrollTo("contact")}
                        >
                          Book a Consult
                        </Button>
                      </div>
                    </div>

                    <div className="lg:w-1/2 bg-[#f8f8fa] flex items-center justify-center p-10 lg:p-0 relative overflow-hidden group">
                      <div
                        className={`w-full max-w-md lg:max-w-full transform transition-all duration-700 ease-out ${activeCardId === treatment.id ? "scale-110" : "scale-100"}`}
                      >
                        <img
                          src={treatment.image}
                          alt={treatment.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>

                      {/* Feature highlight button */}
                      <button
                        className="absolute bottom-8 right-8 p-2 rounded-full bg-[#A87B23]/10 hover:bg-[#A87B23]/20 text-[#A87B23] transition-colors"
                        onClick={() => toggleFeatures(treatment.id)}
                        aria-label="View key features"
                      >
                        <Info className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

            {/* Remaining treatments in a grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 auto-rows-fr gap-8 lg:gap-10 mb-16">
              {treatments
                .filter((t) => !t.featured)
                .map((treatment, index) => (
                  <div
                    key={treatment.id}
                    className={`bg-white rounded-2xl shadow-lg overflow-hidden transform 
                    h-full flex flex-col
                    transition-all duration-700 ease-out hover:translate-y-[-4px] hover:shadow-xl ${isIntersecting ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                    style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                    onMouseEnter={() => setActiveCardId(treatment.id)}
                    onMouseLeave={() => setActiveCardId(null)}
                  >
                    <div className="p-12 flex-1 flex flex-col">
                      <div className="flex flex-col md:flex-row items-stretch flex-1">
                        <div className="md:w-7/12  flex flex-col h-full justify-between">
                          <div>
                            <h3 className="text-2xl font-normal mb-4 text-[#625046]">
                              {treatment.title}
                            </h3>
                            <p className="text-[#625046] text-base mb-4 font-normal">
                              {treatment.description}
                            </p>
                          </div>
                          <div>
                            <div className="flex items-center mt-6 mb-2">
                              <a
                                href="/treatments"
                                className="text-[#a87b23] text-base font-normal hover:text-[#8a6015] transition-colors group flex items-center"
                                onClick={(e) => {
                                  e.preventDefault();
                                  window.location.href = "/treatments";
                                }}
                              >
                                Learn more
                                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                              </a>
                              <span className="text-gray-300 mx-3">|</span>
                              <a
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                  smoothScrollTo("contact");
                                }}
                                className="text-[#a87b23] text-base font-normal hover:text-[#8a6015] transition-colors group flex items-center"
                              >
                                Book Consult
                                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                              </a>
                            </div>

                            {/* Features toggle button */}
                            <button
                              className="mt-2 flex items-center text-sm text-[#625046] hover:text-[#a87b23] transition-colors"
                              onClick={() => toggleFeatures(treatment.id)}
                            >
                              <PlusCircle className="mr-2 h-4 w-4" />
                              {expandedCard === treatment.id
                                ? "Hide key features"
                                : "Show key features"}
                            </button>
                          </div>
                        </div>

                        <div className="md:w-5/12 flex justify-end items-center">
                          <img
                            src={treatment.image}
                            alt={treatment.title}
                            className="h-auto max-h-48 object-contain"
                            loading="lazy"
                            style={{
                              filter:
                                treatment.id === 5
                                  ? "drop-shadow(0px 10px 15px rgba(0,0,0,0.15))"
                                  : "none",
                            }}
                          />
                        </div>
                      </div>

                      {/* Expandable features */}
                      {expandedCard === treatment.id && (
                        <div className="pt-4 pb-2 border-t border-gray-100 mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 animate-fadeIn">
                          {treatment.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className="bg-[#A87B23]/10 rounded-full p-1 mt-0.5 shrink-0">
                                <Check className="text-[#A87B23] w-3 h-3" />
                              </div>
                              <span className="text-[#625046] text-sm">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
            </div>

            {/* CTA Button */}
            <div
              className={`mt-16 lg:mt-20 text-center transform transition-all duration-700 ease-out ${isIntersecting ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{ transitionDelay: "600ms" }}
            >
              <a
                href="/treatments"
                className="inline-flex items-center justify-center h-14 px-10 text-lg font-medium transition-all bg-[#141414] text-white rounded-full hover:bg-[#2a2a2a] hover:shadow-lg hover:scale-105"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "/treatments";
                }}
              >
                View All Treatments
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
