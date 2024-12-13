"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCourse } from "@/providers/NewCourseProvider";
import { courseStructure } from "../data/courseStructure";
import { CheckCircle2, ChevronRight, GraduationCap, BookOpen, ChevronDown } from "lucide-react";
import { cn } from "@/app/new-course/_utils/cn";

export default function CourseSidebar() {
  const pathname = usePathname();
  const { progress, calculateProgress } = useCourse();
  const totalProgress = calculateProgress();
  const [openModules, setOpenModules] = useState<string[]>([]);

  // Handle initial state and pathname changes
  useEffect(() => {
    if (pathname) {
      const currentModule = courseStructure.find((module) => pathname.includes(module.slug));
      if (currentModule) {
        setOpenModules([currentModule.slug]);
      }
    }
  }, [pathname]);

  const toggleModule = (moduleSlug: string) => {
    setOpenModules(
      (prev) => (prev.includes(moduleSlug) ? prev.filter((slug) => slug !== moduleSlug) : [moduleSlug]) // Only allow one module open at a time
    );
  };

  return (
    <div className="h-full bg-white dark:bg-gray-900 py-6 md:py-24">
      {/* Course Header */}
      <div className="px-6 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
            <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h1 className="font-semibold text-gray-900 dark:text-white">Solar Expert Course</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">by Klaravia</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600 dark:text-gray-400">Course Progress</span>
            <span className="font-medium text-blue-600 dark:text-blue-400">{Math.round(totalProgress)}%</span>
          </div>
          <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-blue-600 dark:bg-blue-400 transition-all duration-500" style={{ width: `${totalProgress}%` }} />
          </div>
        </div>
      </div>

      {/* Module List */}
      <nav className="px-2 space-y-1">
        {courseStructure.map((module) => {
          const isModuleComplete = module.lessons.every((lesson) => progress.completedLessons[`${module.slug}/${lesson.slug}`]) && progress.completedQuizzes.includes(module.slug);
          const isOpen = openModules.includes(module.slug);
          const isActive = pathname?.includes(module.slug);

          return (
            <div key={module.slug} className="space-y-1">
              {/* Module Header - Now Clickable */}
              <button
                onClick={() => toggleModule(module.slug)}
                className={cn(
                  "w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                  isActive ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800",
                  isModuleComplete && "text-green-600 dark:text-green-400"
                )}
              >
                <span>{module.title}</span>
                <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", isOpen ? "transform rotate-180" : "transform rotate-0")} />
              </button>

              {/* Collapsible Content */}
              <div className={cn("space-y-1 transition-all duration-200 overflow-hidden", isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0")}>
                {/* Lessons */}
                {module.lessons.map((lesson) => {
                  const isComplete = progress.completedLessons[`${module.slug}/${lesson.slug}`];
                  const isLessonActive = pathname === `/new-course/${module.slug}/${lesson.slug}`;

                  return (
                    <Link
                      key={lesson.slug}
                      href={`/new-course/${module.slug}/${lesson.slug}`}
                      className={cn(
                        "flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-colors ml-2",
                        isLessonActive
                          ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800",
                        isComplete && "text-green-600 dark:text-green-400"
                      )}
                    >
                      {isComplete ? <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" /> : <BookOpen className="w-4 h-4" />}
                      <span>{lesson.title}</span>
                    </Link>
                  );
                })}

                {/* Quiz Link */}
                <Link
                  href={`/new-course/${module.slug}/quiz`}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-colors ml-2",
                    progress.completedQuizzes.includes(module.slug)
                      ? "text-green-600 dark:text-green-400"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                  )}
                >
                  {progress.completedQuizzes.includes(module.slug) ? <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" /> : <ChevronRight className="w-4 h-4" />}
                  <span>Module Quiz</span>
                </Link>
              </div>
            </div>
          );
        })}
      </nav>
    </div>
  );
}
