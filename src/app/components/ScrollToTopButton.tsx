import React from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTopButton = ({ onScrollToTop }: { onScrollToTop: () => void }) => {
  const scrollToTop = () => {
    const container = document.querySelector(".scroll-container");
    if (container) {
      container?.querySelector("section")?.scrollIntoView({ behavior: "smooth" });
      onScrollToTop(); // Call the prop function to update the index
    }
  };

  return (
    <button className="fixed bottom-8 right-8 border-2 border-amber-500 bg-[#121212] text-white p-3 rounded-xl shadow-lg z-50" onClick={scrollToTop} aria-label="Scroll to top">
      <div className="flex">
        <ChevronUp className="w-6 h-6 mr-2" />
        Scroll Top
      </div>
    </button>
  );
};

export default ScrollToTopButton;
