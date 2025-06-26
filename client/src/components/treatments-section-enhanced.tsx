import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { smoothScrollTo } from "@/lib/utils";
import goldTweezerPath from "@assets/gold.png";
import hairBrushImage from "@assets/7.png";
import hairLossImage from "@assets/9.png";
import ProductModal from "./ui/modal";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Treatment data with Apple-inspired structure
const treatments = [
  {
    id: 1,
    title: "FUE Hair Transplant",
    subtitle: "Precision follicle extraction",
    description:
      "Advanced microsurgical technique for natural hair restoration",
    features: ["Minimally invasive", "No linear scarring", "Natural results"],
    gradient: "from-[#0071e3] to-[#005bb5]",
    image: hairBrushImage,
  },
  {
    id: 2,
    title: "Microneedling with PRP",
    subtitle: "Regenerative therapy",
    description: "Stimulate natural growth with your body's healing factors",
    features: ["Natural healing", "Improved density", "Enhanced circulation"],
    gradient: "from-[#ba62fc] to-[#9f4df7]",
    image: hairLossImage,
  },
];

export default function TreatmentsSectionEnhanced() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [triggerElement, setTriggerElement] = useState<HTMLElement | null>(
    null,
  );
  const [productType, setProductType] = useState("fue");
  const handleOpenModal = (productType: string) => {
    setProductType(productType);
    setIsModalOpen(true);
  };
  return (
    <>
      <ProductModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        productType={productType}
        triggerElement={triggerElement}
      />

      {/* Mobile version - keep exactly the same as current */}

      {/* Desktop version - Apple-inspired design with ultra-realistic floating visuals */}
      <div className="hidden md:block">
        <section id="treatments-section" className="bg-white py-16">
          <div className="max-w-[1200px] mx-auto px-8">
            <div className="text-center mb-16">
              <motion.div
                className="inline-block mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-[11px] font-medium text-[#625046] uppercase tracking-[0.5px] bg-[#FAE151]/10 px-4 py-2 rounded-full border border-[#FAE151]/20">
                  Dr. Neo Technology
                </span>
              </motion.div>

              <motion.h1
                className="text-[48px] md:text-[64px] font-semibold leading-[1.1] tracking-[-0.02em] text-[#1d1d1f] mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                Advanced Treatments
              </motion.h1>

              <motion.p
                className="text-[21px] md:text-2xl font-normal text-[#86868b] max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Revolutionary hair restoration solutions designed for lasting
                transformation
              </motion.p>
            </div>
          </div>
          {/* Hero Treatment Section - FUE with floating product visual */}
          <div className="w-full h-[692px] bg-[#f5f5f7] relative overflow-hidden">
            <div className="absolute inset-0 flex justify-center items-center"></div>

            {/* Content overlay */}
            <div className="relative z-30 h-full flex flex-col justify-between p-16">
              <div className="text-center">
                <motion.h2
                  className="text-[56px] font-semibold leading-[60px] tracking-[-0.28px] text-[#1d1d1f] mb-2"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  FUE Hair Transplant
                </motion.h2>

                <motion.p
                  className="text-[28px] font-normal leading-8 tracking-[0.196px] text-[#1d1d1f] mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  The medical standard for high-survivability hair transplants.
                </motion.p>

                <motion.p
                  className="text-[21px] md:text-2xl font-medium leading-[25px] text-center mb-8 bg-gradient-to-r   from-[#F5BD02] via-[#EDB930] to-[#FAE151] bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Built for lasting transformation
                </motion.p>
                <div className="flex mb-6 items-center justify-center gap-6">
                  <motion.button
                    className="custom-button px-8 py-4 rounded-full text-[17px] font-normal leading-5 tracking-[-0.374px]"
                    onClick={() => smoothScrollTo("contact")}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 30px rgba(0,113,227,0.3)",
                    }}
                  >
                    View Results
                  </motion.button>

                  <motion.button
                    className="border border-[#06c]  px-8 py-4 rounded-full text-[17px]  custom-button-outline font-normal leading-5 tracking-[-0.374px]"
                    onClick={() => window.open("/treatments", "_blank")}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    View Details
                  </motion.button>
                </div>
              </div>

              {/* Bottom CTA buttons */}

              <img
                src={goldTweezerPath}
                alt="FUE Hair Transplant Procedure"
                className="w-[50%] h-[50%] mx-auto object-contain drop-shadow-2xl absolute bottom-0 left-1/2 transform -translate-x-1/2"
                style={{
                  zIndex: -1,
                  filter: "contrast(1.1) saturate(1.1) brightness(1.05)",

                  maxWidth: "300px",
                  maxHeight: "300px",
                }}
              />
            </div>

            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#f5f5f7] via-[#fafafa] to-[#f0f0f0]" />
          </div>

          {/* PRP Treatment Section with floating microneedling pen */}
          <div className="w-full h-[692px] bg-white relative overflow-hidden">
            <div className="absolute inset-0 flex justify-center items-center">
              {/* Ultra-realistic floating microneedling pen */}
            </div>

            {/* Content overlay */}
            <div className="relative z-30 h-full flex flex-col justify-between p-16">
              <div className="text-center">
                <motion.h2
                  className="text-[56px] font-semibold leading-[60px] tracking-[-0.28px] text-[#1d1d1f] mb-2"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Microneedling
                </motion.h2>

                <motion.p
                  className="text-[28px] font-normal leading-8 tracking-[0.196px] text-[#1d1d1f] mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  The cost-effective hair growth solution
                </motion.p>

                <motion.p
                  className="text-[21px] md:text-2xl font-medium leading-[25px] text-center mb-8  hover:text-[#8a6015]
                  bg-gradient-to-r   from-[#F5BD02] via-[#EDB930] to-[#FAE151] bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  Built for regenerative healing
                </motion.p>
                <div className="flex items-center justify-center gap-6">
                  <motion.button
                    className="custom-button  px-8 py-4 rounded-full text-[17px] font-normal leading-5 tracking-[-0.374px]"
                    onClick={() => smoothScrollTo("contact")}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    whileHover={{
                      scale: 1.05,
                      zIndex: -1,

                      boxShadow: "0 10px 30px rgba(186,98,252,0.3)",
                    }}
                  >
                    Learn More
                  </motion.button>

                  <motion.button
                    className="border border-[#ba62fc] text-[#ba62fc] px-8 py-4 rounded-full text-[17px] font-normal leading-5 tracking-[-0.374px] custom-button-outline"
                    onClick={() => window.open("/treatments", "_blank")}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.3 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    View Details
                  </motion.button>
                </div>
              </div>
              <img
                src="/assets/home/micro.png.PNG"
                alt="Microneedling with PRP"
                className="w-[80%] h-[80%] min-w-md max-w-md mx-auto object-contain drop-shadow-2xl"
                style={{
                  filter: "contrast(1.15) saturate(1.2) brightness(1.1)",
                  transform: "perspective(1000px) rotateX(-5deg) rotateY(8deg)",
                }}
              />
            </div>
          </div>

          {/* Premium Apple-Style Treatment Showcase */}
          <div className="w-full bg-[#f5f5f7] py-20">
            <div className="max-w-[1400px] mx-auto px-8">
              {/* Minimal Apple header */}
              <div className="text-center mb-16">
                <motion.h2
                  className="text-[48px] md:text-[56px] font-semibold leading-[52px] tracking-[-0.3px] text-[#1d1d1f] mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Hair Restoration
                </motion.h2>
                <motion.p
                  className="text-[21px] md:text-2xl font-[600] bg-gradient-to-r   from-[#625046] via-[#EDB930] to-[#FAE151] bg-clip-text text-transparent font-normal"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  Advanced treatments. Take your pick.
                </motion.p>
              </div>

              {/* Apple iPhone-style horizontal scroll showcase */}
              <div className="mb-16 -mx-8 relative">
                {/* Scroll indicators */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                  <div className="w-8 h-32 bg-gradient-to-r from-[#f5f5f7] to-transparent"></div>
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                  <div className="w-8 h-32 bg-gradient-to-l from-[#f5f5f7] to-transparent"></div>
                </div>

                {/* Navigation arrows */}
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full border border-gray-200/50 flex items-center justify-center hover:bg-white transition-colors"
                  aria-label="Scroll Left"
                  onClick={() => {
                    const container = document.querySelector(
                      ".horizontal-scroll-container",
                    );
                    if (container)
                      container.scrollBy({ left: -320, behavior: "smooth" });
                  }}
                >
                  <ChevronLeft className="w-5 h-5 text-[#86868b]" />
                  <span className="sr-only">Scroll Left</span>
                </button>

                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full border border-gray-200/50 flex items-center justify-center hover:bg-white transition-colors"
                  aria-label="Scroll Right"
                  onClick={() => {
                    const container = document.querySelector(
                      ".horizontal-scroll-container",
                    );
                    if (container)
                      container.scrollBy({ left: 320, behavior: "smooth" });
                  }}
                >
                  <ChevronRight className="w-5 h-5 text-[#86868b]" />
                  <span className="sr-only">Scroll Right</span>
                </button>

                {/* Scroll hint indicator */}
                <div className="absolute  hidden right-16 top-4 z-20 flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1.5 border border-gray-200/50">
                  <span className="text-[14px] text-[#76767E] font-medium">
                    Scroll
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-[#86868b]"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>

                {/* Horizontal scrolling container with proper overflow */}
                <div
                  className="horizontal-scroll-container flex gap-6 overflow-x-auto px-8 pb-4 scrollbar-hide scroll-smooth"
                  style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    WebkitOverflowScrolling: "touch",
                    scrollBehavior: "smooth",
                  }}
                >
                  {/* FUE Hair Transplant Card */}
                  <motion.div
                    className="flex-none w-[320px] bg-white rounded-[18px] border border-[#e5e5e7] overflow-hidden group cursor-pointer"
                    tabIndex={0}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                    }}
                  >
                    {/* Content with consistent padding */}
                    <div className="p-8">
                      {/* Brand line with Dr. Neo colors */}
                      <div className="text-center mb-2">
                        <span className="text-[11px] font-medium text-[#625046] uppercase tracking-[0.5px]">
                          Dr. Neo Technology
                        </span>
                      </div>

                      {/* Product name */}
                      <h2 className="text-[24px] font-semibold text-[#1d1d1f] mb-8 leading-[28px] text-center h-24 flex items-center justify-center">
                        FUE Hair Transplant &<br />
                        FUE Hair Transplant Plus
                      </h2>

                      {/* Isolated product visual with consistent height */}
                      <div className="h-[200px] flex items-center justify-center mb-6 relative">
                        <motion.img
                          src={goldTweezerPath}
                          alt="FUE Hair Transplant"
                          className="w-44 h-44 object-contain group-hover:scale-105 transition-transform duration-500"
                          style={{
                            filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.1))",
                          }}
                        />
                      </div>

                      {/* Color options with Dr. Neo brand colors */}
                      <div className="flex justify-center gap-2 mb-6">
                        <div className="w-3 h-3 rounded-full bg-[#A87B23] border border-[#d2d2d7]" />
                        <div className="w-3 h-3 rounded-full bg-[#625046] border border-[#d2d2d7]" />
                        <div className="w-3 h-3 rounded-full bg-[#FAE151] border border-[#d2d2d7]" />
                      </div>

                      {/* Clean pricing with consistent height */}
                      <div className="text-center mb-4 min-h-[40px]">
                        <p className="text-[14px] text-[#76767E]">
                          From $3999 or $41.62/mo. for 24 mo.*
                        </p>
                      </div>

                      {/* Dr. Neo brand button - aligned consistently */}
                      <div className="flex justify-center">
                        <motion.button
                          className="px-6 py-2.5 rounded-[980px] text-[14px] font-medium min-w-[80px] custom-button"
                          whileTap={{ scale: 0.98 }}
                          onClick={(event) => {
                            setTriggerElement(event.currentTarget);
                            handleOpenModal("FUE Hair Transplant");
                          }}
                        >
                          View
                        </motion.button>
                        {/* <motion.button
                          className="text-white px-6 py-2.5 rounded-[980px] text-[14px] font-medium min-w-[80px] custom-button"
                          whileHover={{ backgroundColor: "#8a6a1f" }}
                          whileTap={{ scale: 0.98 }}
                          onClick={(event) => {
                            event.preventDefault();
                          }}
                        >
                          Buy
                        </motion.button> */}
                      </div>
                    </div>
                  </motion.div>

                  {/* Follicular Hypersomes™ Card */}
                  <motion.div
                    className="flex-none w-[280px] bg-white rounded-[18px] border border-[#e5e5e7] overflow-hidden group cursor-pointer"
                    tabIndex={0}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                    }}
                  >
                    <div className="p-8">
                      <div className="text-center mb-2">
                        <span className="text-[11px] font-medium text-[#625046] uppercase tracking-[0.5px]">
                          Dr. Neo Technology
                        </span>
                      </div>

                      <h3 className="text-[24px] h-24 font-semibold text-[#1d1d1f] mb-8 leading-[28px] text-center flex items-center ">
                        Follicular Hypersomes™
                      </h3>

                      <div className="h-[200px] flex items-center justify-center mb-6">
                        <motion.img
                          src={"/assets/MOIST FOLLICLE.png"}
                          alt="Follicular Hypersomes™"
                          className="w-40 h-40 object-contain group-hover:scale-105 transition-transform duration-500"
                          style={{
                            filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.1))",
                          }}
                        />
                      </div>

                      <div className="flex justify-center gap-2 mb-6">
                        <div className="w-3 h-3 rounded-full bg-[#A87B23] border border-[#d2d2d7]" />
                        <div className="w-3 h-3 rounded-full bg-[#625046] border border-[#d2d2d7]" />
                        <div className="w-3 h-3 rounded-full bg-[#d4af37] border border-[#d2d2d7]" />
                      </div>

                      <div className="text-center mb-4">
                        <p className="text-[14px] text-[#76767E]">
                          From $1299 or $13.54/mo. for 24 mo.*
                        </p>
                      </div>

                      <div className="flex justify-center">
                        <motion.button
                          className=" px-6 py-2 rounded-[980px] text-[14px] font-medium custom-button"
                          whileTap={{ scale: 0.98 }}
                          role="button"
                          onClick={(event) => {
                            setTriggerElement(event.currentTarget);
                            handleOpenModal("Follicular Hypersomes™");
                          }}
                        >
                          View
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>

                  {/* Injectable Growth Factors Card */}
                  <motion.div
                    className="flex-none w-[320px] bg-white rounded-[18px] border border-[#e5e5e7] overflow-hidden group cursor-pointer"
                    tabIndex={0}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                    }}
                  >
                    <div className="p-8">
                      <div className="text-center mb-2">
                        <span className="text-[11px] font-medium text-[#625046] uppercase tracking-[0.5px]">
                          Dr. Neo Technology
                        </span>
                      </div>
                      <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-8 leading-[28px] text-center  h-24 flex justify-center items-center">
                        Growth Factors
                      </h3>

                      <div className="h-[200px] flex items-center justify-center mb-6">
                        <motion.img
                          src={"/assets/FOLLICULES.png"}
                          alt="Injectable Growth Factors"
                          className="w-40 h-40 object-contain group-hover:scale-105 transition-transform duration-500"
                          style={{
                            filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.1))",
                          }}
                        />
                      </div>

                      <div className="flex justify-center gap-2 mb-6">
                        <div className="w-3 h-3 rounded-full bg-[#A87B23] border border-[#d2d2d7]" />
                        <div className="w-3 h-3 rounded-full bg-[#625046] border border-[#d2d2d7]" />
                        <div className="w-3 h-3 rounded-full bg-[#d4af37] border border-[#d2d2d7]" />
                      </div>

                      <div className="text-center mb-4 min-h-[40px]">
                        <p className="text-[14px] text-[#76767E]">
                          From $699 or $7.29/mo. for 24 mo.*
                        </p>
                      </div>

                      <div className="flex justify-center">
                        <motion.button
                          className="bg-[#0071e3] px-6 py-2 rounded-[980px] text-[14px] font-medium custom-button"
                          whileTap={{ scale: 0.98 }}
                          role="button"
                          onClick={(event) => {
                            setTriggerElement(event.currentTarget);
                            handleOpenModal("Injectable Growth Factors");
                          }}
                        >
                          View
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>

                  {/* Microneedling Card */}
                  <motion.div
                    className="flex-none w-[320px] bg-white rounded-[18px] border border-[#e5e5e7] overflow-hidden group cursor-pointer"
                    tabIndex={0}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                    }}
                  >
                    <div className="p-8">
                      <div className="text-center mb-2">
                        <span className="text-[11px] font-medium text-[#625046] uppercase tracking-[0.5px]">
                          Dr. Neo Technology
                        </span>
                      </div>

                      <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-8 leading-[28px] text-center min-h-[56px]  h-24 flex items-center justify-center">
                        Microneedling &<br />
                        Microneedling Plus
                      </h3>

                      <div className="h-[200px] flex items-center justify-center mb-6">
                        <motion.img
                          src={"/assets/home/micro.png.PNG"}
                          alt="Microneedling Growth Factors"
                          className="w-44 h-50 object-contain group-hover:scale-105 transition-transform duration-500"
                          style={{
                            filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.1))",
                          }}
                        />
                      </div>

                      <div className="flex justify-center gap-2 mb-6">
                        <div className="w-3 h-3 rounded-full bg-[#A87B23] border border-[#d2d2d7]" />
                        <div className="w-3 h-3 rounded-full bg-[#625046] border border-[#d2d2d7]" />
                        <div className="w-3 h-3 rounded-full bg-[#FAE151] border border-[#d2d2d7]" />
                      </div>

                      <div className="text-center mb-4 min-h-[40px]">
                        <p className="text-[14px] text-[#76767E]">
                          From $899 or $9.37/mo. for 24 mo.*
                        </p>
                      </div>

                      <div className="flex justify-center">
                        <motion.button
                          className="custom-button  px-6 py-2.5 rounded-[980px] text-[14px] font-medium min-w-[80px]"
                          whileTap={{ scale: 0.98 }}
                          onClick={(event) => {
                            setTriggerElement(event.currentTarget);
                            handleOpenModal("Microneedling");
                          }}
                        >
                          View
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>

                  {/* Vigor VIP Card */}
                  <motion.div
                    className="flex-none w-[280px] bg-white rounded-[18px] border border-[#e5e5e7] overflow-hidden group cursor-pointer"
                    tabIndex={0}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                    }}
                  >
                    <div className="p-8">
                      <div className="text-center mb-2">
                        <span className="text-[11px] font-medium text-[#625046] uppercase tracking-[0.5px]">
                          Dr. Neo Technology
                        </span>
                      </div>

                      <h3 className="text-[24px] h-24 font-semibold text-[#1d1d1f] mb-8 leading-[28px] text-center flex items-center justify-center">
                        Vigor VIP &<br />
                        Vigor VIP Plus
                      </h3>

                      <div className="h-[200px] flex items-center justify-center mb-6">
                        <motion.img
                          src={
                            "/assets/Pecker Johnson VIP Card for NEO sit.svg"
                          }
                          alt="Follicular Hypersomes™"
                          className="w-40 h-40 object-contain group-hover:scale-105 transition-transform duration-500"
                          style={{
                            filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.1))",
                          }}
                        />
                      </div>

                      <div className="flex justify-center gap-2 mb-6">
                        <div className="w-3 h-3 rounded-full bg-[#A87B23] border border-[#d2d2d7]" />
                        <div className="w-3 h-3 rounded-full bg-[#d4af37] border border-[#d2d2d7]" />
                        <div className="w-3 h-3 rounded-full bg-[#625046] border border-[#d2d2d7]" />
                      </div>

                      <div className="text-center mb-4">
                        <p className="text-[14px] text-[#76767E]">
                          From $199/mo or $24.95/mo. for 24 mo.*
                        </p>
                      </div>

                      <div className="flex justify-center">
                        <motion.button
                          className="custom-button  px-6 py-2 rounded-[980px] text-[14px] font-medium"
                          whileTap={{ scale: 0.98 }}
                          role="button"
                          onClick={(event) => {
                            setTriggerElement(event.currentTarget);
                            handleOpenModal("Vigor VIP");
                          }}
                        >
                          View
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>

                  {/* Explore All Card */}
                  {/* <motion.div
                    className="flex-none w-[280px] bg-white rounded-[18px] border border-[#e5e5e7] overflow-hidden group cursor-pointer relative"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                    }}
                  >
                    <div className="h-[200px] bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] flex items-center justify-center relative overflow-hidden">
                      <div className="grid grid-cols-3 gap-3">
                        <div className="w-8 h-12 bg-[#A87B23] rounded-lg group-hover:scale-110 transition-transform duration-500" />
                        <div className="w-8 h-12 bg-[#625046] rounded-lg group-hover:scale-110 transition-transform duration-700" />
                        <div className="w-8 h-12 bg-[#34c759] rounded-lg group-hover:scale-110 transition-transform duration-900" />
                      </div>
                    </div>

                    <div className="p-6 text-center">
                      <h3 className="text-[24px] font-semibold text-[#1d1d1f] mb-2 leading-[28px]">
                        Explore all hair restoration options.
                      </h3>
                      <p className="text-[17px] text-[#86868b] leading-[22px] mb-6">
                        Find the perfect treatment for your goals
                      </p>

                      <motion.button
                        className="w-full custom-button-outline border border-[#0071e3] text-[#0071e3] py-3 rounded-[980px] text-[14px] font-medium"
                        whileHover={{
                          backgroundColor: "#0071e3",
                          color: "white",
                        }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => smoothScrollTo("contact")}
                      >
                        View All
                      </motion.button>
                    </div>
                  </motion.div> */}
                </div>
              </div>

              {/* Clean bottom section */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.button
                  className="custom-button  px-10 py-3.5 rounded-[980px] text-[17px] font-normal"
                  onClick={() => smoothScrollTo("contact")}
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book consultation
                </motion.button>
                <p className="text-[15px] md:text-md text-[#57575C] mt-3">
                  Free consultation • Custom treatment plan
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
