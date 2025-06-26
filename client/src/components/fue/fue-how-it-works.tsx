import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";
import HiddenCard from "../ui/hidden-card";

const HowItWorks = () => {
  const processDetails = [
    {
      title: "Initial Consultation",
      description:
        "The main goal of the initial consultation is to determine if you are a good candidate for a Dr. Neo hair restoration procedure. The good news is NeoGraft has a proven track-record of delivering excellent hair transplantation results for both men and women of all ethnicities.",
      image: "/assets/fue/initial_consultation.png",
    },
    {
      title: "Procedure Day",
      description:
        'First, it is important to note we call it "Procedure Day" because the duration of a Dr. Neo transplantation session ranges from 4 to 10 hours and depends on the number of grafts (follicular units) we harvest and implant that particular day.',
      image: "assets/fue/procedure_day.png",
    },
    {
      title: "Recovery & Regrowth",
      description:
        "There's typically very little pain or discomfort after the NeoGraft procedure. You may experience some tenderness around the donor site, but this is a normal part of the healing process and should subside in a few days. You may also experience a slight amount of drainage for the first day after your procedure, but this is minimal.",
      image: "/assets/fue/recovery_&_regrowth.png",
    },
    {
      title: "Follow-Up Consultation",
      description:
        "We encourage all of our NeoGraft patients to schedule a follow up consultation to analyze results we achieved and determine if additional sessions would be beneficial.",
      image: "/assets/fue/follow_up_consultation.png",
    },
  ];

  const personalizedFeatures = [
    {
      icon: "🧠",
      title: "AI-powered hairline design",
      description:
        "Advanced algorithms create the perfect hairline for your facial structure.",
    },
    {
      icon: "📊",
      title: "Personalized graft planning",
      description:
        "Precise calculations determine optimal graft placement and density.",
    },
    {
      icon: "🔬",
      title: "Custom recovery protocol",
      description:
        "Tailored aftercare plans ensure optimal healing and results.",
    },
    {
      icon: "💬",
      title: "Ongoing support plan",
      description: "Dedicated support team guides you through every step.",
    },
  ];

  return (
    <div className="bg-[#F3F4F6] font-sf-pro">
      {/* Promotional Ribbon */}

      {/* How It Works Section */}
      <section className="bg-light-gray px-5 py-16 md:py-12">
        <div className="container mx-auto max-w-sm md:max-w-5xl">
          <div className="text-center mb-8 md:mb-20 flex flex-col items-center">
            <h2 className="text-4xl md:text-7xl font-bold text-black mb-2 leading-tight tracking-tight">
              How It Works
              <br />
            </h2>
            <div className="w-20 h-1 rounded-full bg-gradient-to-l from-[#FC8310] to-[#C8B68F] mt-5"></div>

            <div />
          </div>

          {/* Mobile Layout - Stacked Cards */}
          <div className="block md:hidden space-y-6">
            {processDetails.map((detail, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm">
                <div className="space-y- p-8 ">
                  <h3 className="text-xl font-[700] text-black leading-tight mb-2">
                    {detail.title}
                  </h3>
                  <p className="text-lg font-[600] text-[#86868B] leading-relaxed">
                    {detail.description}
                  </p>
                  <div className="mt-4">
                    <HiddenCard
                      cardText="Learn More"
                      showCardIconInitial={<Plus className="h-4" />}
                      showCardIconFinal={<Minus className="h-4" />}
                      animationIconClasses="transition-transform duration-300"
                      cardTextClasses="text-md font-bold text-medium-gray"
                    >
                      <div>THIS IS WHERE ALL THE INFORMATION WILL GO </div>
                    </HiddenCard>
                  </div>
                </div>
                <div className="w-full pl-10 bg-light-gray rounded-2xl mt-2 flex items-center justify-center">
                  <img
                    src={`${detail.image}`}
                    alt="Sarah K."
                    className="w-full h-full object-cover border-2 border-white shadow-sm"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Layout - Apple News Grid */}
          <div className="hidden md:grid grid-cols-2 gap-5 max-w-5xl mx-auto bg">
            {/* First Card - Full Width */}
            <div className="col-span-2 bg-white rounded-[18px] shadow-sm overflow-hidden">
              <div className="flex min-h-[460px]">
                <div className="flex-1 p-11 flex flex-col justify-center">
                  <div className="max-w-[310px]">
                    <h3 className="text-2xl font-semibold text-black leading-[25px] tracking-[-0.057px] mb-2">
                      Initial Consultation
                    </h3>
                    <p className="text-lg font-[600]  text-gray-500 leading-[23px] tracking-[-0.057px]">
                      The main goal of the initial consultation is to determine
                      if you are a good candidate for a Dr. Neo hair restoration
                      procedure. The good news is NeoGraft has a proven
                      track-record of delivering excellent hair transplantation
                      results for both men and women of all ethnicities.
                    </p>
                  </div>
                  <div className="mt-4">
                    <HiddenCard
                      cardText="Learn More"
                      showCardIconInitial={<Plus className="h-4" />}
                      showCardIconFinal={<Minus className="h-4" />}
                      animationIconClasses="transition-transform duration-300"
                      cardTextClasses="text-md font-bold text-medium-gray"
                    >
                      <div>THIS IS WHERE ALL THE INFORMATION WILL GO </div>
                    </HiddenCard>
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-center pl-5 pr-11">
                  <div className="w-full max-w-[405px] h-[370px] ounded-2xl flex items-center justify-center">
                    <img
                      src="/assets/fue/initial_consultation_desktop.png"
                      alt="Initial Consultation Inspection Gadget"
                      className="w-full h-full object-contain border-2 border-white shadow-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Second Card - Half Width */}
            <div className="bg-white rounded-[18px] shadow-sm overflow-hidden">
              <div className="flex flex-col min-h-[590px] p-11 gap-5">
                <div className="flex-1">
                  <h3 className="text-2xl font-[600] text-black leading-[25px] tracking-[-0.057px] mb-1">
                    Procedure Day
                  </h3>
                  <p className="text-lg font-semibold leading-[23px] text-gray-500 tracking-[-0.057px] min-w-[327px]  min-h-[200px]">
                    A Dr. Neo physician will be involved in making all of the
                    necessary and important decisions, and will supervise every
                    step of your NeoGraft experience. Certified Dr. Neo
                    technicians will assist the physician performing the
                    procedure.
                  </p>
                  <HiddenCard
                    cardText="Learn More"
                    showCardIconInitial={<Plus className="h-4" />}
                    showCardIconFinal={<Minus className="h-4" />}
                    animationIconClasses="transition-transform duration-300"
                    cardTextClasses="text-md font-bold text-medium-gray"
                  >
                    <div>THIS IS WHERE ALL THE INFORMATION WILL GO </div>
                  </HiddenCard>
                </div>
                <div className="flex justify-center items-end">
                  <div className="w-[243px] h-[337px] rounded-2xl flex items-center justify-center">
                    <img
                      src="/assets/fue/procedure_day.png"
                      alt="Hand Transplanting a hair follicle with Dr.Neo Tweezers"
                      className="w-full h-full object-cover border-2 border-white shadow-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Third Card - Half Width */}
            <div className="bg-white rounded-[18px] shadow-sm overflow-hidden">
              <div className="flex flex-col min-h-[590px] p-11 gap-5">
                <div className="flex-1">
                  <h3 className="text-2xl font-[600] text-black leading-[25px] tracking-[-0.057px] mb-1">
                    Recovery & Regrowth{" "}
                  </h3>
                  <p className="text-lg font-semibold leading-[23px] text-gray-500 tracking-[-0.057px] min-w-[327px]  min-h-[200px]">
                    There's typically very little pain or discomfort after the
                    NeoGraft procedure. You may experience some tenderness
                    around the donor site, but this is a normal part of the
                    healing process and should subside in a few days. You may
                    also experience a slight amount of drainage for the first
                    day after your procedure, but this is minimal.
                  </p>
                  <HiddenCard
                    cardText="Learn More"
                    showCardIconInitial={<Plus className="h-4" />}
                    showCardIconFinal={<Minus className="h-4" />}
                    animationIconClasses="transition-transform duration-300"
                    cardTextClasses="text-md font-bold text-medium-gray"
                  >
                    <div>THIS IS WHERE ALL THE INFORMATION WILL GO </div>
                  </HiddenCard>
                </div>
                <div className="flex justify-center items-end">
                  <div className="w-[243px] h-[337px] rounded-2xl flex items-center justify-center">
                    <img
                      src="/assets/fue/recovery_&_regrowth_desktop.png"
                      alt="Two spray bottles of The Rinse and The Spritz from Dr.Neo"
                      className="w-full h-full object-contain border-2 border-white shadow-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Fourth Card - Full Width */}
            <div className="col-span-2 bg-white rounded-[18px] shadow-sm overflow-hidden">
              <div className="flex min-h-[460px] items-center">
                <div className="flex-1 p-11 flex flex-col justify-center">
                  <div className="max-w-[333px]">
                    <h3 className="text-2xl font-semibold text-black leading-[25px] tracking-[-0.057px] mb-1">
                      Follow-Up Consultation{" "}
                    </h3>
                    <p className="text-lg text-gray-500 font-semibold text-medium-gray leading-[23px] tracking-[-0.057px]">
                      We encourage all of our NeoGraft patients to schedule a
                      follow up consultation to analyze results we achieved and
                      determine if additional sessions would be beneficial.
                    </p>
                    <HiddenCard
                      cardText="Learn More"
                      showCardIconInitial={<Plus className="h-4" />}
                      showCardIconFinal={<Minus className="h-4" />}
                      animationIconClasses="transition-transform duration-300"
                      cardTextClasses="text-md font-bold text-medium-gray"
                    >
                      <div>THIS IS WHERE ALL THE INFORMATION WILL GO </div>
                    </HiddenCard>
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  {/* <div className="w-[134px] h-[177px] flex items-center justify-center">
                    <svg
                      className="w-[134px] h-[177px] text-red-500"
                      viewBox="0 0 135 178"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M61.9712 78.3031C56.7961 78.3031 48.7926 72.4365 40.3492 72.646C34.798 72.7819 29.3785 74.3651 24.6271 77.2388C19.8756 80.1125 15.9569 84.1772 13.2588 89.0306C1.69352 109.103 10.2837 138.75 21.6394 155.072C27.1706 163.013 33.6866 171.834 42.3396 171.666C50.7202 171.31 53.7582 166.26 63.8359 166.26C73.9136 166.26 76.6792 171.666 85.4579 171.457C94.2366 171.247 100.124 163.369 105.529 155.344C109.456 149.606 112.519 143.324 114.622 136.697C109.415 134.483 104.972 130.789 101.844 126.074C98.7155 121.359 97.0394 115.83 97.0231 110.171C96.7927 93.5772 110.495 85.6364 111.124 85.2802C108.397 81.4171 104.815 78.2352 100.658 75.9821C96.5011 73.729 91.8801 72.4655 87.1549 72.2898C76.2392 71.4517 67.1252 78.3031 61.9712 78.3031Z"
                        fill="#F73558"
                      />
                      <mask
                        id="mask0_454_274"
                        style={{ maskType: "luminance" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="135"
                        height="178"
                      >
                        <path
                          d="M41.8574 177.952C29.8312 177.952 21.7439 166.344 16.4013 158.655C9.50243 148.362 4.82173 136.746 2.65706 124.545C0.0800171 109.732 1.79805 96.3013 7.81114 85.8881C11.0655 80.0954 15.7661 75.2457 21.4543 71.8121C27.1424 68.3786 33.6236 66.4786 40.2651 66.2978H40.7889C46.1251 66.574 51.3593 67.8684 56.2093 70.1111C58.0491 70.9636 59.983 71.5965 61.9709 71.9968C63.7748 71.5658 65.5352 70.9696 67.2298 70.2158C72.9146 67.6853 79.0301 66.263 85.2481 66.0254C86.0443 66.0254 86.8404 66.0254 87.6366 66.0254C93.3106 66.2211 98.86 67.7423 103.841 70.4674C108.821 73.1924 113.095 77.0456 116.319 81.7186L120.195 87.4176L114.182 90.8747C110.873 92.9129 108.134 95.7547 106.218 99.1358C104.302 102.517 103.273 106.328 103.225 110.214C103.223 114.593 104.493 118.879 106.881 122.55C109.269 126.221 112.671 129.12 116.675 130.893L122.228 132.737L120.572 138.52C118.3 145.806 114.953 152.713 110.641 159.011C105.278 166.868 97.9448 177.638 85.4995 177.868H84.8919C80.6652 177.801 76.5066 176.791 72.7191 174.914C69.9539 173.446 66.882 172.649 63.7518 172.588C60.4022 172.624 57.1054 173.427 54.1141 174.935C50.4925 176.708 46.5536 177.741 42.5279 177.973L41.8574 177.952ZM134.17 0.780273H0.0800171V176.779H134.17V0.780273Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_454_274)">
                        <path
                          d="M81.4768 90.0368V49.159C81.4559 37.6772 72.1534 28.3745 60.672 28.3535C49.1905 28.3745 39.888 37.6772 39.888 49.159V65.9208"
                          stroke="#F73558"
                          strokeWidth="10.4761"
                          strokeLinecap="round"
                        />
                      </g>
                    </svg>
                  </div> */}
                  <img
                    src="/assets/fue/follow_up_consultation_desktop.png"
                    alt="Ipad image showing follow up consultation  "
                    className="w-full h-full object-contain border-2 border-white shadow-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
