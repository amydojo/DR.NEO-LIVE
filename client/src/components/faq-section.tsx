import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Am I a good candidate for NeoGraft?",
    answer: `NeoGraft® has a track-record of delivering excellent hair transplantation results for both men and women. While most people can get the treatment, <strong>there are some factors that come into play to determine if you’re an ideal candidate.</strong> Taken together, these include:
‍<strong>i. The number of grafts necessary to produce the desired results
ii. The density and quality of the donor hair, hair texture, and
iii. The potential for future hair loss.</strong>

‍Your Dr. Neo hair restoration specialist will be able to help to determine if you are a suitable candidate for the NeoGraft procedure.`,
  },
  {
    question: "Can Dr. Neo restore hair on both men and women?",
    answer:
      "<strong>Yes.</strong> Dr. Neo offers hair restoration solutions for both men and women.",
  },
  {
    question: "How is Dr. Neo different?",
    answer:
      "Traditional hair restoration procedures usually employ a technique known as the strip method, which involves surgically removing a strip from the patient’s scalp (the back of the head) to be used as the donor site. This can leave a linear scar. In contrast, Dr. Neo utilizes a variation of the Follicular Unit Extraction (FUE) technique that allows us to harvest individual hair follicles with an automated handheld device. The harvested follicles are known as terminal hair and are naturally resistant to hair loss. During Dr. Neo’s FUE procedure, the harvested grafts are implanted at the site of hair loss, where, over time, they will regrow as healthy, fully functioning hair. <strong>Ultimately, Dr. Neo’s approach to hair transplantation does NOT leave a linear scar, is more comfortable, and requires much less recovery time.</strong>",
  },
  {
    question: "What is an FUE hair transplant?",
    answer:
      "FUE stands for <strong>Follicular Unit Extraction.</strong> It is an advanced, minimally invasive hair transplant method that allows for the harvesting of individual follicles from the back of the head (donor area) <strong>without a scalpel or stitches, and therefore leaves no linear scar.</strong>",
  },
  {
    question: "Who performs the NeoGraft procedure?",
    answer:
      "A Dr. Neo physician will be involved in making all of the necessary and important decisions, and will supervise every step of your NeoGraft experience. Certified Dr. Neo technicians will assist the physician performing the procedure. These technicians typically have more than five years of hair restoration experience and must be periodically recertified.",
  },
  {
    question: "How much does Dr. Neo cost?",
    answer:
      "The cost of Dr. Neo hair transplantation services varies with the number of grafts that are needed, the complexity of the transplantation, and the expertise of the team performing the procedure.  Pricing ranges from $6 to $12 per graft and on average a patient receives approximately 1,500 to 2,500 grafts.",
  },

  {
    question: "What are the typical causes of hair loss?",
    answer:
      "Hair loss is typically due to genetics, a medical condition, or a hormonal change or imbalance. The most common cause of hair loss is hereditary hair loss, which typically occurs gradually with aging. For men, the first sign of male pattern hair loss may be a receding hairline or thinning at the crown.\n\nHair loss can also be caused by several medical conditions, including alopecia areata, telogen effluvium and trichotillomania, fungal infections, iron deficiency, certain thyroid issues, and even rapid weight loss. Alopecia areata causes the body's immune system to attack its own hair follicles.",
  },
  {
    question: "How do I know what type of hair loss I have?",
    answer:
      "If you are experiencing new or worsening hair loss, see your doctor or come in for a consultation at Dr. Neo. Our specialists can identify your hair loss pattern and recommend appropriate treatments based on your specific condition.",
  },
  {
    question: "What medical treatment can help with hair loss?",
    answer:
      "At Dr. Neo, we offer various treatments including FUE hair transplants, injectable growth factors, microneedling therapies, and follicular hypersome treatments. The right approach depends on your specific type of hair loss and goals. Our consultation process includes a personalized assessment to determine the most effective solution for you.",
  },
  {
    question: "Are side effects common with hair restoration treatments?",
    answer:
      "Like any medical procedure, hair restoration treatments may have potential side effects, but they are typically minimal. Most patients experience only mild, temporary discomfort. During your consultation, our medical team will review any potential side effects specific to your recommended treatment plan and how they can be managed.",
  },
  {
    question: "Is there a hair loss cure?",
    answer:
      "While there's no single 'cure' for all types of hair loss, our advanced treatments can significantly improve hair density, appearance, and growth. For many patients, treatments like FUE hair transplants provide permanent solutions to hair loss, with natural-looking results that continue to improve over time.",
  },
];

