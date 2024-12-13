"use client";

import { useState, useEffect } from "react";
import { lessons } from "./courseData";
import { BookOpen, Lightbulb, ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import Image from "next/image";
import { useColorMode } from "@chakra-ui/react";
import Link from "next/link";

export function Solar101Course() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const progress = ((currentLesson + 1) / lessons.length) * 100;
  const { colorMode } = useColorMode();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentLesson]);

  const nextLesson = () => {
    if (currentLesson < lessons.length - 1) {
      setCurrentLesson(currentLesson + 1);
    }
  };

  const prevLesson = () => {
    if (currentLesson > 0) {
      setCurrentLesson(currentLesson - 1);
    }
  };

  // ... rest of your component code, but using Next.js Image component
  return (
    <div className="min-h-screen text-main dark:text-gray-100 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <Image width="60" height="60" src={colorMode === "dark" ? "/logo-light.svg" : "/logo.png"} alt="Solar 101 Logo" />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold font-['eurostile']">Solar 101</h1>
              <p className="text-main dark:text-gray-400 text-sm">Your journey to solar mastery</p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-yellow-500 font-bold">
              Lesson {currentLesson + 1} of {lessons.length}
            </span>
            <div className="flex items-center space-x-1 text-main dark:text-gray-400 text-sm">
              <BookOpen className="w-4 h-4" />
              <span>{Math.round((currentLesson / lessons.length) * 100) + 20}% Complete</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="relative h-2 bg-surface-layer-10 dark:bg-surface-dark-layer-10 rounded-3xl mb-8 overflow-hidden">
          <div className="absolute h-full bg-gradient-to-r from-yellow-500 to-orange-500 transition-all duration-500 ease-out rounded-3xl" style={{ width: `${progress}%` }} />
        </div>

        <div className="bg-white/5 rounded-xl p-6 md:p-8 mb-8 backdrop-blur-sm">
          <div className="flex items-center space-x-2 mb-6">
            <Lightbulb className="w-6 h-6 text-yellow-500" />
            <h2 className="text-xl md:text-2xl font-bold">{lessons[currentLesson].title}</h2>
          </div>

          <div className="prose prose-invert max-w-none mb-8">{lessons[currentLesson].content}</div>

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-4 border-t border-gray-700">
            <button
              onClick={prevLesson}
              disabled={currentLesson === 0}
              className="flex items-center px-4 py-2 rounded-lg bg-gray-700 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Previous
            </button>
            <button
              onClick={nextLesson}
              disabled={currentLesson === lessons.length - 1}
              className="flex items-center px-4 py-2 rounded-lg bg-yellow-500 text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-yellow-400 transition-colors"
            >
              Next
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-main dark:text-gray-300">Ready to Start Your Solar Journey?</h3>
            <p className="text-main/80 dark:text-gray-400">Take the next step towards energy independence</p>
          </div>

          <div className="space-y-4">
            <button className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Get Started Now
            </button>

            <Link href="https://calendly.com/klaravia-support/30min" className="flex items-center justify-center space-x-2 text-yellow-500 hover:text-yellow-400 transition-colors">
              <Calendar className="w-4 h-4" />
              <span>Schedule a Free Consultation</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
