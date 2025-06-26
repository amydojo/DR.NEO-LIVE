import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import shinyFolliclePath from "@assets/shinyfollicle.png";

export function HeroSectionPremium() {
  const heroRef = useRef<HTMLElement>(null);
  const exosomeRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollProgress = Math.min(scrollY / window.innerHeight, 1);
      
      exosomeRefs.current.forEach((exosome, index) => {
        if (exosome) {
          const baseX = index % 2 === 0 ? -1 : 1;
          const baseY = index === 1 ? -1 : 1;
          
          exosome.style.transform = `
            translate(${baseX * scrollProgress * 80}px, ${baseY * scrollProgress * 40}px) 
            scale(${1 - scrollProgress * 0.3})
          `;
          exosome.style.opacity = `${1 - scrollProgress * 0.5}`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #fafafa 50%, #f5f5f5 100%)'
      }}
    >
      {/* Apple-tier layout with proper grid system */}
      <div className="relative h-screen flex flex-col justify-center max-w-[1400px] mx-auto px-8">
        
        {/* Hero Text Content - Refined positioning */}
        <motion.div 
          className="relative z-30 mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h1 
            className="text-[72px] md:text-[96px] lg:text-[120px] font-light leading-[0.85] tracking-[-0.03em] text-[#1d1d1f] mb-8 text-center"
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            Advanced Hair
            <br />
            <span className="font-medium bg-gradient-to-r from-[#1d1d1f] to-[#86868b] bg-clip-text text-transparent">Restoration</span>
          </motion.h1>
          
          <motion.p 
            className="text-[21px] md:text-[24px] font-normal leading-[1.3] tracking-[0.005em] text-[#6e6e73] mb-16 max-w-[580px] mx-auto text-center"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Pioneering scientific approaches with precision, artistry, and lasting results.
          </motion.p>
          
          {/* CTA Buttons - Apple refined spacing */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.button
              className="bg-[#0071e3] text-white px-10 py-4 rounded-full text-[17px] font-medium tracking-[-0.022em] transition-all duration-300 min-w-[220px] shadow-lg"
              whileHover={{ scale: 1.02, backgroundColor: "#0077ed", boxShadow: "0 8px 25px rgba(0, 113, 227, 0.25)" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.scrollTo({ top: document.getElementById("contact")?.offsetTop, behavior: "smooth" })}
            >
              Book Consultation
            </motion.button>
            
            <motion.button
              className="border-2 border-[#86868b] text-[#1d1d1f] px-10 py-4 rounded-full text-[17px] font-medium tracking-[-0.022em] transition-all duration-300 min-w-[220px] hover:border-[#1d1d1f]"
              whileHover={{ scale: 1.02, borderColor: "#1d1d1f" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.scrollTo({ top: document.getElementById("treatments")?.offsetTop, behavior: "smooth" })}
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Visual Composition - Apple-tier balance */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-[600px] h-[600px] flex items-center justify-center">
            
            {/* Main Follicle Image - Refined positioning */}
            <motion.img
              src={shinyFolliclePath}
              alt="Premium Hair Follicle Visualization"
              className="relative z-20 w-[420px] h-auto object-contain"
              initial={{ 
                opacity: 0, 
                scale: 0.85,
                filter: "blur(12px) brightness(0.9)",
                y: 40
              }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                filter: "blur(0px) brightness(1) contrast(1.05) saturate(1.1)",
                y: 0
              }}
              whileHover={{
                scale: 1.015,
                filter: "brightness(1.05) contrast(1.08) saturate(1.15)",
                transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
              }}
              transition={{ 
                duration: 2.2, 
                ease: [0.16, 1, 0.3, 1],
                delay: 1.6
              }}
              loading="eager"
              style={{
                filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.08))"
              }}
            />

            {/* Subtle Ambient Glow */}
            <motion.div
            className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 w-[350px] h-[150px] z-10 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 80% 60% at 50% 80%, rgba(255, 215, 140, 0.25) 0%, rgba(218, 165, 32, 0.15) 40%, transparent 70%)',
              filter: 'blur(30px)'
            }}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />

          {/* Floating Orb 1 */}
          <motion.div
            ref={el => exosomeRefs.current[0] = el}
            className="absolute top-[20%] left-[15%] w-[70px] h-[70px] md:w-[70px] md:h-[70px] sm:w-[45px] sm:h-[45px] rounded-full z-5 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 35% 25%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 215, 140, 0.8) 25%, rgba(218, 165, 32, 0.5) 60%, transparent 100%)',
              boxShadow: '0 8px 24px rgba(218, 165, 32, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
              filter: 'blur(0.5px)'
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 0.8,
              scale: 1,
              y: [0, -18, 0],
              x: [0, 6, 0]
            }}
            transition={{
              opacity: { duration: 1.2, delay: 2 },
              scale: { duration: 1.2, delay: 2, ease: [0.23, 1, 0.32, 1] },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              x: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
          />

          {/* Floating Orb 2 */}
          <motion.div
            ref={el => exosomeRefs.current[1] = el}
            className="absolute top-[30%] right-[20%] w-[55px] h-[55px] md:w-[55px] md:h-[55px] sm:w-[35px] sm:h-[35px] rounded-full z-5 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.9) 0%, rgba(255, 215, 140, 0.7) 30%, rgba(218, 165, 32, 0.4) 65%, transparent 100%)',
              boxShadow: '0 6px 20px rgba(218, 165, 32, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
              filter: 'blur(0.5px)'
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 0.75,
              scale: 1,
              y: [0, -15, 0],
              x: [0, -5, 0]
            }}
            transition={{
              opacity: { duration: 1.2, delay: 2.3 },
              scale: { duration: 1.2, delay: 2.3, ease: [0.23, 1, 0.32, 1] },
              y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
              x: { duration: 9, repeat: Infinity, ease: "easeInOut" }
            }}
          />

          {/* Floating Orb 3 */}
          <motion.div
            ref={el => exosomeRefs.current[2] = el}
            className="absolute bottom-[20%] left-[25%] w-[60px] h-[60px] md:w-[60px] md:h-[60px] sm:w-[40px] sm:h-[40px] rounded-full z-5 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 40% 30%, rgba(255, 255, 255, 0.85) 0%, rgba(255, 215, 140, 0.6) 35%, rgba(218, 165, 32, 0.3) 70%, transparent 100%)',
              boxShadow: '0 6px 18px rgba(218, 165, 32, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
              filter: 'blur(0.5px)'
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 0.7,
              scale: 1,
              y: [0, -12, 0],
              x: [0, 8, 0]
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
    </section>
  );
}