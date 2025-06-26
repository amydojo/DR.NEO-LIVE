import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { smoothScrollTo } from "@/lib/utils";
import hairExamImage from "@assets/6.png";
import medicalDeviceImage from "@assets/8.png";
import herobg from "/assets/hair-needle.jpg";
import premiumFollicleImage from "@assets/premium-follicle.png";
import hairFollicleHero from "@assets/DRINK MENU SMOOTHMD .png";
import HeroImage from "@/components/ui/hero-image";
import styles from "@/styles/hero-section.module.css";

// import vipCardImage from "@assets/Pecker Johnson VIP Card Bottom Trademarks 1.png";
import vipCardImage from "/assets/Pecker Johnson VIP Card for NEO sit.svg";

export default function HeroSectionEnhanced() {
  return (
    <>
      {/* Mobile version - keep exactly the same */}
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

      {/* Desktop version - Updated to match mockup */}
      <div className="hidden md:block">
        {/* Main Hero Section - Apple Style */}
        <section className="w-full min-h-screen bg-white relative overflow-hidden flex flex-col justify-center items-center text-center px-8">
          {/* Premium follicle image with Apple-style isolation */}
          <motion.div
            className="mb-12 relative h-[70vh] min-h-[500px] flex items-center justify-center"
            initial={{ opacity: 0, y: 80, scale: 0.75 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ perspective: "1500px" }}
          >
            {/* Ultra-Premium Multi-Layer Ambient System */}
            <motion.div
              className="absolute inset-0 rounded-full blur-3xl scale-200 -z-20"
              style={{
                background: "radial-gradient(circle, rgba(168, 123, 35, 0.3) 0%, rgba(250, 225, 81, 0.2) 50%, transparent 100%)",
              }}
              animate={{
                opacity: [0.4, 0.9, 0.4],
                scale: [1.8, 2.4, 1.8],
                rotate: [0, 360],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Advanced Particle Constellation */}
            {[...Array(16)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-3 h-3 rounded-full"
                style={{
                  background: `linear-gradient(135deg, ${i % 2 === 0 ? "#FAE151" : "#A87B23"}, ${i % 2 === 0 ? "#A87B23" : "#FAE151"})`,
                  boxShadow: `0 0 15px ${i % 2 === 0 ? "#FAE151" : "#A87B23"}`,
                  left: "50%",
                  top: "50%",
                  originX: "50%",
                  originY: "50%",
                }}
                initial={{
                  x: Math.cos((i * 22.5 * Math.PI) / 180) * 240,
                  y: Math.sin((i * 22.5 * Math.PI) / 180) * 240,
                  scale: 0.3,
                  opacity: 0.2,
                }}
                animate={{
                  x: [
                    Math.cos((i * 22.5 * Math.PI) / 180) * 240,
                    Math.cos((i * 22.5 * Math.PI) / 180) * 320,
                    Math.cos((i * 22.5 * Math.PI) / 180) * 240,
                  ],
                  y: [
                    Math.sin((i * 22.5 * Math.PI) / 180) * 240,
                    Math.sin((i * 22.5 * Math.PI) / 180) * 320,
                    Math.sin((i * 22.5 * Math.PI) / 180) * 240,
                  ],
                  scale: [0.3, 1.5, 0.3],
                  opacity: [0.2, 0.9, 0.2],
                  rotate: 360,
                }}
                transition={{
                  duration: 12 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.15,
                }}
              />
            ))}

            <motion.div
              className="absolute inset-0 scale-125 opacity-20 -z-10"
              style={{

                filter: "blur(60px)",
                borderRadius: "50%",
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />

            {/* Ultra-Realistic Hair Follicle Container */}
            <motion.div
              className="relative z-20"
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                rotateX: 2,
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
              }}
              animate={{
                y: [-15, 15, -15],
                rotateY: [0, 10, 0, -10, 0],
                rotateX: [0, 3, 0, -3, 0],
                rotateZ: [0, 1.5, 0, -1.5, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >

              {/* Advanced Glass Reflection System */}
           

              {/* Scientific Precision Highlights */}
  

            {/* Precision Accent Beams */}


            {/* Ultra-Deep Atmospheric Layers */}
 

          {/* Sophisticated floating elements */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-gradient-to-br from-[#A87B23]/60 to-[#625046]/60 rounded-full"
              style={{
                top: `${15 + Math.sin((i * 45 * Math.PI) / 180) * 40 + 25}%`,
                left: `${15 + Math.cos((i * 45 * Math.PI) / 180) * 40 + 25}%`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Main headline with Dr. Neo styling */}
          <motion.h1
            className="text-[48px] lg:text-[56px] font-bold leading-tight tracking-[-0.5px] mb-4 max-w-4xl"
            style={{
              background:
                "linear-gradient(90deg, #A87B23 0%, #625046 50%, #A87B23 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            The Science of Hair Restoration, Reimagined.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-[18px] lg:text-[21px] text-[#625046] leading-relaxed max-w-[600px] mb-8 font-normal"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Experience our breakthrough exosome-powered therapy to restore hair
            at its root.
          </motion.p>

          {/* CTA Buttons with Dr. Neo styling */}
          <motion.div
            className="flex items-center gap-4 flex-col sm:flex-row"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <motion.button
              className="bg-[#A87B23] text-white px-7 py-3.5 rounded-md text-[16px] font-medium transition-all duration-300 hover:bg-[#8a6820] hover:shadow-lg min-w-[200px]"
              onClick={() => smoothScrollTo("contact")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Book a Consultation
            </motion.button>

            <motion.button
              className="border-2 border-[#A87B23] text-[#A87B23] bg-transparent px-7 py-3 rounded-md text-[16px] font-medium transition-all duration-300 hover:bg-[#A87B23] hover:text-white min-w-[160px]"
              onClick={() => smoothScrollTo("treatments")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Pricing
            </motion.button>
          </motion.div>
        </section>

        {/* Advanced Hair Science - Apple Minimal */}
        <section className="w-full py-16 md:py-32 bg-white relative">
          <div className="max-w-[1080px] mx-auto px-6 md:px-8">
            {/* Clean Typography Hierarchy */}
            <motion.div
              className="text-center mb-12 md:mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.h2
                className="text-[36px] md:text-[56px] font-semibold leading-[40px] md:leading-[64px] tracking-[-0.5px] text-[#1d1d1f] mb-4 md:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Advanced hair science
              </motion.h2>
              <motion.p
                className="text-[16px] md:text-[21px] font-normal text-[#86868b] leading-[24px] md:leading-[32px] max-w-[540px] md:max-w-[640px] mx-auto px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Precision technology that analyzes, optimizes, and regenerates
                hair follicles at the cellular level.
              </motion.p>
            </motion.div>

            {/* Interactive Hair Growth Visualization - Rebuilt for Cross-Screen Excellence */}
            <motion.div
              className="mb-12 md:mb-20"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.6 }}
            >
              <div className="relative bg-gradient-to-b from-[#fbfbfd] to-[#f5f5f7] rounded-[16px] md:rounded-[24px] p-8 md:p-12 lg:p-16 min-h-[500px] md:min-h-[600px]">
                
                {/* Premium Follicle Visualization with Enhanced Grounding */}
                <div className="flex items-center justify-center mb-12 md:mb-20 relative">
                  <motion.div
                    className="relative w-48 h-48 md:w-56 md:h-56"
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                  >
                    
                    {/* Visual Grounding System */}
                    <motion.div
                      className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-40 h-10 md:w-48 md:h-12 rounded-full opacity-60"
                      style={{
                        background: "radial-gradient(ellipse, rgba(168, 123, 35, 0.3) 0%, rgba(168, 123, 35, 0.15) 40%, transparent 70%)",
                        filter: "blur(12px)",
                      }}
                      animate={{
                        opacity: [0.4, 0.8, 0.4],
                        scaleX: [1, 1.15, 1],
                        scaleY: [1, 0.8, 1],
                      }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/* Base Shadow for Physical Grounding */}
                    <motion.div
                      className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-8 md:w-40 md:h-10 rounded-full bg-black/8"
                      style={{ filter: "blur(8px)" }}
                      animate={{
                        opacity: [0.2, 0.4, 0.2],
                        scaleX: [1, 1.1, 1],
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />

                    {/* Main Follicle Container with 3D Hover */}
                    <motion.div
                      className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-white via-[#fafafa] to-[#f0f0f0] shadow-2xl flex items-center justify-center relative border border-white/80 mx-auto"
                      whileHover={{ 
                        scale: 1.08,
                        rotateX: 8,
                        rotateY: 8,
                        boxShadow: "0 25px 60px rgba(168, 123, 35, 0.3)",
                      }}
                      animate={{
                        y: [0, -4, 0],
                        boxShadow: [
                          "0 15px 50px rgba(168, 123, 35, 0.2)",
                          "0 25px 70px rgba(168, 123, 35, 0.35)",
                          "0 15px 50px rgba(168, 123, 35, 0.2)",
                        ],
                      }}
                      transition={{ 
                        y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                        boxShadow: { duration: 6, repeat: Infinity },
                        hover: { duration: 0.4 }
                      }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      {/* Hair follicle representation - enhanced */}
                      <motion.div
                        className="w-4 h-20 md:w-5 md:h-28 bg-gradient-to-t from-[#A87B23] via-[#625046] to-transparent rounded-full shadow-lg"
                        animate={{
                          scaleY: [1, 1.15, 1],
                          opacity: [0.9, 1, 0.9],
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      />

                      {/* Enhanced growth rings with premium animation */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-[#A87B23]/40"
                        animate={{
                          scale: [1, 1.6, 1],
                          opacity: [0.8, 0, 0.8],
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                      />
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-[#625046]/30"
                        animate={{
                          scale: [1, 1.9, 1],
                          opacity: [0.6, 0, 0.6],
                        }}
                        transition={{
                          duration: 3.5,
                          repeat: Infinity,
                          delay: 0.5,
                          ease: "easeOut"
                        }}
                      />
                      <motion.div
                        className="absolute inset-0 rounded-full border border-[#A87B23]/25"
                        animate={{
                          scale: [1, 2.3, 1],
                          opacity: [0.4, 0, 0.4],
                        }}
                        transition={{ duration: 4.5, repeat: Infinity, delay: 1, ease: "easeOut" }}
                      />
                    </motion.div>

                    {/* Premium Exosome System with Enhanced Motion */}
                    {[...Array(10)].map((_, i) => {
                      const baseAngle = i * 36; // 10 particles, 36° apart
                      const orbitRadius = 100; // Enhanced orbit radius
                      const staggerDelay = i * 0.6; // Staggered timing

                      return (
                        <motion.div
                          key={`exosome-${i}`}
                          className="absolute w-3 h-3 md:w-4 md:h-4 rounded-full shadow-lg"
                          style={{
                            background: `linear-gradient(135deg, ${i % 3 === 0 ? "#A87B23" : i % 3 === 1 ? "#625046" : "#FAE151"}, ${i % 3 === 0 ? "#625046" : i % 3 === 1 ? "#FAE151" : "#A87B23"})`,
                            left: "50%",
                            top: "50%",
                            transform: "translate(-50%, -50%)",
                          }}
                          initial={{ 
                            scale: 0,
                            opacity: 0,
                          }}
                          animate={{
                            // Enhanced orbital motion with staggered Y-axis float
                            x: [
                              Math.cos((baseAngle * Math.PI) / 180) * orbitRadius,
                              Math.cos(((baseAngle + 180) * Math.PI) / 180) * orbitRadius,
                              Math.cos(((baseAngle + 360) * Math.PI) / 180) * orbitRadius,
                            ],
                            y: [
                              Math.sin((baseAngle * Math.PI) / 180) * orbitRadius + Math.sin(i * 0.5) * 4,
                              Math.sin(((baseAngle + 180) * Math.PI) / 180) * orbitRadius + Math.sin(i * 0.5) * 4,
                              Math.sin(((baseAngle + 360) * Math.PI) / 180) * orbitRadius + Math.sin(i * 0.5) * 4,
                            ],
                            scale: [0.7, 1.3, 0.7],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 15 + i * 0.8, // Variable duration for organic motion
                            repeat: Infinity,
                            delay: staggerDelay,
                            ease: "easeInOut",
                          }}
                          whileInView={{
                            // Scroll-triggered drift with glow intensification
                            x: [
                              Math.cos((baseAngle * Math.PI) / 180) * (orbitRadius + 25),
                              Math.cos(((baseAngle + 180) * Math.PI) / 180) * (orbitRadius + 25),
                              Math.cos(((baseAngle + 360) * Math.PI) / 180) * (orbitRadius + 25),
                            ],
                            scale: [0.9, 1.5, 0.9],
                            boxShadow: [
                              "0 0 15px rgba(168, 123, 35, 0.4)",
                              "0 0 25px rgba(168, 123, 35, 0.6)",
                              "0 0 15px rgba(168, 123, 35, 0.4)",
                            ],
                          }}
                          whileHover={{
                            scale: 1.6,
                            boxShadow: "0 0 30px rgba(168, 123, 35, 0.8)",
                          }}
                        />
                      );
                    })}

                    {/* Additional inner particles for complexity */}
                    {[...Array(4)].map((_, i) => {
                      const baseAngle = i * 90;
                      const innerRadius = 60;

                      return (
                        <motion.div
                          key={`inner-${i}`}
                          className="absolute w-1.5 h-1.5 bg-[#625046]/60 rounded-full"
                          animate={{
                            x: [
                              Math.cos(((baseAngle + 0) * Math.PI) / 180) *
                                innerRadius,
                              Math.cos(((baseAngle + 360) * Math.PI) / 180) *
                                innerRadius,
                            ],
                            y: [
                              Math.sin(((baseAngle + 0) * Math.PI) / 180) *
                                innerRadius,
                              Math.sin(((baseAngle + 360) * Math.PI) / 180) *
                                innerRadius,
                            ],
                            opacity: [0.3, 0.7, 0.3],
                          }}
                          transition={{
                            duration: 12,
                            repeat: Infinity,
                            delay: i * 1,
                            ease: "linear",
                          }}
                          style={{
                            left: "50%",
                            top: "50%",
                            transform: "translate(-50%, -50%)",
                          }}
                        />
                      );
                    })}
                  </motion.div>
                </div>

                {/* Process Steps - Mobile Optimized */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 text-center relative px-4 md:px-0">
                  {[
                    {
                      step: "01",
                      title: "Analyze",
                      desc: "AI-powered follicle mapping",
                    },
                    {
                      step: "02",
                      title: "Optimize",
                      desc: "Cellular regeneration protocol",
                    },
                    {
                      step: "03",
                      title: "Restore",
                      desc: "Natural growth activation",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.step}
                      className="group cursor-pointer relative py-4"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                      whileHover={{ y: -4 }}
                    >
                      {/* Step number with enhanced styling */}
                      <motion.div
                        className="text-[12px] md:text-[14px] font-medium text-[#A87B23] mb-2 md:mb-3 tracking-[1.5px] md:tracking-[2px] relative"
                        animate={{
                          opacity: [0.6, 1, 0.6],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: index * 0.8,
                        }}
                      >
                        {item.step}
                        <motion.div
                          className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 md:w-6 h-px bg-gradient-to-r from-transparent via-[#A87B23] to-transparent"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{
                            duration: 0.8,
                            delay: 1.2 + index * 0.2,
                          }}
                        />
                      </motion.div>

                      <h3 className="text-[18px] md:text-[22px] font-semibold text-[#1d1d1f] mb-2 md:mb-3 group-hover:text-[#A87B23] transition-colors duration-500">
                        {item.title}
                      </h3>
                      <p className="text-[14px] md:text-[16px] text-[#86868b] leading-[1.5] md:leading-[1.6] max-w-[240px] md:max-w-[200px] mx-auto">
                        {item.desc}
                      </p>

                      {/* Progress indicator for each step */}
                      <motion.div
                        className="mt-3 md:mt-4 w-10 md:w-12 h-1 bg-[#f0f0f0] rounded-full mx-auto overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.4 + index * 0.2 }}
                      >
                        <motion.div
                          className="h-full bg-gradient-to-r from-[#A87B23] to-[#625046] rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{
                            duration: 1.5,
                            delay: 1.6 + index * 0.3,
                            ease: "easeOut",
                          }}
                        />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>

                {/* Enhanced connecting elements for desktop */}
                <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[900px] h-px hidden md:block">
                  <motion.div
                    className="h-full bg-gradient-to-r from-transparent via-[#A87B23]/20 to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 3, delay: 2 }}
                  />
                  {/* Connecting dots */}
                  <motion.div
                    className="absolute left-[33%] top-1/2 w-2 h-2 bg-[#A87B23] rounded-full transform -translate-y-1/2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 2.5 }}
                  />
                  <motion.div
                    className="absolute left-[66%] top-1/2 w-2 h-2 bg-[#625046] rounded-full transform -translate-y-1/2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 3 }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Clean CTA */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <motion.button
                className="text-[#A87B23] text-[17px] font-normal hover:text-[#8a6a1f] transition-colors duration-300"
                onClick={() => smoothScrollTo("treatments")}
                whileHover={{ scale: 1.02 }}
              >
                Learn more about our technology →
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Life-changing results Section */}
        <section className="w-full py-20 bg-[#f5f5f7]">
          <div className="max-w-[1920px] mx-auto px-12">
            {/* Section header */}
            <div className="text-center mb-16">
              <motion.h2
                className="text-[56px] font-semibold leading-[60px] tracking-[-0.28px] text-[#1d1d1f] mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Life-changing results
              </motion.h2>
              <motion.p
                className="text-[21px] font-normal leading-[28px] text-[#86868b] max-w-[600px] mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Real transformations from Dr. Neo's advanced hair restoration
                treatments
              </motion.p>
            </div>

            {/* Testimonials grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
              {[
                {
                  name: "Alex Colby",
                  image: "/assets/ALEX COLBY.png",
                  quote:
                    "The results exceeded my expectations. My confidence is completely restored.",
                  treatment: "FUE Hair Transplant",
                },
                {
                  name: "Harry H.",
                  image: "/assets/HARRY HAIRLESS.png",
                  quote:
                    "Professional team, amazing results. Worth every penny.",
                  treatment: "Exosome Therapy",
                },
                {
                  name: "Ron Foote",
                  image: "/assets/RON FOOTE.png",
                  quote:
                    "Natural looking hairline that looks like I never lost my hair.",
                  treatment: "FUE Hair Transplant",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  className="bg-white rounded-[20px] p-6 shadow-sm hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-[#1d1d1f]">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-[#a87b23]">
                        {testimonial.treatment}
                      </p>
                    </div>
                  </div>
                  <p className="text-[#625046] leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#a87b23] text-sm">
                        ★
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.button
                className="bg-[#A87B23] text-white px-8 py-4 rounded-full text-[17px] font-medium transition-all duration-300 hover:bg-[#8a6820] hover:shadow-lg inline-flex items-center gap-2"
                onClick={() => smoothScrollTo("contact")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Your Consultation <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* VIP Experience Section */}
        <section className="w-full h-[692px] bg-[#f5f5f7] relative overflow-hidden">
          {/* Content */}
          <div className="relative z-20 h-full flex flex-col justify-center items-center px-8">
            <div className="text-center mb-8">
              <motion.p
                className="text-[19px] font-normal leading-[23px] tracking-[0.228px] text-[#a87b23] mb-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Limited Time Offer
              </motion.p>

              <motion.h2
                className="text-[56px] font-semibold leading-[60px] tracking-[-0.28px] text-[#1d1d1f] mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                VIP Experience
              </motion.h2>

              <motion.p
                className="text-[28px] font-normal leading-8 tracking-[0.196px] text-[#1d1d1f] mb-2 max-w-[600px]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Comprehensive consultation with personalized treatment plan
              </motion.p>
            </div>

            <motion.button
              className="custom-button px-12 py-5 rounded-full text-[19px] font-normal leading-6 tracking-[-0.4px]"
              onClick={() => smoothScrollTo("contact")}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 35px rgba(0,113,227,0.3)",
              }}
            >
              Book VIP Consultation
            </motion.button>
            <img
              src={vipCardImage}
              alt="Dr. NEO VIP Excellence"
              className="min-w-md max-w-md mr-56 mt-12 drop-shadow-2xl"
            />
          </div>

          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#f5f5f7] via-[#fafafa] to-[#f2f2f4]" />
        </section>
      </div>
    </>
  );
}
      </div> </>