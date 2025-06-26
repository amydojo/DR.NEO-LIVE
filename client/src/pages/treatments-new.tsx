import { useState, useRef, useEffect } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  PlusCircle,
  Clock,
  Calendar,
  ChevronRight,
  Sparkles,
  LayoutGrid,
} from "lucide-react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useIsMobile } from "@/hooks/use-mobile";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { smoothScrollTo } from "@/lib/utils";
import { LazyImage } from "@/components/ui/lazy-image";

// Treatment data with expanded information
const treatments = [
  {
    id: 1,
    title: "FUE Hair Transplant",
    description:
      "The medical standard resulting in high-survivability hair transplants. Our FUE technique ensures natural-looking results with minimal recovery time.",
    longDescription:
      "Follicular Unit Extraction (FUE) is a minimally invasive hair transplantation technique that involves extracting individual hair follicles from a donor part of the body, usually the back of the head where the hair is genetically programmed to resist balding, and implanting them to a balding area of the body, called the recipient site. At Dr. Neo, we've refined this technique to maximize follicle survival rates and create completely natural-looking hairlines.",
    image: "/assets/HAIR POKE.png",
    heroImage: "/assets/HERO IMAGE HAIR EXAM.png",
    features: [
      "Permanent solution for hair loss",
      "Minimally invasive procedure",
      "Natural-looking hairline design",
      "Faster recovery than traditional methods",
      "No linear scar",
      "Minimal discomfort during recovery",
      "High follicle survival rate",
      "Same-day procedure",
    ],
    benefits: [
      "Permanently restore your hairline",
      "Natural results that grow for life",
      "No visible scarring",
      "Minimal downtime (return to work in 3-7 days)",
      "Custom hairline design tailored to your facial features",
      "Boost your confidence and appearance",
    ],
    faq: [
      {
        question: "How long does the procedure take?",
        answer:
          "The FUE hair transplant procedure typically takes 4-8 hours depending on the number of grafts needed. It's performed as an outpatient procedure, so you can go home the same day.",
      },
      {
        question: "Is the procedure painful?",
        answer:
          "We use local anesthesia, so you'll experience minimal discomfort during the procedure. Most patients report mild soreness for 1-3 days after, which is easily managed with medication.",
      },
      {
        question: "When will I see results?",
        answer:
          "You'll typically see initial growth at 3-4 months, with significant improvements at 6-9 months. Final results are usually visible at 12-18 months as the transplanted hair fully matures.",
      },
      {
        question: "Will the results look natural?",
        answer:
          "Absolutely. Dr. Neo specializes in creating natural-looking hairlines that complement your facial features. Our advanced techniques ensure the transplanted hair grows at the correct angle and density.",
      },
    ],
    pricing: "$X,XXX - $XX,XXX",
    timeEstimate: "4-8 hours (single session)",
    recoveryTime: "3-7 days before returning to work",
    featured: true,
  },
  {
    id: 2,
    title: "Microneedling Growth Factors",
    description:
      "Synergistic services for enhanced results. Microneedling creates microchannels in the scalp to maximize absorption of growth factors.",
    longDescription:
      "Microneedling with growth factors is an innovative treatment that utilizes a special device with fine needles to create thousands of microscopic channels in the scalp. These micro-injuries stimulate the body's natural healing process and, when combined with our proprietary growth factor solution, maximize the absorption of essential nutrients and proteins that promote hair growth and strengthen existing follicles.",
    image: "/assets/MICRONEEDLING PEN 3D MODEL 1.png",
    heroImage: "/assets/MICRONEEDLING PEN 3D MODEL 1.png",
    features: [
      "Stimulates natural hair growth",
      "Enhances blood flow to follicles",
      "Minimal downtime",
      "Complementary to other treatments",
      "No anesthesia required",
      "Improves scalp health",
      "Quick 30-45 minute sessions",
      "Progressive improvements over multiple sessions",
    ],
    benefits: [
      "Enhance thickness of existing hair",
      "Stimulate dormant hair follicles",
      "Improve absorption of hair growth products",
      "Non-surgical option with no downtime",
      "Reduce inflammation in the scalp",
      "Complement and enhance results of other treatments",
    ],
    faq: [
      {
        question: "How many sessions will I need?",
        answer:
          "Most patients benefit from a series of 3-6 sessions spaced 4-6 weeks apart for optimal results. Maintenance sessions every 3-6 months are recommended to sustain improvements.",
      },
      {
        question: "Is there any downtime?",
        answer:
          "Microneedling has minimal downtime. Your scalp may appear red for 24-48 hours after treatment, similar to a mild sunburn. Most patients return to normal activities immediately.",
      },
      {
        question: "Can this be combined with other treatments?",
        answer:
          "Yes, microneedling with growth factors works synergistically with our other treatments. It's especially effective when combined with Injectable Growth Factors or as a maintenance treatment after an FUE transplant.",
      },
      {
        question: "Is the treatment painful?",
        answer:
          "Most patients report minimal discomfort during the procedure, describing it as a light prickling sensation. We apply a topical numbing cream before treatment to ensure your comfort.",
      },
    ],
    pricing: "$XXX - $X,XXX per session",
    timeEstimate: "30-45 minutes per session",
    recoveryTime: "No downtime, return to activities immediately",
  },
  {
    id: 3,
    title: "Injectable Growth Factors",
    description:
      "Concentrated growth factors to enhance the survivability of transplanted grafts and stimulate existing hair follicles.",
    longDescription:
      "Our Injectable Growth Factors treatment delivers a concentrated solution of specialized proteins directly to the scalp, creating an optimal environment for hair growth. These bioactive compounds play a crucial role in cellular regeneration, blood vessel formation, and follicle stimulation. The treatment is particularly effective for enhancing the results of hair transplantation and revitalizing thinning hair without surgery.",
    image: "/assets/FOLLICULES.png",
    heroImage: "/assets/FOLLICULES.png",
    features: [
      "Promotes hair thickness",
      "Accelerates healing after transplants",
      "Custom formulations for your needs",
      "Can be used with or without surgery",
      "Targeted injection technique",
      "Minimal discomfort",
      "Quick 15-30 minute sessions",
      "Contains regenerative proteins",
    ],
    benefits: [
      "Strengthen and thicken existing hair",
      "Extend the growth phase of hair follicles",
      "Improve results of hair transplantation",
      "Reduce inflammation that contributes to hair loss",
      "Minimize shedding of existing hair",
      "Non-surgical option with no downtime",
    ],
    faq: [
      {
        question: "How do Injectable Growth Factors work?",
        answer:
          "The treatment delivers a concentration of specialized proteins that send signals to hair follicle cells, activating cellular regeneration and extending the growth phase of the hair cycle. This helps existing hair grow stronger and thicker while potentially activating dormant follicles.",
      },
      {
        question: "How many treatments will I need?",
        answer:
          "Most patients benefit from a series of 3-4 treatments spaced one month apart, followed by maintenance treatments every 3-6 months depending on your response and goals.",
      },
      {
        question: "When will I see results?",
        answer:
          "Most patients notice a reduction in hair shedding within 2-3 weeks and visible improvement in hair thickness and density within 2-3 months as the hair cycle progresses.",
      },
      {
        question: "Is this treatment FDA-approved?",
        answer:
          "Our Injectable Growth Factors treatment uses high-quality, medical-grade components in compliance with all regulatory standards. The procedure is performed as an off-label application of these components, a common practice in advanced medical aesthetics and hair restoration.",
      },
    ],
    pricing: "$XXX - $X,XXX per session",
    timeEstimate: "15-30 minutes per session",
    recoveryTime: "No downtime, return to activities immediately",
  },
  {
    id: 4,
    title: "Follicular Hypersomes™",
    description:
      "Restorative factors that stimulate follicular growth and revitalize dormant hair follicles for improved density.",
    longDescription:
      "Follicular Hypersomes™ is an exclusive Dr. Neo treatment that utilizes advanced liposomal technology to deliver essential nutrients and bioactive compounds directly to hair follicles. These specialized delivery vehicles are designed to penetrate deeply into the skin, bypassing barriers that typically limit absorption of topical products. The result is dramatically improved nourishment of follicles, enhanced cellular energy production, and revitalization of dormant hair growth cycles.",
    image: "/assets/MOIST FOLLICLE.png",
    heroImage: "/assets/MOIST FOLLICLE.png",
    features: [
      "Exclusive Dr. Neo technology",
      "Targets inactive follicles",
      "Non-surgical approach",
      "Progressive improvements over time",
      "Proprietary formula",
      "Enhanced delivery system",
      "Compatible with other treatments",
      "Customized treatment protocols",
    ],
    benefits: [
      "Wake up dormant hair follicles",
      "Improve scalp environment for optimal hair growth",
      "Extend the growth phase of your hair cycle",
      "Enhance results from other treatments",
      "Non-invasive option with no downtime",
      "Address multiple factors of hair thinning simultaneously",
    ],
    faq: [
      {
        question:
          "What makes Follicular Hypersomes™ different from other treatments?",
        answer:
          "Follicular Hypersomes™ utilizes our proprietary liposomal delivery system that enhances penetration of active ingredients into the hair follicle by up to 600% compared to standard topical solutions, resulting in significantly improved effectiveness.",
      },
      {
        question: "How is the treatment performed?",
        answer:
          "The treatment involves a thorough scalp cleansing followed by precise application of our Hypersomes solution. We then use a specialized device to enhance absorption through gentle vibration and thermal energy. The procedure is comfortable and typically takes 30-45 minutes.",
      },
      {
        question: "How soon will I see results?",
        answer:
          "Most patients notice improvements in scalp health within weeks, with visible changes in hair quality and density appearing after 2-3 months of consistent treatment. The best results typically emerge after completing the full recommended course of 4-6 treatments.",
      },
      {
        question: "Is this treatment suitable for all types of hair loss?",
        answer:
          "Follicular Hypersomes™ works best for individuals with thinning hair who still have viable follicles that are dormant or underperforming. It's particularly effective for androgenetic alopecia (pattern hair loss) and stress-related thinning. During your consultation, we'll determine if this treatment is appropriate for your specific condition.",
      },
    ],
    pricing: "$XXX - $X,XXX per session",
    timeEstimate: "30-45 minutes per session",
    recoveryTime: "No downtime, return to activities immediately",
  },
  {
    id: 5,
    title: "Vigor VIP",
    description:
      "A membership devoted to thicker hair and male wellness. Ongoing treatments and consultations for long-term hair health.",
    longDescription:
      "Vigor VIP is our premium membership program designed for men who are serious about maintaining optimal hair health and overall wellness. This exclusive program offers regular access to our complete suite of non-surgical treatments, personalized maintenance plans, priority scheduling, and ongoing expert guidance. As a Vigor VIP member, you'll receive a customized regimen that evolves with your changing needs, ensuring continuous improvement and long-term results.",
    image: "/assets/Pecker Johnson VIP Card Bottom Trademarks 1.png",
    heroImage: "/assets/Pecker Johnson VIP Card Bottom Trademarks 1.png",
    features: [
      "Unlimited consultations",
      "Priority scheduling",
      "Personalized treatment regimen",
      "Exclusive member discounts",
      "Quarterly reassessments",
      "Access to new treatments first",
      "Comprehensive hair health monitoring",
      "Direct line to your clinical team for questions and support",
    ],
    benefits: [
      "Consistent, ongoing care for optimal results",
      "Cost savings compared to individual treatments",
      "Preventative approach to hair loss",
      "Regular adjustments to your regimen as needs change",
      "Access to the complete Dr. Neo treatment ecosystem",
      "Peace of mind knowing your hair health is professionally managed",
    ],
    faq: [
      {
        question: "What is included in the Vigor VIP membership?",
        answer:
          "Vigor VIP includes regular sessions of our core non-surgical treatments (specific frequency determined by your needs), quarterly reassessments, priority scheduling, exclusive discounts on products and additional services, and direct access to our clinical team for support between visits.",
      },
      {
        question: "How much does membership cost?",
        answer:
          "Membership is available at different tiers depending on your needs and the intensity of treatment required. Our entry-level membership starts at $XXX per month, while our premium tier with maximum treatment frequency is $X,XXX per month. During your consultation, we'll recommend the appropriate tier based on your condition.",
      },
      {
        question: "How often will I need to come in?",
        answer:
          "Treatment frequency varies based on your specific condition, goals, and membership tier. Most members visit every 2-4 weeks during the initial phase, then transition to a maintenance schedule of visits every 4-8 weeks. Your treatment plan will be personalized to your specific needs.",
      },
      {
        question: "Can I cancel my membership?",
        answer:
          "Yes, Vigor VIP memberships can be canceled at any time with 30 days' notice. However, we find that members who maintain their regimen for at least 12 months achieve the best long-term results.",
      },
    ],
    pricing: "$XXX - $X,XXX per month",
    timeEstimate: "Varies by treatment plan",
    recoveryTime: "No downtime between maintenance sessions",
  },
];

