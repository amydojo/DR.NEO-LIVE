import React, { useRef } from "react";
import { smoothScrollTo } from "@/lib/utils";
import styles from "@/styles/Frame_82.module.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import irvineSpectrumImg from "/assets/IRVINE SPECTRUM.png";
import { LazyImage } from "@/components/ui/lazy-image";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import HairlineImage from "/assets/neo-difference/hairlines-stamped.png";
import NoFlights from "/assets/neo-difference/no-flights.jpg";
import OneDay from "/assets/neo-difference/one-day-lifetime.png";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
// Feature cards data for Neo Difference section
const differenceCards = [
  {
    title: "Developed & Performed in the U.S.",
    location: "Orange County + Coachella Valley + San Diego + LA",
    description:
      "At Dr. Neo, every incision, placement, and pattern is designed by a team of US-trained Neo technicians. It's precise work done once, done right.",
    image: irvineSpectrumImg,
  },
  {
    title: "Hairlines Built, Not Stamped",
    location: "Natural Looking Results",
    description:
      "From hairlines to increased density, each follicule  hairline is meticulously implanted to match your unique facial features, age, and personal aesthetic goals for results that look completely natural.",
    image: HairlineImage,
  },
  {
    title: "One Day, Lifetime Results",
    location: "Minimal Downtime",
    description:
      "Most procedures take just one day, with minimal recovery time. The natural-looking results continue to improve over time.",
    image: OneDay,
  },
  {
    title: "No Flights. No Risks. No Regrets.",
    location: "Southern California",
    description:
      "Avoid the risks of medical tourism. Our Southern California locations provide world-class care close to home with ongoing support.",
    image: NoFlights,
  },
];