const theProcedureFAQ = [
  {
    question: "How do I prepare for the procedure?",
    answer:
      "For the procedure, the donor area will need to be shaved down with a zero guard to prepare for graft harvesting. As such, your Dr. Neo specialist may advise you to cut your hair in preparation for shaving of the donor site at the start of your procedure. Cutting your hair short will also result in a less noticeable change after you return to your daily routine while the donor site heals and remaining shaved hair follicles begin to regrow. For patients with longer hair, the donor area can be shaved in a way that it can be disguised by keeping the hair around it long to hide the shaved areas.",
  },
  {
    question: "Will I need a total buzz cut before the procedure?",
    answer:
      "No. If your hair is long enough, the NeoGraft procedure can be done by just shaving small areas, which can then be covered by the rest of your hair after the procedure.",
  },
  {
    question: "How long is a Dr.Neo session and how many will I need?",
    answer:
      "The duration of a Dr. Neo transplantation session ranges from 4 to 10 hours and depends on the number of grafts being harvested and implanted.  The number of sessions a patient needs varies with their individual circumstances and hair restoration goals. Typically, a single Dr. Neo session is enough to attain a noticeable hairline improvement.",
  },
];

const afterTheProcedureFaq = [
  {
    question: "Is the NeoGraft procedure guaranteed to work?",
    answer:
      "As with nearly all medical procedures, results can never be guaranteed. It is worth noting, however, that the before-and-after photos from previous NeoGraft patients provide undeniable evidence that one can achieve incredible results with this procedure. Our certified Dr. Neo providers will work with you to set realistic expectations and provide a positive hair restoration experience.",
  },
  {
    question: "How will I feel after the NeoGraft procedure?",
    answer:
      "There's typically very little pain or discomfort after the NeoGraft procedure. You may experience a slight amount of drainage for the first day after your procedure, but this is minimal. You must refrain from strenuous activity for two weeks, to ensure you do not cause any harm to the newly implanted grafts. You can expect the newly implanted grafts to be slightly raised in the first week after the procedure. Around three to four days later, they will start to scab over and then possibly shed. Shedding is good and a natural part of the healing process.",
  },
  {
    question: "How long does it take to recover after NeoGraft?",
    answer:
      "Recovery time after a NeoGraft procedure is much faster than traditional hair transplants because there is NO incision involved. The newly implanted grafts may feel tender and appear slightly raised at first, but this should subside in one week. You may also see some scabbing, but this should also flake off within a week. The Dr. Neo team will instruct you on how to properly care for your new grafts, but most patients are able to return to their usual routine within two weeks after completing the procedure.",
  },
  {
    question: "How do I care for my grafts after the procedure?",
    answer:
      "Immediately after your NeoGraft procedure, your Dr. Neo team will ensure that the new grafts are secure and in their proper position. They will thoroughly rinse the treated areas and a light protective dressing may be applied. You will be given detailed instructions about how to care for the grafts when you go home, including any recommended shampoos, topical antiseptics, or hair care products. Because there is no incision, there is no need to get any sutures removed.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openProcedureIndex, setOpenProcedureIndex] = useState<number | null>(
    null,
  );
  const [openAfterProcedureIndex, setOpenAfterProcedureIndex] = useState<
    number | null
  >(null);

  const toggleQuestion = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };
  const toggleProcedureQuestion = (index: number) => {
    if (openProcedureIndex === index) {
      setOpenProcedureIndex(null);
    } else {
      setOpenProcedureIndex(index);
    }
  };
  const toggleAfterProcedureQuestion = (index: number) => {
    if (openAfterProcedureIndex === index) {
      setOpenAfterProcedureIndex(null);
    } else {
      setOpenAfterProcedureIndex(index);
    }
  };

  return (
    <section className="bg-white py-16 md:py-24 flex flex-col gap-10">
      {/* Mobile version */}
      <div className="md:hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-normal text-center mb-10 bg-gradient-to-r from-[#EDB930] to-[#c8b68f] bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="flex justify-between items-center w-full p-4 text-left focus:outline-none focus:ring-4 focus:ring-blue-400 bg-white hover:bg-gray-50"
                  onClick={() => toggleQuestion(index)}
                >
                  <span className="text-[#625046] font-medium">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-[#625046]" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#625046]" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <p
                      className="text-[#625046] whitespace-pre-line"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    ></p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-normal text-center mb-10 bg-gradient-to-r from-[#625046] to-[#c8b68f] bg-clip-text text-transparent">
            The Procedure
          </h2>

          <div className="space-y-4">
            {theProcedureFAQ.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="flex justify-between items-center w-full p-4 text-left focus:outline-none focus:ring-4 focus:ring-blue-400 bg-white hover:bg-gray-50"
                  onClick={() => toggleQuestion(index)}
                >
                  <span className="text-[#625046] font-medium">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-[#625046]" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#625046]" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <p
                      className="text-[#625046] whitespace-pre-line"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    ></p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-normal text-center mb-10 bg-gradient-to-r from-[#625046] to-[#c8b68f] bg-clip-text text-transparent">
            After the Procedure
          </h2>

          <div className="space-y-4">
            {afterTheProcedureFaq.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="flex justify-between items-center w-full p-4 text-left focus:outline-none focus:ring-4 focus:ring-blue-400 bg-white hover:bg-gray-50"
                  onClick={() => toggleQuestion(index)}
                >
                  <span className="text-[#625046] font-medium">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-[#625046]" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#625046]" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <p
                      className="text-[#625046] whitespace-pre-line"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    ></p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Desktop version - Hims inspired */}
      <div className="hidden md:block">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-screen-xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl lg:text-4xl font-normal mb-4 text-[#625046]">
                Frequently asked questions about
                <br />
                hair loss treatment
              </h2>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6">
                  <button
                    className="flex justify-between items-center w-full text-left focus:outline-none focus:ring-2     focus:ring-blue-400"
                    onClick={() => toggleQuestion(index)}
                  >
                    <span className="text-xl text-[#625046] font-normal">
                      {faq.question}
                    </span>
                    {openIndex === index ? (
                      <ChevronUp
                        className="h-6 w-6 text-[#a87b23]"
                        aria-label={`Collapse FAQ Question ${index}`}
                      />
                    ) : (
                      <ChevronDown
                        className="h-6 w-6 text-[#a87b23]"
                        aria-label={`Expand FAQ Question ${index}`}
                      />
                    )}
                  </button>

                  {openIndex === index && (
                    <div className="mt-4 pr-10">
                      <p
                        className="text-[#625046] text-lg whitespace-pre-line"
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      ></p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-screen-xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl lg:text-4xl font-normal mb-4 text-[#625046]">
                The Procedure
              </h2>
            </div>

            <div className="space-y-6">
              {theProcedureFAQ.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6">
                  <button
                    className="flex justify-between items-center w-full text-left focus:outline-none focus:ring-2     focus:ring-blue-400"
                    onClick={() => toggleProcedureQuestion(index)}
                  >
                    <span className="text-xl text-[#625046] font-normal">
                      {faq.question}
                    </span>
                    {openProcedureIndex === index ? (
                      <ChevronUp
                        className="h-6 w-6 text-[#a87b23]"
                        aria-label={`Collapse FAQ Question ${index}`}
                      />
                    ) : (
                      <ChevronDown
                        className="h-6 w-6 text-[#a87b23]"
                        aria-label={`Expand FAQ Question ${index}`}
                      />
                    )}
                  </button>

                  {openProcedureIndex === index && (
                    <div className="mt-4 pr-10">
                      <p
                        className="text-[#625046] text-lg whitespace-pre-line"
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      ></p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-screen-xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl lg:text-4xl font-normal text-[#625046]">
                After The Procedure
              </h2>
            </div>

            <div className="space-y-6">
              {afterTheProcedureFaq.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6">
                  <button
                    className="flex justify-between items-center w-full text-left focus:outline-none focus:ring-2     focus:ring-blue-400"
                    onClick={() => toggleAfterProcedureQuestion(index)}
                  >
                    <span className="text-xl text-[#625046] font-normal">
                      {faq.question}
                    </span>
                    {openAfterProcedureIndex === index ? (
                      <ChevronUp
                        className="h-6 w-6 text-[#a87b23]"
                        aria-label={`Collapse FAQ Question ${index}`}
                      />
                    ) : (
                      <ChevronDown
                        className="h-6 w-6 text-[#a87b23]"
                        aria-label={`Expand FAQ Question ${index}`}
                      />
                    )}
                  </button>

                  {openAfterProcedureIndex === index && (
                    <div className="mt-4 pr-10">
                      <p
                        className="text-[#625046] text-lg whitespace-pre-line"
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      ></p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 pt-6 border-t border-gray-200 flex items-center">
              <div className="flex-grow">
                <h3 className="text-2xl font-normal text-[#625046]">
                  Your hair, your regrowth, your way
                </h3>
                <div className="mt-4 flex space-x-8">
                  <div className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-[#a87b23] mr-3"></div>
                    <span className="text-[#625046]">
                      Doctor-trusted techniques
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-[#a87b23] mr-3"></div>
                    <span className="text-[#625046]">
                      Personalized treatments
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 rounded-full bg-[#a87b23] mr-3"></div>
                    <span className="text-[#625046]">Natural results</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
