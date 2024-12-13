"use client";

import { ChevronRight } from "lucide-react";
import { HStack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { fadeInUpVariants } from "./animations";

interface SystemCTAProps {
  includeBattery: boolean;
  setActiveTab: (tab: string) => void;
  setIncludeBattery: (value: boolean) => void;
  onProceed: () => void;
}

export function SystemCTA({ includeBattery, setActiveTab, setIncludeBattery, onProceed }: SystemCTAProps) {
  return (
    <motion.div variants={fadeInUpVariants} className="rounded-lg p-8 pb-0 text-center">
      <h3 className="text-2xl font-bold text-main dark:text-blue-50 mb-4">Ready to Get Exact Numbers?</h3>
      <p className="text-main/70 dark:text-blue-50/70 mb-6 max-w-2xl mx-auto">
        Compare quotes from vetted local installers who will provide detailed assessments and final system designs specific to your home.
      </p>
      <div className="flex flex-col items-center space-y-6">
        {/* {!includeBattery && (
          <button
            onClick={() => {
              setActiveTab("battery");
              setIncludeBattery(true);
            }}
            className="w-full sm:1/3 bg-white/10 hover:bg-white/20 text-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Add Battery Storage
          </button>
        )} */}
        <div className="w-200px fixed bottom-8 bg-white dark:bg-[#121212] p-4 rounded-full z-10">
          <button className="w-200px bg-blue-500 hover:bg-blue-400 text-[#121212] px-8 py-3 rounded-full font-semibold transition-colors" onClick={onProceed}>
            <HStack w="full" justifyContent="center">
              <Text color="white">Compare Installation Partners</Text>
              <ChevronRight color="white" />
            </HStack>
          </button>
        </div>
        {/* <p className="text-sm text-main dark:text-blue-50/50">No commitment required • Free consultation • Best price guaranteed</p> */}
      </div>
    </motion.div>
  );
}
