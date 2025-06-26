import { useState } from 'react';
import { motion } from 'framer-motion';
import { BenefitIcon } from './benefit-icon';
import { PlusCircle, ArrowRight } from 'lucide-react';

interface BenefitCardProps {
  title: string;
  iconType: React.ComponentProps<typeof BenefitIcon>['type'];
  description?: string;
  variant?: 'default' | 'premium' | 'minimal' | 'glass' | 'accent';
  hoverEffect?: boolean;
  delay?: number;
  onClick?: () => void;
}

export const BenefitCard: React.FC<BenefitCardProps> = ({
  title,
  iconType,
  description,
  variant = 'default',
  hoverEffect = true,
  delay = 0,
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Variants for different card styles
  const cardVariants = {
    default: "bg-white p-6 rounded-xl shadow-sm border border-gray-100",
    premium: "bg-gradient-to-br from-[#fcfbf9] to-[#f7f4ed] p-6 rounded-xl shadow-lg border border-[#f0ece4]",
    minimal: "bg-white p-5 rounded-lg shadow-sm border border-gray-50",
    glass: "backdrop-blur-md bg-white/80 p-6 rounded-xl shadow-md border border-white/20",
    accent: "bg-[#A87B23]/5 p-6 rounded-xl shadow-md border border-[#A87B23]/10",
  };

  // Animation variants
  const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        delay: delay,
        staggerChildren: 0.1,
        delayChildren: delay + 0.2
      }
    }
  };
  
  const childVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };
  
  // Hover animation properties
  const hoverAnimation = hoverEffect ? {
    whileHover: { 
      y: -4, 
      boxShadow: '0 10px 30px -10px rgba(168, 123, 35, 0.15)',
      borderColor: 'rgba(168, 123, 35, 0.25)',
      scale: 1.02,
      transition: { 
        duration: 0.2,
        ease: "easeOut"
      } 
    },
    whileTap: { 
      scale: 0.98,
      transition: { 
        duration: 0.1
      } 
    }
  } : {};

  return (
    <motion.div 
      className={`${cardVariants[variant]} relative overflow-hidden transition-all duration-300 cursor-pointer`}
      initial="hidden"
      animate="visible"
      variants={contentVariants}
      {...hoverAnimation}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Background gradient accent */}
      {variant === 'premium' && (
        <motion.div 
          className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-br from-[#A87B23]/10 to-[#A87B23]/0 blur-xl"
          animate={{
            scale: isHovered ? 1.2 : 1,
            opacity: isHovered ? 0.8 : 0.3,
            transition: { duration: 0.5 }
          }}
        />
      )}
      
      <div className="flex flex-col items-start relative">
        {/* Icon */}
        <motion.div 
          className={`mb-5 ${variant === 'premium' ? 'bg-gradient-to-br from-[#A87B23]/20 to-[#A87B23]/5' : 'bg-[#A87B23]/10'} rounded-full p-2.5 flex items-center justify-center`}
          variants={childVariants}
          animate={{
            scale: isHovered ? 1.05 : 1,
            transition: { duration: 0.3 }
          }}
        >
          <BenefitIcon type={iconType} size="md" animated={isHovered} />
        </motion.div>
        
        {/* Title */}
        <motion.h3 
          className="text-[#625046] font-medium text-lg mb-2"
          variants={childVariants}
        >
          {title}
        </motion.h3>
        
        {/* Description */}
        {description && (
          <motion.p 
            className="text-[#625046]/80 text-sm mt-2"
            variants={childVariants}
          >
            {description}
          </motion.p>
        )}
        
        {/* Animated indicator */}
        <motion.div
          className="mt-4 flex items-center text-[#A87B23]"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 10,
          }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-sm font-medium mr-2">Learn more</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BenefitCard;