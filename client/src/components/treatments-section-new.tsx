
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { smoothScrollTo } from "@/lib/utils";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import Frame_17 from "@/components/Frame_17";
import Frame_18 from "@/components/Frame_18";
import Frame_19 from "@/components/Frame_19";
import Frame_20 from "@/components/Frame_20";
import Frame_21 from "@/components/Frame_21";
import { ArrowRight, PlusCircle, Info, Check, ChevronLeft, ChevronRight } from "lucide-react";

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
  const carouselRef = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver({ 
    ref: sectionRef,
    threshold: 0.2,
    triggerOnce: false
  });

  // For expandable features
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  
  // Carousel navigation state
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleFeatures = (id: number) => {
    if (expandedCard === id) {
      setExpandedCard(null);
    } else {
      setExpandedCard(id);
    }
  };

  // Carousel navigation functions
  const updateScrollButtons = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scrollToPosition = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const cardWidth = 352; // Width + gap
      const scrollAmount = cardWidth;
      const currentScroll = carouselRef.current.scrollLeft;
      const newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      carouselRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      updateScrollButtons();
      carousel.addEventListener('scroll', updateScrollButtons);
      return () => carousel.removeEventListener('scroll', updateScrollButtons);
    }
  }, []);

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
        <div className="container mx-auto px-4 pb-16 flex flex-col gap-5">
          <h2 className="text-3xl font-normal text-center mb-12 pt-12 text-[#625046]">
            Advanced Treatments
          </h2>

          <div className="grid grid-cols-1 gap-12">
            <Frame_17 />
            <Frame_18 />
            <Frame_19 />
            <Frame_20 />
            <Frame_21 />
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => (window.location.href = "/treatments")}
              className="inline-flex items-center justify-center h-12 px-8 text-base font-medium transition-all duration-300 ease-out bg-[#FAE151] text-[#625046] rounded-full hover:bg-[#f5d73d] shadow-sm hover:shadow-md transform hover:scale-[1.02]"
            >
              View All Treatments
            </button>
          </div>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:block">
        <div className="container mx-auto px-6 lg:px-8 pb-24 lg:pb-32 gap-5">
          <div className="max-w-screen-xl mx-auto">
            {/* Section header with Apple-style typography */}
            <div
              className={`text-center max-w-4xl mx-auto mb-16 lg:mb-20 pt-16 lg:pt-20 transform transition-all duration-1000 ease-out ${isIntersecting ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
            >
              <div className="inline-block mb-6">
                <span className="inline-block bg-[#A87B23]/10 text-[#A87B23] px-5 py-2.5 rounded-full text-sm font-medium tracking-wide">
                  Backed by science
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-normal mb-8 lg:mb-10 text-[#625046] tracking-tight leading-[1.1]">
                Advanced Treatments
              </h2>
              <p className="text-[#625046] text-xl lg:text-2xl font-normal leading-relaxed">
                Dr. Neo offers state-of-the-art treatments for hair restoration,
                each specially designed to deliver natural results that look and
                feel like your own hair.
              </p>
            </div>

            {/* Featured treatment with enhanced styling */}
            {treatments
              .filter((t) => t.featured)
              .map((treatment) => (
                <div
                  key={treatment.id}
                  className={`bg-white rounded-3xl shadow-xl overflow-hidden mb-20 transform transition-all duration-1000 ease-out ${isIntersecting ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
                  onMouseEnter={() => setActiveCardId(treatment.id)}
                  onMouseLeave={() => setActiveCardId(null)}
                >
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 p-12 lg:p-16 xl:p-20 flex flex-col justify-center">
                      <h3 className="text-3xl lg:text-4xl xl:text-5xl font-normal mb-8 text-[#625046] leading-tight tracking-tight">
                        {treatment.title}
                      </h3>
                      <p className="text-[#625046] text-lg lg:text-xl xl:text-2xl mb-10 font-normal leading-relaxed">
                        {treatment.description}
                      </p>

                      {/* Key features with improved styling */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                        {treatment.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-4">
                            <div className="bg-[#A87B23]/10 rounded-full p-2 mt-1 shrink-0">
                              <Check className="text-[#A87B23] w-4 h-4" />
                            </div>
                            <span className="text-[#625046] text-base leading-relaxed">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-6">
                        <Button
                          variant="outline"
                          className="group text-[#a87b23] border-2 border-[#a87b23] hover:bg-[#a87b23] hover:text-white text-lg font-medium px-8 py-4 rounded-full transition-all duration-300 ease-out transform hover:scale-[1.02] hover:shadow-lg"
                          onClick={() => window.open("#", "_blank")}
                        >
                          <span className="relative z-10 flex items-center">
                            Learn more
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                          </span>
                        </Button>
                        <Button
                          className="bg-[#141414] text-white hover:bg-[#2a2a2a] text-lg font-medium px-8 py-4 rounded-full transition-all duration-300 ease-out hover:shadow-lg hover:scale-[1.02]"
                          onClick={() => smoothScrollTo("contact")}
                        >
                          Book a Consult
                        </Button>
                      </div>
                    </div>

                    <div className="lg:w-1/2 bg-gradient-to-br from-[#f8f8fa] to-[#f0f0f2] flex items-center justify-center p-12 lg:p-0 relative overflow-hidden">
                      <div 
                        className={`w-full max-w-md lg:max-w-full transform transition-all duration-700 ease-out ${activeCardId === treatment.id ? "scale-105" : "scale-100"}`}
                      >
                        <img
                          src={treatment.image}
                          alt={treatment.title}
                          className="w-full h-full object-cover drop-shadow-2xl"
                          loading="lazy"
                        />
                      </div>

                      {/* Enhanced feature highlight button */}
                      <button
                        className="absolute bottom-8 right-8 p-3 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white text-[#A87B23] transition-all duration-300 ease-out hover:scale-110 shadow-lg"
                        onClick={() => toggleFeatures(treatment.id)}
                        aria-label="View key features"
                      >
                        <Info className="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

            {/* Enhanced Apple-style horizontal carousel for remaining treatments */}
            <div className="mb-20">
              {/* Carousel header with navigation */}
              <div className="flex items-center justify-between mb-12">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-normal text-[#625046] mb-2 tracking-tight">
                    Additional Treatments
                  </h3>
                  <p className="text-[#625046]/70 text-lg">
                    Explore our comprehensive range of hair restoration options
                  </p>
                </div>
                
                {/* Apple-style navigation controls */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => scrollToPosition('left')}
                    disabled={!canScrollLeft}
                    className="w-11 h-11 rounded-full bg-white shadow-lg border border-[#e5e5e7] flex items-center justify-center transition-all duration-300 ease-out hover:shadow-xl disabled:opacity-30 disabled:cursor-not-allowed transform hover:scale-105"
                    aria-label="Previous treatments"
                  >
                    <ChevronLeft className="w-5 h-5 text-[#625046]" />
                  </button>
                  <button
                    onClick={() => scrollToPosition('right')}
                    disabled={!canScrollRight}
                    className="w-11 h-11 rounded-full bg-white shadow-lg border border-[#e5e5e7] flex items-center justify-center transition-all duration-300 ease-out hover:shadow-xl disabled:opacity-30 disabled:cursor-not-allowed transform hover:scale-105"
                    aria-label="Next treatments"
                  >
                    <ChevronRight className="w-5 h-5 text-[#625046]" />
                  </button>
                </div>
              </div>

              {/* Horizontal scrolling carousel */}
              <div className="relative">
                <div
                  ref={carouselRef}
                  className="flex gap-8 overflow-x-auto pb-4 scroll-smooth scrollbar-hide"
                  style={{
                    scrollSnapType: 'x mandatory',
                    WebkitOverflowScrolling: 'touch'
                  }}
                >
                  {treatments
                    .filter((t) => !t.featured)
                    .map((treatment, index) => (
                      <div
                        key={treatment.id}
                        className={`flex-none w-80 bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all duration-700 ease-out hover:translate-y-[-8px] hover:shadow-2xl ${isIntersecting ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                        style={{ 
                          transitionDelay: `${(index + 1) * 150}ms`,
                          scrollSnapAlign: 'start'
                        }}
                        onMouseEnter={() => setActiveCardId(treatment.id)}
                        onMouseLeave={() => setActiveCardId(null)}
                      >
                        <div className={`p-8 h-full ${expandedCard === treatment.id ? "pb-6" : ""}`}>
                          <div className="flex flex-col gap-6 h-full">
                            {/* Image container */}
                            <div className="flex justify-center items-center h-48 bg-gradient-to-br from-[#f8f8fa] to-[#f0f0f2] rounded-2xl overflow-hidden">
                              <img
                                src={treatment.image}
                                alt={treatment.title}
                                className={`w-32 h-32 object-contain transition-transform duration-500 ${activeCardId === treatment.id ? "scale-110" : "scale-100"}`}
                                loading="lazy"
                                style={{
                                  filter: treatment.id === 5 ? "drop-shadow(0px 10px 15px rgba(0,0,0,0.15))" : "drop-shadow(0px 8px 12px rgba(0,0,0,0.1))",
                                }}
                              />
                            </div>

                            {/* Content */}
                            <div className="flex-1 flex flex-col justify-between">
                              <div>
                                <h3 className="text-2xl font-normal mb-4 text-[#625046] leading-tight tracking-tight">
                                  {treatment.title}
                                </h3>
                                <p className="text-[#625046] text-base mb-6 font-normal leading-relaxed">
                                  {treatment.description}
                                </p>
                              </div>
                              
                              <div>
                                <div className="flex flex-wrap items-center gap-4 mb-4">
                                  <a
                                    href="#"
                                    className="text-[#a87b23] text-base font-medium hover:text-[#8a6015] transition-colors group flex items-center"
                                  >
                                    Learn more
                                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                  </a>
                                  <span className="text-gray-300">|</span>
                                  <a
                                    href="#"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      smoothScrollTo("contact");
                                    }}
                                    className="text-[#a87b23] text-base font-medium hover:text-[#8a6015] transition-colors group flex items-center"
                                  >
                                    Book Consult
                                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                  </a>
                                </div>

                                {/* Features toggle button */}
                                <button
                                  className="flex items-center text-sm text-[#625046] hover:text-[#a87b23] transition-colors"
                                  onClick={() => toggleFeatures(treatment.id)}
                                >
                                  <PlusCircle className="mr-2 h-4 w-4" />
                                  {expandedCard === treatment.id
                                    ? "Hide key features"
                                    : "Show key features"}
                                </button>
                              </div>
                            </div>
                          </div>

                          {/* Expandable features */}
                          {expandedCard === treatment.id && (
                            <div className="pt-6 border-t border-gray-100 mt-6 grid grid-cols-1 gap-4 animate-fadeIn">
                              {treatment.features.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                  <div className="bg-[#A87B23]/10 rounded-full p-1 mt-0.5 shrink-0">
                                    <Check className="text-[#A87B23] w-3 h-3" />
                                  </div>
                                  <span className="text-[#625046] text-sm leading-relaxed">
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

                {/* Scroll indicators */}
                <div className="flex justify-center mt-6 gap-2">
                  {treatments.filter(t => !t.featured).map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex ? 'bg-[#A87B23]' : 'bg-[#A87B23]/20'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced CTA Button */}
            <div
              className={`mt-20 text-center transform transition-all duration-1000 ease-out ${isIntersecting ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{ transitionDelay: "800ms" }}
            >
              <a
                href="/treatments"
                className="inline-flex items-center justify-center h-16 px-12 text-xl font-medium transition-all duration-300 ease-out bg-[#141414] text-white rounded-full hover:bg-[#2a2a2a] hover:shadow-2xl hover:scale-105 transform"
              >
                View All Treatments
                <ArrowRight className="ml-3 h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}
