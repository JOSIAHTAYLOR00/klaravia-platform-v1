// app/new-course/completion/page.tsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useCourse } from "@/providers/NewCourseProvider";
import { redirect } from "next/navigation";
import { Award, Share2, Sun } from "lucide-react";
import confetti from "canvas-confetti";

export default function Completion() {
  const { canTakeCertificate, progress } = useCourse();
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (!canTakeCertificate()) {
      redirect("/new-course");
    }

    setShowConfetti(true);
  }, [canTakeCertificate]);

  useEffect(() => {
    if (showConfetti) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, [showConfetti]);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Solar Expert Course Completed!",
          text: "I just completed the Solar Expert Course and I'm ready to make an informed decision about solar power!",
          url: window.location.href,
        })
        .catch(console.error);
    }
  };

  const handleGetSolar = () => {
    window.location.href = "/"; // Replace with actual URL
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center py-12">
      {/* Completion Header */}
      <div className="mb-12">
        <div className="w-20 h-20 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
          <Award className="w-10 h-10 text-blue-600 dark:text-blue-400" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Congratulations!</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">You're now equipped to make an informed solar decision</p>
      </div>

      {/* Achievement Message */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-8 mb-8 mx-auto max-w-2xl">
        <div className="space-y-6 text-left">
          <div className="flex items-center gap-3 mb-4">
            <Sun className="w-6 h-6 text-yellow-500" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Your Solar Journey Starts Here</h2>
          </div>

          <p className="text-gray-600 dark:text-gray-400">You've mastered the essentials of residential solar power, including:</p>

          <ul className="space-y-3 text-gray-600 dark:text-gray-400">
            <li className="flex items-center gap-2">• Understanding solar technology and how it works</li>
            <li className="flex items-center gap-2">• Evaluating your home's solar potential</li>
            <li className="flex items-center gap-2">• Making informed financial decisions</li>
            <li className="flex items-center gap-2">• Choosing the right equipment and installers</li>
          </ul>

          <p className="text-gray-600 dark:text-gray-400">
            You now have the knowledge to confidently move forward with your solar investment and start saving on your energy bills while contributing to a sustainable future.
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4">
        <button
          onClick={handleShare}
          className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg transition-colors"
        >
          <Share2 className="w-5 h-5" />
          Share Achievement
        </button>
        <button onClick={handleGetSolar} className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
          Shop Solar
        </button>
      </div>
    </motion.div>
  );
}
