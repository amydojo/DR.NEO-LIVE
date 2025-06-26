
import { designTokens } from './design-tokens';

// CSS Custom Properties Generator
export const generateCSSCustomProperties = () => {
  const properties: Record<string, string> = {};
  
  // Colors
  Object.entries(designTokens.colors).forEach(([category, colors]) => {
    if (typeof colors === 'object' && colors !== null) {
      Object.entries(colors).forEach(([shade, value]) => {
        properties[`--color-${category}-${shade}`] = value;
      });
    } else {
      properties[`--color-${category}`] = colors;
    }
  });
  
  // Spacing
  Object.entries(designTokens.spacing).forEach(([key, value]) => {
    properties[`--spacing-${key}`] = value;
  });
  
  // Typography
  Object.entries(designTokens.typography.fontSize).forEach(([key, value]) => {
    properties[`--font-size-${key}`] = value;
  });
  
  // Shadows
  Object.entries(designTokens.shadows).forEach(([key, value]) => {
    properties[`--shadow-${key}`] = value;
  });
  
  // Border Radius
  Object.entries(designTokens.borderRadius).forEach(([key, value]) => {
    properties[`--radius-${key}`] = value;
  });
  
  return properties;
};

// Theme class generators
export const themeClasses = {
  // Primary button styles
  primaryButton: `
    bg-[var(--color-primary-500)] 
    hover:bg-[var(--color-primary-600)] 
    active:bg-[var(--color-primary-700)]
    text-[var(--color-primary-950)]
    font-medium 
    rounded-[var(--radius-lg)] 
    shadow-[var(--shadow-md)]
    transition-all duration-300
    px-[var(--spacing-6)] 
    py-[var(--spacing-3)]
  `,
  
  // Secondary button styles
  secondaryButton: `
    bg-[var(--color-secondary-800)] 
    hover:bg-[var(--color-secondary-700)] 
    active:bg-[var(--color-secondary-900)]
    text-white 
    font-medium 
    rounded-[var(--radius-lg)] 
    shadow-[var(--shadow-md)]
    transition-all duration-300
    px-[var(--spacing-6)] 
    py-[var(--spacing-3)]
  `,
  
  // Card styles
  card: `
    bg-white 
    rounded-[var(--radius-2xl)] 
    shadow-[var(--shadow-apple)] 
    border border-[var(--color-neutral-200)]
    p-[var(--spacing-6)]
    transition-all duration-300
    hover:shadow-[var(--shadow-appleLg)]
  `,
  
  // Input styles
  input: `
    border border-[var(--color-neutral-300)] 
    rounded-[var(--radius-lg)] 
    px-[var(--spacing-4)] 
    py-[var(--spacing-3)]
    bg-white 
    text-[var(--color-neutral-900)]
    placeholder:text-[var(--color-neutral-500)]
    focus:border-[var(--color-primary-500)] 
    focus:ring-2 
    focus:ring-[var(--color-primary-200)]
    transition-all duration-200
  `,
  
  // Section styles
  section: `
    py-[var(--spacing-20)] 
    px-[var(--spacing-6)]
  `,
  
  // Container styles
  container: `
    max-w-[1200px] 
    mx-auto 
    px-[var(--spacing-6)]
  `,
};

// Component style generators
export const createComponentStyles = {
  button: (variant: 'primary' | 'secondary' | 'outline' = 'primary', size: 'sm' | 'md' | 'lg' = 'md') => {
    const baseStyles = 'font-medium rounded-lg transition-all duration-300 inline-flex items-center justify-center';
    
    const variants = {
      primary: 'bg-[#FAE151] hover:bg-[#eab308] text-[#422006]',
      secondary: 'bg-[#625046] hover:bg-[#524139] text-white',
      outline: 'border-2 border-[#A87B23] text-[#A87B23] hover:bg-[#A87B23] hover:text-white bg-transparent',
    };
    
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };
    
    return `${baseStyles} ${variants[variant]} ${sizes[size]}`;
  },
  
  heading: (level: 1 | 2 | 3 | 4 | 5 | 6 = 1) => {
    const baseStyles = 'font-semibold tracking-tight text-[#1d1d1f]';
    
    const levels = {
      1: 'text-5xl md:text-6xl',
      2: 'text-4xl md:text-5xl',
      3: 'text-3xl md:text-4xl',
      4: 'text-2xl md:text-3xl',
      5: 'text-xl md:text-2xl',
      6: 'text-lg md:text-xl',
    };
    
    return `${baseStyles} ${levels[level]}`;
  },
  
  text: (variant: 'body' | 'small' | 'large' = 'body') => {
    const variants = {
      body: 'text-base leading-relaxed text-[#86868b]',
      small: 'text-sm leading-normal text-[#86868b]',
      large: 'text-lg leading-relaxed text-[#86868b]',
    };
    
    return variants[variant];
  },
};

// Responsive utilities
export const breakpoints = {
  sm: '@media (min-width: 640px)',
  md: '@media (min-width: 768px)',
  lg: '@media (min-width: 1024px)',
  xl: '@media (min-width: 1280px)',
  '2xl': '@media (min-width: 1536px)',
};

// Animation presets
export const animations = {
  fadeIn: 'animate-in fade-in duration-500',
  slideUp: 'animate-in slide-in-from-bottom-4 duration-500',
  scaleIn: 'animate-in zoom-in-95 duration-300',
  slideInLeft: 'animate-in slide-in-from-left-4 duration-500',
  slideInRight: 'animate-in slide-in-from-right-4 duration-500',
};

export default designTokens;
