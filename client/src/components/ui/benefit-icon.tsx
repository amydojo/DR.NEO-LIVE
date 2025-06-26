import { motion } from "framer-motion";

interface BenefitIconProps {
  type: 'restore' | 'natural' | 'noScar' | 'minimal' | 'custom' | 'confidence' | 
        'thickness' | 'dormant' | 'absorption' | 'nonsurgical' | 'inflammation' | 'complement' |
        'strengthen' | 'extend' | 'improve' | 'reduce' | 'minimize' | 'nondowntime' |
        'wakeup' | 'environment' | 'growth' | 'enhance' | 'noninvasive' | 'multiple' |
        'consistent' | 'savings' | 'preventative' | 'adjustments' | 'access' | 'peace';
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

const iconTypes = {
  // FUE Transplant Benefits
  restore: (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13 2.05V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.5 2.84V4.79" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.19 4.34V6.28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21.01 6.8L21 8.73" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 22V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 10L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 10L8 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  natural: (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M8 16C8 18.8284 8 22 12 22C16 22 16 18.8284 16 16C16 13.1716 14.2091 12 12 12C9.79086 12 8 13.1716 8 16Z" stroke="currentColor" strokeWidth="2"/>
      <path d="M12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 2C14.7614 2 17 4.23858 17 7C17 9.76142 14.7614 12 12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M8 8L8.5 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M16 8L15.5 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 7V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  noScar: (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
      <path d="M15 9L9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M15 9C15 9 13.5 9.5 12.5 10.5C11.5 11.5 11 13 11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M9 15C9 15 10.5 14.5 11.5 13.5C12.5 12.5 13 11 13 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  minimal: (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M19.9 13.5H4.1C2.6 13.5 2 14.1 2 15.6V19.6C2 21.1 2.6 21.7 4.1 21.7H19.9C21.4 21.7 22 21.1 22 19.6V15.6C22 14.1 21.4 13.5 19.9 13.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.9 2.3H4.1C2.6 2.3 2 2.9 2 4.4V8.4C2 9.9 2.6 10.5 4.1 10.5H19.9C21.4 10.5 22 9.9 22 8.4V4.4C22 2.9 21.4 2.3 19.9 2.3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 6.4H6.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 17.6H6.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 6.4H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 17.6H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  custom: (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M8 2V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 2V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.5 9.09H20.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.53998 14.85H9.54998" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.46 14.85H14.47" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.53998 18.15H9.54998" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.46 18.15H14.47" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  confidence: (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 9H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 9H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  
  // Microneedling Benefits
  thickness: (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M4 19V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 19V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M20 19V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M2 5H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M2 19H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  dormant: (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M8 15C7.44772 15 7 15.4477 7 16C7 16.5523 7.44772 17 8 17C8.55228 17 9 16.5523 9 16C9 15.4477 8.55228 15 8 15Z" fill="currentColor"/>
      <path d="M8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13C8.55228 13 9 12.5523 9 12C9 11.4477 8.55228 11 8 11Z" fill="currentColor"/>
      <path d="M12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15Z" fill="currentColor"/>
      <path d="M12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11Z" fill="currentColor"/>
      <path d="M12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7Z" fill="currentColor"/>
      <path d="M16 15C15.4477 15 15 15.4477 15 16C15 16.5523 15.4477 17 16 17C16.5523 17 17 16.5523 17 16C17 15.4477 16.5523 15 16 15Z" fill="currentColor"/>
      <path d="M16 11C15.4477 11 15 11.4477 15 12C15 12.5523 15.4477 13 16 13C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11Z" fill="currentColor"/>
      <path d="M16 7C15.4477 7 15 7.44772 15 8C15 8.55228 15.4477 9 16 9C16.5523 9 17 8.55228 17 8C17 7.44772 16.5523 7 16 7Z" fill="currentColor"/>
      <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  absorption: (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M17 2V12M17 12L20 9M17 12L14 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 18V22H15V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 18L12 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 2H17C18.1046 2 19 2.89543 19 4V6C19 7.10457 18.1046 8 17 8H7C5.89543 8 5 7.10457 5 6V4C5 2.89543 5.89543 2 7 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 10H17C18.1046 10 19 10.8954 19 12V14C19 15.1046 18.1046 16 17 16H7C5.89543 16 5 15.1046 5 14V12C5 10.8954 5.89543 10 7 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  nonsurgical: (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M9 14L4 19L2 17L7 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 9H13C10.7909 9 9 10.7909 9 13V14H10C12.2091 14 14 12.2091 14 10V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13 5C12.4477 5 12 5.44772 12 6C12 6.55228 12.4477 7 13 7C13.5523 7 14 6.55228 14 6C14 5.44772 13.5523 5 13 5Z" fill="currentColor"/>
      <path d="M19 5C18.4477 5 18 5.44772 18 6C18 6.55228 18.4477 7 19 7C19.5523 7 20 6.55228 20 6C20 5.44772 19.5523 5 19 5Z" fill="currentColor"/>
      <path d="M16 8C15.4477 8 15 8.44772 15 9C15 9.55228 15.4477 10 16 10C16.5523 10 17 9.55228 17 9C17 8.44772 16.5523 8 16 8Z" fill="currentColor"/>
      <path d="M19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11Z" fill="currentColor"/>
      <path d="M16 14C15.4477 14 15 14.4477 15 15C15 15.5523 15.4477 16 16 16C16.5523 16 17 15.5523 17 15C17 14.4477 16.5523 14 16 14Z" fill="currentColor"/>
      <path d="M13 11C12.4477 11 12 11.4477 12 12C12 12.5523 12.4477 13 13 13C13.5523 13 14 12.5523 14 12C14 11.4477 13.5523 11 13 11Z" fill="currentColor"/>
      <path d="M19 17C18.4477 17 18 17.4477 18 18C18 18.5523 18.4477 19 19 19C19.5523 19 20 18.5523 20 18C20 17.4477 19.5523 17 19 17Z" fill="currentColor"/>
      <path d="M13 17C12.4477 17 12 17.4477 12 18C12 18.5523 12.4477 19 13 19C13.5523 19 14 18.5523 14 18C14 17.4477 13.5523 17 13 17Z" fill="currentColor"/>
    </svg>
  ),
  inflammation: (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 15L10 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 13L17 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 13L7 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  complement: (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M12 3L14.5 8.5L21 9.5L17 14L18 20.5L12 17.5L6 20.5L7 14L3 9.5L9.5 8.5L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 8L13 10L16 10.5L14 12.5L14.5 15.5L12 14L9.5 15.5L10 12.5L8 10.5L11 10L12 8Z" fill="currentColor"/>
    </svg>
  ),
  
  // Injectable Growth Factor Benefits
  strengthen: (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M2 12L5 9M5 9L8 12M5 9V20M22 12L19 15M19 15L16 12M19 15V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  extend: (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M21 9V3M21 3H15M21 3L15 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 15V21M21 21H15M21 21L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 15V21M3 21H9M3 21L9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 9V3M3 3H9M3 3L9 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  improve: (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M7.5 4H4.5C4.22386 4 4 4.22386 4 4.5V7.5C4 7.77614 4.22386 8 4.5 8H7.5C7.77614 8 8 7.77614 8 7.5V4.5C8 4.22386 7.77614 4 7.5 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M19.5 4H16.5C16.2239 4 16 4.22386 16 4.5V7.5C16 7.77614 16.2239 8 16.5 8H19.5C19.7761 8 20 7.77614 20 7.5V4.5C20 4.22386 19.7761 4 19.5 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M19.5 16H16.5C16.2239 16 16 16.2239 16 16.5V19.5C16 19.7761 16.2239 20 16.5 20H19.5C19.7761 20 20 19.7761 20 19.5V16.5C20 16.2239 19.7761 16 19.5 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M7.5 16H4.5C4.22386 16 4 16.2239 4 16.5V19.5C4 19.7761 4.22386 20 4.5 20H7.5C7.77614 20 8 19.7761 8 19.5V16.5C8 16.2239 7.77614 16 7.5 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 4V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  reduce: (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
      <path d="M14.5 9.5L9 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M9 9.5L14.5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  minimize: (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M11 17.5H8C6.34315 17.5 5 16.1569 5 14.5V13.5C5 12.3954 5.89543 11.5 7 11.5H9M14 11.5H11M11 11.5V6.5C11 5.39543 11.8954 4.5 13 4.5V4.5C14.1046 4.5 15 5.39543 15 6.5V11.5H11ZM11 11.5V17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 13.5L18 10.5M18 10.5L15 13.5M18 10.5V20.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  nondowntime: (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
      <path d="M12 21V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 3V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  
  // Follicular Hypersomes Benefits
  wakeup: (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M6 18H18M12 2V4M4.92999 4.93L6.33999 6.34M19.07 4.93L17.66 6.34M17.66 17.66L19.07 19.07M4.92999 19.07L6.33999 17.66M22 12H20M4 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10Z" fill="currentColor"/>
    </svg>
  ),
  environment: (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M2 9C2 12 4.5 15 8 15C11.5 15 14 12 14 9C14 6 11.5 3 8 3C4.5 3 2 6 2 9Z" stroke="currentColor" strokeWidth="2"/>
      <path d="M14 9C14 12 16.5 15 20 15C23.5 15 26 12 26 9C26 6 23.5 3 20 3C16.5 3 14 6 14 9Z" stroke="currentColor" strokeWidth="2"/>
      <path d="M8 15C8 18 10.5 21 14 21C17.5 21 20 18 20 15C20 12 17.5 9 14 9C10.5 9 8 12 8 15Z" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  growth: (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M16 3H21V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 16V21H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 21H3V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 8V3H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 10L12 7L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  enhance: (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M15 10L19.5528 7.72361C20.2177 7.39116 21 7.87465 21 8.61803V15.382C21 16.1253 20.2177 16.6088 19.5528 16.2764L15 14M5 18H13C14.1046 18 15 17.1046 15 16V8C15 6.89543 14.1046 6 13 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  noninvasive: (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 2C15 5 16 8 16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 2C9 5 8 8 8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 12C19 11 16 11 12 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 12C5 11 8 11 12 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 22C15 19 16 16 16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 22C9 19 8 16 8 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  multiple: (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M8 3H5C3.89543 3 3 3.89543 3 5V8M8 21H5C3.89543 21 3 20.1046 3 19V16M21 16V19C21 20.1046 20.1046 21 19 21H16M16 3H19C20.1046 3 21 3.89543 21 5V8M16 12L8 12M18 10L21 7L18 4M3 17L6 20L9 17M9 7L6 4L3 7M15 12L18 15L21 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  
  // Vigor VIP Benefits
  consistent: (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M3 6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 14H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 14H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 18H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 18H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  savings: (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M2 6H22M2 18H22M5 6V18M19 6V18M9 6C9 10 13 10 16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 10V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 10V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  preventative: (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M12 3V4M12 20V21M21 12H20M4 12H3M18.4246 5.58058L17.6642 6.33096M6.34968 17.6550L5.58932 18.4154M18.4246 18.4154L17.6642 17.665M6.34968 6.33096L5.58932 5.58058" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2"/>
      <path d="M12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12C16.5 14.4853 14.4853 16.5 12 16.5Z" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  adjustments: (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M12 6V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 6V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 6V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 9H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 15H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 9H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17 15H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 6H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 18H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  access: (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M12 14C12.5523 14 13 13.5523 13 13C13 12.4477 12.5523 12 12 12C11.4477 12 11 12.4477 11 13C11 13.5523 11.4477 14 12 14Z" fill="currentColor"/>
      <path d="M19 14C19.5523 14 20 13.5523 20 13C20 12.4477 19.5523 12 19 12C18.4477 12 18 12.4477 18 13C18 13.5523 18.4477 14 19 14Z" fill="currentColor"/>
      <path d="M5 14C5.55228 14 6 13.5523 6 13C6 12.4477 5.55228 12 5 12C4.44772 12 4 12.4477 4 13C4 13.5523 4.44772 14 5 14Z" fill="currentColor"/>
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  peace: (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
      <path d="M20.6602 7.4501L13.1602 14.9501C12.8702 15.2401 12.4402 15.3701 12.0002 15.3701C11.5602 15.3701 11.1302 15.2401 10.8402 14.9501L9.16016 13.2701C8.57016 12.6801 8.57016 11.7201 9.16016 11.1301C9.75016 10.5401 10.7102 10.5401 11.3002 11.1301L12.0002 11.8301L18.5302 5.3001C19.1202 4.7101 20.0802 4.7101 20.6702 5.3001C21.2602 5.8901 21.2602 6.8601 20.6602 7.4501Z" fill="currentColor"/>
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

// Animation variants for the icon
const animationVariants = {
  pulse: {
    scale: [1, 1.05, 1],
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  },
  spin: {
    rotate: [0, 360],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "linear",
    },
  },
  draw: {
    pathLength: [0, 1],
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

export const BenefitIcon: React.FC<BenefitIconProps> = ({ 
  type, 
  size = 'md', 
  animated = false 
}) => {
  // Determine icon size
  const sizeClass = {
    sm: 'w-7 h-7',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  }[size];

  // Apply animation based on the type if animated is true
  const animationProps = animated ? {
    animate: animationVariants.pulse,
  } : {};

  return (
    <motion.div
      className={`text-[#A87B23] ${sizeClass} flex items-center justify-center`}
      {...animationProps}
    >
      {iconTypes[type] || iconTypes.restore}
    </motion.div>
  );
};

export default BenefitIcon;