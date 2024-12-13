"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { CourseProgress, CourseContextType } from "@/app/new-course/_types/course";
import { courseStructure } from "@/app/new-course/data/courseStructure";

const CourseContext = createContext<CourseContextType | undefined>(undefined);

// Initialize empty progress state
const initialProgress: CourseProgress = {
  completedLessons: {},
  completedQuizzes: [],
  certificateEarned: false,
};

export function CourseProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<CourseProgress>(() => {
    // Load progress from localStorage during initialization
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("courseProgress");
      if (saved) {
        return JSON.parse(saved);
      }
    }
    return initialProgress;
  });

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("courseProgress", JSON.stringify(progress));
    }
  }, [progress]);

  // Calculate total course progress as a percentage
  const calculateProgress = (): number => {
    let totalItems = 0;
    let completedItems = 0;

    courseStructure.forEach((module) => {
      // Count lessons
      totalItems += module.lessons.length;
      module.lessons.forEach((lesson) => {
        const lessonKey = `${module.slug}/${lesson.slug}`;
        if (progress.completedLessons[lessonKey]) {
          completedItems++;
        }
      });

      // Count quiz
      totalItems++; // Add 1 for the quiz
      if (progress.completedQuizzes.includes(module.slug)) {
        completedItems++;
      }
    });

    return (completedItems / totalItems) * 100;
  };

  // Check if user can take certificate
  const canTakeCertificate = (): boolean => {
    // Must complete all lessons and quizzes
    for (const module of courseStructure) {
      // Check if all lessons in this module are completed
      const allLessonsComplete = module.lessons.every((lesson) => progress.completedLessons[`${module.slug}/${lesson.slug}`]);

      // Check if quiz is completed
      const quizComplete = progress.completedQuizzes.includes(module.slug);

      if (!allLessonsComplete || !quizComplete) {
        return false;
      }
    }
    return true;
  };

  const completeLesson = (moduleSlug: string, lessonSlug: string) => {
    setProgress((prev) => ({
      ...prev,
      completedLessons: {
        ...prev.completedLessons,
        [`${moduleSlug}/${lessonSlug}`]: true,
      },
    }));
  };

  const completeQuiz = (moduleSlug: string) => {
    setProgress((prev) => ({
      ...prev,
      completedQuizzes: [...prev.completedQuizzes, moduleSlug],
    }));
  };

  const earnCertificate = () => {
    if (canTakeCertificate()) {
      setProgress((prev) => ({
        ...prev,
        certificateEarned: true,
      }));
    }
  };

  const value: CourseContextType = {
    progress,
    completeLesson,
    completeQuiz,
    earnCertificate,
    calculateProgress,
    canTakeCertificate,
  };

  return <CourseContext.Provider value={value}>{children}</CourseContext.Provider>;
}

// Custom hook for using course context
export function useCourse() {
  const context = useContext(CourseContext);
  if (context === undefined) {
    throw new Error("useCourse must be used within a CourseProvider");
  }
  return context;
}
