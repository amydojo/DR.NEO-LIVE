import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
import shinyFolliclePath from "@assets/shinyfollicle.png";

export function HeroSectionImmersive() {
  const containerRef = useRef<HTMLElement>(null);
  const follicleRef = useRef<HTMLImageElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Ultra-smooth mouse tracking with optimized spring physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = {
    damping: 35,
    stiffness: 120,
    mass: 0.6,
    restDelta: 0.001,
  };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Scroll-based transforms
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Ultra-smooth parallax layers with reduced motion
  const follicleY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const follicleScale = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    [1, 1.01, 0.96],
  );

  const exosome1X = useTransform(scrollYProgress, [0, 0.7], [0, -60]);
  const exosome1Y = useTransform(scrollYProgress, [0, 0.7], [0, -40]);
  const exosome2X = useTransform(scrollYProgress, [0, 0.7], [0, 80]);
  const exosome2Y = useTransform(scrollYProgress, [0, 0.7], [0, -50]);

  const textOpacity = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const textY = useTransform(scrollYProgress, [0, 1], [1, 1]);

  // Enhanced 3D mouse tracking with smooth magnetic field
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const normalizedX = (e.clientX - centerX) / (rect.width / 2);
      const normalizedY = (e.clientY - centerY) / (rect.height / 2);

      // Reduced intensity for smoother interactions
      mouseX.set(normalizedX * 15);
      mouseY.set(normalizedY * 15);

      setMousePosition({ x: normalizedX, y: normalizedY });
    },
    [mouseX, mouseY],
  );

  // Magnetic proximity detection for exosomes
  const [exosomeProximity, setExosomeProximity] = useState([0, 0]);

  const checkProximity = useCallback((e: MouseEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate proximity to each exosome (approximate positions)
    const exosome1Pos = { x: rect.width * 0.15, y: rect.height * 0.3 };
    const exosome2Pos = { x: rect.width * 0.82, y: rect.height * 0.45 };

    const dist1 = Math.sqrt(
      Math.pow(mouseX - exosome1Pos.x, 2) + Math.pow(mouseY - exosome1Pos.y, 2),
    );
    const dist2 = Math.sqrt(
      Math.pow(mouseX - exosome2Pos.x, 2) + Math.pow(mouseY - exosome2Pos.y, 2),
    );

    const proximity1 = Math.max(0, 1 - dist1 / 100);
    const proximity2 = Math.max(0, 1 - dist2 / 100);

    setExosomeProximity([proximity1, proximity2]);
  }, []);

  useEffect(() => {
    const handleMouseMove2 = (e: MouseEvent) => {
      handleMouseMove(e);
      checkProximity(e);
    };

    window.addEventListener("mousemove", handleMouseMove2);
    return () => window.removeEventListener("mousemove", handleMouseMove2);
  }, [handleMouseMove, checkProximity]);

  return (
    <section
      ref={containerRef}
      className="relative hidden md:block min-h-screen overflow-hidden bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dynamic gradient background with depth */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 120% 80% at ${50 + mousePosition.x * 5}% ${30 + mousePosition.y * 3}%, #ffffff 0%, #fafafa 25%, #f8f9fa 50%, #f5f5f7 75%, #e9ecef 100%)`,
        }}
      />

      {/* Ambient light layer */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 40% at ${50 + mousePosition.x * 8}% ${40 + mousePosition.y * 4}%, rgba(168, 123, 35, 0.03) 0%, transparent 70%)`,
          opacity: isHovered ? 0.8 : 0.4,
        }}
        transition={{ duration: 0.6 }}
      />

      {/* Mobile-optimized centered layout */}
      <div className="md:mt-16 relative min-h-screen max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col justify-center items-center text-center pt-32 pb-16 sm:pt-36 sm:pb-20 md:pt-24 md:pb-0">
        {/* Precision Medicine Badge with 3D depth */}
        <motion.div
          className="mb-6"
          style={{
            opacity: textOpacity,
            y: textY,
          }}
          initial={{ opacity: 0, y: 30, rotateX: -15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{
            scale: 1.05,
            rotateX: 5,
            boxShadow: "0 10px 30px rgba(168, 123, 35, 0.2)",
          }}
        >
          <span className="text-[13px] font-medium text-[#A87B23] uppercase tracking-[1px] px-6 py-3 border border-[#A87B23]/30 rounded-full bg-gradient-to-r from-[#A87B23]/5 to-[#FAE151]/5 backdrop-blur-sm">
            Precision Medicine
          </span>
        </motion.div>

        {/* Advanced 3D Typography with depth layers */}
        <motion.div
          style={{
            opacity: textOpacity,
            y: textY,
            rotateY: useTransform(smoothMouseX, [-30, 30], [-2, 2]),
            rotateX: useTransform(smoothMouseY, [-30, 30], [1, -1]),
          }}
          className="mb-8 relative"
        >
          {/* Typography shadow layer */}

          {/* Main typography */}
          <motion.h1
            className="relative text-[40px] xs:text-[46px] sm:text-[58px] md:text-[74px] lg:text-[96px] xl:text-[120px] font-extralight leading-[0.85] tracking-[-0.04em] max-w-[280px] xs:max-w-[320px] sm:max-w-[450px] md:max-w-[600px] lg:max-w-[750px] xl:max-w-[900px]"
            style={{
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif',
            }}
            initial={{ opacity: 0, filter: "blur(30px)", scale: 0.8 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 3, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span
              className="text-[#1d1d1f] block"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                textShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              Advanced Hair
            </motion.span>
            <motion.span
              className="font-medium bg-gradient-to-r   from-[#625046] via-[#EDB930] to-[#FAE151] bg-clip-text text-transparent block "
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              style={{
                textShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
              }}
              transition={{ duration: 2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              Restoration
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Advanced subtitle with parallax */}
        <motion.p
          className="text-[15px] xs:text-[16px] sm:text-[18px] md:text-[20px] lg:text-[21px] font-normal leading-[1.4] tracking-[0.005em] text-[#6e6e73] mb-6 md:mb-8 max-w-[270px] xs:max-w-[300px] sm:max-w-[380px] md:max-w-[480px] lg:max-w-[520px] px-2 xs:px-3 sm:px-4 md:px-0"
          style={{
            opacity: textOpacity,
            y: useTransform(textY, [0, -100], [0, -50]),
          }}
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 2.5, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
        >
          Revolutionary follicular regeneration using precision medicine and
          advanced biomolecular technology.
        </motion.p>

        {/* Mobile-optimized follicle composition */}
        <div className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[600px] h-[280px] sm:h-[320px] md:h-[450px] flex items-center justify-center mb-8 sm:mb-10 md:mb-12">
          {/* Subtle base glow - properly contained */}
          <motion.div
            className="absolute bottom-[20%] left-1/2 transform -translate-x-1/2 w-[280px] md:w-[350px] h-[40px] md:h-[50px] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(168, 123, 35, 0.12) 0%, rgba(168, 123, 35, 0.06) 50%, transparent 100%)",
              filter: "blur(20px)",
            }}
            animate={{
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Mobile-optimized 3D follicle */}
          <motion.img
            ref={follicleRef}
            src={shinyFolliclePath}
            alt="Advanced Hair Follicle Technology"
            className="relative z-20 w-[200px] sm:w-[240px] md:w-[320px] lg:w-[380px] h-auto object-contain"
            style={{
              y: follicleY,
              rotateY: useTransform(smoothMouseX, [-30, 30], [-5, 5]),
              rotateX: useTransform(smoothMouseY, [-30, 30], [2, -2]),
              scale: follicleScale,
              filter: `brightness(${1.05 + Math.abs(mousePosition.x) * 0.05}) contrast(${1.1 + Math.abs(mousePosition.y) * 0.05}) saturate(${1.15 + (exosomeProximity[0] + exosomeProximity[1]) * 0.15})`,
            }}
            initial={{
              opacity: 0,
              scale: 0.8,
              y: 60,
              rotateY: -15,
              filter: "blur(15px) brightness(0.8)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              rotateY: 0,
              filter: "blur(0px) brightness(1.05) contrast(1.1) saturate(1.15)",
            }}
            transition={{
              duration: 3,
              delay: 1.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              scale: 1.05,
              rotateY: 3,
              filter: "brightness(1.1) contrast(1.15) saturate(1.25)",
            }}
            loading="eager"
          />

          {/* Clean asymmetric exosomes */}

          {/* Exosome 1 - Large floating element */}
          <motion.div
            className="absolute top-[15%] left-[10%] pointer-events-auto cursor-pointer"
            style={{
              x: useTransform(exosome1X, [0, -80], [0, -40]),
              y: useTransform(exosome1Y, [0, -60], [0, -30]),
            }}
          >
            <motion.div
              className="w-[60px] h-[60px] md:w-[75px] md:h-[75px] rounded-full"
              style={{
                background: `radial-gradient(circle at 35% 25%, rgba(255, 255, 255, ${0.85 + exosomeProximity[0] * 0.1}) 0%, rgba(168, 123, 35, ${0.18 + exosomeProximity[0] * 0.15}) 30%, rgba(168, 123, 35, ${0.08 + exosomeProximity[0] * 0.1}) 65%, transparent 100%)`,
                boxShadow: `0 ${6 + exosomeProximity[0] * 8}px ${20 + exosomeProximity[0] * 8}px rgba(168, 123, 35, ${0.15 + exosomeProximity[0] * 0.15}), inset 0 1px 3px rgba(255, 255, 255, 0.5)`,
                backdropFilter: "blur(4px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                transform: `scale(${1 + exosomeProximity[0] * 0.15}) translate3d(${mousePosition.x * exosomeProximity[0] * 10}px, ${mousePosition.y * exosomeProximity[0] * 10}px, 0)`,
              }}
              animate={{
                y: [0, -15, 0],
                x: [0, 6, 0],
              }}
              transition={{
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                x: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              }}
              whileHover={{
                scale: 1.2,
                boxShadow: "0 15px 40px rgba(168, 123, 35, 0.3)",
              }}
            />
          </motion.div>

          {/* Exosome 2 - Medium floating element */}
          <motion.div
            className="absolute top-[45%] right-[15%] pointer-events-auto cursor-pointer"
            style={{
              x: useTransform(exosome2X, [0, 100], [0, 50]),
              y: useTransform(exosome2Y, [0, -70], [0, -35]),
            }}
          >
            <motion.div
              className="w-[45px] h-[45px] md:w-[55px] md:h-[55px] rounded-full"
              style={{
                background: `radial-gradient(circle at 30% 20%, rgba(255, 255, 255, ${0.8 + exosomeProximity[1] * 0.1}) 0%, rgba(250, 225, 81, ${0.12 + exosomeProximity[1] * 0.12}) 40%, rgba(250, 225, 81, ${0.05 + exosomeProximity[1] * 0.08}) 75%, transparent 100%)`,
                boxShadow: `0 ${4 + exosomeProximity[1] * 6}px ${14 + exosomeProximity[1] * 6}px rgba(250, 225, 81, ${0.12 + exosomeProximity[1] * 0.12}), inset 0 1px 2px rgba(255, 255, 255, 0.4)`,
                backdropFilter: "blur(3px)",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                transform: `scale(${1 + exosomeProximity[1] * 0.2}) translate3d(${-mousePosition.x * exosomeProximity[1] * 12}px, ${-mousePosition.y * exosomeProximity[1] * 12}px, 0)`,
              }}
              animate={{
                y: [0, -12, 0],
                x: [0, -4, 0],
              }}
              transition={{
                y: { duration: 7, ease: "easeInOut" },
                x: { duration: 9, ease: "easeInOut" },
              }}
              whileHover={{
                scale: 1.3,
                boxShadow: "0 12px 35px rgba(250, 225, 81, 0.25)",
              }}
            />
          </motion.div>
        </div>

        {/* Mobile-optimized CTA buttons */}
        <motion.div
          className="flex flex-col gap-4 justify-center items-center mb-16 sm:mb-20 md:mb-24 w-full px-4"
          style={{
            opacity: textOpacity,
            y: useTransform(textY, [0, -100], [0, -30]),
          }}
          initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 2, delay: 2.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.button
            className="custom-button px-8 sm:px-10 md:px-12 py-3 sm:py-4 rounded-full text-[15px] sm:text-[16px] md:text-[17px] font-medium tracking-[-0.025em] w-full max-w-[280px] sm:max-w-[320px] md:max-w-[240px] backdrop-blur-sm relative overflow-hidden"
            whileHover={{
              scale: 1.05,
              rotateY: 5,
              boxShadow: "0 15px 50px rgba(168, 123, 35, 0.4)",
              y: -5,
            }}
            whileTap={{
              scale: 0.95,
              rotateY: 0,
              y: 0,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            onClick={() =>
              window.scrollTo({
                top: document.getElementById("contact")?.offsetTop,
                behavior: "smooth",
              })
            }
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#8a6a1f] to-[#EDB930]"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative">Book Consultation</span>
          </motion.button>

          <motion.button
            className="border-2 custom-button-outline  px-8 sm:px-10 md:px-12 py-3 sm:py-4 rounded-full text-[15px] sm:text-[16px] md:text-[17px] font-medium tracking-[-0.025em] w-full max-w-[280px] sm:max-w-[320px] md:max-w-[240px] backdrop-blur-sm bg-white/60 relative overflow-hidden
            focus:outline-none focus:ring-2 focus:ring-[#EDB930] focus:ring-offset-2 focus:ring-offset-white
"
            whileHover={{
              scale: 1.05,
              rotateY: -5,
              y: -5,
            }}
            whileTap={{
              scale: 0.95,
              rotateY: 0,
              y: 0,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            onClick={() =>
              window.scrollTo({
                top: document.getElementById("treatments")?.offsetTop,
                behavior: "smooth",
              })
            }
          >
            View Science
          </motion.button>
        </motion.div>

        {/* Mobile-optimized scroll indicator */}
        <motion.div
          className="absolute md:hidden bottom-8 sm:bottom-10 md:bottom-8 transform -translate-x-1/2 flex flex-col items-center z-30 cursor-pointer"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 3.5 }}
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0]),
          }}
          onClick={() => {
            const treatmentsSection = document.getElementById("treatments");
            if (treatmentsSection) {
              treatmentsSection.scrollIntoView({ behavior: "smooth" });
            } else {
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
            }
          }}
          whileHover={{ y: -5 }}
          whileTap={{ y: 0 }}
        >
          <motion.span
            className="text-[12px] md:text-[13px] font-medium text-[#86868b] mb-3 md:mb-4 tracking-[0.5px] text-center"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            Discover the Science
          </motion.span>
          <motion.div
            className="w-5 h-10 md:w-6 md:h-12 border-2 border-[#86868b] rounded-full flex justify-center relative bg-white/20 backdrop-blur-sm"
            whileHover={{
              scale: 1.1,
              borderColor: "#EDB930",
              boxShadow: "0 4px 20px rgba(168, 123, 35, 0.2)",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-0.5 h-3 md:w-1 md:h-4 bg-[#EDB930] rounded-full mt-1.5 md:mt-2"
              animate={{
                y: [0, 16, 0],
                opacity: [1, 0.4, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
