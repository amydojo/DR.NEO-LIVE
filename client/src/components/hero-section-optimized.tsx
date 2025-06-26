import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import shinyFolliclePath from "@assets/shinyfollicle.png";

export function HeroSectionOptimized() {
  const heroRef = useRef<HTMLElement>(null);
  const exosomeRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Scroll-triggered animations for exosomes
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollProgress = Math.min(scrollY / window.innerHeight, 1);
      
      exosomeRefs.current.forEach((exosome, index) => {
        if (exosome) {
          const baseX = index % 2 === 0 ? -1 : 1;
          const baseY = index === 1 ? -1 : 1;
          
          exosome.style.transform = `
            translate(${baseX * scrollProgress * 100}px, ${baseY * scrollProgress * 50}px) 
            rotate(${scrollProgress * 180}deg)
          `;
          exosome.style.opacity = `${1 - scrollProgress * 0.7}`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 120% 80% at 50% 20%, #ffffff 0%, #fafafa 40%, #f5f5f5 100%)'
      }}
    >
      <div className="relative max-w-[1200px] w-[90%] text-center">
        
        {/* Hero Text Content */}
        <motion.div 
          className="mb-16 relative z-30"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h1 
            className="text-[72px] md:text-[96px] font-light leading-[0.9] tracking-[-0.025em] text-[#1d1d1f] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Advanced Hair
            <br />
            <span className="font-medium">Restoration</span>
          </motion.h1>
          
          <motion.p 
            className="text-[28px] md:text-[32px] font-normal leading-[1.2] tracking-[0.01em] text-[#86868b] mb-12 max-w-[800px] mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            Pioneering scientific approaches to hair restoration with precision, artistry, and lasting results.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.button
              className="bg-[#1d1d1f] text-white px-8 py-4 rounded-full text-[17px] font-medium tracking-[-0.022em] hover:bg-[#424245] transition-all duration-300 min-w-[200px]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.scrollTo({ top: document.getElementById("contact")?.offsetTop, behavior: "smooth" })}
            >
              Book Consultation
            </motion.button>
            
            <motion.button
              className="border-2 border-[#1d1d1f] text-[#1d1d1f] px-8 py-4 rounded-full text-[17px] font-medium tracking-[-0.022em] hover:bg-[#1d1d1f] hover:text-white transition-all duration-300 min-w-[200px]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.scrollTo({ top: document.getElementById("treatments")?.offsetTop, behavior: "smooth" })}
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Follicle Visual Container */}
        <div className="relative max-w-[600px] mx-auto">
        
          {/* Main Follicle Image - Refined for Apple cohesion */}
          <motion.img
            src={shinyFolliclePath}
            alt="Premium Hair Follicle Visualization"
            className="w-full max-w-[500px] relative z-20 mx-auto"
            initial={{ 
              opacity: 0, 
              scale: 0.9,
              filter: "blur(6px) brightness(0.95)",
              y: 20
            }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              filter: "blur(0px) brightness(1) contrast(1.05)",
              y: 0
            }}
            whileHover={{
              scale: 1.01,
              filter: "brightness(1.08) contrast(1.1)",
              transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] }
            }}
            transition={{ 
              duration: 1.8, 
              ease: [0.16, 1, 0.3, 1],
              delay: 1.3
            }}
            loading="eager"
            style={{
              filter: "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.1))"
            }}
          />

        {/* Enhanced Ambient Glow with Reflective Light */}
        <motion.div
          className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 w-[500px] h-[250px] z-10 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 70% 40% at 50% 80%, rgba(255, 255, 255, 0.4) 0%, rgba(168, 123, 35, 0.25) 30%, transparent 70%)',
            filter: 'blur(50px)'
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: [0.4, 0.8, 0.4],
            scale: [0.9, 1.1, 0.9]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />

        {/* Premium Reflection Light */}
        <motion.div
          className="absolute top-[20%] left-[30%] w-[200px] h-[100px] z-15 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, transparent 50%)',
            filter: 'blur(20px)',
            borderRadius: '50%'
          }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 0.7, 0],
            x: [0, 20, 0],
            y: [0, -10, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

          {/* Floating Orb 1 - Refined Apple aesthetic */}
          <motion.div
            ref={el => exosomeRefs.current[0] = el}
            className="absolute top-[15%] left-[10%] w-[80px] h-[80px] md:w-[80px] md:h-[80px] sm:w-[50px] sm:h-[50px] rounded-full z-5 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 35% 25%, rgba(255, 255, 255, 0.9) 0%, rgba(255, 215, 140, 0.8) 20%, rgba(218, 165, 32, 0.6) 50%, rgba(184, 134, 11, 0.3) 80%, transparent 100%)',
              boxShadow: '0 8px 32px rgba(218, 165, 32, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
              filter: 'blur(0.5px)'
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 0.85,
              scale: 1,
              y: [0, -20, 0],
              x: [0, 8, 0]
            }}
            transition={{
              opacity: { duration: 1.2, delay: 1.8 },
              scale: { duration: 1.2, delay: 1.8, ease: [0.23, 1, 0.32, 1] },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              x: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
          />

        {/* Floating Exosome 2 - Premium Glass Effect */}
        <motion.div
          ref={el => exosomeRefs.current[1] = el}
          className="absolute top-[25%] right-[12%] w-[55px] h-[55px] md:w-[55px] md:h-[55px] sm:w-[35px] sm:h-[35px] rounded-full z-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.9) 0%, rgba(168, 123, 35, 0.5) 35%, rgba(168, 123, 35, 0.15) 65%, transparent 100%)',
            boxShadow: '0 0 25px rgba(168, 123, 35, 0.35), inset 0 0 15px rgba(255, 255, 255, 0.4)',
            backdropFilter: 'blur(6px)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
          initial={{ opacity: 0, scale: 0, filter: "blur(8px)" }}
          animate={{ 
            opacity: [0, 0.8, 0.8], 
            scale: [0, 1.15, 1],
            filter: "blur(0px)",
            y: [0, -20, 0],
            x: [0, -8, 0],
            rotate: [0, -180, -360]
          }}
          transition={{
            opacity: { duration: 1.3, delay: 1.4 },
            scale: { duration: 1.3, delay: 1.4, ease: [0.175, 0.885, 0.32, 1.275] },
            filter: { duration: 1.3, delay: 1.4 },
            y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 },
            x: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 },
            rotate: { duration: 25, repeat: Infinity, ease: "linear" }
          }}
        />

        {/* Floating Exosome 3 - Crystalline Effect */}
        <motion.div
          ref={el => exosomeRefs.current[2] = el}
          className="absolute bottom-[12%] left-[25%] w-[65px] h-[65px] md:w-[65px] md:h-[65px] sm:w-[40px] sm:h-[40px] rounded-full z-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 35% 20%, rgba(255, 255, 255, 0.95) 0%, rgba(168, 123, 35, 0.7) 30%, rgba(168, 123, 35, 0.3) 60%, transparent 100%)',
            boxShadow: '0 0 35px rgba(168, 123, 35, 0.45), inset 0 0 25px rgba(255, 255, 255, 0.5), 0 0 80px rgba(168, 123, 35, 0.2)',
            backdropFilter: 'blur(8px)',
            border: '2px solid rgba(255, 255, 255, 0.3)'
          }}
          initial={{ opacity: 0, scale: 0, filter: "blur(12px)" }}
          animate={{ 
            opacity: [0, 0.95, 0.95], 
            scale: [0, 1.25, 1],
            filter: "blur(0px)",
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 270, 540]
          }}
          transition={{
            opacity: { duration: 1.7, delay: 1.8 },
            scale: { duration: 1.7, delay: 1.8, ease: [0.175, 0.885, 0.32, 1.275] },
            filter: { duration: 1.7, delay: 1.8 },
            y: { duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2.5 },
            x: { duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2.5 },
            rotate: { duration: 30, repeat: Infinity, ease: "linear" }
          }}
        />

        {/* Ambient Light Particles */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2 }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#A87B23] rounded-full"
              style={{
                left: `${20 + (i % 3) * 25}%`,
                top: `${40 + Math.floor(i / 3) * 20}%`,
              }}
              animate={{
                opacity: [0, 0.8, 0],
                scale: [0, 1.2, 0],
                y: [-10, -30, -50],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5 + 2,
                ease: "easeOut",
              }}
            />
          ))}
        </motion.div>
        </div>
      </div>

    </section>
  );
}