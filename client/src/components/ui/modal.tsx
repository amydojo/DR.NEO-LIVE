"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Check, ArrowRight, Info } from "lucide-react";
import { set } from "zod";

type ProductModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
  imageSrc?: string;
  productType: string;
  triggerElement: HTMLElement | null;
};

const treatments = [
  {
    id: 1,
    title: "FUE Hair Transplant",
    description:
      "The medical standard resulting in high-survivability hair transplants. Our FUE technique ensures natural-looking results with minimal recovery time.",
    image: "/assets/HAIR POKE.png",
    features: [
      "Permanent solution for hair loss",
      "Minimally invasive procedure",
      "Natural-looking hairline design",
      "Faster recovery than traditional methods",
    ],
    featured: true,
  },
  {
    id: 2,
    title: "Microneedling",
    description:
      "Synergistic services for enhanced results. Microneedling creates microchannels in the scalp to maximize absorption of growth factors.",
    image: "/assets/MICRONEEDLING PEN 3D MODEL 1.png",
    features: [
      "Stimulates natural hair growth",
      "Enhances blood flow to follicles",
      "Minimal downtime",
      "Complementary to other treatments",
    ],
  },
  {
    id: 3,
    title: "Injectable Growth Factors",
    description:
      "Concentrated growth factors to enhance the survivability of transplanted grafts and stimulate existing hair follicles.",
    image: "/assets/FOLLICULES.png",
    features: [
      "Promotes hair thickness",
      "Accelerates healing after transplants",
      "Custom formulations for your needs",
      "Can be used with or without surgery",
    ],
  },
  {
    id: 4,
    title: "Follicular Hypersomes™",
    description:
      "Restorative factors that stimulate follicular growth and revitalize dormant hair follicles for improved density.",
    image: "/assets/MOIST FOLLICLE.png",
    features: [
      "Exclusive Dr. Neo technology",
      "Targets inactive follicles",
      "Non-surgical approach",
      "Progressive improvements over time",
    ],
  },
  {
    id: 5,
    title: "Vigor VIP",
    description:
      "A membership devoted to thicker hair and male wellness. Ongoing treatments and consultations for long-term hair health.",
    image: "/assets/Pecker Johnson VIP Card Bottom Trademarks 1.png",
    features: [
      "Continuous care program",
      "Priority appointment scheduling",
      "Regular progress monitoring",
      "Exclusive member discounts",
    ],
  },
];
const options = [
  "FUE Hair Transplant",
  "Microneedling",
  "Injectable Growth Factors",
  "Follicular Hypersomes™",
  "Vigor VIP",
];

export default function ProductModal({
  open,
  onOpenChange,
  title,
  description,
  imageSrc,
  productType,
  triggerElement,
}: ProductModalProps) {
  const [selected, setSelected] = useState(options[0]);
  const handleSelect = (option: string) => {
    setSelected(option);
  };
  useEffect(() => {
    setSelected(productType);
  }, [productType, open]);
  const treatment = treatments.find((t) => t.title === selected);

  const handleOpenChange = (isOpen: boolean) => {
    onOpenChange(isOpen);
    if (!isOpen && triggerElement) {
      console.log("THIS IS TRIGGER ELEMENT", triggerElement);
      triggerElement.focus();
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-4xl w-full rounded-2xl mt-16 p-0 overflow-visible">
        {/* Pill Selector Floating Above */}
        <div className="absolute  -top-40 left-1/2 -translate-x-1/2 z-50 bg-muted p-1 rounded-full  shadow-lg flex space-x-2">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              className={cn(
                "px-4 min-w- py-1.5 text-sm px-10 rounded-full transition-colors",
                selected === option
                  ? "bg-primary custom-button  shadow"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
              )}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row h-full relative">
          {/* Left - Optional Image */}
          {imageSrc && (
            <div className="bg-gray-100 flex items-center justify-center w-full md:w-1/2 p-6">
              <img
                src={imageSrc}
                alt="Preview"
                className="max-h-[400px] object-contain"
              />
            </div>
          )}

          {/* Right - Custom Content */}
          <div
            className={`w-full ${imageSrc ? "md:w-1/2" : ""} p-6 space-y-4 relative`}
          >
            <DialogHeader>
              <DialogTitle className="text-2xl font-semibold">
                {title}
              </DialogTitle>
              {description && (
                <DialogDescription>{description}</DialogDescription>
              )}
            </DialogHeader>

            <div className="pt-4">
              <div
                key={treatment?.id}
                className={`bg-white rounded-2xl overflow-hidden mb-16 transform transition-all duration-700 ease-out`}
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/2 p-10 lg:p-12 xl:p-16 flex flex-col justify-center">
                    <h3 className="text-3xl lg:text-4xl font-normal mb-6 text-[#625046]">
                      {treatment?.title}
                    </h3>
                    <p className="text-[#625046] text-lg lg:text-xl mb-8 font-normal">
                      {treatment?.description}
                    </p>

                    {/* Key features */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 border-1 ">
                      {treatment?.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="bg-[#A87B23]/10 rounded-full p-1 mt-0.5 shrink-0">
                            <Check className="text-[#A87B23] w-3 h-3" />
                          </div>
                          <span className="text-[#625046] text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-6">
                      <Button
                        variant="outline"
                        className="group text-[#a87b23] border-[#a87b23] hover:bg-[#a87b23] hover:text-white text-base font-medium px-6 py-3 rounded-full transition-all duration-300 relative overflow-hidden"
                        onClick={() => (window.location.href = "/treatments")}
                      >
                        <span className="relative z-10 flex items-center">
                          Learn more
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                        <span className="absolute bottom-0 left-0 h-0 w-full bg-[#a87b23] transition-all duration-300 group-hover:h-full -z-0"></span>
                      </Button>
                      <Button
                        className="bg-[#141414] text-white hover:bg-[#2a2a2a] text-base font-medium px-6 py-3 rounded-full transition-all hover:shadow-lg hover:scale-105"
                        onClick={() => smoothScrollTo("contact")}
                      >
                        Book a Consult
                      </Button>
                    </div>
                  </div>

                  <div className="lg:w-1/2 bg-[#f8f8fa] flex items-center justify-center p-10 lg:p-0 relative overflow-hidden group">
                    <div
                      className={`w-full max-w-md lg:max-w-full transform transition-all duration-700 ease-out`}
                    >
                      <img
                        src={treatment?.image}
                        alt={treatment?.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    {/* Feature highlight button */}
                    <button
                      className="absolute bottom-8 right-8 p-2 rounded-full bg-[#A87B23]/10 hover:bg-[#A87B23]/20 text-[#A87B23] transition-colors"
                      aria-label="View key features"
                    >
                      <Info className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
