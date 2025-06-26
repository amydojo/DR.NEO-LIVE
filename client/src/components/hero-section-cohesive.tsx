import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import shinyFolliclePath from "@assets/shinyfollicle.png";

export function HeroSectionCohesive() {
  const heroRef = useRef<HTMLElement>(null);
  const exosomeRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollProgress = Math.min(scrollY / (window.innerHeight * 0.8), 1);
      
      exosomeRefs.current.forEach((exosome, index) => {
        if (exosome) {
          // Drift toward follicle base on scroll
          const driftX = scrollProgress * (index === 0 ? 40 : -30);
          const driftY = scrollProgress * 60;
          
          exosome.style.transform = `
            translate(${driftX}px, ${driftY}px) 
            scale(${1 - scrollProgress * 0.3})
          `;
          exosome.style.opacity = `${Math.max(0.2, 1 - scrollProgress * 0.7)}`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-white"
    >
      {/* Unified layout - reduced gap */}
      <div className="relative h-screen max-w-[1400px] mx-auto px-8 flex flex-col justify-center">
        
        {/* Integrated Text + Visual Section */}
        <div className="relative z-30 text-center">
          
          {/* Hero Text - tighter spacing */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.h1 
              className="text-[75px] md:text-[95px] lg:text-[115px] font-light leading-[0.85] tracking-[-0.035em] text-[#1d1d1f] mb-6"
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              Advanced Hair
              <br />
              <span className="font-medium bg-gradient-to-r from-[#1d1d1f] via-[#4a4a4a] to-[#86868b] bg-clip-text text-transparent">
                Restoration
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-[19px] md:text-[21px] font-normal leading-[1.381] tracking-[0.011em] text-[#6e6e73] mb-8 max-w-[520px] mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              Pioneering scientific approaches with precision,<br />artistry, and lasting results.
            </motion.p>
          </motion.div>

          {/* Integrated Visual - closer to text */}
          <div className="relative flex justify-center items-center mb-10">
            <div className="relative w-[600px] h-[400px] flex items-center justify-center">
              
              {/* Visual Grounding - soft glow ring */}
              <motion.div
                className="absolute bottom-[20px] left-1/2 transform -translate-x-1/2 w-[300px] h-[80px] z-10 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse 60% 40% at 50% 80%, rgba(0, 113, 227, 0.08) 0%, rgba(0, 113, 227, 0.04) 40%, transparent 70%)',
                  filter: 'blur(25px)'
                }}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2.2
                }}
              />

              {/* Main Follicle - grounded with shadow */}
              <motion.img
                src={shinyFolliclePath}
                alt="Premium Hair Follicle Visualization"
                className="relative z-20 w-[380px] h-auto object-contain"
                initial={{ 
                  opacity: 0, 
                  scale: 0.85,
                  filter: "blur(12px) brightness(0.9)",
                  y: 40
                }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  filter: "blur(0px) brightness(1) contrast(1.05)",
                  y: 0,
                  rotateY: [0, 2, 0]
                }}
                whileHover={{
                  scale: 1.02,
                  filter: "brightness(1.05) contrast(1.08)",
                  transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] }
                }}
                transition={{ 
                  duration: 2.2, 
                  ease: [0.16, 1, 0.3, 1],
                  delay: 1.3,
                  rotateY: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                }}
                loading="eager"
                style={{
                  filter: "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.08))"
                }}
              />

              {/* Refined Exosomes - techy neutrals, asymmetric */}
              
              {/* Exosome 1 - Large, left-top */}
              <motion.div
                ref={el => exosomeRefs.current[0] = el}
                className="absolute top-[8%] left-[15%] w-[85px] h-[85px] rounded-full z-15 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 35% 25%, rgba(255, 255, 255, 0.9) 0%, rgba(0, 113, 227, 0.15) 35%, rgba(0, 113, 227, 0.08) 70%, transparent 100%)',
                  boxShadow: '0 8px 32px rgba(0, 113, 227, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.7)',
                  filter: 'blur(0.5px)'
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 0.8,
                  scale: 1,
                  y: [0, -15, 0],
                  x: [0, 8, 0]
                }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: '0 12px 40px rgba(0, 113, 227, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
                }}
                transition={{
                  opacity: { duration: 1.2, delay: 1.8 },
                  scale: { duration: 1.2, delay: 1.8, ease: [0.23, 1, 0.32, 1] },
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                  x: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                }}
              />

              {/* Exosome 2 - Medium, right-center */}
              <motion.div
                ref={el => exosomeRefs.current[1] = el}
                className="absolute top-[35%] right-[8%] w-[60px] h-[60px] rounded-full z-15 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.85) 0%, rgba(134, 134, 139, 0.12) 40%, rgba(134, 134, 139, 0.06) 75%, transparent 100%)',
                  boxShadow: '0 6px 24px rgba(134, 134, 139, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
                  filter: 'blur(0.5px)'
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 0.7,
                  scale: 1,
                  y: [0, -12, 0],
                  x: [0, -6, 0]
                }}
                whileHover={{
                  scale: 1.15,
                  boxShadow: '0 8px 30px rgba(134, 134, 139, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.7)'
                }}
                transition={{
                  opacity: { duration: 1.2, delay: 2.2 },
                  scale: { duration: 1.2, delay: 2.2, ease: [0.23, 1, 0.32, 1] },
                  y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                  x: { duration: 9, repeat: Infinity, ease: "easeInOut" }
                }}
              />

              {/* Exosome 3 - Small, bottom-left */}
              <motion.div
                ref={el => exosomeRefs.current[2] = el}
                className="absolute bottom-[25%] left-[25%] w-[45px] h-[45px] rounded-full z-15 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 40% 30%, rgba(255, 255, 255, 0.8) 0%, rgba(0, 113, 227, 0.1) 50%, transparent 85%)',
                  boxShadow: '0 4px 16px rgba(0, 113, 227, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
                  filter: 'blur(0.5px)'
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 0.6,
                  scale: 1,
                  y: [0, -8, 0],
                  x: [0, 4, 0]
                }}
                whileHover={{
                  scale: 1.2,
                  opacity: 0.8,
                  boxShadow: '0 6px 20px rgba(0, 113, 227, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.6)'
                }}
                transition={{
                  opacity: { duration: 1.2, delay: 2.6 },
                  scale: { duration: 1.2, delay: 2.6, ease: [0.23, 1, 0.32, 1] },
                  y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                  x: { duration: 10, repeat: Infinity, ease: "easeInOut" }
                }}
              />

            </div>
          </div>

          {/* CTA Section - closer integration */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 2.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.button
              className="bg-[#0071e3] text-white px-8 py-3.5 rounded-full text-[17px] font-medium tracking-[-0.022em] transition-all duration-300 min-w-[200px] shadow-sm"
              whileHover={{ 
                scale: 1.02, 
                backgroundColor: "#0077ed", 
                boxShadow: "0 4px 20px rgba(0, 113, 227, 0.25)" 
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.scrollTo({ top: document.getElementById("contact")?.offsetTop, behavior: "smooth" })}
            >
              Book Consultation
            </motion.button>
            
            <motion.button
              className="border border-[#d2d2d7] text-[#1d1d1f] px-8 py-3.5 rounded-full text-[17px] font-medium tracking-[-0.022em] transition-all duration-300 min-w-[200px] hover:border-[#86868b]"
              whileHover={{ scale: 1.02, borderColor: "#1d1d1f" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.scrollTo({ top: document.getElementById("treatments")?.offsetTop, behavior: "smooth" })}
            >
              Learn More
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}