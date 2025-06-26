import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { generateAppleStyleImage } from '@/lib/imageGeneration';

interface AIGeneratedVisualProps {
  prompt: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  onLoad?: () => void;
}

export default function AIGeneratedVisual({ 
  prompt, 
  alt, 
  className = "", 
  containerClassName = "",
  onLoad 
}: AIGeneratedVisualProps) {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const generateImage = async () => {
      try {
        setIsLoading(true);
        setError("");
        const result = await generateAppleStyleImage(prompt);
        setImageUrl(result.url);
        if (onLoad) onLoad();
      } catch (err) {
        setError("Failed to generate image");
        console.error("Image generation error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    generateImage();
  }, [prompt, onLoad]);

  if (isLoading) {
    return (
      <div className={`${containerClassName} flex items-center justify-center`}>
        <motion.div 
          className="w-16 h-16 rounded-full border-4 border-[#0071e3] border-t-transparent"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <div className="ml-4 text-[#6e6e73]">
          <p className="text-sm font-medium">Generating premium visual...</p>
        </div>
      </div>
    );
  }

  if (error || !imageUrl) {
    return (
      <div className={`${containerClassName} flex items-center justify-center bg-[#f5f5f7] rounded-2xl`}>
        <div className="text-center text-[#6e6e73]">
          <div className="w-12 h-12 bg-[#e5e5e7] rounded-full mx-auto mb-2"></div>
          <p className="text-sm">Premium visual will display here</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      className={containerClassName}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2 }}
      whileHover={{ 
        scale: 1.02,
        y: -5
      }}
    >
      <img 
        src={imageUrl}
        alt={alt}
        className={`w-full h-full object-contain drop-shadow-xl ${className}`}
        style={{
          filter: 'contrast(1.2) saturate(1.15) brightness(1.08)'
        }}
      />
      
      {/* Floating accent elements */}
      <motion.div
        className="absolute -top-2 -right-2 w-4 h-4 bg-[#A87B23] rounded-full shadow-lg opacity-80"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#FAE151] rounded-full shadow-md opacity-70"
        animate={{ 
          scale: [1, 1.4, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
      />
    </motion.div>
  );
}