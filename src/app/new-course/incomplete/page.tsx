"use client";

import { motion } from "framer-motion";
import { useCourse } from "@/providers/NewCourseProvider";
import { courseStructure } from "@/app/new-course/data/courseStructure";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CourseIncomplete() {
  const { progress } = useCourse();

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Complete Your Solar Expert Journey</h1>
        <p className="text-gray-600 dark:text-gray-400">You're on your way to becoming a solar expert! Complete the remaining quizzes to earn your certificate.</p>
      </div>

      <div className="space-y-6">
        {courseStructure.map((module) => {
          const isQuizComplete = progress.completedQuizzes.includes(module.slug);
          const allLessonsComplete = module.lessons.every((lesson) => progress.completedLessons[`${module.slug}/${lesson.slug}`]);

          return (
            <div key={module.slug} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{module.title}</h2>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                      <span className="flex items-center gap-2">
                        {allLessonsComplete ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <XCircle className="w-4 h-4 text-gray-400" />}
                        Lessons
                      </span>
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                      <span className="flex items-center gap-2">
                        {isQuizComplete ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <XCircle className="w-4 h-4 text-gray-400" />}
                        Module Quiz
                      </span>
                    </p>
                  </div>
                </div>

                {!isQuizComplete && allLessonsComplete && (
                  <Link
                    href={`/new-course/${module.slug}/quiz`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    Take Quiz
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}

                {!allLessonsComplete && (
                  <Link
                    href={`/new-course/${module.slug}/${module.lessons[0].slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg transition-colors"
                  >
                    Continue Lessons
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>

              <div className="mt-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Module Progress</h3>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <div
                    className="h-full bg-blue-600 rounded-full transition-all duration-300"
                    style={{
                      width: `${((progress.completedLessons[`${module.slug}/lesson-1`] ? 1 : 0) + (isQuizComplete ? 1 : 0)) * 50}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 text-center text-gray-600 dark:text-gray-400">
        <p>Complete all lessons and quizzes to unlock your Solar Expert Certificate!</p>
      </div>
    </motion.div>
  );
}
