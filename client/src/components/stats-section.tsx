import React from "react";
import { smoothScrollTo } from "@/lib/utils";

const stats = [
  {
    value: "90%",
    description:
      "of patients saw significant hair regrowth using our advanced FUE techniques*",
  },
  {
    value: "4/5",
    description:
      "patients experienced noticeable improvement in hair density and quality**",
  },
];

export default function StatsSection() {
  return (
    <section className="py-16 md:py-20 bg-[#f8f6f3]">
      {/* Mobile version */}
      <div className="md:hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-normal text-center mb-10 bg-gradient-to-r from-[#625046] to-[#c8b68f] bg-clip-text text-transparent">
            Proven Results
          </h2>

          <div className="space-y-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm text-center"
              >
                <h3 className="text-4xl text-[#a87b23] font-medium mb-4">
                  {stat.value}
                </h3>
                <p className="text-[#625046]">{stat.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => smoothScrollTo("contact")}
              className="inline-flex items-center justify-center h-12 px-8 text-base font-medium transition-colors bg-[#FAE151] text-[#625046] rounded-full hover:bg-[#f5d73d] shadow-sm hover:shadow"
            >
              Book a Consultation
            </button>
          </div>

          <p className="text-xs mt-6 text-center text-[#625046] opacity-70">
            *Based on clinical observations of Dr. Neo patients over a 12-month
            period
            <br />
            **According to patient satisfaction surveys following treatment
          </p>
        </div>
      </div>

      {/* Desktop version - Hims inspired */}
      <div className="hidden md:block">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-normal mb-6 text-[#625046]">
                Trusted ingredients and techniques
              </h2>
            </div>

            <div className="flex flex-col gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="relative mb-4">
                    <div className="w-44 h-44 rounded-full bg-white flex items-center justify-center">
                      <span className="text-6xl font-normal text-[#625046]">
                        {stat.value}
                      </span>
                    </div>
                    <svg
                      className="absolute top-0 -left-1"
                      width="180"
                      height="180"
                      viewBox="0 0 180 180"
                    >
                      <circle
                        cx="90"
                        cy="90"
                        r="85"
                        fill="none"
                        stroke="#a87b23"
                        strokeWidth="6"
                        strokeDasharray={index === 0 ? "534 534" : "426 534"}
                        strokeDashoffset="0"
                        strokeLinecap="round"
                        transform="rotate(-90 90 90)"
                      />
                    </svg>
                  </div>
                  <p className="text-lg lg:text-xl text-[#625046] max-w-md text-center">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <button
                onClick={() => smoothScrollTo("contact")}
                className="inline-flex items-center justify-center h-14 px-10 text-lg font-medium transition-colors bg-[#141414] text-white rounded-full hover:bg-[#2a2a2a]"
              >
                Get started
              </button>
            </div>

            <div className="mt-8 text-center text-xs text-[#625046] opacity-70 max-w-2xl mx-auto">
              <p className="mb-2">
                *Based on clinical observations of Dr. Neo patients over a
                12-month period
              </p>
              <p>
                **According to patient satisfaction surveys following treatment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
