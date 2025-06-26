import React from "react";
import { smoothScrollTo } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Frame_21() {
  return (
    <div className="flex flex-col items-center gap-6 w-full py-10 px-6 bg-[#f5f5f7]">
      <div className="flex flex-col items-center text-center w-full">
        <h3 className="text-[44px] font-normal mb-3 bg-gradient-to-r from-[#625046] to-[#c8b68f] bg-clip-text text-transparent tracking-tight leading-[1.2]">
          Vigor VIP
        </h3>

        <p className="text-[#625046] text-xl mb-6 font-normal max-w-md">
          A membership devoted to thicker hair and male wellness.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Button
            variant="link"
            className="hover:text-[#a87b23] text-md p-0 h-auto font-normal text-[#8a6015] transition-colors"
            onClick={() => window.open("#", "_blank")}
          >
            Learn more →
          </Button>
          <Button
            variant="link"
            className="hover:text-[#a87b23] text-md p-0 h-auto font-normal text-[#8a6015] transition-colors"
            onClick={() => smoothScrollTo("contact")}
          >
            Book Consult →
          </Button>
        </div>
      </div>

      <div className="w-full flex justify-center items-center">
        <div
          className="w-full max-w-[320px] aspect-[5/4] rounded-xl bg-contain bg-no-repeat bg-center transform hover:scale-105 transition-transform duration-300"
          style={{
            backgroundImage:
              "url('/assets/Pecker Johnson VIP Card for NEO sit.svg')",
            backgroundSize: "contain",
            filter: "drop-shadow(0px 10px 15px rgba(0,0,0,0.15))",
            transform: "translateX(-25%)",
          }}
        />
      </div>
    </div>
  );
}
