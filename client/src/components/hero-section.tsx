import React, { useState, useEffect } from "react";
import HeroImage from "@/components/ui/hero-image";
import BeforeAfterSlider from "@/components/ui/before-after-slider-new";
import { ArrowRight, Check, ArrowDownCircle, Play } from "lucide-react";
import { motion } from "framer-motion";
import { smoothScrollTo } from "@/lib/utils";
import styles from "@/styles/hero-section.module.css";
import { LazyImage } from "@/components/ui/lazy-image";

export default function HeroSection() {
  // Animation for subtle text reveal
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visibility after a short delay for smooth entrance
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Mobile hero section - unchanged */}
      <section className={`${styles.Frame_90} md:hidden`}>
        <HeroImage />

        <div
          className={styles.Header}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
          }}
        >
          <h1 className={styles.Heading}>SoCal Advanced Hair Restoration</h1>

          <p className={styles.Subheading}>
            Natural Results | Fuller Hairlines | Confident Patients
          </p>

          <div className={styles.ButtonGroup}>
            <button
              className={styles.PrimaryButton}
              onClick={() => smoothScrollTo("contact")}
            >
              <div className={styles.Group_48_192_60}>Book Consult</div>
            </button>
          </div>
        </div>
      </section>

      {/* Desktop hero section - Enhanced Hims-inspired */}
      <section className="hidden">
        <div className="container mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
              {/* Left Content */}
              <div className="lg:w-1/2 flex flex-col justify-center">
                <div
                  className={`transform transition-all duration-700 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                >
                  <motion.span
                    className="inline-block bg-[#A87B23]/10 text-[#A87B23] px-4 py-2 rounded-full text-sm font-medium mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                  >
                    SoCal's Premier Hair Restoration Clinic
                  </motion.span>

                  <motion.h1
                    className="text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight mb-8 text-[#625046]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    Hair regrowth{" "}
                    <span className="relative inline-block">
                      made simple
                      <motion.svg
                        className="absolute -bottom-2 left-0 w-full"
                        height="6"
                        viewBox="0 0 200 6"
                        xmlns="http://www.w3.org/2000/svg"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{
                          duration: 1.2,
                          delay: 1,
                          ease: "easeInOut",
                        }}
                      >
                        <path
                          d="M0,3 Q50,0 100,3 T200,3"
                          fill="none"
                          stroke="#A87B23"
                          strokeWidth="4"
                          strokeDasharray="0 1"
                        />
                      </motion.svg>
                    </span>
                  </motion.h1>
                </div>

                <div className="space-y-5 mb-8">
                  <motion.div
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <motion.div
                      className="bg-[#A87B23]/10 rounded-full p-1 mt-1"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgba(168, 123, 35, 0.2)",
                      }}
                    >
                      <Check className="text-[#EDB930] w-4 h-4" />
                    </motion.div>
                    <p className="text-lg lg:text-xl text-[#625046]">
                      Regrow hair in as few as 3-6 months*
                    </p>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                  >
                    <motion.div
                      className="bg-[#A87B23]/10 rounded-full p-1 mt-1"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgba(168, 123, 35, 0.2)",
                      }}
                    >
                      <Check className="text-[#EDB930] w-4 h-4" />
                    </motion.div>
                    <p className="text-lg lg:text-xl text-[#625046]">
                      Doctor-trusted advanced techniques
                    </p>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                  >
                    <motion.div
                      className="bg-[#A87B23]/10 rounded-full p-1 mt-1"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgba(168, 123, 35, 0.2)",
                      }}
                    >
                      <Check className="text-[#EDB930] w-4 h-4" />
                    </motion.div>
                    <p className="text-lg lg:text-xl text-[#625046]">
                      100% personalized process, unlimited provider support
                    </p>
                  </motion.div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                  >
                    <motion.button
                      onClick={() => smoothScrollTo("contact")}
                      className="inline-flex items-center justify-center h-14 px-10 text-lg font-medium transition-all bg-[#141414] text-white rounded-full hover:bg-[#2a2a2a] hover:shadow-lg focus:ring-2 focus:ring-offset-2 focus:ring-[#141414] focus:outline-none group relative overflow-hidden"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10">
                        Take the free hair quiz
                      </span>
                      <motion.span
                        className="absolute inset-0 bg-[#A87B23]"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.div
                        className="relative z-10 ml-2 h-5 w-5"
                        whileHover={{ x: 3 }}
                        transition={{
                          duration: 0.2,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      >
                        <ArrowRight className="h-5 w-5" />
                      </motion.div>
                    </motion.button>
                  </motion.div>

                  <motion.a
                    href="tel:(949) 570-0500"
                    className="text-[#625046] font-medium hover:text-[#A87B23] transition-colors flex items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.6 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Call (949) 570-0500
                  </motion.a>
                </div>

                <motion.p
                  className="text-xs mt-6 text-[#625046] opacity-70 max-w-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                >
                  *Based on separate individual studies of typical hair
                  restoration at Dr. Neo. Prescription treatments require an
                  online consultation with a licensed provider. The quiz is not
                  a medical assessment.
                </motion.p>
              </div>

              {/* Right Content - Enhanced Before/After Display */}
              <div
                className={`lg:w-1/2 flex items-center justify-center transform transition-all duration-1000 ease-out ${isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
              >
                <div className="relative w-full max-w-xl">
                  {/* Patient Results Tag */}
                  <div className="absolute -top-4 -right-4 z-20">
                    <motion.div
                      className="bg-[#EDB930] text-white text-xs font-medium px-3 py-1 rounded-full shadow-md"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                    >
                      <span>Real Patient Results</span>
                    </motion.div>
                  </div>

                  {/* Interactive Before/After Slider with scalp images - Using lazy loading */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                  >
                    <BeforeAfterSlider
                      beforeImage="/assets/HAIR LOSS AFTER PIC.png"
                      afterImage="/assets/HAIR LOSS BEFORE PIC.png"
                      beforeAlt="Before Dr. Neo hair restoration treatment"
                      afterAlt="After Dr. Neo hair restoration treatment"
                      autoAnimate={true}
                      className="w-full rounded-xl shadow-xl"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Scroll indicator */}
          {/* <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.7 }}
          >
            <motion.button
              onClick={() => smoothScrollTo("how-it-works")}
              className="flex flex-col items-center justify-center focus:outline-none group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm text-[#625046] group-hover:text-[#A87B23] transition-colors mb-2 opacity-80">
                Discover More
              </span>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
                className="relative w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-[#A87B23]/20 group-hover:border-[#A87B23]/40 transition-colors"
              >
                <ArrowDownCircle className="w-6 h-6 text-[#625046] group-hover:text-[#A87B23] transition-colors" />
              </motion.div>
            </motion.button>
          </motion.div> */}
        </div>
      </section>
    </>
  );
}
