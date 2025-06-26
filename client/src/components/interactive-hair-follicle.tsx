import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function InteractiveHairFollicle() {
  const [hoveredComponent, setHoveredComponent] = useState<string | null>(null);
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const components = {
    hairShaft: {
      name: "Hair Shaft",
      description: "The visible part of the hair above the skin surface"
    },
    follicle: {
      name: "Hair Follicle",
      description: "The tubular structure that houses and protects the hair root"
    },
    bulb: {
      name: "Hair Bulb",
      description: "The enlarged base where new hair cells are produced"
    },
    papilla: {
      name: "Dermal Papilla",
      description: "The vascular structure that nourishes hair growth"
    },
    sebaceous: {
      name: "Sebaceous Gland",
      description: "Produces natural oils to condition hair and scalp"
    },
    muscle: {
      name: "Arrector Pili",
      description: "Tiny muscle that causes hair to stand up"
    }
  };

  return (
    <div className="relative w-full max-w-[400px] mx-auto">
      {/* Main SVG Hair Follicle */}
      <motion.svg
        viewBox="0 0 300 400"
        className="w-full h-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Gradient Definitions */}
        <defs>
          <radialGradient id="skinGradient" cx="50%" cy="0%" r="100%">
            <stop offset="0%" stopColor="#F4E6D7" />
            <stop offset="50%" stopColor="#E8D4C0" />
            <stop offset="100%" stopColor="#D4C0A8" />
          </radialGradient>
          
          <linearGradient id="hairGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8B4513" />
            <stop offset="50%" stopColor="#A0522D" />
            <stop offset="100%" stopColor="#654321" />
          </linearGradient>
          
          <radialGradient id="follicleGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFE4E1" />
            <stop offset="50%" stopColor="#F5D5D0" />
            <stop offset="100%" stopColor="#E6B8B7" />
          </radialGradient>
          
          <radialGradient id="papillaGradient" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#FF6B6B" />
            <stop offset="50%" stopColor="#E55555" />
            <stop offset="100%" stopColor="#CC4444" />
          </radialGradient>

          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Skin Surface */}
        <rect 
          width="300" 
          height="80" 
          fill="url(#skinGradient)"
          opacity="0.9"
        />
        
        {/* Skin Surface Line */}
        <line 
          x1="0" y1="80" x2="300" y2="80" 
          stroke="#B8860B" 
          strokeWidth="1.5"
          opacity="0.6"
        />

        {/* Hair Shaft */}
        <motion.path
          d="M 148 0 Q 149 20 150 40 Q 151 60 152 80"
          stroke="url(#hairGradient)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          onMouseEnter={() => setHoveredComponent('hairShaft')}
          onMouseLeave={() => setHoveredComponent(null)}
          animate={{
            strokeWidth: hoveredComponent === 'hairShaft' ? 6 : 4,
            filter: hoveredComponent === 'hairShaft' ? "url(#glow)" : "none"
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Main Follicle Structure */}
        <motion.ellipse
          cx="150"
          cy="200"
          rx="25"
          ry="120"
          fill="url(#follicleGradient)"
          stroke="#D4A574"
          strokeWidth="2"
          onMouseEnter={() => setHoveredComponent('follicle')}
          onMouseLeave={() => setHoveredComponent(null)}
          animate={{
            strokeWidth: hoveredComponent === 'follicle' ? 3 : 2,
            filter: hoveredComponent === 'follicle' ? "url(#glow)" : "none"
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Hair Root Inside Follicle */}
        <motion.path
          d="M 150 80 Q 149 120 150 160 Q 151 200 150 240 Q 149 280 150 300"
          stroke="#654321"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          animate={{
            pathLength: animationPhase === 0 ? [0, 1] : 1,
          }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Hair Bulb */}
        <motion.ellipse
          cx="150"
          cy="310"
          rx="20"
          ry="25"
          fill="#F0E68C"
          stroke="#DAA520"
          strokeWidth="2"
          onMouseEnter={() => setHoveredComponent('bulb')}
          onMouseLeave={() => setHoveredComponent(null)}
          animate={{
            scale: hoveredComponent === 'bulb' ? 1.1 : 1,
            strokeWidth: hoveredComponent === 'bulb' ? 3 : 2,
            filter: hoveredComponent === 'bulb' ? "url(#glow)" : "none"
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Dermal Papilla */}
        <motion.ellipse
          cx="150"
          cy="320"
          rx="8"
          ry="10"
          fill="url(#papillaGradient)"
          onMouseEnter={() => setHoveredComponent('papilla')}
          onMouseLeave={() => setHoveredComponent(null)}
          animate={{
            scale: hoveredComponent === 'papilla' ? 1.2 : 1,
            filter: hoveredComponent === 'papilla' ? "url(#glow)" : "none"
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Sebaceous Gland */}
        <motion.ellipse
          cx="110"
          cy="150"
          rx="15"
          ry="12"
          fill="#F5DEB3"
          stroke="#D2B48C"
          strokeWidth="1.5"
          onMouseEnter={() => setHoveredComponent('sebaceous')}
          onMouseLeave={() => setHoveredComponent(null)}
          animate={{
            scale: hoveredComponent === 'sebaceous' ? 1.1 : 1,
            filter: hoveredComponent === 'sebaceous' ? "url(#glow)" : "none"
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Arrector Pili Muscle */}
        <motion.path
          d="M 125 160 Q 135 170 145 180"
          stroke="#CD5C5C"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          onMouseEnter={() => setHoveredComponent('muscle')}
          onMouseLeave={() => setHoveredComponent(null)}
          animate={{
            strokeWidth: hoveredComponent === 'muscle' ? 4 : 3,
            filter: hoveredComponent === 'muscle' ? "url(#glow)" : "none"
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Blood Vessels */}
        <motion.g
          animate={{
            opacity: animationPhase === 1 ? [0.3, 0.8, 0.3] : 0.5
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <path d="M 130 300 Q 140 310 150 320" stroke="#FF4444" strokeWidth="1.5" fill="none" />
          <path d="M 170 300 Q 160 310 150 320" stroke="#FF4444" strokeWidth="1.5" fill="none" />
          <path d="M 135 280 Q 145 290 155 300" stroke="#FF6666" strokeWidth="1" fill="none" />
        </motion.g>

        {/* Cell Division Animation in Bulb */}
        <motion.g
          animate={{
            opacity: animationPhase === 2 ? [0, 1, 0] : 0
          }}
          transition={{ duration: 1.5 }}
        >
          {[...Array(6)].map((_, i) => (
            <circle
              key={i}
              cx={145 + (i % 3) * 3}
              cy={315 + Math.floor(i / 3) * 3}
              r="1"
              fill="#FFD700"
            />
          ))}
        </motion.g>

        {/* Growth Indicators */}
        <motion.g
          animate={{
            opacity: animationPhase === 3 ? [0, 1, 0] : 0
          }}
          transition={{ duration: 1.5 }}
        >
          {[...Array(4)].map((_, i) => (
            <motion.circle
              key={i}
              cx="150"
              cy={300 - i * 20}
              r="2"
              fill="#32CD32"
              animate={{
                y: [-20, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                delay: i * 0.3,
                repeat: Infinity
              }}
            />
          ))}
        </motion.g>
      </motion.svg>

      {/* Component Information Panel */}
      {hoveredComponent && (
        <motion.div
          className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200 max-w-[200px]"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="font-semibold text-[#625046] text-sm mb-1">
            {components[hoveredComponent as keyof typeof components]?.name}
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            {components[hoveredComponent as keyof typeof components]?.description}
          </p>
        </motion.div>
      )}

      {/* Animation Phase Indicators */}
      <div className="flex justify-center space-x-2 mt-4">
        {['Structure', 'Blood Flow', 'Cell Growth', 'Hair Growth'].map((phase, index) => (
          <motion.div
            key={phase}
            className={`w-2 h-2 rounded-full ${
              animationPhase === index ? 'bg-[#A87B23]' : 'bg-gray-300'
            }`}
            animate={{
              scale: animationPhase === index ? 1.2 : 1
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  );
}