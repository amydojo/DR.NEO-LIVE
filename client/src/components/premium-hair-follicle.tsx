import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";

export function PremiumHairFollicle() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    generateImage();
  }, []);

  const generateImage = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await fetch('/api/generate-hair-follicle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to generate image');
      }

      const data = await response.json();
      setImageUrl(data.url);
    } catch (err) {
      console.error('Error generating image:', err);
      setError('Failed to generate premium visualization');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <motion.div 
        className="flex flex-col items-center justify-center w-[350px] h-[350px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Loader2 className="w-8 h-8 animate-spin text-[#A87B23] mb-3" />
        <p className="text-sm text-gray-600 font-medium">Generating premium visualization...</p>
        <p className="text-xs text-gray-500 mt-1">Creating medical-grade 3D illustration</p>
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div 
        className="flex flex-col items-center justify-center w-[350px] h-[350px] bg-gradient-to-br from-red-50 to-red-100 rounded-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm text-red-600 font-medium mb-3">{error}</p>
        <button
          onClick={generateImage}
          className="px-4 py-2 bg-[#A87B23] text-white rounded-lg text-sm hover:bg-[#8B6B1F] transition-colors"
        >
          Try Again
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="relative w-[350px] h-auto"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {imageUrl && (
        <motion.img
          src={imageUrl}
          alt="Premium 3D hair follicle medical visualization"
          className="w-full h-auto object-contain rounded-2xl shadow-2xl"
          style={{
            filter: "drop-shadow(0 25px 50px rgba(168, 123, 35, 0.2))",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          onLoad={() => console.log('Premium hair follicle image loaded successfully')}
        />
      )}
      
      {/* Subtle glow effect around the image */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-30 pointer-events-none -z-10"
        style={{
          background: "radial-gradient(circle, rgba(168, 123, 35, 0.3) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
        animate={{
          scale: [0.95, 1.05, 0.95],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
}