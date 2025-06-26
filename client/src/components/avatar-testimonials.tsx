import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Loader2 } from "lucide-react";

interface AvatarProps {
  name: string;
  size: "sm" | "md" | "lg";
  className?: string;
}

export function TestimonialAvatar({ name, size, className = "" }: AvatarProps) {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10", 
    lg: "w-12 h-12"
  };

  useEffect(() => {
    loadAvatars();
  }, []);

  const loadAvatars = async () => {
    try {
      setIsLoading(true);
      setError(false);
      
      const response = await fetch('/api/generate-avatars', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to generate avatars');
      }

      const avatars = await response.json();
      const avatarKey = name.toLowerCase().split(' ')[0];
      
      if (avatars[avatarKey]) {
        setAvatarUrl(avatars[avatarKey]);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error('Error loading avatars:', err);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className={`${sizeClasses[size]} ${className} bg-gray-200 rounded-full flex items-center justify-center`}>
        <Loader2 className="w-3 h-3 animate-spin text-gray-400" />
      </div>
    );
  }

  if (error || !avatarUrl) {
    // Premium gender-appropriate avatars
    const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
    const firstName = name.split(' ')[0].toLowerCase();
    
    // Gender-appropriate gradient colors
    const getGradient = () => {
      if (firstName === 'michael') return 'from-blue-500 to-blue-600';
      if (firstName === 'sarah') return 'from-purple-500 to-pink-500';
      if (firstName === 'david') return 'from-orange-500 to-red-500';
      if (firstName === 'jennifer') return 'from-pink-500 to-rose-500';
      if (firstName === 'robert') return 'from-indigo-500 to-blue-600';
      return 'from-gray-500 to-gray-600';
    };
    
    return (
      <motion.div 
        className={`${sizeClasses[size]} ${className} bg-gradient-to-br ${getGradient()} rounded-full flex items-center justify-center text-white font-semibold shadow-lg`}
        style={{
          fontSize: size === 'lg' ? '14px' : size === 'md' ? '12px' : '10px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        {initials}
      </motion.div>
    );
  }

  return (
    <motion.img
      src={avatarUrl}
      alt={`${name} avatar`}
      className={`${sizeClasses[size]} ${className} rounded-full object-cover border-2 border-white shadow-sm`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        filter: "contrast(1.1) saturate(1.05) brightness(1.02)"
      }}
    />
  );
}