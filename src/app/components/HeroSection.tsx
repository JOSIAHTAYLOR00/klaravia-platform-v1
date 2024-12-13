import { HStack } from "@chakra-ui/react";
import { Zap } from "lucide-react";

export function HeroSection() {
  return (
    <div className="text-center mb-10">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-8 dark:text-white/70 text-main">
        Stop paying your electric bill{" "}
        <span className="inline-flex">
          <Zap size="32" className="text-amber-500" />
        </span>{" "}
      </h1>
      <p className="text-md md:text-xl text-[#2d3748] dark:text-gray-400 max-w-2xl mx-auto">
        Design, compare, and purchase your perfect solar system online. Save up to <span className="text-amber-500/90 text-lg md:text-2xl font-bold">45%</span> on installation with
        no salespeople involved.
      </p>
    </div>
  );
}
