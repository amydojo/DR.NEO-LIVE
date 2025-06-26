import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Frame_81() {
  return (
    <>
      {/* Mobile version - original design */}
      <div className="md:hidden  ">
        <div className="flex flex-col items-center gap-6 w-full px-4 py-8">
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="flex flex-col items-center w-full pb-1">
              <span className="text-center bg-gradient-to-r from-[#625046] to-[#c8b68f] bg-clip-text text-transparent w-full text-[2.5rem] sm:text-[3rem] md:text-[3.75rem] font-normal leading-[1.1] tracking-[-0.04em]">
                Hairline Heroes
                <sup className="text-[0.6em] leading-none">®</sup>
              </span>
            </div>
            <div className="w-full text-center">
              <span className="text-[#625046] text-lg font-normal leading-relaxed">
                Stories & photos of renewed confidence, fuller hair, and
                pleasure.
              </span>
            </div>
          </div>
          <div>
            <Button
              variant="link"
              className="hover:text-[#a87b23] text-md p-0 h-auto font-normal text-[#8a6015] transition-colors"
            >
              Learn More About Success Stories →
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop version - with Hair Heroes carousel cards */}
      <div className="hidden md:block">
        <section className="bg-white py-20">
          <div className="max-w-[1200px] mx-auto px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h2
                className="text-[3.75rem] lg:text-[4.5rem] font-normal leading-[1.1] tracking-[-0.04em] mb-4"
                style={{
                  fontFamily:
                    'Test Söhne, -apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif',
                  background:
                    "linear-gradient(90deg, #625046 0%, #c8b68f 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Hairline Heroes
                <sup className="text-[0.6em] leading-none">®</sup>
              </motion.h2>

              <motion.p
                className="text-[1.125rem] font-normal leading-[1.75] text-[#625046] max-w-[600px] mx-auto mb-12"
                style={{
                  fontFamily:
                    'Test Söhne, -apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif',
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Stories & photos of renewed confidence, fuller hair, and
                pleasure.
              </motion.p>

              {/* Hair Heroes Carousel Cards */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                viewport={{ once: true }}
              >
                {[
                  {
                    name: "Alex Colby",
                    location: "Newport Beach",
                    age: 23,
                    image: "/assets/ALEX COLBY.png",
                    badge: "GROWTH FACTORS",
                  },
                  {
                    name: "Harry Hairless",
                    location: "Baldwin Park",
                    age: 23,
                    image: "/assets/HARRY HAIRLESS.png",
                  },
                  {
                    name: "Ron Foote",
                    location: "Palm Desert",
                    age: 53,
                    image: "/assets/RON FOOTE.png",
                  },
                ].map((hero, index) => (
                  <motion.div
                    key={hero.name}
                    className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                      transition: { duration: 0.3 },
                    }}
                  >
                    <div className="aspect-[3/4] relative">
                      <img
                        src={hero.image}
                        alt={`${hero.name} - Hair Hero`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Badge */}
                      {hero.badge && (
                        <div className="absolute top-4 left-4">
                          <span className="bg-[#A87B23]/90 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">
                            {hero.badge}
                          </span>
                        </div>
                      )}

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-xl font-semibold mb-1">
                          {hero.name}
                        </h3>
                        <p className="text-sm opacity-90">
                          {hero.location}, {hero.age}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
              >
                <motion.button
                  className=" md:text-2xl inline-flex items-center gap-3 text-[#8a6015] text-[1.125rem] font-medium tracking-[-0.025em] hover:text-[#8a6015] transition-all duration-300"
                  whileHover={{
                    x: 10,
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More About Success Stories
                  <ArrowRight
                    size={20}
                    className="transition-transform duration-300"
                  />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

// inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0 underline-offset-4 hover:underline hover:text-[#a87b23] text-md md:text-lg p-0 h-auto font-normal text-[#8a6015] transition-colors