export default function TreatmentsPage() {
  const [selectedTreatment, setSelectedTreatment] = useState(treatments[0]);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "featured">("featured");
  const heroRef = useRef<HTMLDivElement>(null);
  const treatmentSectionRef = useRef<HTMLDivElement>(null);
  const detailsSectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const isHeroVisible = useIntersectionObserver({
    ref: heroRef,
    threshold: 0.2,
    triggerOnce: true,
  });

  const isTreatmentSectionVisible = useIntersectionObserver({
    ref: treatmentSectionRef,
    threshold: 0.1,
    triggerOnce: false,
  });

  const toggleFaq = (index: number) => {
    if (expandedFaq === index) {
      setExpandedFaq(null);
    } else {
      setExpandedFaq(index);
    }
  };

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SiteHeader />

      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative bg-gradient-to-r from-[#f3f3f3] to-[#f9f9f9] pt-24 pb-16 overflow-hidden"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              <div className="w-full lg:w-1/2 order-2 lg:order-1">
                <div
                  className={`transform transition-all duration-1000 ease-out ${isHeroVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
                >
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#625046] mb-4 lg:mb-8 leading-tight">
                    Advanced Hair Restoration Treatments
                  </h2>
                  <p className="text-xl md:text-2xl text-[#625046]/90 mb-8 lg:mb-12 font-normal">
                    Discover our comprehensive range of cutting-edge solutions
                    designed to address all aspects of hair loss and thinning.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button
                      className="bg-[#141414] text-white hover:bg-[#2a2a2a] text-base md:text-lg font-medium px-8 py-3 h-auto rounded-full transition-all hover:shadow-lg"
                      onClick={() => smoothScrollTo("treatment-options")}
                    >
                      Explore Treatments
                    </Button>
                    <Button
                      variant="outline"
                      className="border-[#a87b23] text-[#a87b23] hover:bg-[#a87b23] hover:text-white text-base md:text-lg font-medium px-8 py-3 h-auto rounded-full transition-all group"
                      onClick={() => smoothScrollTo("consultation")}
                    >
                      Book a Consultation
                    </Button>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <div
                  className={`transform transition-all duration-1000 ease-out ${isHeroVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
                  style={{ transitionDelay: "150ms" }}
                >
                  <img
                    src="/assets/HAIR LOSS AFTER PIC.png"
                    alt="Hair restoration results"
                    className="w-full rounded-2xl shadow-xl"
                  />
                  <div className="mt-4 flex justify-center">
                    <span className="bg-[#a87b23]/10 text-[#a87b23] px-4 py-2 rounded-full text-sm font-medium">
                      Actual Dr. Neo patient results
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-[#A87B23]/5 blur-3xl"></div>
        <div className="absolute bottom-40 left-0 w-72 h-72 rounded-full bg-[#A87B23]/3 blur-3xl"></div>
      </div>

      {/* Treatment Navigation - Premium Desktop & Mobile Experience */}
      <div
        id="treatment-options"
        ref={treatmentSectionRef}
        className="bg-gradient-to-b from-[#f9f9fa] to-[#f5f5f7] py-12 lg:py-24 scroll-mt-16 overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-16">
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-normal text-[#625046] mb-6 md:mb-0"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isTreatmentSectionVisible
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6 }}
              >
                Our Treatment Options
              </motion.h2>

              {/* View Toggle - Works on both Mobile & Desktop */}
              <motion.div
                className="flex bg-white/80 backdrop-blur-sm p-1 rounded-full shadow-sm border border-gray-100"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  isTreatmentSectionVisible
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <button
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    viewMode === "featured"
                      ? "bg-[#A87B23] text-white shadow-sm"
                      : "text-[#625046] hover:bg-white/80"
                  }`}
                  onClick={() => setViewMode("featured")}
                >
                  <Sparkles className="w-4 h-4" />
                  <span className="hidden sm:inline">Featured</span>
                </button>
                <button
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    viewMode === "grid"
                      ? "bg-[#A87B23] text-white shadow-sm"
                      : "text-[#625046] hover:bg-white/80"
                  }`}
                  onClick={() => setViewMode("grid")}
                >
                  <LayoutGrid className="w-4 h-4" />
                  <span className="hidden sm:inline">All</span>
                </button>
              </motion.div>
            </div>

            {/* Mobile Featured View with Carousel */}
            {isMobile && viewMode === "featured" && (
              <div className="px-1 py-4">
                <div className="overflow-x-auto pb-8 -mx-4 px-4 snap-x snap-mandatory flex gap-4 scrollbar-hide">
                  {treatments.map((treatment, index) => (
                    <motion.div
                      key={treatment.id}
                      className={`snap-center shrink-0 w-[85%] max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white transition-all duration-300 ${
                        selectedTreatment.id === treatment.id
                          ? "ring-2 ring-[#A87B23] ring-opacity-50"
                          : ""
                      }`}
                      initial={{ opacity: 0, x: 50 }}
                      animate={
                        isTreatmentSectionVisible
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: 50 }
                      }
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div
                        className="relative h-48 cursor-pointer"
                        onClick={() => {
                          setSelectedTreatment(treatment);
                          setExpandedFaq(null);
                          smoothScrollTo("treatment-details");
                        }}
                      >
                        <LazyImage
                          src={treatment.image}
                          alt={treatment.title}
                          className="absolute inset-0"
                          objectFit="cover"
                          placeholderColor="#f1efe9"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-xl font-medium text-white mb-1">
                            {treatment.title}
                          </h3>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs font-medium px-2 py-1 bg-[#A87B23]/20 text-white rounded-full">
                              {treatment.timeEstimate}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="p-5">
                        <p className="text-sm text-[#625046]/80 mb-4">
                          {treatment.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-[#A87B23] text-sm font-medium">
                            {treatment.pricing}
                          </span>
                          <button
                            className="flex items-center text-[#625046] text-sm font-medium hover:text-[#A87B23] transition-colors group"
                            onClick={() => {
                              setSelectedTreatment(treatment);
                              setExpandedFaq(null);
                              smoothScrollTo("treatment-details");
                            }}
                          >
                            Learn more
                            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Mobile Grid View */}
            {isMobile && viewMode === "grid" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4">
                {treatments.map((treatment, index) => (
                  <motion.div
                    key={treatment.id}
                    className={`rounded-xl p-4 bg-white shadow-sm ${
                      selectedTreatment.id === treatment.id
                        ? "ring-2 ring-[#A87B23] ring-opacity-50 shadow-md"
                        : ""
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isTreatmentSectionVisible
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.4, delay: 0.05 * index }}
                    onClick={() => {
                      setSelectedTreatment(treatment);
                      setExpandedFaq(null);
                      smoothScrollTo("treatment-details");
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-[#f1efe9]">
                        <LazyImage
                          src={treatment.image}
                          alt={treatment.title}
                          className="w-full h-full"
                          objectFit="cover"
                          placeholderColor="#f1efe9"
                          fadeIn={false}
                        />
                      </div>
                      <div>
                        <h3
                          className={`text-lg font-medium mb-1 ${
                            selectedTreatment.id === treatment.id
                              ? "text-[#A87B23]"
                              : "text-[#625046]"
                          }`}
                        >
                          {treatment.title}
                        </h3>
                        <p className="text-xs text-[#625046]/80 line-clamp-2 mb-2">
                          {treatment.description}
                        </p>
                        <div className="flex items-center">
                          <ChevronRight
                            className={`w-4 h-4 ${
                              selectedTreatment.id === treatment.id
                                ? "text-[#A87B23]"
                                : "text-[#625046]/50"
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Desktop Premium Treatment Selection */}
            {!isMobile && viewMode === "featured" && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {treatments.map((treatment, index) => (
                  <motion.div
                    key={treatment.id}
                    className={`group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500 ${
                      selectedTreatment.id === treatment.id
                        ? "ring-1 ring-[#A87B23] transform scale-[1.02]"
                        : ""
                    }`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                      isTreatmentSectionVisible
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 30 }
                    }
                    transition={{ duration: 0.7, delay: 0.1 * index }}
                    whileHover={{
                      y: -8,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <div className="relative h-52 overflow-hidden">
                      <LazyImage
                        src={treatment.image}
                        alt={treatment.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        placeholderColor="#f1efe9"
                      />
                      {treatment.featured && (
                        <div className="absolute top-4 left-4 bg-[#A87B23] text-white text-xs font-medium px-2 py-1 rounded-full">
                          Featured
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-medium text-[#625046] group-hover:text-[#A87B23] transition-colors">
                          {treatment.title}
                        </h3>
                        <span className="text-[#A87B23] text-sm font-medium">
                          {treatment.pricing}
                        </span>
                      </div>
                      <p className="text-[#625046]/80 mb-6 line-clamp-3">
                        {treatment.description}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center text-sm text-[#625046]/70">
                          <Clock className="w-4 h-4 mr-1 text-[#A87B23]" />
                          <span>{treatment.timeEstimate}</span>
                        </div>
                        <button
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                            selectedTreatment.id === treatment.id
                              ? "bg-[#A87B23] text-white"
                              : "bg-white text-[#625046] border border-gray-200 hover:bg-[#A87B23] hover:text-white hover:border-transparent"
                          }`}
                          onClick={() => {
                            setSelectedTreatment(treatment);
                            setExpandedFaq(null);
                            smoothScrollTo("treatment-details");
                          }}
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Desktop Grid View */}
            {!isMobile && viewMode === "grid" && (
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                {treatments.map((treatment, index) => (
                  <motion.div
                    key={treatment.id}
                    className={`border-b border-gray-100 last:border-b-0 ${
                      selectedTreatment.id === treatment.id
                        ? "bg-[#faf9f7]"
                        : "hover:bg-[#f9f9fa]"
                    }`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={
                      isTreatmentSectionVisible
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 15 }
                    }
                    transition={{ duration: 0.4, delay: 0.05 * index }}
                  >
                    <button
                      className="w-full flex items-center gap-6 p-6 text-left"
                      onClick={() => {
                        setSelectedTreatment(treatment);
                        setExpandedFaq(null);
                        smoothScrollTo("treatment-details");
                      }}
                    >
                      <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 bg-[#f5f5f7]">
                        <LazyImage
                          src={treatment.image}
                          alt={treatment.title}
                          className="w-full h-full object-cover"
                          placeholderColor="#f1efe9"
                          fadeIn={false}
                          priority={index < 2}
                        />
                      </div>
                      <div className="flex-1">
                        <h3
                          className={`text-lg font-medium mb-1 ${
                            selectedTreatment.id === treatment.id
                              ? "text-[#A87B23]"
                              : "text-[#625046]"
                          }`}
                        >
                          {treatment.title}
                        </h3>
                        <p className="text-sm text-[#625046]/70 line-clamp-1">
                          {treatment.description}
                        </p>
                      </div>
                      <div className="flex items-center shrink-0 gap-8">
                        <div className="hidden md:flex items-center gap-6">
                          <div className="flex items-center text-sm text-[#625046]/70">
                            <Clock className="w-4 h-4 mr-1 text-[#A87B23]" />
                            <span>{treatment.timeEstimate}</span>
                          </div>
                          <span className="text-[#A87B23] text-sm font-medium">
                            {treatment.pricing}
                          </span>
                        </div>
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            selectedTreatment.id === treatment.id
                              ? "bg-[#A87B23] text-white"
                              : "bg-[#f5f5f7] text-[#625046]"
                          }`}
                        >
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      </div>
                    </button>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Treatment Details - Premium Apple-Style Design */}
      <div
        id="treatment-details"
        ref={detailsSectionRef}
        className="py-16 lg:py-32 scroll-mt-16"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-screen-xl mx-auto">
            {/* Treatment Header - Apple-style design with clean typography */}
            <motion.div
              className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 lg:mb-24"
              key={`header-${selectedTreatment.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-6xl font-normal text-[#625046] mb-6 tracking-tight leading-tight">
                  {selectedTreatment.title}
                </h2>
                <div className="flex flex-wrap gap-6 items-center">
                  <div className="flex items-center text-[#625046]">
                    <Clock className="w-5 h-5 mr-2 text-[#A87B23]" />
                    <span className="text-lg">
                      {selectedTreatment.timeEstimate}
                    </span>
                  </div>
                  <div className="flex items-center text-[#625046]">
                    <Calendar className="w-5 h-5 mr-2 text-[#A87B23]" />
                    <span className="text-lg">
                      {selectedTreatment.recoveryTime}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-6 md:mt-0">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    className="bg-[#A87B23] hover:bg-[#8a6015] text-white font-medium px-8 py-4 h-auto rounded-full transition-all text-lg shadow-md hover:shadow-xl"
                    onClick={() => smoothScrollTo("consultation")}
                  >
                    Book This Treatment
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Hero Image Section - Full width for desktop */}
            {!isMobile && (
              <motion.div
                key={`hero-image-${selectedTreatment.id}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-24 relative overflow-hidden rounded-3xl shadow-2xl"
              >
                <div className="relative aspect-[21/9] overflow-hidden">
                  <LazyImage
                    src={selectedTreatment.heroImage}
                    alt={selectedTreatment.title}
                    className="w-full h-full object-cover"
                    placeholderColor="#f1efe9"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-16 text-white max-w-2xl">
                    <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8 inline-block">
                      <div className="text-sm font-medium text-[#A87B23] mb-3">
                        EXCLUSIVE TREATMENT
                      </div>
                      <h3 className="text-3xl font-medium mb-4">
                        Experience the Dr. Neo Difference
                      </h3>
                      <p className="text-white/90">
                        Our advanced techniques and personalized care ensure
                        exceptional results and a comfortable experience.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Treatment Content - Two column layout for better readability */}
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
              {/* Main Content - with premium styling */}
              <div className="lg:w-2/3">
                {/* Mobile Hero Image - Only shown on mobile */}
                {isMobile && (
                  <motion.div
                    key={`mobile-hero-${selectedTreatment.id}`}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <LazyImage
                      src={selectedTreatment.heroImage}
                      alt={selectedTreatment.title}
                      className="w-full h-64"
                      objectFit="cover"
                      placeholderColor="#f1efe9"
                    />
                  </motion.div>
                )}

                {/* Description - Premium typography */}
                <motion.div
                  key={`description-${selectedTreatment.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="mb-16"
                >
                  <p className="text-xl md:text-2xl text-[#625046] leading-relaxed mb-8">
                    {selectedTreatment.longDescription}
                  </p>

                  {!isMobile && (
                    <div className="grid grid-cols-2 gap-8 mt-12 bg-[#faf8f6] p-8 rounded-2xl">
                      <div>
                        <h4 className="text-lg font-medium text-[#A87B23] mb-3">
                          Procedure Time
                        </h4>
                        <p className="text-[#625046] text-2xl">
                          {selectedTreatment.timeEstimate}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-lg font-medium text-[#A87B23] mb-3">
                          Recovery Period
                        </h4>
                        <p className="text-[#625046] text-2xl">
                          {selectedTreatment.recoveryTime}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* Benefits Section - Apple-style cards */}
                <motion.div
                  className="mb-16"
                  key={`benefits-${selectedTreatment.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h3 className="text-2xl md:text-3xl font-normal text-[#625046] mb-8">
                    Key Benefits
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {selectedTreatment.benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * index + 0.4 }}
                      >
                        <div className="bg-[#A87B23]/10 rounded-full p-2 w-10 h-10 flex items-center justify-center mb-4">
                          <Check className="text-[#A87B23] w-5 h-5" />
                        </div>
                        <p className="text-[#625046] font-medium text-lg">
                          {benefit}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* FAQ Section - Premium accordion style */}
                <motion.div
                  className="mb-16"
                  key={`faq-${selectedTreatment.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <h3 className="text-2xl md:text-3xl font-normal text-[#625046] mb-8">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-4 bg-white rounded-2xl shadow-sm overflow-hidden">
                    {selectedTreatment.faq.map((item, index) => (
                      <div
                        key={index}
                        className={`border-b border-[#f0f0f0] last:border-b-0 transition-all duration-300 ${
                          expandedFaq === index ? "bg-[#faf9f7]" : ""
                        }`}
                      >
                        <button
                          className="flex justify-between items-center w-full p-6 text-left transition-colors"
                          onClick={() => toggleFaq(index)}
                        >
                          <span className="font-medium text-[#625046] text-lg">
                            {item.question}
                          </span>
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                              expandedFaq === index
                                ? "bg-[#A87B23] rotate-45"
                                : "bg-[#f5f5f7]"
                            }`}
                          >
                            <PlusCircle
                              className={`w-5 h-5 ${
                                expandedFaq === index
                                  ? "text-white"
                                  : "text-[#625046]"
                              }`}
                            />
                          </div>
                        </button>
                        {expandedFaq === index && (
                          <motion.div
                            className="px-6 pb-6"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            transition={{ duration: 0.3 }}
                          >
                            <p className="text-[#625046]/90 text-base leading-relaxed">
                              {item.answer}
                            </p>
                          </motion.div>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Sidebar - Premium styled */}
              <div className="lg:w-1/3">
                <motion.div
                  className="bg-white rounded-2xl shadow-lg overflow-hidden sticky top-24"
                  key={`sidebar-${selectedTreatment.id}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="relative h-12 bg-gradient-to-r from-[#A87B23] to-[#d0a542]">
                    <div className="absolute -bottom-6 left-8 bg-white rounded-full p-3 shadow-md">
                      <div className="bg-[#A87B23] rounded-full p-3">
                        <Calendar className="text-white w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  <div className="p-8 pt-12">
                    <h3 className="text-xl font-medium text-[#625046] mb-6 pb-4 border-b border-[#e5e5e5]">
                      Treatment Summary
                    </h3>

                    {/* Price - Premium display */}
                    <div className="mb-8">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[#625046] font-medium">
                          Starting Price
                        </span>
                        <span className="text-xl font-medium text-[#A87B23]">
                          {selectedTreatment.pricing}
                        </span>
                      </div>
                      <div className="bg-[#f9f9f9] p-4 rounded-xl">
                        <p className="text-sm text-[#625046]/80">
                          Pricing varies based on individual treatment needs.
                          Schedule a consultation for an accurate quote tailored
                          to your specific requirements.
                        </p>
                      </div>
                    </div>

                    {/* Features - Apple-style list */}
                    <div className="mb-8">
                      <h4 className="text-lg font-medium text-[#625046] mb-5">
                        Key Features
                      </h4>
                      <ul className="space-y-4">
                        {selectedTreatment.features
                          .slice(0, 5)
                          .map((feature, index) => (
                            <motion.li
                              key={index}
                              className="flex items-start gap-3"
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.3,
                                delay: 0.05 * index,
                              }}
                            >
                              <div className="bg-[#A87B23]/10 rounded-full p-1 mt-0.5 shrink-0">
                                <Check className="text-[#A87B23] w-3 h-3" />
                              </div>
                              <span className="text-[#625046]">{feature}</span>
                            </motion.li>
                          ))}
                      </ul>
                    </div>

                    {/* CTAs - Premium styling */}
                    <div className="space-y-4">
                      <Button
                        className="w-full bg-[#141414] text-white hover:bg-[#2a2a2a] font-medium py-4 h-auto rounded-full transition-all hover:shadow-lg"
                        onClick={() => smoothScrollTo("consultation")}
                      >
                        Book Consultation
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full border-[#a87b23] text-[#a87b23] hover:bg-[#a87b23] hover:text-white font-medium py-4 h-auto rounded-full transition-all"
                        onClick={() =>
                          (window.location.href = `tel:${encodeURIComponent("(949) 570-0500")}`)
                        }
                      >
                        Call (949) 570-0500
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Bottom Navigation - Premium styling */}
            <div className="mt-24 pt-8 border-t border-[#e5e5e5] flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center justify-between w-full md:w-auto gap-4">
                <Button
                  variant="ghost"
                  className="text-[#625046] hover:text-[#A87B23] hover:bg-[#A87B23]/10 flex items-center gap-2 px-5 py-3 h-auto rounded-full transition-all"
                  onClick={() => {
                    const currentIndex = treatments.findIndex(
                      (t) => t.id === selectedTreatment.id,
                    );
                    const prevIndex =
                      currentIndex > 0
                        ? currentIndex - 1
                        : treatments.length - 1;
                    setSelectedTreatment(treatments[prevIndex]);
                    setExpandedFaq(null);
                    window.scrollTo({
                      top: detailsSectionRef.current?.offsetTop,
                      behavior: "smooth",
                    });
                  }}
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="hidden md:inline">Previous Treatment</span>
                </Button>
                <Button
                  variant="ghost"
                  className="text-[#625046] hover:text-[#A87B23] hover:bg-[#A87B23]/10 flex items-center gap-2 px-5 py-3 h-auto rounded-full transition-all"
                  onClick={() => {
                    const currentIndex = treatments.findIndex(
                      (t) => t.id === selectedTreatment.id,
                    );
                    const nextIndex =
                      currentIndex < treatments.length - 1
                        ? currentIndex + 1
                        : 0;
                    setSelectedTreatment(treatments[nextIndex]);
                    setExpandedFaq(null);
                    window.scrollTo({
                      top: detailsSectionRef.current?.offsetTop,
                      behavior: "smooth",
                    });
                  }}
                >
                  <span className="hidden md:inline">Next Treatment</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

              {!isMobile && (
                <motion.div
                  className="bg-[#f8f8fa] px-6 py-3 rounded-full flex items-center gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <span className="text-[#625046] text-sm">
                    Share this treatment:
                  </span>
                  <div className="flex items-center gap-2">
                    {["Twitter", "Facebook", "Email"].map((platform) => (
                      <Button
                        key={platform}
                        variant="ghost"
                        size="sm"
                        className="h-8 px-3 rounded-full text-[#625046] hover:text-[#A87B23] hover:bg-[#A87B23]/10"
                      >
                        {platform}
                      </Button>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Consultation CTA Section */}
      <div
        id="consultation"
        className="bg-[#f5f5f7] py-20 lg:py-32 relative overflow-hidden scroll-mt-24"
      >
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#A87B23]/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#A87B23]/3 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-screen-xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 p-10 lg:p-16">
                  <h2 className="text-3xl lg:text-4xl font-normal text-[#625046] mb-6">
                    Ready to Transform Your Hair?
                  </h2>
                  <p className="text-lg text-[#625046]/90 mb-8">
                    Schedule a consultation with our experts to discuss your
                    hair goals and create a personalized treatment plan.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#A87B23]/10 rounded-full p-2 shrink-0">
                        <Check className="text-[#A87B23] w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-medium text-[#625046]">
                          Personalized Assessment
                        </h4>
                        <p className="text-[#625046]/80">
                          Comprehensive evaluation of your hair and scalp
                          condition
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-[#A87B23]/10 rounded-full p-2 shrink-0">
                        <Check className="text-[#A87B23] w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-medium text-[#625046]">
                          Custom Treatment Plan
                        </h4>
                        <p className="text-[#625046]/80">
                          Tailored recommendations based on your specific needs
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-[#A87B23]/10 rounded-full p-2 shrink-0">
                        <Check className="text-[#A87B23] w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-medium text-[#625046]">
                          Transparent Pricing
                        </h4>
                        <p className="text-[#625046]/80">
                          Clear explanation of costs with no hidden fees
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-10 space-y-4">
                    <Button
                      className="w-full md:w-auto bg-[#141414] text-white hover:bg-[#2a2a2a] text-lg font-medium px-8 py-3 h-auto rounded-full transition-all hover:shadow-lg"
                      onClick={() =>
                        (window.location.href =
                          "https://calendly.com/drneo/consultation")
                      }
                    >
                      Book Online
                    </Button>
                    <div className="flex items-center justify-center md:justify-start gap-2 text-[#625046]">
                      <span>or call us at</span>
                      <a
                        href="tel:(949) 570-0500"
                        className="font-medium text-[#A87B23] hover:underline"
                      >
                        (949) 570-0500
                      </a>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 bg-[#f8f8fa] flex items-center justify-center p-10 lg:p-0">
                  <img
                    src="/assets/HERO IMAGE HAIR EXAM.png"
                    alt="Dr. Neo consultation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
