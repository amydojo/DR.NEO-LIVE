import { motion } from "framer-motion";
import { useState } from "react";

export function AppleStyleHairFollicle() {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  return (
    <div className="relative w-[320px] h-[400px] mx-auto">
      {/* Main Container with Glass Effect */}
      <motion.div
        className="relative w-full h-full bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-3xl overflow-hidden"
        style={{
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.12), 0 8px 25px rgba(0, 0, 0, 0.08)",
          backdropFilter: "blur(20px)",
          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.9) 100%)"
        }}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Premium SVG Hair Follicle */}
        <motion.svg
          viewBox="0 0 280 360"
          className="w-full h-full p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          {/* Advanced Gradient Definitions */}
          <defs>
            <linearGradient id="premiumSkin" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FEF7F0" />
              <stop offset="50%" stopColor="#F7EDE2" />
              <stop offset="100%" stopColor="#E6D3C1" />
            </linearGradient>
            
            <linearGradient id="premiumHair" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B4513" />
              <stop offset="30%" stopColor="#A0522D" />
              <stop offset="70%" stopColor="#CD853F" />
              <stop offset="100%" stopColor="#654321" />
            </linearGradient>
            
            <radialGradient id="follicleWall" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="#FFE4E6" />
              <stop offset="40%" stopColor="#FDD5D7" />
              <stop offset="80%" stopColor="#FBBCBF" />
              <stop offset="100%" stopColor="#F9A3A8" />
            </radialGradient>
            
            <radialGradient id="bulbGradient" cx="40%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#FFF2CC" />
              <stop offset="50%" stopColor="#FFE066" />
              <stop offset="100%" stopColor="#FFCC02" />
            </radialGradient>
            
            <radialGradient id="papillaCore" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FF7B7B" />
              <stop offset="60%" stopColor="#FF5757" />
              <stop offset="100%" stopColor="#FF3333" />
            </radialGradient>

            <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="glow"/>
              <feMerge>
                <feMergeNode in="glow"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>

            <filter id="innerShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="1"/>
              <feOffset dx="1" dy="1" result="offset"/>
              <feFlood floodColor="#000000" floodOpacity="0.1"/>
              <feComposite in2="offset" operator="in"/>
              <feMerge>
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Skin Surface */}
          <motion.rect
            width="280"
            height="60"
            fill="url(#premiumSkin)"
            filter="url(#innerShadow)"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          
          {/* Skin Surface Separator */}
          <motion.line
            x1="0" y1="60" x2="280" y2="60"
            stroke="#D4A574"
            strokeWidth="1"
            opacity="0.4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          />

          {/* Hair Shaft - Ultra Premium */}
          <motion.path
            d="M 138 0 Q 139 15 140 30 Q 141 45 142 60"
            stroke="url(#premiumHair)"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            filter="url(#softGlow)"
            onMouseEnter={() => setHoveredSection('shaft')}
            onMouseLeave={() => setHoveredSection(null)}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            whileHover={{ strokeWidth: 8, filter: "url(#softGlow) brightness(1.2)" }}
          />

          {/* Main Follicle Structure */}
          <motion.ellipse
            cx="140"
            cy="180"
            rx="20"
            ry="100"
            fill="url(#follicleWall)"
            stroke="#E6B8B7"
            strokeWidth="1.5"
            filter="url(#innerShadow)"
            onMouseEnter={() => setHoveredSection('follicle')}
            onMouseLeave={() => setHoveredSection(null)}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            whileHover={{ stroke: "#D4A574", strokeWidth: 2 }}
          />

          {/* Hair Root - Premium Design */}
          <motion.path
            d="M 140 60 Q 139 100 140 140 Q 141 180 140 220 Q 139 250 140 270"
            stroke="#654321"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            filter="url(#softGlow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.5 }}
          />

          {/* Hair Bulb - Apple-style Precision */}
          <motion.ellipse
            cx="140"
            cy="280"
            rx="16"
            ry="20"
            fill="url(#bulbGradient)"
            stroke="#FFCC02"
            strokeWidth="1.5"
            filter="url(#softGlow)"
            onMouseEnter={() => setHoveredSection('bulb')}
            onMouseLeave={() => setHoveredSection(null)}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            whileHover={{ scale: 1.1, filter: "url(#softGlow) brightness(1.1)" }}
          />

          {/* Dermal Papilla - Core Element */}
          <motion.ellipse
            cx="140"
            cy="285"
            rx="6"
            ry="8"
            fill="url(#papillaCore)"
            filter="url(#softGlow)"
            onMouseEnter={() => setHoveredSection('papilla')}
            onMouseLeave={() => setHoveredSection(null)}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 2 }}
            whileHover={{ scale: 1.3 }}
          />

          {/* Sebaceous Gland - Refined */}
          <motion.ellipse
            cx="110"
            cy="130"
            rx="12"
            ry="10"
            fill="#F5DEB3"
            stroke="#D2B48C"
            strokeWidth="1"
            filter="url(#softGlow)"
            onMouseEnter={() => setHoveredSection('sebaceous')}
            onMouseLeave={() => setHoveredSection(null)}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            whileHover={{ scale: 1.1, fill: "#F0E68C" }}
          />

          {/* Arrector Pili Muscle */}
          <motion.path
            d="M 122 140 Q 128 148 134 156"
            stroke="#CD5C5C"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            filter="url(#softGlow)"
            onMouseEnter={() => setHoveredSection('muscle')}
            onMouseLeave={() => setHoveredSection(null)}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.4 }}
            whileHover={{ strokeWidth: 4, stroke: "#DC143C" }}
          />

          {/* Blood Vessels - Sophisticated Animation */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 1, delay: 2.6 }}
          >
            <motion.path
              d="M 125 270 Q 132 278 140 285"
              stroke="#FF6B6B"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              animate={{
                stroke: ["#FF6B6B", "#FF8E8E", "#FF6B6B"],
                strokeWidth: [2, 2.5, 2]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.path
              d="M 155 270 Q 148 278 140 285"
              stroke="#FF6B6B"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              animate={{
                stroke: ["#FF6B6B", "#FF8E8E", "#FF6B6B"],
                strokeWidth: [2, 2.5, 2]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            />
          </motion.g>

          {/* Growth Activity Indicators */}
          <motion.g
            animate={{
              opacity: [0, 0.8, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: 3
            }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.circle
                key={i}
                cx={135 + (i % 3) * 3}
                cy={275 + Math.floor(i / 3) * 4}
                r="1.5"
                fill="#32CD32"
                animate={{
                  scale: [0.5, 1.2, 0.5],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </motion.g>
        </motion.svg>

        {/* Premium Information Panel */}
        {hoveredSection && (
          <motion.div
            className="absolute top-4 left-4 bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-lg border border-gray-200/50 max-w-[180px]"
            initial={{ opacity: 0, scale: 0.9, x: -10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: -10 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="font-semibold text-[#625046] text-xs mb-1">
              {hoveredSection === 'shaft' && 'Hair Shaft'}
              {hoveredSection === 'follicle' && 'Hair Follicle'}
              {hoveredSection === 'bulb' && 'Hair Bulb'}
              {hoveredSection === 'papilla' && 'Dermal Papilla'}
              {hoveredSection === 'sebaceous' && 'Sebaceous Gland'}
              {hoveredSection === 'muscle' && 'Arrector Pili'}
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              {hoveredSection === 'shaft' && 'Visible hair above skin surface'}
              {hoveredSection === 'follicle' && 'Protective structure housing hair root'}
              {hoveredSection === 'bulb' && 'Growth center where new cells form'}
              {hoveredSection === 'papilla' && 'Vascular core providing nutrients'}
              {hoveredSection === 'sebaceous' && 'Natural oil production gland'}
              {hoveredSection === 'muscle' && 'Muscle controlling hair movement'}
            </p>
          </motion.div>
        )}

        {/* Ambient Light Effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          style={{
            background: "radial-gradient(circle at 30% 30%, rgba(168, 123, 35, 0.08) 0%, transparent 50%)"
          }}
          animate={{
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </div>
  );
}