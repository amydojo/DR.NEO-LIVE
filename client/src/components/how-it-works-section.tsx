import React, { useRef, useState, useEffect } from 'react';
import { CheckCircle2, CalendarCheck, UserCheck, Sparkles, ArrowRight } from 'lucide-react';
import { smoothScrollTo } from '@/lib/utils';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import LazyImage from '@/components/ui/lazy-image';

// Steps data structure with high-quality stock images
const steps = [
  {
    number: 1,
    title: "Take our hair assessment",
    description: "Answer a few questions to help us understand your hair loss and goals.",
    icon: CheckCircle2,
    color: "#625046",
    image: "/assets/stock/assessment.jpg"
  },
  {
    number: 2,
    title: "Consult with our experts",
    description: "Meet with our specialists for a personalized evaluation and treatment plan.",
    icon: CalendarCheck,
    color: "#625046",
    image: "/assets/procedure-tool.png"
  },
  {
    number: 3,
    title: "Get customized treatment",
    description: "Receive treatments tailored to your specific needs and hair restoration goals.",
    icon: UserCheck,
    color: "#625046",
    image: "/assets/stock/treatment.jpg"
  },
  {
    number: 4,
    title: "Enjoy natural results",
    description: "Watch as your hair gradually becomes fuller, thicker, and more youthful.",
    icon: Sparkles,
    color: "#625046",
    image: "/assets/stock/results.jpg"
  }
];

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver({ ref: sectionRef, threshold: 0.2 });
  
  return (
    <section 
      id="how-it-works" 
      ref={sectionRef} 
      className="py-16 md:py-24 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Heading Section - Clean and Elegant Design */}
        <div className="text-center mb-12 md:mb-20 fade-in-view">
          <h2 className="text-3xl md:text-4xl font-normal mb-4 text-[#625046] inline-block relative">
            How NEO hair restoration works
            <div className={`h-1 bg-[#a87b23] absolute -bottom-2 left-0 right-0 transition-all duration-1000 ${isVisible ? 'w-full' : 'w-0'}`}></div>
          </h2>
          <p className="text-lg text-[#625046] max-w-2xl mx-auto mt-6">
            A simple process designed to deliver the best possible results for your hair
          </p>
        </div>

        {/* Mobile version - Clean, Simple Steps */}
        <div className="md:hidden">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div 
                key={step.number} 
                className="bg-white border border-[#e5e5e5] rounded-lg p-5 shadow-sm hover:shadow-md transition-all duration-300 fade-in-view"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div>
                  <div className="flex items-start mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#625046] flex items-center justify-center text-white font-medium text-lg shrink-0 mr-4">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-[#625046] mb-1">{step.title}</h3>
                      <p className="text-[#625046]/80 text-sm">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Image for mobile */}
                  <div className={`mt-3 rounded-xl overflow-hidden w-full h-32 relative ${step.number === 2 ? 'bg-gradient-to-br from-black/90 to-black/70' : 'bg-[#f2f2f2]'}`}>
                    <LazyImage
                      src={step.image}
                      alt={step.title}
                      className={`w-full h-full transition-all duration-500 ease-out ${
                        step.number === 2 
                          ? 'object-contain object-bottom-right scale-105 hover:scale-110 transform-gpu' 
                          : 'object-cover'
                      }`}
                    />
                    {step.number === 2 && (
                      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/20 pointer-events-none" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center fade-in-view" style={{ transitionDelay: '600ms' }}>
            <button 
              onClick={() => smoothScrollTo('contact')}
              className="inline-flex items-center justify-center h-11 px-7 text-base font-medium bg-[#FAE151] text-[#625046] rounded-full hover:brightness-105 shadow-sm hover:shadow transition-all"
            >
              Take our hair assessment
            </button>
          </div>
        </div>
        
        {/* Desktop version - Matching the reference design */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Horizontal connecting line */}
            <div className={`absolute top-[70px] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-[#ede2d4] via-[#a87b23] to-[#ede2d4] z-0 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
            
            {/* Step Cards in Row Layout */}
            <div className="grid grid-cols-4 gap-8 relative z-10">
              {steps.map((step, index) => (
                <div 
                  key={step.number}
                  className="flex flex-col items-center fade-in-view" 
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Number Circle */}
                  <div className="mb-4 bg-white p-1 rounded-full z-10">
                    <div className="w-14 h-14 rounded-full bg-[#625046] flex items-center justify-center text-white font-medium text-xl">
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className="mb-4 text-[#625046]">
                    <step.icon size={24} className="mx-auto" />
                  </div>
                  
                  {/* Title and Description */}
                  <h3 className="text-lg font-medium text-[#625046] mb-2 text-center">{step.title}</h3>
                  <p className="text-center text-[#625046]/80 text-sm">
                    {step.description}
                  </p>
                  
                  {/* Image for each step */}
                  <div className={`mt-4 rounded-2xl overflow-hidden w-full h-40 relative ${step.number === 2 ? 'bg-gradient-to-br from-black/90 to-black/70' : ''}`}>
                    <LazyImage
                      src={step.image}
                      alt={step.title}
                      className={`w-full h-full transition-all duration-700 ease-out ${
                        step.number === 2 
                          ? 'object-contain object-bottom-right scale-110 hover:scale-115 transform-gpu' 
                          : 'object-cover'
                      }`}
                      aspectRatio="16/9"
                      placeholderColor="#f4f0ea"
                    />
                    {step.number === 2 && (
                      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/20 pointer-events-none" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="mt-14 text-center fade-in-view" style={{ transitionDelay: '800ms' }}>
            <button 
              onClick={() => smoothScrollTo('contact')}
              className="inline-flex items-center justify-center h-14 px-10 text-lg font-medium bg-[#141414] text-white rounded-full hover:bg-[#2a2a2a] transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}