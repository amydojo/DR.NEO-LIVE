
export const designTokens = {
  // Brand Colors - Dr. Neo Palette
  colors: {
    primary: {
      50: '#fefce8',
      100: '#fef9c3',
      200: '#fef08a',
      300: '#fde047',
      400: '#facc15',
      500: '#eab308', // Main yellow
      600: '#ca8a04',
      700: '#a16207',
      800: '#854d0e',
      900: '#713f12',
      950: '#422006',
    },
    
    secondary: {
      50: '#f7f6f4',
      100: '#ede9e3',
      200: '#ddd4c7',
      300: '#c7b8a4',
      400: '#b09981',
      500: '#a08167',
      600: '#94735a',
      700: '#7b5e4c',
      800: '#625046', // Main brown
      900: '#524139',
      950: '#2c221d',
    },
    
    accent: {
      50: '#fdf9f0',
      100: '#faf0db',
      200: '#f4deb7',
      300: '#ecc689',
      400: '#e2a859',
      500: '#da9237',
      600: '#cc7e2c',
      700: '#a87b23', // Main gold
      800: '#8a5f26',
      900: '#714f23',
      950: '#3d2811',
    },
    
    neutral: {
      50: '#f9f9f9',
      100: '#eeeeee',
      200: '#e5e5e5',
      300: '#d4d4d4',
      400: '#a3a3a3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
      950: '#0a0a0a',
    },
    
    // Semantic Colors
    success: {
      light: '#dcfce7',
      DEFAULT: '#16a34a',
      dark: '#14532d',
    },
    
    warning: {
      light: '#fef3c7',
      DEFAULT: '#f59e0b',
      dark: '#92400e',
    },
    
    error: {
      light: '#fee2e2',
      DEFAULT: '#dc2626',
      dark: '#991b1b',
    },
    
    info: {
      light: '#dbeafe',
      DEFAULT: '#3b82f6',
      dark: '#1e40af',
    },
    
    // Surface Colors
    background: {
      primary: '#ffffff',
      secondary: '#f5f5f7', // Apple-style light gray
      tertiary: '#fafafa',
      inverse: '#1d1d1f',
    },
    
    surface: {
      elevated: '#ffffff',
      overlay: 'rgba(0, 0, 0, 0.1)',
      glass: 'rgba(255, 255, 255, 0.1)',
    },
  },
  
  // Typography Scale
  typography: {
    fontFamily: {
      primary: "'Test Söhne', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      mono: "'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', monospace",
    },
    
    fontSize: {
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem', // 48px
      '6xl': '3.75rem', // 60px
      '7xl': '4.5rem', // 72px
    },
    
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    
    lineHeight: {
      tight: '1.25',
      normal: '1.5',
      relaxed: '1.75',
    },
    
    letterSpacing: {
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
    },
  },
  
  // Spacing System (8px base)
  spacing: {
    0: '0',
    1: '0.25rem', // 4px
    2: '0.5rem', // 8px
    3: '0.75rem', // 12px
    4: '1rem', // 16px
    5: '1.25rem', // 20px
    6: '1.5rem', // 24px
    8: '2rem', // 32px
    10: '2.5rem', // 40px
    12: '3rem', // 48px
    16: '4rem', // 64px
    20: '5rem', // 80px
    24: '6rem', // 96px
    32: '8rem', // 128px
    40: '10rem', // 160px
    48: '12rem', // 192px
    56: '14rem', // 224px
    64: '16rem', // 256px
  },
  
  // Border Radius
  borderRadius: {
    none: '0',
    sm: '0.125rem', // 2px
    DEFAULT: '0.25rem', // 4px
    md: '0.375rem', // 6px
    lg: '0.5rem', // 8px
    xl: '0.75rem', // 12px
    '2xl': '1rem', // 16px
    '3xl': '1.5rem', // 24px
    full: '9999px',
  },
  
  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    // Apple-style shadows
    apple: '0 4px 16px rgba(0, 0, 0, 0.12)',
    appleLg: '0 8px 32px rgba(0, 0, 0, 0.12)',
  },
  
  // Component Tokens
  components: {
    button: {
      height: {
        sm: '2rem', // 32px
        md: '2.5rem', // 40px
        lg: '3rem', // 48px
      },
      padding: {
        sm: '0.5rem 1rem',
        md: '0.75rem 1.5rem',
        lg: '1rem 2rem',
      },
      borderRadius: '0.5rem',
    },
    
    input: {
      height: '2.5rem', // 40px
      padding: '0.75rem 1rem',
      borderRadius: '0.5rem',
    },
    
    card: {
      padding: '1.5rem',
      borderRadius: '1rem',
      shadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
    },
    
    modal: {
      borderRadius: '1rem',
      padding: '2rem',
      maxWidth: '32rem',
    },
  },
  
  // Animation Tokens
  animation: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
    },
    
    easing: {
      linear: 'linear',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      // Apple-style easing
      apple: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
    },
  },
  
  // Breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  // Z-index Scale
  zIndex: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
  
  // Layout Tokens
  layout: {
    container: {
      maxWidth: '1200px',
      padding: '1.5rem',
    },
    
    section: {
      paddingY: '4rem',
    },
    
    header: {
      height: '4rem',
    },
  },
  
  // Brand-specific Tokens
  brand: {
    gradients: {
      primary: 'linear-gradient(135deg, #FAE151 0%, #A87B23 100%)',
      secondary: 'linear-gradient(135deg, #625046 0%, #C8B68F 100%)',
      hero: 'linear-gradient(135deg, rgba(98, 80, 70, 0.9) 0%, rgba(200, 182, 143, 0.9) 100%)',
    },
    
    textures: {
      noise: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)" opacity="0.4"/%3E%3C/svg%3E")',
    },
    
    logoSizes: {
      sm: '2rem',
      md: '2.5rem',
      lg: '3rem',
    },
  },
} as const;

// Type definitions for better TypeScript support
export type ColorKey = keyof typeof designTokens.colors;
export type SpacingKey = keyof typeof designTokens.spacing;
export type FontSizeKey = keyof typeof designTokens.typography.fontSize;
export type ShadowKey = keyof typeof designTokens.shadows;

// Utility functions for accessing tokens
export const getColor = (path: string) => {
  const keys = path.split('.');
  let value: any = designTokens.colors;
  
  for (const key of keys) {
    value = value[key];
    if (value === undefined) return undefined;
  }
  
  return value;
};

export const getSpacing = (key: SpacingKey) => designTokens.spacing[key];

export const getFontSize = (key: FontSizeKey) => designTokens.typography.fontSize[key];

export const getShadow = (key: ShadowKey) => designTokens.shadows[key];
