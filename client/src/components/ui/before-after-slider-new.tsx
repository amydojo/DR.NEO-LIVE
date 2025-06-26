import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  className?: string;
  autoAnimate?: boolean;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = "Before treatment",
  afterAlt = "After treatment",
  className = "",
  autoAnimate = true,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const beforeImageRef = useRef<HTMLImageElement>(null);
  const afterImageRef = useRef<HTMLImageElement>(null);

  // Animation state
  const animationTimeoutsRef = useRef<NodeJS.Timeout[]>([]);
  const animationFrameRef = useRef<number>();
  const isAnimatingRef = useRef(false);

  // Preload images before showing the slider
  useEffect(() => {
    let loadedCount = 0;
    const totalImages = 2;

    const handleImageLoad = () => {
      loadedCount++;
      if (loadedCount === totalImages) {
        setImagesLoaded(true);
      }
    };

    const preloadImage = (src: string, callback: () => void) => {
      const img = new Image();
      img.src = src;
      img.onload = callback;
      img.onerror = callback; // Count errors as loaded to avoid waiting indefinitely
    };

    preloadImage(beforeImage, handleImageLoad);
    preloadImage(afterImage, handleImageLoad);

    return () => {
      // Clean up
    };
  }, [beforeImage, afterImage]);

  // Handle auto animation with direct state updates for smoother transitions and more compatibility
  useEffect(() => {
    if (!imagesLoaded) return;

    let animationTimeouts: NodeJS.Timeout[] = [];

    const startAnimation = () => {
      if (!autoAnimate || isDragging || isHovered) return;

      // Manual animation sequence with timed state updates
      const sequence = async () => {
        try {
          // Wait for initial delay
          const timeout1 = setTimeout(() => {
            // Set to show more of before image
            setSliderPosition(50);
          }, 1000);
          animationTimeouts.push(timeout1);

          // Smooth animation to after image
          const timeout2 = setTimeout(() => {
            // Use an animation frame to get smoother movement
            let start = 50;
            const target = 85;
            const duration = 2000; // 2 seconds
            const startTime = performance.now();

            const animateStep = (timestamp: number) => {
              const elapsed = timestamp - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // Apply easing - easeInOut
              const easedProgress =
                progress < 0.5
                  ? 2 * progress * progress
                  : 1 - Math.pow(-2 * progress + 2, 2) / 2;

              const currentPosition = start + (target - start) * easedProgress;
              setSliderPosition(currentPosition);

              if (progress < 1 && !isDragging && !isHovered) {
                requestAnimationFrame(animateStep);
              }
            };

            requestAnimationFrame(animateStep);
          }, 2000);
          animationTimeouts.push(timeout2);

          // Pause on after image
          const timeout3 = setTimeout(() => {
            // Animate back to middle position
            let start = 75;
            const target = 50;
            const duration = 1500; // 1.5 seconds
            const startTime = performance.now();

            const animateStep = (timestamp: number) => {
              const elapsed = timestamp - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // Apply easing - easeOut
              const easedProgress = 1 - Math.pow(1 - progress, 2);

              const currentPosition = start + (target - start) * easedProgress;
              setSliderPosition(currentPosition);

              if (progress < 1 && !isDragging && !isHovered) {
                requestAnimationFrame(animateStep);
              }
            };

            requestAnimationFrame(animateStep);
          }, 5500);
          animationTimeouts.push(timeout3);

          // Restart the sequence
          const timeout4 = setTimeout(() => {
            if (!isDragging && !isHovered) {
              sequence();
            }
          }, 8000);
          animationTimeouts.push(timeout4);
        } catch (error) {
          console.log("Animation interrupted");
        }
      };

      sequence();
    };

    startAnimation();

    // Cleanup function to clear all timeouts
    return () => {
      animationTimeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, [autoAnimate, isDragging, isHovered, imagesLoaded]);

  // Function to stop any ongoing animations
  const stopAnimations = () => {
    // Clear all timeouts
    animationTimeoutsRef.current.forEach((timeout) => clearTimeout(timeout));
    animationTimeoutsRef.current = [];

    // Cancel any animation frames
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = undefined;
    }

    isAnimatingRef.current = false;
  };

  // Handle mouse and touch interactions
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
    stopAnimations(); // Stop any ongoing animations
  };

  const handleTouchStart = () => {
    setIsDragging(true);
    stopAnimations(); // Stop any ongoing animations
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const newPosition =
        ((e.clientX - containerRect.left) / containerRect.width) * 100;
      setSliderPosition(Math.min(Math.max(newPosition, 0), 100));
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isDragging && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const touch = e.touches[0];
      const newPosition =
        ((touch.clientX - containerRect.left) / containerRect.width) * 100;
      setSliderPosition(Math.min(Math.max(newPosition, 0), 100));
    }
  };

  return (
    <div
      className={`relative overflow-hidden rounded-2xl shadow-2xl ${className} ${!imagesLoaded ? "bg-[#f8f6f3]" : ""}`}
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        handleMouseUp();
      }}
    >
      {/* Loading placeholder */}
      {!imagesLoaded && (
        <div className="w-full h-full aspect-[4/3] bg-[#f8f6f3] flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-[#A87B23] border-t-transparent animate-spin"></div>
        </div>
      )}

      {/* Container has a fixed aspect ratio */}
      {imagesLoaded && (
        <div className="relative w-full overflow-hidden aspect-[4/3]">
          {/* Before image */}
          <img
            ref={beforeImageRef}
            src={beforeImage}
            alt={beforeAlt}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />

          {/* After image - clipped by slider */}
          <motion.div
            className="absolute top-0 left-0 h-full overflow-hidden"
            style={{
              width: `100%`,
            }}
            transition={{
              type: "tween",
              ease: "easeOut",
              duration: isDragging ? 0 : 0.1,
            }}
          >
            <img
              ref={afterImageRef}
              src={afterImage}
              alt={afterAlt}
              className="absolute top-0 left-0 w-full h-full object-cover"
              style={{
                clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`, // Clip based on sliderPosition
                objectFit: "cover", // Ensure the image maintains its aspect ratio
                width: "100%", // Ensure the image always fills the container
                height: "100%", // Ensure the image always fills the container
              }}
            />
          </motion.div>

          {/* Slider Line */}
          <motion.div
            className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
            style={{ left: `${sliderPosition}%` }}
            transition={{
              type: "tween",
              ease: "easeOut",
              duration: isDragging ? 0 : 0.15,
            }}
            ref={handleRef}
          >
            {/* Handle with subtle animation */}
            <motion.div
              id="handle"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center cursor-pointer"
            >
              <div className="w-4 h-4 text-[#625046] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M8.75 8.75L10 7.5m0 0l1.25 1.25M10 7.5v4"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M11.25 11.25L10 12.5m0 0l-1.25-1.25M10 12.5v-4"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            </motion.div>
          </motion.div>

          {/* Before/After labels */}
          <div className="absolute bottom-4 left-4 bg-black/70 text-white text-sm font-medium px-3 py-1 rounded-full z-20">
            Before
          </div>
          <div className="absolute bottom-4 right-4 bg-[#A87B23] text-white text-sm font-medium px-3 py-1 rounded-full z-20">
            After
          </div>

          {/* Overlay gradient for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

          {/* Interactive instruction */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 text-white text-sm px-4 py-2 rounded-full z-30 whitespace-nowrap"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.9, 0.9, 0],
              y: [10, 0, 0, -10],
            }}
            transition={{
              duration: 3,
              times: [0, 0.1, 0.9, 1],
              delay: 1.5,
              ease: "easeInOut",
            }}
          >
            <span className="flex items-center gap-2">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 2L17 12L7 22"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Slide to compare</span>
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 2L7 12L17 22"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </motion.div>
        </div>
      )}
    </div>
  );
}
