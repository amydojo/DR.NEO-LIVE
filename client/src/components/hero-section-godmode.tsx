import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import shinyFolliclePath from "@assets/shinyfollicle.png";

export function HeroSectionGodMode() {
  const follicleRef = useRef<HTMLImageElement>(null);
  const exosomeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationId: number;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (follicleRef.current) {
        const rect = follicleRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = (e.clientX - centerX) * 0.015;
        const deltaY = (e.clientY - centerY) * 0.015;
        
        follicleRef.current.style.transform = `
          translate(${deltaX}px, ${deltaY}px) 
          rotateY(${deltaX * 0.5}deg) 
          rotateX(${-deltaY * 0.3}deg)
        `;
      }
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const progress = Math.min(scrollY / (window.innerHeight * 0.6), 1);
      
      // Exosomes drift outward on scroll
      exosomeRefs.current.forEach((exosome, index) => {
        if (exosome) {
          const angle = (index * 120) + 45; // Spread around follicle
          const distance = progress * 120;
          const x = Math.cos(angle * Math.PI / 180) * distance;
          const y = Math.sin(angle * Math.PI / 180) * distance;
          
          exosome.style.transform = `translate(${x}px, ${y}px) scale(${1 - progress * 0.4})`;
          exosome.style.opacity = `${Math.max(0.2, 1 - progress * 0.8)}`;
        }
      });

      // Glow intensifies on scroll
      if (glowRef.current) {
        glowRef.current.style.opacity = `${0.6 + progress * 0.4}`;
        glowRef.current.style.transform = `scale(${1 + progress * 0.3})`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Platinum gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, #ffffff 0%, #f8f9fa 30%, #e9ecef 70%, #dee2e6 100%)'
        }}
      />

      {/* Core composition */}
      <div className="relative h-screen max-w-[1200px] mx-auto px-8 flex flex-col justify-center items-center text-center">
        
        {/* Minimal copy hierarchy */}
        <motion.div
          className="mb-20 relative z-30"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h1 
            className="text-[85px] md:text-[115px] lg:text-[145px] font-light leading-[0.82] tracking-[-0.035em] mb-8"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif' }}
            initial={{ opacity: 0, filter: "blur(20px)", y: 30 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 2.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[#1d1d1f]">Advanced Hair</span>
            <br />
            <span className="font-medium bg-gradient-to-r from-[#625046] via-[#A87B23] to-[#FAE151] bg-clip-text text-transparent">
              Restoration
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-[21px] md:text-[24px] font-normal leading-[1.3] tracking-[0.005em] text-[#6e6e73] mb-16 max-w-[580px] mx-auto"
            initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            Precision medicine meets regenerative science.
          </motion.p>
          
          {/* Premium Apple-style buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.6, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.button
              className="bg-[#a87b23] text-white px-10 py-4 rounded-full text-[17px] font-medium tracking-[-0.022em] transition-all duration-500 min-w-[220px] shadow-lg backdrop-blur-sm"
              whileHover={{ 
                scale: 1.025, 
                backgroundColor: "#8f6a1f", 
                boxShadow: "0 12px 35px rgba(168, 123, 35, 0.35)",
                y: -2
              }}
              whileTap={{ scale: 0.975, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={() => window.scrollTo({ top: document.getElementById("contact")?.offsetTop, behavior: "smooth" })}
            >
              Book Consultation
            </motion.button>
            
            <motion.button
              className="border-2 border-[#a87b23] text-[#a87b23] px-10 py-4 rounded-full text-[17px] font-medium tracking-[-0.022em] transition-all duration-500 min-w-[220px] backdrop-blur-sm bg-white/60"
              whileHover={{ 
                scale: 1.025, 
                borderColor: "#8f6a1f", 
                backgroundColor: "#a87b23",
                color: "#ffffff",
                boxShadow: "0 8px 25px rgba(168, 123, 35, 0.25)",
                y: -2
              }}
              whileTap={{ scale: 0.975, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={() => window.scrollTo({ top: document.getElementById("treatments")?.offsetTop, behavior: "smooth" })}
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Floating follicle composition */}
        <div className="relative w-[600px] h-[400px] flex items-center justify-center">
          
          {/* Enhanced glow ring with premium effects */}
          <motion.div
            ref={glowRef}
            className="absolute bottom-[40px] left-1/2 transform -translate-x-1/2 w-[280px] h-[70px] z-10 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 75% 45% at 50% 100%, rgba(0, 113, 227, 0.15) 0%, rgba(0, 113, 227, 0.08) 40%, rgba(0, 113, 227, 0.03) 70%, transparent 100%)',
              filter: 'blur(25px)'
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0.7, 1.2, 0.7],
              scale: [1, 1.1, 1]
            }}
            transition={{
              opacity: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2.8 },
              scale: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2.8 }
            }}
          />

          {/* Studio-quality 3D follicle with premium motion */}
          <motion.img
            ref={follicleRef}
            src={shinyFolliclePath}
            alt="Precision Hair Follicle"
            className="relative z-20 w-[380px] h-auto object-contain"
            initial={{ 
              opacity: 0, 
              scale: 0.75,
              y: 80,
              rotateY: -15,
              filter: "blur(20px) brightness(0.7) contrast(0.8)"
            }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -12, 0],
              rotateY: [0, 3, 0],
              filter: "blur(0px) brightness(1.05) contrast(1.15) saturate(1.2)"
            }}
            transition={{ 
              opacity: { duration: 2.5, delay: 2.2, ease: [0.16, 1, 0.3, 1] },
              scale: { duration: 2.5, delay: 2.2, ease: [0.16, 1, 0.3, 1] },
              y: { duration: 10, repeat: Infinity, ease: "easeInOut" },
              rotateY: { duration: 12, repeat: Infinity, ease: "easeInOut" },
              filter: { duration: 2.5, delay: 2.2, ease: [0.16, 1, 0.3, 1] }
            }}
            loading="eager"
            style={{
              filter: "drop-shadow(0 30px 60px rgba(0, 0, 0, 0.12)) drop-shadow(0 8px 25px rgba(0, 113, 227, 0.08))",
              transformStyle: "preserve-3d"
            }}
          />

          {/* Translucent exosomes with light refraction */}
          
          {/* Exosome 1 - Top left */}
          <motion.div
            ref={el => exosomeRefs.current[0] = el}
            className="absolute top-[10%] left-[18%] w-[65px] h-[65px] rounded-full z-15 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 30% 25%, rgba(255, 255, 255, 0.9) 0%, rgba(0, 113, 227, 0.08) 40%, transparent 80%)',
              boxShadow: '0 8px 32px rgba(0, 113, 227, 0.12), inset 0 2px 4px rgba(255, 255, 255, 0.6)',
              backdropFilter: 'blur(4px)',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 0.7,
              scale: 1,
              y: [0, -12, 0],
              x: [0, 6, 0]
            }}
            transition={{
              opacity: { duration: 1.5, delay: 3 },
              scale: { duration: 1.5, delay: 3, ease: [0.23, 1, 0.32, 1] },
              y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
              x: { duration: 9, repeat: Infinity, ease: "easeInOut" }
            }}
          />

          {/* Exosome 2 - Top right */}
          <motion.div
            ref={el => exosomeRefs.current[1] = el}
            className="absolute top-[25%] right-[15%] w-[45px] h-[45px] rounded-full z-15 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 35% 20%, rgba(255, 255, 255, 0.85) 0%, rgba(134, 134, 139, 0.06) 50%, transparent 85%)',
              boxShadow: '0 6px 24px rgba(134, 134, 139, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.5)',
              backdropFilter: 'blur(3px)',
              border: '1px solid rgba(255, 255, 255, 0.25)'
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 0.6,
              scale: 1,
              y: [0, -8, 0],
              x: [0, -4, 0]
            }}
            transition={{
              opacity: { duration: 1.5, delay: 3.5 },
              scale: { duration: 1.5, delay: 3.5, ease: [0.23, 1, 0.32, 1] },
              y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              x: { duration: 10, repeat: Infinity, ease: "easeInOut" }
            }}
          />

          {/* Exosome 3 - Bottom left */}
          <motion.div
            ref={el => exosomeRefs.current[2] = el}
            className="absolute bottom-[20%] left-[25%] w-[55px] h-[55px] rounded-full z-15 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 40% 30%, rgba(255, 255, 255, 0.8) 0%, rgba(0, 113, 227, 0.05) 60%, transparent 90%)',
              boxShadow: '0 6px 20px rgba(0, 113, 227, 0.08), inset 0 1px 3px rgba(255, 255, 255, 0.4)',
              backdropFilter: 'blur(3px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 0.65,
              scale: 1,
              y: [0, -10, 0],
              x: [0, 5, 0]
            }}
            transition={{
              opacity: { duration: 1.5, delay: 4 },
              scale: { duration: 1.5, delay: 4, ease: [0.23, 1, 0.32, 1] },
              y: { duration: 9, repeat: Infinity, ease: "easeInOut" },
              x: { duration: 11, repeat: Infinity, ease: "easeInOut" }
            }}
          />

          {/* Exosome 4 - Bottom right */}
          <motion.div
            ref={el => exosomeRefs.current[3] = el}
            className="absolute bottom-[30%] right-[20%] w-[40px] h-[40px] rounded-full z-15 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.75) 0%, rgba(134, 134, 139, 0.04) 70%, transparent 95%)',
              boxShadow: '0 4px 16px rgba(134, 134, 139, 0.08), inset 0 1px 2px rgba(255, 255, 255, 0.3)',
              backdropFilter: 'blur(2px)',
              border: '1px solid rgba(255, 255, 255, 0.15)'
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 0.5,
              scale: 1,
              y: [0, -6, 0],
              x: [0, -3, 0]
            }}
            transition={{
              opacity: { duration: 1.5, delay: 4.5 },
              scale: { duration: 1.5, delay: 4.5, ease: [0.23, 1, 0.32, 1] },
              y: { duration: 10, repeat: Infinity, ease: "easeInOut" },
              x: { duration: 12, repeat: Infinity, ease: "easeInOut" }
            }}
          />

        </div>
      </div>
    </section>
  );
}