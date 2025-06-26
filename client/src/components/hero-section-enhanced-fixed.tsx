import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { smoothScrollTo } from "@/lib/utils";
// import hairExamImage from "@assets/6.png";
// import medicalDeviceImage from "@assets/8.png";
// import herobg from "/assets/hair-needle.jpg";
// import premiumFollicleImage from "@assets/premium-follicle.png";
import HeroImage from "@/components/ui/hero-image";
import styles from "@/styles/hero-section.module.css";
import { UltraPremiumHairFollicle } from "./ultra-premium-hair-follicle";

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

      {/* Desktop version with Ultra-Premium Motion Design */}
      <div className="hidden md:block">
        <section
          className="w-full min-h-screen bg-white relative overflow-hidden flex flex-col justify-center items-center text-center px-8"
          style={{
            touchAction: "pan-y",
            WebkitOverflowScrolling: "touch",
            transform: "translate3d(0,0,0)",
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
          }}
        >
          {/* Ultra-Premium Hair Follicle Visualization */}
          <motion.div
            className="mb-12 relative h-[70vh] min-h-[500px] flex items-center justify-center"
            initial={{ opacity: 0, y: 80, scale: 0.75 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              perspective: "1500px",
              touchAction: "pan-y",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {/* Ultra-Premium Multi-Layer Ambient System */}
            <motion.div
              className="absolute inset-0 rounded-full blur-3xl scale-200 -z-20"
              style={{
                background:
                  "radial-gradient(circle, rgba(168, 123, 35, 0.25) 0%, rgba(168, 123, 35, 0.15) 30%, rgba(98, 80, 70, 0.08) 60%, transparent 80%)",
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

            {/* Premium Energy Rings System */}
            <motion.div
              className="absolute inset-0 opacity-30 -z-10"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0%, #A87B23 20%, transparent 40%, #FAE151 60%, transparent 80%, #625046 90%, transparent 100%)",
                filter: "blur(45px)",
                borderRadius: "50%",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            <motion.div
              className="absolute inset-0 scale-125 opacity-20 -z-10"
              style={{
                background:
                  "conic-gradient(from 180deg, transparent 0%, #FAE151 25%, transparent 50%, #A87B23 75%, transparent 100%)",
                filter: "blur(60px)",
                borderRadius: "50%",
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />

            {/* Ultra-Realistic Hair Follicle Container */}
            <motion.div
              role="group"
              tabIndex={-1}
              className="relative z-20 touch-manipulation"
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                rotateX: 2,
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
              }}
              whileTap={{
                scale: 0.98,
                transition: { duration: 0.2 },
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
              style={{
                touchAction: "manipulation",
                WebkitTouchCallout: "none",
                WebkitUserSelect: "none",
                userSelect: "none",
              }}
            >
              <UltraPremiumHairFollicle />

              {/* Advanced Glass Reflection System */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-40 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 30%, transparent 60%, rgba(255, 255, 255, 0.15) 100%)",
                  mixBlendMode: "overlay",
                }}
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  background: [
                    "linear-gradient(145deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 30%, transparent 60%, rgba(255, 255, 255, 0.15) 100%)",
                    "linear-gradient(165deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.05) 40%, transparent 70%, rgba(255, 255, 255, 0.2) 100%)",
                    "linear-gradient(145deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 30%, transparent 60%, rgba(255, 255, 255, 0.15) 100%)",
                  ],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Precision Accent Beams */}

            {/* Ultra-Deep Atmospheric Layers */}
          </motion.div>

          {/* Main headline with premium typography */}
          <motion.h1
            title="The Science of Hair Restoration, Reimagined."
            className="text-[48px] lg:text-[56px] font-bold leading-tight tracking-[-0.5px] mb-4 max-w-4xl"
          >
            <span
              aria-hidden="true"
              style={{
                background:
                  " linear-gradient(90deg, #A87B23 0%, #625046 50%, #A87B23 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              The Science of Hair Restoration, Reimagined.
            </span>
            <span className="sr-only">
              The Science of Hair Restoration, Reimagined.
            </span>{" "}
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

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.button
              className="bg-[#FAE151] text-black font-semibold px-8 py-4 rounded-full text-[16px] hover:bg-[#f5d93d] transition-all duration-200 touch-manipulation"
              onClick={() => smoothScrollTo("contact")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              style={{
                touchAction: "manipulation",
                WebkitTapHighlightColor: "transparent",
              }}
            >
              Book Consultation
            </motion.button>
            <motion.button
              className="text-[#625046] font-medium px-8 py-4 rounded-full text-[16px] border border-[#625046]/20 hover:bg-[#625046]/5 transition-all duration-200 touch-manipulation"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              style={{
                touchAction: "manipulation",
                WebkitTapHighlightColor: "transparent",
              }}
            >
              View Pricing
            </motion.button>
          </motion.div>
        </section>
      </div>
    </>
  );
}
