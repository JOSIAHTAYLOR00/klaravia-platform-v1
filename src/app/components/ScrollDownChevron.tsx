import React from "react";
import { ChevronDown } from "lucide-react";

const ScrollDownChevron = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="absolute hidden md:block bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer hover:text-blue/75 transition-colors duration-300"
      aria-label="Scroll to next section"
    >
      <ChevronDown className="w-12 h-12 animate-bounce" />
    </button>
  );
};

export default ScrollDownChevron;
