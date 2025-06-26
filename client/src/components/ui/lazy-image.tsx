import { useState, useEffect, useRef, ImgHTMLAttributes } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

// Cache loaded images to prevent unnecessary reloading
const imageCache = new Map<string, boolean>();

type LazyImageProps = {
  src: string;
  alt: string;
  aspectRatio?: string;  // e.g. "16/9", "1/1", etc.
  placeholderColor?: string;
  blurAmount?: number;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  delay?: number;
  priority?: boolean; // Set to true for above-the-fold images
  fadeIn?: boolean; // Control whether image fades in
  animationDuration?: number; // Duration of animation in ms
} & Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt" | "loading">;

export function LazyImage({
  src,
  alt,
  aspectRatio,
  placeholderColor = "#f5f5f5",
  blurAmount = 20,
  objectFit = "cover",
  delay = 0,
  priority = false,
  fadeIn = true,
  animationDuration = 600,
  className,
  ...props
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(priority);
  const [error, setError] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver({
    ref: imageRef,
    threshold: 0.1,
    rootMargin: "50px",
    triggerOnce: true,
  });

  // Load image when it comes into view or immediately if priority
  useEffect(() => {
    if (priority) {
      setShouldLoad(true);
      return;
    }
    
    if (isInView) {
      const timer = setTimeout(() => {
        setShouldLoad(true);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isInView, delay, priority]);

  // Check cache and prefetch the image when needed
  useEffect(() => {
    if (shouldLoad && src) {
      // Check the image cache first
      if (imageCache.has(src)) {
        setIsLoaded(true);
        return;
      }
      
      const img = new Image();
      img.src = src;
      
      img.onload = () => {
        setIsLoaded(true);
        // Add to cache
        imageCache.set(src, true);
      };
      
      img.onerror = () => {
        setError(true);
        console.error(`Failed to load image: ${src}`);
      };
      
      return () => {
        img.onload = null;
        img.onerror = null;
      };
    }
  }, [shouldLoad, src]);

  return (
    <div
      ref={imageRef}
      className={cn(
        "relative overflow-hidden bg-no-repeat bg-center",
        aspectRatio ? `aspect-[${aspectRatio}]` : "",
        className
      )}
      style={{
        backgroundColor: placeholderColor,
      }}
      {...props}
    >
      <AnimatePresence>
        {shouldLoad && isLoaded && !error && (
          <motion.img
            key={`img-${src}`}
            src={src}
            alt={alt}
            initial={fadeIn ? { opacity: 0 } : { opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: animationDuration / 1000,
              ease: "easeOut",
              delay: 0.1
            }}
            className={cn(
              "w-full h-full",
              `object-${objectFit}`
            )}
            loading={priority ? "eager" : "lazy"}
          />
        )}
      </AnimatePresence>

      {/* Animated placeholder with pulse effect */}
      <AnimatePresence>
        {(!isLoaded || error) && (
          <motion.div
            key={`placeholder-${src}`}
            className="absolute inset-0"
            style={{ backgroundColor: placeholderColor }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: animationDuration / 1000,
              ease: "easeOut"
            }}
          >
            {/* Optional loading pulse animation */}
            <motion.div 
              className="absolute inset-0 bg-white" 
              animate={{ 
                opacity: [0.05, 0.15, 0.05]
              }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Fallback for error state */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <span className="text-sm text-gray-500">Image not available</span>
        </div>
      )}
    </div>
  );
}