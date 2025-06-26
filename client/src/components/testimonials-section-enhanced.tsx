import { motion } from "framer-motion";
import { useState } from "react";
import Frame_90 from "@/components/Frame_90";
import { TestimonialAvatar } from "./avatar-testimonials";

export default function TestimonialsSectionEnhanced() {
  return (
    <>
      {/* Mobile version - keep exactly the same */}
      <div className="md:hidden">
        <section className="bg-[#f8f6f3] py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-normal text-center mb-12 text-[#625046]">
              Patient Stories
            </h2>
            <Frame_90 />
          </div>
        </section>
      </div>

      {/* Desktop version - Apple-inspired design */}
      <div className="hidden md:block">
        <section className="bg-[#f5f5f7] py-20">
          <div className="max-w-[1920px] mx-auto px-12">
            {/* Section header */}
            <div className="text-center mb-16">
              <motion.h2
                className="text-[56px] font-semibold leading-[60px] tracking-[-0.28px] text-[#1d1d1f] mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Life-changing results
              </motion.h2>

              <motion.p
                className="text-[28px] font-normal leading-8 tracking-[0.196px] text-[#1d1d1f]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Real patients. Real transformations.
              </motion.p>
            </div>

            {/* Apple-style testimonial grid */}
            <div className="grid grid-cols-3 gap-6 mb-12">
              {/* Featured testimonial - large */}
              <motion.div
                className="col-span-2 bg-white rounded-2xl p-12 shadow-sm border border-[#e5e5e7]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <div className="text-[32px] font-light text-[#0071e3] mb-6">
                      "
                    </div>
                    <p className="text-[24px] font-normal leading-8 text-[#1d1d1f] mb-8">
                      Dr. NEO's FUE procedure gave me back my confidence. The
                      results look completely natural, and the experience was
                      far better than I expected.
                    </p>
                  </div>
                  <div className="flex items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format&q=80" 
                      alt="Michael R." 
                      className="w-12 h-12 mr-4 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                    <div>
                      <p className="font-semibold text-[#1d1d1f]">Michael R.</p>
                      <p className="text-[#6e6e73]">FUE Hair Transplant</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Side testimonial */}
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-sm border border-[#e5e5e7]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <div className="text-[24px] font-light text-[#ba62fc] mb-4">
                      "
                    </div>
                    <p className="text-[18px] font-normal leading-6 text-[#1d1d1f] mb-6">
                      The PRP treatments made such a difference. I noticed
                      thicker hair within just a few months.
                    </p>
                  </div>
                  <div className="flex items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face&auto=format&q=80" 
                      alt="Sarah K." 
                      className="w-10 h-10 mr-3 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                    <div>
                      <p className="font-semibold text-[#1d1d1f] text-sm">
                        Sarah K.
                      </p>
                      <p className="text-[#6e6e73] text-xs">PRP Therapy</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom row testimonials */}
            <div className="grid grid-cols-3 gap-6">
              {/* Testimonial 1 */}
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-sm border border-[#e5e5e7]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <div className="text-[24px] font-light text-[#f55600] mb-4">
                      "
                    </div>
                    <p className="text-[16px] font-normal leading-5 text-[#1d1d1f] mb-6">
                      Professional, caring, and the results speak for
                      themselves. Couldn't be happier.
                    </p>
                  </div>
                  <div className="flex items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format&q=80" 
                      alt="David L." 
                      className="w-8 h-8 mr-3 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                    <div>
                      <p className="font-semibold text-[#1d1d1f] text-sm">
                        David L.
                      </p>
                      <p className="text-[#6e6e73] text-xs">FUE + PRP</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Testimonial 2 */}
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-sm border border-[#e5e5e7]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <div className="text-[24px] font-light text-[#f2416b] mb-4">
                      "
                    </div>
                    <p className="text-[16px] font-normal leading-5 text-[#1d1d1f] mb-6">
                      The entire team was amazing. My hair looks better than it
                      has in years.
                    </p>
                  </div>
                  <div className="flex items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format&q=80" 
                      alt="Jennifer M." 
                      className="w-8 h-8 mr-3 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                    <div>
                      <p className="font-semibold text-[#1d1d1f] text-sm">
                        Jennifer M.
                      </p>
                      <p className="text-[#6e6e73] text-xs">LLLT Treatment</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Testimonial 3 */}
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-sm border border-[#e5e5e7]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <div className="text-[24px] font-light text-[#0090f7] mb-4">
                      "
                    </div>
                    <p className="text-[16px] font-normal leading-5 text-[#1d1d1f] mb-6">
                      State-of-the-art facility and incredible attention to
                      detail. Highly recommend.
                    </p>
                  </div>
                  <div className="flex items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&auto=format&q=80" 
                      alt="Robert T." 
                      className="w-8 h-8 mr-3 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                    <div>
                      <p className="font-semibold text-[#1d1d1f] text-sm">
                        Robert T.
                      </p>
                      <p className="text-[#6e6e73] text-xs">Consultation</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Call to action */}
            <div className="text-center mt-16">
              <motion.button
                className="custom-button  px-8 py-4 rounded-full text-[17px] font-normal leading-5 tracking-[-0.374px]"
                onClick={() =>
                  window.scrollTo({
                    top: document.getElementById("contact")?.offsetTop,
                    behavior: "smooth",
                  })
                }
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                whileHover={{ scale: 1.05 }}
              >
                Start your transformation
              </motion.button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
