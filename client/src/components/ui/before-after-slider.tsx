import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

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
  autoAnimate = true
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);

  // Auto-animation effect
  useEffect(() => {
    let isMounted = true;
    
    if (autoAnimate && !isDragging && !isHovered) {
      const animateSlider = async () => {
        if (!isMounted) return;
        
        // Start auto-animation sequence
        try {
          // Start with before image mostly visible
          setSliderPosition(25);
          await new Promise(resolve => setTimeout(resolve, 1500));
          
          // Smoothly show after image
          const steps = 40;
          const duration = 1500; // ms
          const interval = duration / steps;
          
          for (let i = 0; i < steps && isMounted && !isDragging && !isHovered; i++) {
            setSliderPosition(25 + (i * (50 / steps)));
            await new Promise(resolve => setTimeout(resolve, interval));
          }
          
          // Pause to showcase after image
          await new Promise(resolve => setTimeout(resolve, 2000));
          
          // Return to original position
          for (let i = steps; i >= 0 && isMounted && !isDragging && !isHovered; i--) {
            setSliderPosition(25 + (i * (50 / steps)));
            await new Promise(resolve => setTimeout(resolve, interval));
          }
          
          // Wait before restarting
          await new Promise(resolve => setTimeout(resolve, 1500));
          
          // Restart animation if component is still mounted
          if (isMounted && !isDragging && !isHovered) {
            animateSlider();
          }
        } catch (error) {
          console.log("Animation interrupted");
        }
      };
      
      // Start animation with delay
      const timer = setTimeout(() => {
        if (isMounted) {
          animateSlider();
        }
      }, 1500);
      
      return () => {
        isMounted = false;
        clearTimeout(timer);
      };
    }
    
    return () => {
      isMounted = false;
    };
  }, [autoAnimate, isDragging, isHovered]);

  // Handle mouse and touch interactions
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleTouchStart = () => {
    setIsDragging(true);
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
      const newPosition = ((e.clientX - containerRect.left) / containerRect.width) * 100;
      setSliderPosition(Math.min(Math.max(newPosition, 0), 100));
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isDragging && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const touch = e.touches[0];
      const newPosition = ((touch.clientX - containerRect.left) / containerRect.width) * 100;
      setSliderPosition(Math.min(Math.max(newPosition, 0), 100));
    }
  };

  return (
    <div 
      className={`relative overflow-hidden rounded-2xl shadow-2xl ${className}`}
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
      {/* Container has a fixed aspect ratio */}
      <div className="relative w-full overflow-hidden aspect-[4/3]">
        {/* Before image */}
        <img
          src={beforeImage}
          alt={beforeAlt}
          className="absolute top-0 left-0 w-full h-full object-cover"
          loading="lazy"
        />

        {/* After image - clipped by slider */}
        <div
          className="absolute top-0 left-0 h-full overflow-hidden transition-all duration-100"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={afterImage}
            alt={afterAlt}
            className="absolute top-0 left-0 w-full h-full object-cover"
            style={{ 
              width: `${100 / (sliderPosition / 100)}%`,
              minWidth: '100%'
            }}
            loading="lazy"
          />
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10 transition-all duration-100"
          style={{ left: `${sliderPosition}%` }}
          ref={handleRef}
        >
          {/* Handle */}
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center cursor-pointer"
          >
            <div className="w-4 h-4 text-[#625046] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8.75 8.75L10 7.5m0 0l1.25 1.25M10 7.5v4" strokeWidth="1.5" />
                <path d="M11.25 11.25L10 12.5m0 0l-1.25-1.25M10 12.5v-4" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>

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
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: [0, 0.9, 0.9, 0],
            y: [10, 0, 0, -10]
          }}
          transition={{
            duration: 3,
            times: [0, 0.1, 0.9, 1],
            delay: 2,
            ease: "easeInOut"
          }}
        >
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 2L17 12L7 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Slide to compare</span>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 2L7 12L17 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </motion.div>
      </div>
    </div>
  );
}
