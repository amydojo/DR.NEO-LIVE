import React from "react";
import { smoothScrollTo } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Frame_18() {
  return (
    <div className="flex flex-col items-center md:items-start md:flex-row gap-6 md:gap-8 w-full transition-all    p-10 pb-0 md:py-4 md:p-6 bg-[#f5f5f7]">
      <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-3/5 order-1 md:order-1">
        <h3 className="text-[44px] md:text-2xl font-normal mb-3 sm:mb-4 bg-gradient-to-r from-[#625046] to-[#c8b68f] bg-clip-text text-transparent tracking-tight leading-[1.2]">
          Microneedling
        </h3>

        <p className="text-[#625046] text-base text-xl md:text-lg  mb-4 sm:mb-6 font-normal max-w-md">
       The cost-effective hair growth solution.
        </p>

        <div className="flex flex-wrap gap-4 sm:gap-6 mt-2">
          <Button
            variant="link"
            className="hover:text-[#a87b23] text-md md:text-lg  p-0 h-auto font-normal text-[#8a6015] transition-colors"
            onClick={() => window.open("#", "_blank")}
          >
            Learn more →
          </Button>
          <Button
            variant="link"
            className="hover:text-[#a87b23] text-md md:text-lg  p-0 h-auto font-normal text-[#8a6015] transition-colors"
            onClick={() => smoothScrollTo("contact")}
          >
            Book Consult →
          </Button>
        </div>
      </div>

      <div className="w-full md:w-3/5 flex justify-center items-center order-2 md:order-2 relative">
        <div
          className="w-full max-w-[430px] max-h-[300px] md:max-w-full aspect-square rounded-xl bg-contain bg-no-repeat bg-center transform hover:scale-105 transition-transform duration-300"
          style={{
            backgroundImage: "url('assets/MICRONEEDLING PEN 3D MODEL 1.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            transform: "translateX(10%)",
          }}
        />
      </div>
    </div>
  );
}
