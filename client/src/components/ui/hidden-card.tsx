import { useState, useEffect } from "react";

const HiddenCard = ({
  children,
  cardText,
  showCardIconInitial,
  showCardIconFinal,
  animationIconClasses,
  cardTextClasses,
}: any) => {
  const [showCard, setShowCard] = useState(false);
  return (
    <div>
      <div
        className="flex flex-row items-center"
        onClick={() => setShowCard(!showCard)}
      >
        <p className={`${cardTextClasses} font-400 text-[#A87B23]`}>
          {cardText}{" "}
        </p>
        <button
          className={`transition-transform duration-300 ${showCard ? "rotate-180" : "rotate-0 "} ont-400 text-[#A87B23] flex flex-row items-center`}
        >
          {showCard ? showCardIconFinal : showCardIconInitial}
        </button>
      </div>
      <div
        className={`${showCard ? "opacity-100 block" : "opacity-0 hidden"} 
      animate 
      `}
      >
        {children}
      </div>
    </div>
  );
};

export default HiddenCard;
