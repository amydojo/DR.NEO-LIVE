// components/FadeInOnScroll.tsx
"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export function FadeInOnScroll({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.9, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      className={className}
      animate={controls}
      transition={{ duration: 0.6, ease: "easeOut" }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}