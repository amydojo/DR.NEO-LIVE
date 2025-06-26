import React from "react";
import styles from "../../styles/fue.module.css";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function FueProcess() {
  return (
    <section className="bg-white px-5 py-16 md:py-24">
      <div className="container mx-auto max-w-sm md:max-w-4xl">
        <div className="text-center space-y-8">
          {/* Animated PROCESS Letters */}
          <div className="flex justify-center gap-1 mb-8">
            {["P", "R", "O", "C", "E", "S", "S"].map((letter, index) => (
              <div
                key={index}
                className="w-12 h-12 bg-[#FC8310] rounded-lg flex items-center justify-center shadow-lg"
              >
                <span className="text-sm font-semibold text-white">
                  {letter}
                </span>
              </div>
            ))}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-black leading-tight">
            See our process in action
          </h2>

          <p className="text-lg text-medium-gray leading-relaxed">
            Watch step-by-step videos of our FUE hair transplant procedure.
            Understand exactly what happens during your treatment.
          </p>

          <Button className="w-full bg-black hover:bg-gray-800 text-white py-4 text-lg rounded-full shadow-lg">
            Watch process videos
          </Button>

          {/* Video Mock-up */}
          <div className="bg-black rounded-[48px] p-2 shadow-2xl max-w-56 mx-auto">
            <div className="bg-white rounded-[40px] overflow-hidden">
              <div className="bg-black h-8 flex items-center justify-center rounded-t-[40px]">
                <div className="w-20 h-1 bg-white rounded-full" />
              </div>
              <div className="bg-gradient-to-b from-gray-800 to-gray-600 h-96 flex items-center justify-center relative">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                  <Play className="w-3 h-4 text-black ml-1" />
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-semibold">FUE Process</p>
                  <p className="text-xs opacity-80">Step-by-step guide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
