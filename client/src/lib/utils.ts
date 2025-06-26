import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Logo paths
export const NEO_LOGO_WHITE = "/assets/NEO LOGO WHITE.png";

// Helper function to check if an element is in viewport for animations
export function isElementInViewport(el: Element) {
  const rect = el.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  
  // Element is considered in viewport if:
  // 1. Top edge is within 20% of bottom of viewport or above
  // 2. Bottom edge is within 20% of top of viewport or below
  // 3. Left and right edges are within viewport
  return (
    rect.top <= windowHeight * 0.9 &&
    rect.bottom >= windowHeight * 0.1 &&
    rect.left <= windowWidth &&
    rect.right >= 0
  );
}

// Apply fade-in animations to elements based on viewport visibility
export function initFadeInAnimations() {
  // All animation class selectors
  const animationSelectors = [
    '.section-fade',          // Legacy selector
    '.fade-in-view',          // General fade-in from bottom
    '.fade-in-left',          // Slide in from left
    '.fade-in-right',         // Slide in from right
    '.fade-in-scale',         // Zoom in effect
    '[data-animate="true"]'   // Data attribute for custom animations
  ];
  
  // Combined selector for all animated elements
  const selector = animationSelectors.join(', ');
  
  const fadeInOnScroll = () => {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach(element => {
      if (isElementInViewport(element)) {
        // Add specific visible class for legacy elements
        if (element.classList.contains('section-fade')) {
          element.classList.add('section-visible');
        }
        
        // Add standard visible class for new animation system
        element.classList.add('is-visible');
        
        // For data attribute animations, apply custom animation class
        if (element.hasAttribute('data-animate')) {
          const animationType = element.getAttribute('data-animation-type') || 'fade-in';
          element.classList.add(animationType);
        }
      }
    });
  };
  
  // Initial check with a slight delay to allow page to settle
  setTimeout(fadeInOnScroll, 100);
  
  // Add scroll listener with passive option for better performance
  window.addEventListener('scroll', fadeInOnScroll, { passive: true });
  
  // Add resize listener to recalculate on window resize
  window.addEventListener('resize', fadeInOnScroll, { passive: true });
  
  // Return cleanup function
  return () => {
    window.removeEventListener('scroll', fadeInOnScroll);
    window.removeEventListener('resize', fadeInOnScroll);
  };
}

// Smooth scroll to element
export function smoothScrollTo(elementId: string) {
  const element = document.getElementById(elementId);
  if (!element) return;
  
  window.scrollTo({
    top: element.offsetTop - 80, // Adjust for header height
    behavior: 'smooth',
  });
}

// Preload images for smoother experience
export function preloadImages(imageUrls: string[]) {
  imageUrls.forEach(url => {
    const img = new Image();
    img.src = url;
  });
}

// Function to initialize lazy loading of images site-wide
export function initLazyImageLoading() {
  // Use Intersection Observer to detect when images enter viewport
  if ('IntersectionObserver' in window) {
    const lazyImageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target as HTMLImageElement;
          
          // If data-src attribute exists, use it to load the image
          if (lazyImage.dataset.src) {
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.classList.add('is-loaded');
            
            // Once loaded, we don't need to watch it anymore
            observer.unobserve(lazyImage);
          }
        }
      });
    }, {
      rootMargin: '100px 0px', // Start loading 100px before they enter viewport
      threshold: 0.01
    });

    // Observe all images with data-src attribute
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => {
      lazyImageObserver.observe(img);
    });

    // Observe elements with the fade-in-image class
    const fadeInImages = document.querySelectorAll('.fade-in-image');
    fadeInImages.forEach(img => {
      lazyImageObserver.observe(img);
    });
    
    // Return cleanup function
    return () => {
      lazyImages.forEach(img => lazyImageObserver.unobserve(img));
      fadeInImages.forEach(img => lazyImageObserver.unobserve(img));
    };
  }
  
  // Fallback for browsers not supporting IntersectionObserver
  return () => {};
}
