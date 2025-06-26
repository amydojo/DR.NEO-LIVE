import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import shinyFolliclePath from "@assets/shinyfollicle.png";

export function HeroSectionUltimate() {
  const heroRef = useRef<HTMLElement>(null);
  const follicleRef = useRef<HTMLImageElement>(null);
  const exosomeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const glowRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const follicleY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const exosomeSpread = useTransform(scrollYProgress, [0, 0.5], [0, 150]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        setMousePosition({
          x: (e.clientX - centerX) * 0.01,
          y: (e.clientY - centerY) * 0.01
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-white"
    >
      {/* Premium gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 90% 70% at 50% 30%, #ffffff 0%, #fafafa 25%, #f8f9fa 50%, #f5f5f7 75%, #e9ecef 100%)'
        }}
      />

      {/* Premium centered layout - Apple signature style */}
      <div className="relative h-screen max-w-[1200px] mx-auto px-8 flex flex-col justify-center items-center text-center">
        
        {/* Precision Medicine Badge */}
        <motion.div
          className="mb-6"
          style={{ opacity: textOpacity }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          <span className="text-[13px] font-medium text-[#A87B23] uppercase tracking-[1px] px-4 py-2 border border-[#A87B23]/20 rounded-full bg-[#A87B23]/5">
            Precision Medicine
          </span>
        </motion.div>

        {/* Mobile-optimized Apple signature typography */}
        <motion.h1 
          className="text-[48px] sm:text-[64px] md:text-[84px] lg:text-[120px] font-extralight leading-[0.82] tracking-[-0.04em] mb-6 md:mb-8 max-w-[320px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] px-4 md:px-0"
          style={{ 
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif',
            opacity: textOpacity
          }}
          initial={{ opacity: 0, filter: "blur(20px)", y: 50 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 2.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-[#1d1d1f] block">Advanced Hair</span>
          <span className="font-medium bg-gradient-to-r from-[#625046] via-[#A87B23] to-[#FAE151] bg-clip-text text-transparent block">
            Restoration
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-[17px] sm:text-[19px] md:text-[21px] font-normal leading-[1.4] tracking-[0.005em] text-[#6e6e73] mb-6 md:mb-8 max-w-[300px] sm:max-w-[400px] md:max-w-[520px] px-4 md:px-0"
          style={{ opacity: textOpacity }}
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 2, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          Revolutionary follicular regeneration using precision medicine and advanced biomolecular technology.
        </motion.p>

        {/* Mobile-optimized urgency indicator */}
        <motion.div
          className="mb-8 md:mb-12"
          style={{ opacity: textOpacity }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-center gap-3 px-4">
            <div className="w-2 h-2 bg-[#34c759] rounded-full animate-pulse flex-shrink-0" />
            <span className="text-[13px] sm:text-[14px] font-medium text-[#1d1d1f] text-center">
              Limited availability - Book your consultation today
            </span>
          </div>
        </motion.div>

        {/* Premium follicle composition - mobile optimized */}
        <div className="relative w-full max-w-[600px] h-[350px] md:h-[400px] flex items-center justify-center mb-8 md:mb-12">
          
          {/* Visual grounding - enhanced glow ring */}
          <motion.div
            ref={glowRef}
            className="absolute bottom-[60px] md:bottom-[80px] left-1/2 transform -translate-x-1/2 w-[280px] md:w-[350px] h-[70px] md:h-[90px] z-10 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 85% 60% at 50% 100%, rgba(168, 123, 35, 0.15) 0%, rgba(168, 123, 35, 0.08) 35%, rgba(250, 225, 81, 0.04) 65%, transparent 100%)',
              filter: 'blur(25px)'
            }}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ 
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.1, 1]
            }}
            transition={{
              opacity: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 },
              scale: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }
            }}
          />

          {/* Secondary ripple effect */}
          <motion.div
            className="absolute bottom-[50px] md:bottom-[70px] left-1/2 transform -translate-x-1/2 w-[200px] md:w-[250px] h-[40px] md:h-[50px] z-9 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 70% 40% at 50% 100%, rgba(250, 225, 81, 0.1) 0%, rgba(250, 225, 81, 0.05) 50%, transparent 100%)',
              filter: 'blur(15px)'
            }}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.4, 0.7, 0.4],
              scale: [0.9, 1.2, 0.9]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3.5
            }}
          />

          {/* Ultra-sharp follicle with enhanced grounding */}
          <motion.img
            ref={follicleRef}
            src={shinyFolliclePath}
            alt="Advanced Hair Follicle Technology"
            className="relative z-20 w-[300px] md:w-[380px] lg:w-[420px] h-auto object-contain"
            style={{ 
              y: follicleY,
              rotateY: mousePosition.x * 1.5,
              rotateX: -mousePosition.y * 0.8
            }}
            initial={{ 
              opacity: 0, 
              scale: 0.85,
              y: 20,
              filter: "blur(15px) brightness(0.8)"
            }}
            animate={{ 
              opacity: 1, 
              scale: [1, 1.01, 1],
              y: [0, -8, 0],
              filter: "blur(0px) brightness(1.05) contrast(1.15) saturate(1.2) drop-shadow(0 25px 50px rgba(0, 0, 0, 0.12)) drop-shadow(0 8px 25px rgba(168, 123, 35, 0.1))"
            }}
            transition={{ 
              opacity: { duration: 2.5, delay: 2.5, ease: [0.16, 1, 0.3, 1] },
              scale: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 },
              y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              filter: { duration: 2.5, delay: 2.5, ease: [0.16, 1, 0.3, 1] }
            }}
            loading="eager"
          />

          {/* Asymmetric exosomes - reduced to 2 with magnetic drift */}
          
          {/* Exosome 1 - Large, drifting toward follicle base */}
          <motion.div
            ref={el => exosomeRefs.current[0] = el}
            className="absolute top-[8%] left-[12%] w-[65px] h-[65px] md:w-[80px] md:h-[80px] rounded-full z-15 pointer-events-auto cursor-pointer"
            style={{
              x: useTransform(exosomeSpread, [0, 150], [0, 25]),
              y: useTransform(exosomeSpread, [0, 150], [0, 40]),
              background: 'radial-gradient(circle at 35% 25%, rgba(255, 255, 255, 0.9) 0%, rgba(168, 123, 35, 0.2) 30%, rgba(168, 123, 35, 0.1) 65%, transparent 100%)',
              boxShadow: '0 8px 32px rgba(168, 123, 35, 0.25), inset 0 2px 4px rgba(255, 255, 255, 0.6)',
              backdropFilter: 'blur(4px)',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 0.7,
              scale: 1,
              y: [0, -15, 0],
              x: [0, 6, 0]
            }}
            whileHover={{
              scale: 1.1,
              opacity: 0.9,
              boxShadow: '0 12px 40px rgba(168, 123, 35, 0.35), inset 0 2px 6px rgba(255, 255, 255, 0.8)',
              transition: { duration: 0.3 }
            }}
            transition={{
              opacity: { duration: 2, delay: 3.2 },
              scale: { duration: 2, delay: 3.2, ease: [0.23, 1, 0.32, 1] },
              y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
              x: { duration: 9, repeat: Infinity, ease: "easeInOut" }
            }}
          />

          {/* Exosome 2 - Medium, asymmetric positioning */}
          <motion.div
            ref={el => exosomeRefs.current[1] = el}
            className="absolute top-[35%] right-[18%] w-[45px] h-[45px] md:w-[55px] md:h-[55px] rounded-full z-15 pointer-events-auto cursor-pointer"
            style={{
              x: useTransform(exosomeSpread, [0, 150], [0, -30]),
              y: useTransform(exosomeSpread, [0, 150], [0, 35]),
              background: 'radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.85) 0%, rgba(250, 225, 81, 0.15) 40%, rgba(250, 225, 81, 0.06) 75%, transparent 100%)',
              boxShadow: '0 6px 24px rgba(250, 225, 81, 0.2), inset 0 1px 3px rgba(255, 255, 255, 0.5)',
              backdropFilter: 'blur(3px)',
              border: '1px solid rgba(255, 255, 255, 0.25)'
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 0.55,
              scale: 1,
              y: [0, -10, 0],
              x: [0, -4, 0]
            }}
            whileHover={{
              scale: 1.15,
              opacity: 0.8,
              boxShadow: '0 8px 30px rgba(250, 225, 81, 0.3), inset 0 1px 4px rgba(255, 255, 255, 0.7)',
              transition: { duration: 0.3 }
            }}
            transition={{
              opacity: { duration: 2, delay: 3.8 },
              scale: { duration: 2, delay: 3.8, ease: [0.23, 1, 0.32, 1] },
              y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              x: { duration: 10, repeat: Infinity, ease: "easeInOut" }
            }}
          />
        </div>

        {/* Premium centered buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          style={{ opacity: textOpacity }}
          initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.8, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.button
            className="bg-[#A87B23] text-white px-12 py-4 rounded-full text-[17px] font-medium tracking-[-0.025em] transition-all duration-500 min-w-[200px] md:min-w-[240px] shadow-lg backdrop-blur-sm"
            whileHover={{ 
              scale: 1.02, 
              backgroundColor: "#8a6a1f", 
              boxShadow: "0 12px 40px rgba(168, 123, 35, 0.3)",
              y: -3
            }}
            whileTap={{ scale: 0.98, y: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            onClick={() => window.scrollTo({ top: document.getElementById("contact")?.offsetTop, behavior: "smooth" })}
          >
            Book Consultation
          </motion.button>
          
          <motion.button
            className="border-2 border-[#A87B23] text-[#A87B23] px-12 py-4 rounded-full text-[17px] font-medium tracking-[-0.025em] transition-all duration-500 min-w-[200px] md:min-w-[240px] backdrop-blur-sm bg-white/80"
            whileHover={{ 
              scale: 1.02, 
              backgroundColor: "#A87B23",
              borderColor: "#A87B23",
              color: "#ffffff",
              boxShadow: "0 8px 30px rgba(168, 123, 35, 0.2)",
              y: -3
            }}
            whileTap={{ scale: 0.98, y: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            onClick={() => window.scrollTo({ top: document.getElementById("treatments")?.offsetTop, behavior: "smooth" })}
          >
            View Science
          </motion.button>
        </motion.div>

        {/* Scroll indicator with story pull */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 5 }}
        >
          <span className="text-[13px] font-medium text-[#86868b] mb-3 tracking-[0.5px]">
            Discover the Science
          </span>
          <motion.div
            className="w-6 h-10 border-2 border-[#86868b] rounded-full flex justify-center"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-[#86868b] rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}