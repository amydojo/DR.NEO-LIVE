import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import shinyFolliclePath from "@assets/shinyfollicle.png";

export function HeroSectionRefined() {
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
            translate(${baseX * scrollProgress * 100}px, ${baseY * scrollProgress * 60}px) 
            scale(${1 - scrollProgress * 0.4})
          `;
          exosome.style.opacity = `${1 - scrollProgress * 0.6}`;
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
      {/* Apple-tier structured layout */}
      <div className="relative h-screen max-w-[1400px] mx-auto px-8 grid grid-rows-[auto_1fr] gap-16 pt-24">
        
        {/* Hero Text Section - Apple hierarchy */}
        <motion.div 
          className="relative z-30 text-center max-w-[900px] mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h1 
            className="text-[80px] md:text-[100px] lg:text-[130px] font-light leading-[0.82] tracking-[-0.035em] text-[#1d1d1f] mb-8"
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
            className="text-[19px] md:text-[21px] font-normal leading-[1.381] tracking-[0.011em] text-[#6e6e73] mb-12 max-w-[520px] mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            Pioneering scientific approaches with precision,<br />artistry, and lasting results.
          </motion.p>
          
          {/* Apple-style CTA Section */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
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
        </motion.div>

        {/* Visual Hero Section - Balanced composition */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-[700px] h-[500px] flex items-center justify-center">
            
            {/* Main Follicle - Apple precision */}
            <motion.img
              src={shinyFolliclePath}
              alt="Premium Hair Follicle Visualization"
              className="relative z-20 w-[480px] h-auto object-contain"
              initial={{ 
                opacity: 0, 
                scale: 0.8,
                filter: "blur(15px) brightness(0.85)",
                y: 60
              }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                filter: "blur(0px) brightness(1) contrast(1.05) saturate(1.1)",
                y: 0
              }}
              whileHover={{
                scale: 1.02,
                filter: "brightness(1.05) contrast(1.08) saturate(1.15)",
                transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] }
              }}
              transition={{ 
                duration: 2.5, 
                ease: [0.16, 1, 0.3, 1],
                delay: 1.8
              }}
              loading="eager"
              style={{
                filter: "drop-shadow(0 30px 60px rgba(0, 0, 0, 0.06))"
              }}
            />

            {/* Refined Ambient Foundation */}
            <motion.div
              className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 w-[400px] h-[120px] z-10 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 70% 50% at 50% 80%, rgba(255, 215, 140, 0.15) 0%, rgba(218, 165, 32, 0.08) 40%, transparent 70%)',
                filter: 'blur(40px)'
              }}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2.5
              }}
            />

            {/* Floating Orb 1 - Left positioned */}
            <motion.div
              ref={el => exosomeRefs.current[0] = el}
              className="absolute top-[15%] left-[8%] w-[90px] h-[90px] rounded-full z-15 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 35% 25%, rgba(255, 255, 255, 0.95) 0%, rgba(255, 215, 140, 0.75) 25%, rgba(218, 165, 32, 0.4) 65%, transparent 100%)',
                boxShadow: '0 8px 32px rgba(218, 165, 32, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
                filter: 'blur(0.5px)'
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 0.85,
                scale: 1,
                y: [0, -25, 0],
                x: [0, 12, 0]
              }}
              transition={{
                opacity: { duration: 1.5, delay: 2.2 },
                scale: { duration: 1.5, delay: 2.2, ease: [0.23, 1, 0.32, 1] },
                y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                x: { duration: 10, repeat: Infinity, ease: "easeInOut" }
              }}
            />

            {/* Floating Orb 2 - Right positioned */}
            <motion.div
              ref={el => exosomeRefs.current[1] = el}
              className="absolute top-[25%] right-[12%] w-[70px] h-[70px] rounded-full z-15 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.9) 0%, rgba(255, 215, 140, 0.65) 30%, rgba(218, 165, 32, 0.35) 70%, transparent 100%)',
                boxShadow: '0 6px 24px rgba(218, 165, 32, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
                filter: 'blur(0.5px)'
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 0.75,
                scale: 1,
                y: [0, -20, 0],
                x: [0, -8, 0]
              }}
              transition={{
                opacity: { duration: 1.5, delay: 2.6 },
                scale: { duration: 1.5, delay: 2.6, ease: [0.23, 1, 0.32, 1] },
                y: { duration: 9, repeat: Infinity, ease: "easeInOut" },
                x: { duration: 11, repeat: Infinity, ease: "easeInOut" }
              }}
            />

            {/* Floating Orb 3 - Bottom positioned */}
            <motion.div
              ref={el => exosomeRefs.current[2] = el}
              className="absolute bottom-[18%] left-[20%] w-[75px] h-[75px] rounded-full z-15 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 40% 30%, rgba(255, 255, 255, 0.85) 0%, rgba(255, 215, 140, 0.55) 35%, rgba(218, 165, 32, 0.25) 75%, transparent 100%)',
                boxShadow: '0 6px 20px rgba(218, 165, 32, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
                filter: 'blur(0.5px)'
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 0.7,
                scale: 1,
                y: [0, -18, 0],
                x: [0, 15, 0]
              }}
              transition={{
                opacity: { duration: 1.5, delay: 3 },
                scale: { duration: 1.5, delay: 3, ease: [0.23, 1, 0.32, 1] },
                y: { duration: 10, repeat: Infinity, ease: "easeInOut" },
                x: { duration: 12, repeat: Infinity, ease: "easeInOut" }
              }}
            />

          </div>
        </div>
      </div>
    </section>
  );
}