import { useState, useRef, useEffect, useCallback } from "react";
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
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useIsMobile } from "@/hooks/use-mobile";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { smoothScrollTo } from "@/lib/utils";
import { LazyImage } from "@/components/ui/lazy-image";
import TreatmentDetails from "@/components/ui/treatment-details";

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

// Premium treatment card component
const TreatmentCard = ({
  treatment,
  isSelected,
  onClick,
  priority = false,
}: {
  treatment: (typeof treatments)[0];
  isSelected: boolean;
  onClick: () => void;
  priority?: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`group relative rounded-2xl overflow-hidden flex flex-col justify- bg-white shadow-sm hover:shadow-xl transition-all duration-500 bg-shimmer ${
        isSelected ? "ring-2 ring-[#A87B23] transform scale-[1.02]" : ""
      }`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      whileHover={{
        y: -8,
        boxShadow: "0 20px 30px -12px rgba(0, 0, 0, 0.1)",
        scale: 1.01,
        transition: {
          duration: 0.3,
          type: "spring",
          stiffness: 300,
          damping: 25,
        },
      }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      layout
    >
      {/* Premium accent border */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#A87B23] via-[#D4AF37] to-[#A87B23]"
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: isSelected || isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />

      <div className="relative h-52 overflow-hidden">
        <LazyImage
          src={treatment.image}
          alt={treatment.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:filter group-hover:brightness-105"
          placeholderColor="#f5f5f5"
          priority={priority}
        />
        {treatment.featured && (
          <div className="absolute top-4 left-4 bg-gradient-to-r from-[#A87B23] to-[#D4AF37] text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              Featured
            </motion.span>
          </div>
        )}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Hover content overlay */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-[#A87B23] font-medium"
            initial={{ y: 20 }}
            animate={{ y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            View Details
          </motion.div>
        </motion.div>
      </div>

      <div className="p-6 flex flex-col h-full justify-between">
        <div>
          <div className="flex flex-col justify-between items-start mb-4 gap-2">
            <motion.h3
              className="text-xl font-medium text-[#625046] group-hover:text-[#A87B23] transition-colors gold-accent"
              animate={{
                color: isHovered ? "#A87B23" : "#625046",
              }}
              transition={{ duration: 0.3 }}
            >
              {treatment.title}
            </motion.h3>
            <motion.div
              className="text-[#A87B23] text-sm font-medium px-0 py-1 rounded-full whitespace-nowrap"
              animate={{
                backgroundColor: isHovered
                  ? "rgba(168, 123, 35, 0.1)"
                  : "rgba(168, 123, 35, 0)",
              }}
              transition={{ duration: 0.3 }}
            >
              {treatment.pricing}
            </motion.div>
          </div>

          <p className="text-[#625046]/80 mb-6 line-clamp-3">
            {treatment.description}
          </p>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center text-sm text-[#625046]/70">
            <motion.div
              animate={{ rotate: isHovered ? 360 : 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <Clock className="w-4 h-4 mr-1 text-[#A87B23]" />
            </motion.div>
            <span>{treatment.timeEstimate}</span>
          </div>
          <motion.div
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 premium-button overflow-hidden ${
              isSelected
                ? "bg-[#A87B23] text-white"
                : "bg-white text-[#625046] border border-gray-200 group-hover:bg-[#A87B23] group-hover:text-white group-hover:border-transparent"
            }`}
            animate={{
              backgroundColor: isSelected
                ? "#A87B23"
                : isHovered
                  ? "#A87B23"
                  : "#ffffff",
              color: isSelected || isHovered ? "#ffffff" : "#625046",
              borderColor:
                isSelected || isHovered
                  ? "transparent"
                  : "rgba(229, 231, 235, 1)",
            }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Details
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// Grid item component with premium interactions
const GridItem = ({
  treatment,
  isSelected,
  onClick,
}: {
  treatment: (typeof treatments)[0];
  isSelected: boolean;
  onClick: () => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`border-b border-gray-100 last:border-b-0 transition-all duration-300 relative ${
        isSelected
          ? "bg-gradient-to-r from-[#faf9f7] to-[#ffffff]"
          : isHovered
            ? "bg-[#fafafa]"
            : "bg-white"
      }`}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      layout
    >
      {/* Left accent border for selected item */}
      {isSelected && (
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#A87B23] to-[#D4AF37]"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}

      <button
        className="w-full flex items-center gap-6 p-6 text-left transition-all relative"
        onClick={onClick}
      >
        <motion.div
          className="w-16 h-16 rounded-full overflow-hidden shrink-0 bg-[#f5f5f7] border-2 transition-all duration-300"
          style={{
            borderColor: isSelected
              ? "#A87B23"
              : isHovered
                ? "rgba(168, 123, 35, 0.3)"
                : "transparent",
            boxShadow: isSelected
              ? "0 0 15px rgba(168, 123, 35, 0.2)"
              : isHovered
                ? "0 4px 12px rgba(0, 0, 0, 0.1)"
                : "none",
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <LazyImage
            src={treatment.image}
            alt={treatment.title}
            className="w-full h-full object-cover transition-all duration-500"
            style={{
              filter: isSelected ? "brightness(1.1)" : "none",
              transform: isHovered ? "scale(1.1)" : "scale(1)",
            }}
            placeholderColor="#f5f5f5"
          />
        </motion.div>

        <div className="flex-1">
          <motion.h3
            className={`text-lg font-medium mb-1 transition-colors gold-accent ${
              isSelected
                ? "text-[#A87B23]"
                : isHovered
                  ? "text-[#886218]"
                  : "text-[#625046]"
            }`}
            animate={{
              y: isHovered && !isSelected ? -2 : 0,
            }}
            transition={{ duration: 0.2 }}
          >
            {treatment.title}
            {treatment.featured && (
              <motion.span
                className="ml-2 inline-flex items-center px-2 py-0.5 text-xs rounded-full bg-[#A87B23]/10 text-[#A87B23]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                Featured
              </motion.span>
            )}
          </motion.h3>
          <motion.p
            className="text-sm text-[#625046]/70 line-clamp-1"
            animate={{
              opacity: isHovered ? 0.9 : 0.7,
            }}
          >
            {treatment.description}
          </motion.p>
        </div>

        <div className="flex items-center shrink-0 gap-8">
          <div className="hidden md:flex items-center gap-6">
            <motion.div
              className="flex items-center text-sm text-[#625046]/70"
              animate={{
                x: isHovered ? -2 : 0,
              }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                animate={{
                  rotate: isHovered ? 360 : 0,
                }}
                transition={{ duration: 0.7 }}
              >
                <Clock className="w-4 h-4 mr-1 text-[#A87B23]" />
              </motion.div>
              <span>{treatment.timeEstimate}</span>
            </motion.div>

            <motion.span
              className="text-[#A87B23] text-sm font-medium px-2 py-1 rounded-full"
              animate={{
                backgroundColor: isHovered
                  ? "rgba(168, 123, 35, 0.1)"
                  : "transparent",
              }}
              transition={{ duration: 0.3 }}
            >
              {treatment.pricing}
            </motion.span>
          </div>

          <motion.div
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
              isSelected
                ? "bg-[#A87B23] text-white"
                : isHovered
                  ? "bg-[#A87B23] text-white"
                  : "bg-[#f5f5f7] text-[#625046]"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              x: isHovered && !isSelected ? 3 : 0,
              backgroundColor: isSelected
                ? "#A87B23"
                : isHovered
                  ? "#A87B23"
                  : "#f5f5f7",
              color: isSelected || isHovered ? "#ffffff" : "#625046",
            }}
            transition={{ duration: 0.2 }}
          >
            <ChevronRight className="w-4 h-4" />
          </motion.div>
        </div>
      </button>
    </motion.div>
  );
};

// Main page component
export default function TreatmentsPremium() {
  const [selectedTreatment, setSelectedTreatment] = useState(treatments[0]);
  const [viewMode, setViewMode] = useState<"grid" | "featured">("featured");
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const treatmentSectionRef = useRef<HTMLDivElement>(null);
  const detailsSectionRef = useRef<HTMLDivElement>(null);
  const consultationSectionRef = useRef<HTMLDivElement>(null);

  const isMobile = useIsMobile();

  // Section visibility tracking
  const isHeroVisible = useIntersectionObserver({
    ref: heroRef,
    threshold: 0.2,
    rootMargin: "0px",
    triggerOnce: false,
  });

  const isTreatmentSectionVisible = useIntersectionObserver({
    ref: treatmentSectionRef,
    threshold: 0.1,
    rootMargin: "0px",
    triggerOnce: false,
  });

  // Handle treatment selection
  const handleTreatmentSelect = useCallback(
    (treatment: (typeof treatments)[0]) => {
      setSelectedTreatment(treatment);
      smoothScrollTo("treatment-details");
    },
    [],
  );

  // Mobile fullscreen details view
  const toggleFullscreenDetails = useCallback(() => {
    setIsFullscreenOpen((prev) => !prev);
  }, []);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);

    // Delay setting page loaded for smoother animations
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Prevent body scroll when fullscreen is open
  useEffect(() => {
    if (isFullscreenOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isFullscreenOpen]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <SiteHeader />

      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative bg-gradient-to-r from-[#f5f5f5] to-[#fafafa] pt-24 pb-16 overflow-hidden"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              <div className="w-full lg:w-1/2 order-2 lg:order-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isPageLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#625046] mb-4 lg:mb-8 leading-tight">
                    Advanced Hair Restoration Treatments
                  </h1>
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
                </motion.div>
              </div>
              <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isPageLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.8, delay: 0.4 }}
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
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-[#A87B23]/5 blur-3xl"></div>
        <div className="absolute bottom-40 left-0 w-72 h-72 rounded-full bg-[#A87B23]/3 blur-3xl"></div>
      </div>

      {/* Treatment Selection Section */}
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

              {/* Enhanced Premium View Toggle */}
              <motion.div
                className="hidden md:flex bg-white/90 backdrop-blur-sm p-1.5 rounded-full shadow-md border border-gray-100 overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={
                  isTreatmentSectionVisible
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.95 }
                }
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ boxShadow: "0 8px 20px rgba(0, 0, 0, 0.07)" }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#f9f7f3] via-white to-[#f8f6f2] opacity-50"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "loop" as const,
                  }}
                />

                <motion.button
                  className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden ${
                    viewMode === "featured"
                      ? "bg-gradient-to-r from-[#A87B23] to-[#C99D34] text-white shadow-sm"
                      : "text-[#625046] hover:bg-[#f7f5f1]"
                  }`}
                  onClick={() => setViewMode("featured")}
                  aria-label="Featured view"
                  whileHover={{ scale: viewMode !== "featured" ? 1.05 : 1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {viewMode === "featured" && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#A87B23]/0 via-[#ffffff]/10 to-[#A87B23]/0"
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop" as const,
                        ease: "linear",
                      }}
                    />
                  )}
                  <motion.div
                    animate={{
                      rotate: viewMode === "featured" ? [0, 15, -15, 0] : 0,
                    }}
                    transition={{
                      duration: 2,
                      repeat: viewMode === "featured" ? Infinity : 0,
                      repeatDelay: 3,
                    }}
                  >
                    <Sparkles className="w-4.5 h-4.5" />
                  </motion.div>
                  <span className="hidden sm:inline">Featured</span>
                </motion.button>

                <motion.button
                  className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden ${
                    viewMode === "grid"
                      ? "bg-gradient-to-r from-[#A87B23] to-[#C99D34] text-white shadow-sm"
                      : "text-[#625046] hover:bg-[#f7f5f1]"
                  }`}
                  onClick={() => setViewMode("grid")}
                  aria-label="List view"
                  whileHover={{ scale: viewMode !== "grid" ? 1.05 : 1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {viewMode === "grid" && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#A87B23]/0 via-[#ffffff]/10 to-[#A87B23]/0"
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop" as const,
                        ease: "linear",
                      }}
                    />
                  )}
                  <LayoutGrid className="w-4.5 h-4.5" />
                  <span className="hidden sm:inline">All</span>
                </motion.button>
              </motion.div>
            </div>

            {/* Mobile View */}
            {isMobile && (
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
                          toggleFullscreenDetails();
                        }}
                      >
                        <LazyImage
                          src={treatment.image}
                          alt={treatment.title}
                          className="absolute inset-0"
                          objectFit="cover"
                          placeholderColor="#f5f5f5"
                          priority={index < 2}
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
                              toggleFullscreenDetails();
                            }}
                          >
                            Details
                            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Desktop Featured View */}
            {!isMobile && viewMode === "featured" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                  {treatments.map((treatment, index) => (
                    <TreatmentCard
                      key={treatment.id}
                      treatment={treatment}
                      isSelected={selectedTreatment.id === treatment.id}
                      onClick={() => handleTreatmentSelect(treatment)}
                      priority={index < 3}
                    />
                  ))}
                </AnimatePresence>
              </div>
            )}

            {/* Desktop Grid View */}
            {!isMobile && viewMode === "grid" && (
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <AnimatePresence>
                  {treatments.map((treatment) => (
                    <GridItem
                      key={treatment.id}
                      treatment={treatment}
                      isSelected={selectedTreatment.id === treatment.id}
                      onClick={() => handleTreatmentSelect(treatment)}
                    />
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Treatment Details - Desktop Section */}
      {!isMobile && (
        <div
          id="treatment-details"
          ref={detailsSectionRef}
          className="py-16 lg:py-32 scroll-mt-16 overflow-hidden"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-screen-xl mx-auto">
              {/* Treatment Header */}
              <AnimatePresence mode="wait">
                <motion.div
                  className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 lg:mb-24"
                  key={`header-${selectedTreatment.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
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
              </AnimatePresence>

              {/* Hero Banner */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`hero-${selectedTreatment.id}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.8 }}
                  className="mb-24 relative overflow-hidden rounded-3xl shadow-2xl"
                >
                  <div className="relative aspect-[21/9] overflow-hidden">
                    <LazyImage
                      src={selectedTreatment.heroImage}
                      alt={selectedTreatment.title}
                      className="w-full h-full object-cover"
                      placeholderColor="#f5f5f5"
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
              </AnimatePresence>

              {/* Enhanced Treatment Details Component */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`details-${selectedTreatment.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col lg:flex-row gap-12 lg:gap-24"
                >
                  {/* Main Content */}
                  <div className="lg:w-2/3">
                    <TreatmentDetails
                      treatment={selectedTreatment}
                      isMobile={isMobile}
                    />
                  </div>

                  {/* Sidebar with pricing and features */}
                  <div className="lg:w-1/3">
                    <motion.div
                      className="bg-white rounded-2xl shadow-lg overflow-hidden sticky top-24"
                      key={`sidebar-${selectedTreatment.id}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.6 }}
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

                        {/* Pricing */}
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
                              Pricing varies based on individual treatment
                              needs. Schedule a consultation for an accurate
                              quote tailored to your specific requirements.
                            </p>
                          </div>
                        </div>

                        {/* Features */}
                        <div className="mb-8">
                          <h4 className="text-lg font-medium text-[#625046] mb-5">
                            Key Features
                          </h4>
                          <ul className="space-y-4">
                            {selectedTreatment.features.map(
                              (feature, index) => (
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
                                  <span className="text-[#625046]">
                                    {feature}
                                  </span>
                                </motion.li>
                              ),
                            )}
                          </ul>
                        </div>

                        {/* CTAs */}
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
                </motion.div>
              </AnimatePresence>

              {/* Treatment Navigation */}
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
                      window.scrollTo({
                        top: detailsSectionRef.current?.offsetTop || 0,
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
                      window.scrollTo({
                        top: detailsSectionRef.current?.offsetTop || 0,
                        behavior: "smooth",
                      });
                    }}
                  >
                    <span className="hidden md:inline">Next Treatment</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Fullscreen Details Modal */}
      <AnimatePresence>
        {isMobile && isFullscreenOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-50 overflow-y-auto"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="sticky top-0 bg-white z-10 border-b border-gray-100">
              <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h2 className="text-xl font-medium text-[#625046]">
                  {selectedTreatment.title}
                </h2>
                <button
                  onClick={toggleFullscreenDetails}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-[#f5f5f7] text-[#625046]"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="container mx-auto px-4 py-6">
              <LazyImage
                src={selectedTreatment.heroImage}
                alt={selectedTreatment.title}
                className="w-full h-60 object-cover rounded-2xl mb-8"
                priority={true}
              />

              <div className="mb-8">
                <div className="flex justify-between mb-4">
                  <span className="text-[#625046] font-medium">Price</span>
                  <span className="text-xl font-medium text-[#A87B23]">
                    {selectedTreatment.pricing}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-1 text-[#625046]/70">
                    <Clock className="w-4 h-4 text-[#A87B23]" />
                    <span>{selectedTreatment.timeEstimate}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#625046]/70">
                    <Calendar className="w-4 h-4 text-[#A87B23]" />
                    <span>{selectedTreatment.recoveryTime}</span>
                  </div>
                </div>
              </div>

              <TreatmentDetails treatment={selectedTreatment} isMobile={true} />

              <div className="sticky bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4">
                <div className="flex gap-4">
                  <Button
                    className="flex-1 bg-[#A87B23] hover:bg-[#8a6015] text-white font-medium py-3 h-auto rounded-full transition-all"
                    onClick={() => {
                      toggleFullscreenDetails();
                      setTimeout(() => smoothScrollTo("consultation"), 300);
                    }}
                  >
                    Book Now
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-[#a87b23] text-[#a87b23] hover:bg-[#a87b23] hover:text-white font-medium py-3 h-auto rounded-full transition-all"
                    onClick={() => {
                      toggleFullscreenDetails();
                      window.location.href = `tel:${encodeURIComponent("(949) 570-0500")}`;
                    }}
                  >
                    Call Us
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Consultation Section */}
      <div
        id="consultation"
        ref={consultationSectionRef}
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
                <div className="md:w-1/2 bg-[#f8f8fa] flex items-center justify-center p-10 lg:p-0 overflow-hidden">
                  <LazyImage
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
