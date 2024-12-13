"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { courseStructure } from "../app/course/_components/courseStructure";

type ModuleKey = string;

interface CourseContextValue {
  completedLessons: Record<ModuleKey, boolean[]>;
  completeLesson: (module: ModuleKey, lessonIndex: number) => void;
  completedQuizzes: Record<ModuleKey, boolean>;
  completeQuiz: (module: ModuleKey) => void;
  progress: number;
  totalLessons: number;
  completedCount: number;
}

const CourseContext = createContext<CourseContextValue | undefined>(undefined);

export function useCourseProgress() {
  const ctx = useContext(CourseContext);
  if (!ctx) {
    throw new Error("useCourseProgress must be used within CourseProvider");
  }
  return ctx;
}

export function CourseProvider({ children }: { children: React.ReactNode }) {
  // Initialize completedLessons and completedQuizzes based on course structure
  const initialLessonsState: Record<ModuleKey, boolean[]> = {};
  const initialQuizzesState: Record<ModuleKey, boolean> = {};

  let totalLessons = 0;

  for (const mod of courseStructure) {
    initialLessonsState[mod.key] = mod.lessons.map(() => false);
    initialQuizzesState[mod.key] = false;
    totalLessons += mod.lessons.length + 1; // Counting the quiz as a lesson
  }

  // Load from localStorage at initialization
  const [completedLessons, setCompletedLessons] = useState<Record<ModuleKey, boolean[]>>(() => {
    if (typeof window !== "undefined") {
      const storedLessons = localStorage.getItem("courseLessons");
      if (storedLessons) {
        return JSON.parse(storedLessons);
      }
    }
    return initialLessonsState;
  });

  const [completedQuizzes, setCompletedQuizzes] = useState<Record<ModuleKey, boolean>>(() => {
    if (typeof window !== "undefined") {
      const storedQuizzes = localStorage.getItem("courseQuizzes");
      if (storedQuizzes) {
        return JSON.parse(storedQuizzes);
      }
    }
    return initialQuizzesState;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("courseLessons", JSON.stringify(completedLessons));
    }
  }, [completedLessons]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("courseQuizzes", JSON.stringify(completedQuizzes));
    }
  }, [completedQuizzes]);

  const completeLesson = (module: ModuleKey, lessonIndex: number) => {
    setCompletedLessons((prev) => {
      const updated = { ...prev };
      updated[module] = [...updated[module]];
      updated[module][lessonIndex] = true;
      return updated;
    });
  };

  const completeQuiz = (module: ModuleKey) => {
    setCompletedQuizzes((prev) => ({ ...prev, [module]: true }));
  };

  // Compute progress:
  let completedCount = 0;
  for (const mod of courseStructure) {
    const modLessons = completedLessons[mod.key] || [];
    completedCount += modLessons.filter(Boolean).length;
    if (completedQuizzes[mod.key]) {
      completedCount += 1;
    }
  }

  const progress = (completedCount / totalLessons) * 100;

  const value: CourseContextValue = {
    completedLessons,
    completeLesson,
    completedQuizzes,
    completeQuiz,
    progress,
    totalLessons,
    completedCount,
  };

  return <CourseContext.Provider value={value}>{children}</CourseContext.Provider>;
}
