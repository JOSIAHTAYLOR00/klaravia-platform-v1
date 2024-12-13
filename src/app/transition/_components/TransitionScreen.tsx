"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle, Sparkles, ClipboardCheck, MessageSquare, ChevronRight } from "lucide-react";

interface Step {
  title: string;
  description: string;
  icon: JSX.Element;
}

export const TransitionScreen = () => {
  const [showFeatures, setShowFeatures] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter();

  const steps: Step[] = [
    {
      title: "Track Your Progress",
      description: "Monitor every step of your solar installation journey in real-time.",
      icon: <ClipboardCheck className="w-12 h-12 text-blue-400" />,
    },
    {
      title: "Document Center",
      description: "Access and manage all your project documents in one secure location.",
      icon: <Sparkles className="w-12 h-12 text-amber-500" />,
    },
    {
      title: "24/7 Support",
      description: "Connect with our dedicated support team whenever you need assistance.",
      icon: <MessageSquare className="w-12 h-12 text-purple-400" />,
    },
  ];

  useEffect(() => {
    if (showFeatures) {
      const timer = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev === steps.length - 1) {
            clearInterval(timer);
            // Wait for the last animation to complete before routing
            setTimeout(() => router.push("/user-dash"), 3000);
            return prev;
          }
          return prev + 1;
        });
      }, 4000);

      return () => clearInterval(timer);
    }
  }, [showFeatures, steps.length, router]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-lg w-full">
        <AnimatePresence mode="wait">
          {!showFeatures ? (
            // Welcome Content
            <motion.div
              key="welcome"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center"
            >
              <div className="inline-block p-4 rounded-full bg-green-500/10 mb-6">
                <CheckCircle className="w-12 h-12 text-green-500" />
              </div>
              <h1 className="text-3xl font-bold text-main dark:text-blue-50 mb-4">You're All Set!</h1>
              <p className="text-main/70 dark:text-blue-50/70 text-lg mb-12">
                We've received your electric bill and our team will start working on your project. Now, let's introduce you to your personal customer portal where you'll manage
                your solar journey.
              </p>
              <motion.button
                onClick={() => setShowFeatures(true)}
                className="w-full py-4 mt-24 bg-amber-500 text-main dark:text-[#121212] rounded-lg font-semibold hover:bg-amber-400 transition-colors flex items-center justify-center group"
              >
                Learn About Your Portal
                <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </motion.div>
          ) : (
            // Feature Content
            <motion.div
              key="features"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-surface-layer-5 dark:bg-surface-dark-layer-5 rounded-xl p-8"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="text-center space-y-6"
                >
                  <motion.div
                    className="inline-block p-4 rounded-full bg-surface-layer-5 dark:bg-surface-dark-layer-5"
                    initial={{ rotate: -180, scale: 0.5 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  >
                    {steps[currentStep].icon}
                  </motion.div>

                  <motion.h2
                    className="text-2xl font-bold text-main dark:text-blue-50"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    {steps[currentStep].title}
                  </motion.h2>

                  <motion.p
                    className="text-main/70 dark:text-blue-50/70 text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    {steps[currentStep].description}
                  </motion.p>

                  <div className="flex justify-center mt-4 space-x-2">
                    {steps.map((_, index) => (
                      <div
                        key={index}
                        className={`h-2 w-2 rounded-full transition-colors duration-700 ${
                          index === currentStep ? "bg-amber-500" : "bg-surface-layer-20 dark:bg-surface-dark-layer-20"
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
              <motion.button
                onClick={() => router.push("/user-dash")}
                className="w-full mt-12 py-4 bg-amber-500 text-main dark:text-[#121212] rounded-lg font-semibold hover:bg-amber-400 transition-colors flex items-center justify-center group"
              >
                Skip Intro
                <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