export default function NeoDifferenceSection() {
  const [api, setApi] = React.useState<any>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useIntersectionObserver({
    ref: sectionRef,
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className="bg-white overflow-hidden py-12 md:py-24">
      {/* Mobile layout - keep unchanged */}
      <div className="md:hidden">
        <div className={styles.sectionContainer}>
          <div className={styles.headerContainer}>
            <h2
              className={`${styles.sectionTitle}
             text-[2.5rem] sm:text-[3rem] md:text-[3.75rem] font-normal leading-[1.1] tracking-[-0.04em] bg-gradient-to-r from-[#625046] to-[#c8b68f] bg-clip-text text-transparent 
            `}
            >
              The NEO Difference
            </h2>
            <Button
              variant="link"
              className="hover:text-[#a87b23] text-md md:text-lg  p-0 ml-2 pt-2 h-auto font-normal text-[#8a6015] transition-colors"
              onClick={() => smoothScrollTo("contact")}
            >
              Book Consult →
            </Button>
            {/* <p className={styles.sectionDescription}>
              Where Precision Meets Possibility
            </p> */}
          </div>

          <div className={styles.carouselWrapper}>
            <Carousel
              setApi={setApi}
              opts={{
                align: "center",
                loop: true,
                containScroll: "trimSnaps",
              }}
              className={styles.carousel}
            >
              <CarouselContent className={styles.carouselContent}>
                {differenceCards.map((card, index) => (
                  <CarouselItem key={index} className={styles.carouselItem}>
                    <div
                      className={styles.differenceCard}
                      style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4) 0% 100%), url(${card.image})`,
                      }}
                    >
                      <div className={styles.cardContent}>
                        <div className={styles.cardHeader}>
                          <p className={styles.cardLocation}>{card.location}</p>
                          <h3 className={styles.cardTitle}>{card.title}</h3>
                        </div>
                        <p className={styles.cardDescription}>
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div className={styles.navigationControls}>
              <button
                onClick={() => api?.scrollPrev()}
                className={styles.navButton}
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => api?.scrollNext()}
                className={styles.navButton}
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop layout - Hims inspired */}
      <div className="hidden md:block" ref={sectionRef}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-screen-xl mx-auto">
            {/* Header with left-aligned title and description */}
            <motion.div
              className="max-w-3xl mb-16 lg:mb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-normal mb-6 lg:mb-8  text-transparent tracking-tight">
                <span
                  className="bg-gradient-to-r from-[#EDB930] to-[#c8b68f] bg-clip-text"
                  aria-hidden="true"
                >
                  The NEO Difference
                </span>
                <span className="sr-only">The NEO Difference</span>
              </h2>
              {/* <p className="text-[#b05711c9] text-xl lg:text-2xl font-normal">
                Where Precision Meets Possibility
              </p> */}
            </motion.div>

            {/* Grid of cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
              {/* First card with image background - using LazyImage */}
              <motion.div
                className="rounded-2xl overflow-hidden shadow-lg transform transition-all hover:translate-y-[-4px] hover:shadow-xl h-[400px] lg:h-[500px] relative"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.95 }
                }
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                whileHover={{
                  y: -4,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                <LazyImage
                  src={irvineSpectrumImg}
                  alt="Irvine Spectrum - Dr. Neo Location"
                  className="absolute inset-0"
                  objectFit="cover"
                  placeholderColor="#625046"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.75)]"></div>
                <motion.div
                  className="absolute bottom-0 left-0 p-8 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                >
                  <p className="text-sm font-medium mb-2 opacity-90">
                    {differenceCards[0].location}
                  </p>
                  <h3 className="text-2xl lg:text-3xl font-normal mb-4">
                    {differenceCards[0].title}
                  </h3>
                  <p className="text-base lg:text-lg opacity-90 max-w-md">
                    {differenceCards[0].description}
                  </p>
                </motion.div>
              </motion.div>

              {/* Second card with gradient background */}
              <motion.div
                className="rounded-2xl overflow-hidden shadow-lg transform transition-all hover:translate-y-[-4px] hover:shadow-xl h-[400px] lg:h-[500px] relative"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.95 }
                }
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                whileHover={{
                  y: -4,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                <LazyImage
                  src={HairlineImage}
                  alt="Zoom in of growing Hairline"
                  className="absolute inset-0"
                  objectFit="cover"
                  placeholderColor="#625046"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-br from-[#625046] to-[#C8B68F]"></div> */}
                <motion.div
                  className="absolute bottom-0 left-0 p-8 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                >
                  <p className="text-sm font-medium mb-2 opacity-90">
                    {differenceCards[1].location}
                  </p>
                  <h3 className="text-2xl lg:text-3xl font-normal mb-4">
                    {differenceCards[1].title}
                  </h3>
                  <p className="text-base lg:text-lg opacity-90 max-w-md">
                    {differenceCards[1].description}
                  </p>
                </motion.div>
              </motion.div>

              {/* Third card with gradient background */}
              <motion.div
                className="rounded-2xl overflow-hidden shadow-lg transform transition-all hover:translate-y-[-4px] hover:shadow-xl h-[400px] lg:h-[500px] relative"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.95 }
                }
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                whileHover={{
                  y: -4,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                <LazyImage
                  src={OneDay}
                  alt="Person combing his growing hair line"
                  className="absolute inset-0"
                  objectFit="cover"
                  placeholderColor="#625046"
                />
                <motion.div
                  className="absolute bottom-0 left-0 p-8 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                >
                  <p className="text-sm font-medium mb-2 opacity-90">
                    {differenceCards[2].location}
                  </p>
                  <h3 className="text-2xl lg:text-3xl font-normal mb-4">
                    {differenceCards[2].title}
                  </h3>
                  <p className="text-base lg:text-lg opacity-90 max-w-md">
                    {differenceCards[2].description}
                  </p>
                </motion.div>
              </motion.div>

              {/* Fourth card with gradient background */}
              <motion.div
                className="rounded-2xl overflow-hidden shadow-lg transform transition-all hover:translate-y-[-4px] hover:shadow-xl h-[400px] lg:h-[500px] relative"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.95 }
                }
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                whileHover={{
                  y: -4,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                <LazyImage
                  src={NoFlights}
                  alt="No Flights. No Risks. No Regrets."
                  className="absolute inset-0"
                  objectFit="cover"
                  placeholderColor="#625046"
                />
                <motion.div
                  className="absolute bottom-0 left-0 p-8 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                >
                  <p className="text-sm font-medium mb-2 opacity-90">
                    {differenceCards[3].location}
                  </p>
                  <h3 className="text-2xl lg:text-3xl font-normal mb-4">
                    {differenceCards[3].title}
                  </h3>
                  <p className="text-base lg:text-lg opacity-90 max-w-md">
                    {differenceCards[3].description}
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
