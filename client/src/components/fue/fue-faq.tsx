import React from "react";
import styles from "../../styles/fue.module.css";
import { Button } from "@/components/ui/button";

export default function FueResults() {
  return (
    <section className="bg-white px-5 py-16 md:py-24">
      <div className="container mx-auto max-w-sm md:max-w-4xl ">
        <div className="space-y-6 mb-12 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-black leading-tight">
            See real results from real patients
          </h2>
          <p className="text-lg text-medium-gray leading-relaxed">
            Browse through our comprehensive gallery of before and after photos.
            Every result is real, every patient is satisfied.
          </p>
          <Button className="w-full bg-black hover:bg-gray-800 text-white py-4 text-lg rounded-full shadow-lg md:w-fit">
            View results gallery
          </Button>
        </div>

        {/* Results Gallery Card */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-xl p-10">
          <div className="bg-gradient-to-b from-gray-50 to-light-gray rounded-3xl p-6">
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-gray-800 mb-4 ">
                Results Gallery
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[13, 14, 15, 16].map((month) => (
                <div key={month} className="bg-white rounded-2xl p-2 shadow-sm">
                  <div className="flex gap-1 mb-2">
                    <div className="w-full h-16 bg-red-100 rounded-lg" />
                    <div className="w-full h-16 bg-green-100 rounded-lg" />
                  </div>
                  <p className="text-xs text-medium-gray text-center">
                    {month} months
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-16 h-1 bg-black rounded-full mx-auto mt-4" />
        </div>
      </div>
    </section>
  );
}
