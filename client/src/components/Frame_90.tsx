import React, { useState } from "react";
import TestimonialCard from "@/components/ui/testimonial-card";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
        height: "500px",
        position: "relative",
        margin: "0px 0 48px 0",
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
        {[...testimonials].map((testimonial, index) => {
          // Calculate position based on difference from active index
          const position = index - activeIndex;
          let xPos = "0%";
          let opacity = 1;
          let zIndex = 1;
          let scale = 1;

          // Positions: left (-1), center (0), right (1)
          if (position === -1 || position === testimonials.length - 1) {
            xPos = "-105%";
            opacity = 0.5;
            zIndex = 0;
            scale = 1;
          } else if (
            position === 1 ||
            position === -(testimonials.length - 1)
          ) {
            xPos = "105%";
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
              key={`testimonial-${testimonial.name}-${index}`}
              style={{
                position: "absolute",
                left: "50%",
                transform: `translateX(-50%) translateX(${xPos}) scale(${scale})`,
                opacity: opacity,
                zIndex: zIndex,
                transition: "all 0.3s ease",
                margin: "0 0",
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
        className="w-full px-2 md:w-3/4 mx-auto flex flex-row"
        style={{
          position: "absolute",
          bottom: "",
          left: "0",
          right: "0",
          display: "flex",
          justifyContent: "space-between",
          gap: "12px",
          zIndex: 10,
        }}
      >
        <button
          className="opacity-50 hover:opacity-100"
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
          aria-label="Slide to Previous Testimonial"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          className="opacity-50 hover:opacity-100"
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
          aria-label="Slide to Next Testimonial"
        >
          <ChevronRight size={20} />
        </button>
      </div>
      <div
        className="w-full px-2 md:w-3/4 mx-auto flex flex-row gap-2"
        style={{
          position: "absolute",
          bottom: "-20px",
          left: "0",
          right: "0",
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          zIndex: 10,
        }}
      >
        {[...testimonials].map((_, index) => (
          <div
            key={`indicator-${index}`}
            className={`w-2 h-2 ${activeIndex === index ? "bg-gradient-to-r from-[#EDB930] to-[#D4AF37]" : "bg-gray-400"} rounded-full cursor-pointer`}
            onClick={() => {
              setActiveIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
}
