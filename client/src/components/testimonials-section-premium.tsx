import { motion } from "framer-motion";
import Frame_90 from "@/components/Frame_90";

export default function TestimonialsSectionPremium() {
  return (
    <>
      {/* Mobile version - keep exactly the same */}
      <div className="md:hidden">
        <section className="bg-[#] py-4">
          <div className="container mx-auto px-2">
            <h2
              className=" hidden text-center bg-gradient-to-r from-[#625046] to-[#c8b68f] bg-clip-text text-transparent text-[2.5rem] sm:text-[3rem] font-normal leading-[1.1] tracking-[-0.04em] mb-12"
              style={{
                fontFamily:
                  'Test Söhne, -apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif',
              }}
            >
              Patient Stories
            </h2>
            <Frame_90 />
          </div>
        </section>
      </div>

      {/* Desktop version - Premium Apple-inspired design */}
      <div className="hidden md:block" id="testimonials">
        <section className="bg-[#f5f5f7] py-24">
          <div className="max-w-[1400px] mx-auto px-8">
            {/* Consistent section header matching design system */}
            <div className="text-center mb-20">
              <motion.h2
                className="text-[3.75rem] lg:text-[4.5rem] font-normal leading-[1.1] tracking-[-0.04em] text-[#1d1d1f] mb-4"
                style={{
                  fontFamily:
                    'Test Söhne, -apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif',
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
              >
                Life-changing results
              </motion.h2>

              <motion.p
                className="text-[1.125rem] font-normal leading-[1.75] text-[#EDB930] max-w-[600px] mx-auto"
                style={{
                  fontFamily:
                    'Test Söhne, -apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif',
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true }}
              >
                Real patients. Real transformations.
              </motion.p>
            </div>

            {/* Premium testimonial grid with staggered animations */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Featured testimonial - spans 2 columns */}
              <motion.div
                className="lg:col-span-2 bg-white rounded-3xl p-12 shadow-sm border border-[#e5e5e7] relative overflow-hidden"
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.12)",
                  transition: { duration: 0.4 },
                }}
              >
                {/* Ambient glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#EDB930]/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex-1">
                    <motion.div
                      className="text-[3rem] font-light text-[#EDB930] mb-8 leading-none"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      viewport={{ once: true }}
                    >
                      "
                    </motion.div>
                    <motion.p
                      className="text-[1.5rem] lg:text-[1.75rem] font-normal leading-[1.4] text-[#1d1d1f] mb-10"
                      style={{
                        fontFamily:
                          '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif',
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1 }}
                      viewport={{ once: true }}
                    >
                      Dr. NEO's FUE procedure gave me back my confidence. The
                      results look completely natural, and the experience was
                      far better than I expected.
                    </motion.p>
                  </div>
                  <motion.div
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    viewport={{ once: true }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
                      alt="Michael R."
                      className="w-16 h-16 mr-5 rounded-full object-cover border-2 border-white shadow-lg"
                    />
                    <div>
                      <p className="font-semibold text-[#1d1d1f] text-lg">
                        Michael R.
                      </p>
                      <p className="text-[#6e6e73] text-base">
                        FUE Hair Transplant
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Side testimonial with premium styling */}
              <motion.div
                className="bg-white rounded-3xl p-10 shadow-sm border border-[#e5e5e7] relative overflow-hidden"
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  transition: { duration: 0.4 },
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FAE151]/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex-1">
                    <motion.div
                      className="text-[2.5rem] font-light text-[#FAE151] mb-6 leading-none"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 1 }}
                      viewport={{ once: true }}
                    >
                      "
                    </motion.div>
                    <motion.p
                      className="text-[1.125rem] lg:text-[1.25rem] font-normal leading-[1.5] text-[#1d1d1f] mb-8"
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1.2 }}
                      viewport={{ once: true }}
                    >
                      The PRP treatments made such a difference. I noticed
                      thicker hair within just a few months.
                    </motion.p>
                  </div>
                  <motion.div
                    className="flex items-center"
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 mr-4 rounded-full bg-gradient-to-br from-[#A87B23]/20 to-[#FAE151]/20 flex items-center justify-center border-2 border-white shadow-md">
                      <span className="text-[#A87B23] font-semibold text-sm">
                        SK
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-[#1d1d1f] text-base">
                        Sarah K.
                      </p>
                      <p className="text-[#6e6e73] text-sm">PRP Therapy</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Bottom row testimonials with enhanced animations */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "Professional, caring, and the results speak for themselves. Couldn't be happier.",
                  name: "David L.",
                  treatment: "FUE + PRP",
                  image:
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
                  color: "#f55600",
                  delay: 0.9,
                },
                {
                  quote:
                    "The entire team was amazing. My hair looks better than it has in years.",
                  name: "Jennifer M.",
                  treatment: "LLLT Treatment",
                  image:
                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
                  color: "#f2416b",
                  delay: 1.1,
                },
                {
                  quote:
                    "State-of-the-art facility and incredible attention to detail. Highly recommend.",
                  name: "Robert T.",
                  treatment: "Consultation",
                  image:
                    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&auto=format&q=80",
                  color: "#0090f7",
                  delay: 1.3,
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  className="bg-white rounded-3xl p-8 shadow-sm border border-[#e5e5e7] relative overflow-hidden"
                  initial={{ opacity: 0, y: 60, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 1,
                    delay: testimonial.delay,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    transition: { duration: 0.4 },
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${testimonial.color}08 0%, transparent 70%)`,
                    }}
                  />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex-1">
                      <motion.div
                        className="text-[2rem] font-light mb-4 leading-none"
                        style={{ color: testimonial.color }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.6,
                          delay: testimonial.delay + 0.2,
                        }}
                        viewport={{ once: true }}
                      >
                        "
                      </motion.div>
                      <motion.p
                        className="text-[1rem] lg:text-[1.125rem] font-normal leading-[1.5] text-[#1d1d1f] mb-6"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.8,
                          delay: testimonial.delay + 0.4,
                        }}
                        viewport={{ once: true }}
                      >
                        {testimonial.quote}
                      </motion.p>
                    </div>
                    <motion.div
                      className="flex items-center"
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: testimonial.delay + 0.6,
                      }}
                      viewport={{ once: true }}
                    >
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-10 h-10 mr-3 rounded-full object-cover border-2 border-white shadow-md"
                      />
                      <div>
                        <p className="font-semibold text-[#1d1d1f] text-sm">
                          {testimonial.name}
                        </p>
                        <p className="text-[#6e6e73] text-xs">
                          {testimonial.treatment}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Premium call to action */}
            <div className="text-center mt-20">
              <motion.button
                className="custom-button px-12 py-5 rounded-full text-[1.125rem] font-medium tracking-[-0.025em] shadow-lg relative overflow-hidden"
                onClick={() =>
                  window.scrollTo({
                    top: document.getElementById("contact")?.offsetTop,
                    behavior: "smooth",
                  })
                }
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 1.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 15px 30px rgba(168, 123, 35, 0.3)",
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#8a6a1f] to-[#EDB930]"
                  tabIndex={-1}
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.4 }}
                ></motion.div>
                <span className="relative">Start your transformation</span>
              </motion.button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
