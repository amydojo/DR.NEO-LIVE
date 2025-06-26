import React, { useState } from "react";
import TestimonialCard from "@/components/ui/testimonial-card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMotionValue } from "framer-motion";

export default function Frame_90() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const testimonials = [
    {
      name: "Ron Foote",
      location: "Palm Desert",
      age: 53,
      imageSrc: "/assets/RON FOOTE.png",
      badge: undefined,
    },
    {
      name: "Alex Colby",
      location: "Newport Beach",
      age: 23,
      imageSrc: "/assets/ALEX COLBY.png",
      badge: "GROWTH FACTORS",
    },
    {
      name: "Harry Hairless",
      location: "Baldwin Park",
      age: 23,
      imageSrc: "/assets/HARRY HAIRLESS.png",
      badge: undefined,
    },
  ];

  

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  // Handle touch events for mobile swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      // Swipe left
      nextSlide();
    } else if (touchEndX - touchStartX > 50) {
      // Swipe right
      prevSlide();
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height:
          "540px" /* Increased from 440px to 540px to accommodate taller cards */,
        position: "relative",
        margin: "32px 0 64px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "visible",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflowX: "hidden",
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {[...testimonials, ...testimonials].map((testimonial, index) => {
          // Calculate position based on difference from active index
          const position = index - activeIndex;
          let xPos = "0%";
          let opacity = 1;
          let zIndex = 1;
          let scale = 1;

          // Positions: left (-1), center (0), right (1)
          if (position === -1 || position === testimonials.length - 1) {
            xPos = "-110%";
            opacity = 0.5;
            zIndex = 0;
            scale = 1;
          } else if (
            position === 1 ||
            position === -(testimonials.length - 1)
          ) {
            xPos = "110%";
            opacity = 0.5;
            zIndex = 0;
            scale = 1;
          } else if (position === 0) {
            xPos = "0%";
            opacity = 1;
            zIndex = 2;
            scale = 1;
          } else {
            opacity = 0;
            zIndex = -1;
          }

          return (
            <div
              key={index}
              style={{
                position: "absolute",
                left: "50%",
                transform: `translateX(-50%) translateX(${xPos}) scale(${scale})`,
                opacity: opacity,
                zIndex: zIndex,
                transition: "all 0.3s ease",
                margin: "0 20px",
              }}
            >
              <TestimonialCard
                name={testimonial.name}
                location={testimonial.location}
                age={testimonial.age}
                imageSrc={testimonial.imageSrc}
                badge={testimonial.badge}
                isActive={position === 0}
              />
            </div>
          );
        })}
      </div>

      {/* Carousel navigation arrows */}
      <div
        style={{
          position: "absolute",
          bottom: "-40px",
          left: "0",
          right: "0",
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          zIndex: 10,
        }}
      >
        <button
          onClick={prevSlide}
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "white",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "white",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
