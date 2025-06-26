import React from 'react';
import styles from '@/styles/testimonial-card.module.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  age?: number;
  imageSrc: string;
  badge?: string;
  isActive?: boolean;
}

export default function TestimonialCard({
  name,
  location,
  age,
  imageSrc,
  badge,
  isActive = false
}: TestimonialCardProps) {
  const locationText = age ? `${location}, ${age}` : location;

  return (
    <div className={styles.Card}>
      {/* Dark gradient overlay - makes text more readable */}
      <div className={styles.CardOverlay}></div>
      
      <img 
        src={imageSrc} 
        alt={`Testimonial from ${name}`}
        className={styles.CardImage}
      />
      
      <div className={styles.CardContent}>
        <div className={styles.PatientInfo}>
          <h3 className={styles.PatientName}>{name}</h3>
          <p className={styles.PatientLocation}>{locationText}</p>
        </div>

        {badge && (
          <div className={styles.BadgeWrapper}>
            <button className={styles.BadgeButton}>
              <span className={styles.BadgeText}>{badge}</span>
            </button>
          </div>
        )}
      </div>
      
      {/* {isActive && (
        <div className={styles.CarouselNavigation}>
          <button className={styles.NavButton}>
            <ChevronLeft size={16} />
          </button>
          <button className={styles.NavButton}>
            <ChevronRight size={16} />
          </button>
        </div>
      )} */}
    </div>
  );
}