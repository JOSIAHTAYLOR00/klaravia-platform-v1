"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useCourse } from "@/providers/NewCourseProvider";
import { redirect } from "next/navigation";
import { Download, Award, Share2 } from "lucide-react";
import confetti from "canvas-confetti";

export default function Certificate() {
  const { canTakeCertificate, earnCertificate, progress } = useCourse();
  const [certificateDate] = useState(new Date().toLocaleDateString());
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (!canTakeCertificate()) {
      redirect("/new-course");
    }

    if (!progress.certificateEarned) {
      earnCertificate();
      setShowConfetti(true);
    }
  }, [canTakeCertificate, earnCertificate, progress.certificateEarned]);

  useEffect(() => {
    if (showConfetti) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, [showConfetti]);

  const handleDownload = () => {
    // In a real implementation, this would generate and download a PDF
    alert("Certificate download would start here");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "My Solar Expert Certificate",
          text: "I just completed the Klaravia Solar Expert Course!",
          url: window.location.href,
        })
        .catch(console.error);
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center py-12">
      {/* Certificate Header */}
      <div className="mb-12">
        <div className="w-20 h-20 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
          <Award className="w-10 h-10 text-blue-600 dark:text-blue-400" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Congratulations!</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">You are now a certified Solar Expert</p>
      </div>

      {/* Certificate Display */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-8 mb-8 mx-auto max-w-2xl">
        <div className="border-4 border-blue-600 dark:border-blue-500 p-8 rounded-lg">
          <div className="text-center">
            <h2 className="text-2xl font-serif text-gray-900 dark:text-white mb-2">Certificate of Completion</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">This certifies that</p>
            <p className="text-xl font-semibold text-gray-900 dark:text-white mb-8">[Student Name]</p>
            <p className="text-gray-600 dark:text-gray-400 mb-8">has successfully completed the</p>
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-8">Solar Expert Course</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Awarded on {certificateDate}</p>
            <div className="flex justify-center space-x-4">
              <img src="/klaravia-signature.png" alt="Klaravia Signature" className="h-12" />
              <img src="/klaravia-seal.png" alt="Klaravia Seal" className="h-12" />
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4">
        <button onClick={handleDownload} className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
          <Download className="w-5 h-5" />
          Download Certificate
        </button>
        <button
          onClick={handleShare}
          className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg transition-colors"
        >
          <Share2 className="w-5 h-5" />
          Share Achievement
        </button>
      </div>
    </motion.div>
  );
}
