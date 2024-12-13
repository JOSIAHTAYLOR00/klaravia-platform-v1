"use client";

import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export function BeginButton() {
  const router = useRouter();

  return (
    <div>
      <motion.button
        onClick={() => router.push("/questionnaire")}
        className="bg-amber-500 hover:bg-amber-400 text-[#121212] px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center transition-colors"
        whileHover={{ x: 8, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Begin Assessment
        <ChevronRight className="ml-2 w-5 h-5" />
      </motion.button>
      <p className="text-blue-50/60 text-sm mt-4">Takes about 2 minutes • 4 simple questions</p>
    </div>
  );
}
