import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FueFAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqItems = [
    {
      question: "How long does the FUE procedure take?",
      answer:
        "The FUE procedure typically takes 4-8 hours depending on the number of grafts needed. The duration varies based on your specific treatment plan and the complexity of your case.",
    },
    {
      question: "When will I see results?",
      answer:
        "Initial growth begins at 3-4 months, with significant results visible at 6-8 months. Full results are typically achieved by 12-15 months post-procedure.",
    },
    {
      question: "Is the procedure painful?",
      answer:
        "The procedure is performed under local anesthesia, so you'll experience minimal discomfort. Most patients report only mild tenderness for a few days following the procedure.",
    },
    {
      question: "How natural will my hair look?",
      answer:
        "FUE transplanted hair looks completely natural because it's your own hair. The follicles are placed at natural angles and densities to match your existing hair pattern.",
    },
  ];
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  return (
    <section className="bg-[#F5F5F7] px-5 py-24 md:py-32">
      <div className="container mx-auto max-w-sm md:max-w-4xl">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
            Frequently asked questions
          </h2>
          <p className="text-lg md:text-xl text-medium-gray">
            Get answers to common questions about our FUE process
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-200 last:border-b-0"
            >
              <button
                className="w-full p-8 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-base font-semibold text-black pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-medium-gray transition-transform ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFaq === index && (
                <div className="px-8 pb-8">
                  <p className="text-base text-medium-gray leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
