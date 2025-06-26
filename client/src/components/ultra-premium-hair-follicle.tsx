import { motion } from "framer-motion";
import { useState } from "react";
import crispFolliclePath from "@assets/CRISPFOLLICLE.png";
import hairFollicleImage from "@assets/ChatGPT Image Jun 2, 2025 at 01_34_00 PM.png";

export function UltraPremiumHairFollicle() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-[400px] h-[450px] mx-auto">
      {/* Main Container with Ultra-Premium Glass Effect */}
      <motion.div
        role="presentation"
        className="relative w-full h-full overflow-hidden"
        style={{
          backdropFilter: "blur(40px)",
        }}
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        }}
      >
        {/* Background Removal Effect - Pure Transparent */}
        <motion.div className="absolute inset-0 rounded-[32px]" />

        {/*Place Dsire Floating Image HERE */}
        <motion.img
          src={crispFolliclePath}
          alt="Ultra-realistic hair follicle cross-section"
          className="w-full h-full object-contain p-8"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{
            opacity: 1,
            filter: isHovered
              ? `
              contrast(1.2)
              saturate(1.15)
              brightness(1.08)
            `
              : `
              contrast(1.15)
              saturate(1.1)
              brightness(1.05)
            `,
          }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Interactive Anatomical Zones */}
        {/* Premium Information Panel */}

        {/* Floating Growth Particles */}
        {/* {isHovered && (
          <motion.div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#32CD32] rounded-full"
                style={{
                  left: `${30 + (i % 3) * 20}%`,
                  top: `${60 + Math.floor(i / 3) * 10}%`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                  y: [-20, -40, -60],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeOut",
                }}
              />
            ))}
          </motion.div>
        )} */}

        {/* Ambient Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-[32px] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 70%, rgba(168, 123, 35, 0.1) 0%, transparent 60%)",
          }}
          animate={{
            opacity: isHovered ? [0.3, 0.6, 0.3] : [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Premium Reflection Effect */}
        <motion.div
          className="absolute inset-0 rounded-[32px] pointer-events-none"
          animate={{
            opacity: isHovered ? 0.8 : 0.5,
          }}
          transition={{ duration: 0.6 }}
        />
      </motion.div>
    </div>
  );
}
