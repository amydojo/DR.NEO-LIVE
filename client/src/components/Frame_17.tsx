import React from "react";
import { smoothScrollTo } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import shinyFolliclePath from "@assets/shinyfollicle.png";
import { Link } from "wouter";
export default function Frame_17() {
  // We don't need to detect the desktop card context here - the parent component handles the styling

  return (
    <div className="flex flex-col items-center md:items-start md:flex-row gap-6 md:gap-8 w-full transition-all py-10   p-10 md:py-4 md:p-6 bg-[#f5f5f7]">
      <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-3/5 order-1 md:order-1">
        <h2 className="text-[44px] md:text-2xl font-normal mb-3 sm:mb-4 bg-gradient-to-r from-[#625046] to-[#c8b68f] bg-clip-text text-transparent tracking-tight leading-[1.2]">
          FUE Hair Transplant
        </h2>

        <p className="text-[#625046] text-base text-xl md:text-lg  mb-4 sm:mb-6 font-normal max-w-md">
          The medical standard for high-survivability hair transplants.
        </p>

        <div className="flex flex-wrap gap-4 sm:gap-6 mt-2">
          <Link
            className="hover:text-[#a87b23] text-md md:text-lg  p-0 h-auto font-normal text-[#8a6015] transition-colors"
            href="/fue"
          >
            Learn more →
          </Link>
          <Button
            variant="link"
            className="hover:text-[#a87b23] text-md md:text-lg  p-0 h-auto font-normal text-[#8a6015] transition-colors"
            onClick={() => smoothScrollTo("contact")}
          >
            Book Consult →
          </Button>
        </div>
      </div>

      <div className="w-full md:w-2/5 flex justify-center items-center order-1 md:order-2 px-5">
        <div
          className="w-full  max-w-[430px] max-h-[300px]  md:max-w-full aspect-square rounded-xl bg-contain bg-no-repeat bg-center transform hover:scale-105 transition-transform duration-300"
          style={{
            backgroundImage: `url(${shinyFolliclePath})`,
            backgroundSize: "contain",
          }}
        />
      </div>
    </div>
  );
}
