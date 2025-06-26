import React, { useState } from 'react';
import { smoothScrollTo } from '@/lib/utils';

// Quiz questions and answers
const quizSteps = [
  {
    question: "How would you describe your hair loss?",
    options: [
      { text: "Receding hairline", value: "receding" },
      { text: "Thinning at the crown", value: "thinning_crown" },
      { text: "Overall thinning", value: "overall_thinning" },
      { text: "Patchy hair loss", value: "patchy" }
    ]
  },
  {
    question: "How long have you been experiencing hair loss?",
    options: [
      { text: "Just noticed (< 1 year)", value: "recent" },
      { text: "1-3 years", value: "moderate" },
      { text: "3-5 years", value: "advancing" },
      { text: "5+ years", value: "long_term" }
    ]
  },
  {
    question: "Have you tried any hair loss treatments before?",
    options: [
      { text: "Yes, with good results", value: "yes_good" },
      { text: "Yes, with limited results", value: "yes_limited" },
      { text: "Yes, with no results", value: "yes_none" },
      { text: "No, I haven't tried any", value: "no" }
    ]
  }
];

export default function HairQuizSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [quizComplete, setQuizComplete] = useState(false);

  const handleOptionSelect = (value: string) => {
    const newSelections = [...selectedOptions];
    newSelections[currentStep] = value;
    setSelectedOptions(newSelections);

    if (currentStep < quizSteps.length - 1) {
      // Move to next question
      setCurrentStep(currentStep + 1);
    } else {
      // Quiz completed
      setQuizComplete(true);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setSelectedOptions([]);
    setQuizComplete(false);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      {/* Mobile version */}
      <div className="md:hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-normal text-center mb-10 bg-gradient-to-r from-[#625046] to-[#c8b68f] bg-clip-text text-transparent">
            Hair Loss Assessment
          </h2>
          
          {!quizComplete ? (
            <div className="bg-[#f8f6f3] rounded-xl p-6 shadow-sm">
              <div className="mb-8">
                <div className="flex justify-between mb-2 text-sm text-[#625046]">
                  <span>Question {currentStep + 1} of {quizSteps.length}</span>
                  <span>{Math.round(((currentStep + 1) / quizSteps.length) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div 
                    className="bg-[#a87b23] h-1.5 rounded-full" 
                    style={{ width: `${((currentStep + 1) / quizSteps.length) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <h3 className="text-xl font-medium text-[#625046] mb-6">
                {quizSteps[currentStep].question}
              </h3>
              
              <div className="space-y-3">
                {quizSteps[currentStep].options.map((option, index) => (
                  <button
                    key={index}
                    className="w-full p-4 border border-gray-200 rounded-lg text-left text-[#625046] hover:border-[#a87b23] focus:outline-none focus:ring-2 focus:ring-[#a87b23] transition-colors"
                    onClick={() => handleOptionSelect(option.value)}
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-[#f8f6f3] rounded-xl p-6 shadow-sm text-center">
              <h3 className="text-xl font-medium text-[#625046] mb-4">
                Thank you for completing the assessment!
              </h3>
              <p className="text-[#625046] mb-8">
                Based on your answers, we recommend scheduling a consultation with our experts for personalized hair restoration advice.
              </p>
              <div className="flex flex-col space-y-4">
                <button 
                  onClick={() => smoothScrollTo('contact')}
                  className="inline-flex items-center justify-center h-12 px-8 text-base font-medium transition-colors bg-[#FAE151] text-[#625046] rounded-full hover:bg-[#f5d73d] shadow-sm hover:shadow"
                >
                  Book a Consultation
                </button>
                <button 
                  onClick={resetQuiz}
                  className="inline-flex items-center justify-center h-12 px-8 text-base font-medium text-[#625046] underline decoration-1 underline-offset-4"
                >
                  Retake Assessment
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Desktop version - Hims inspired */}
      <div className="hidden md:block">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-screen-xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="text-3xl lg:text-4xl font-normal mb-4 text-[#625046]">
                Find the right hair loss solution for you
              </h2>
              <p className="text-lg text-[#625046] max-w-2xl mx-auto">
                Answer a few questions to help us understand your hair loss and recommend the most effective treatment options.
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto">
              {!quizComplete ? (
                <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                  <div className="mb-8">
                    <div className="flex justify-between mb-2 text-sm text-[#625046]">
                      <span>Question {currentStep + 1} of {quizSteps.length}</span>
                      <span>{Math.round(((currentStep + 1) / quizSteps.length) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-[#a87b23] h-2 rounded-full" 
                        style={{ width: `${((currentStep + 1) / quizSteps.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-normal text-[#625046] mb-8">
                    {quizSteps[currentStep].question}
                  </h3>
                  
                  <div className="space-y-4">
                    {quizSteps[currentStep].options.map((option, index) => (
                      <button
                        key={index}
                        className="w-full p-5 border border-gray-200 rounded-lg text-left text-[#625046] hover:border-[#a87b23] focus:outline-none focus:ring-2 focus:ring-[#a87b23] transition-colors text-lg"
                        onClick={() => handleOptionSelect(option.value)}
                      >
                        {option.text}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm text-center">
                  <h3 className="text-2xl font-normal text-[#625046] mb-4">
                    Thank you for completing the assessment!
                  </h3>
                  <p className="text-lg text-[#625046] mb-8">
                    Based on your answers, we recommend scheduling a consultation with our experts for a personalized hair restoration plan tailored to your specific needs.
                  </p>
                  <div className="flex flex-col space-y-4 max-w-md mx-auto">
                    <button 
                      onClick={() => smoothScrollTo('contact')}
                      className="inline-flex items-center justify-center h-14 px-10 text-lg font-medium transition-colors bg-[#141414] text-white rounded-full hover:bg-[#2a2a2a]"
                    >
                      Book a Consultation
                    </button>
                    <button 
                      onClick={resetQuiz}
                      className="inline-flex items-center justify-center h-14 px-10 text-lg font-medium text-[#625046] underline decoration-1 underline-offset-4"
                    >
                      Retake Assessment
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}