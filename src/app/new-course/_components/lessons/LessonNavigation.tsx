"use client";

import { useRouter } from "next/navigation";
import { useCourse } from "@/providers/NewCourseProvider";
import { Lesson } from "@/app/new-course/_types/course";
import { getNextLesson } from "@/app/new-course/data/courseStructure";

interface LessonNavigationProps {
  moduleSlug: string;
  currentLesson: Lesson;
  lessonIndex: number;
  totalLessons: number;
}

export function LessonNavigation({ moduleSlug, currentLesson, lessonIndex, totalLessons }: LessonNavigationProps) {
  const router = useRouter();
  const { completeLesson } = useCourse();
  const isLastLesson = lessonIndex === totalLessons - 1;

  const handleNext = () => {
    // Mark current lesson as complete
    completeLesson(moduleSlug, currentLesson.slug);

    if (isLastLesson) {
      // Navigate to quiz
      router.push(`/new-course/${moduleSlug}/quiz`);
    } else {
      // Navigate to next lesson
      const next = getNextLesson(moduleSlug, currentLesson.slug);
      if (next) {
        router.push(`/new-course/${next.moduleSlug}/${next.lessonSlug}`);
      }
    }
  };

  return (
    <div className="fixed bottom-8 right-8">
      <button onClick={handleNext} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition-colors">
        {isLastLesson ? "Continue to Quiz" : "Next Lesson"}
      </button>
    </div>
  );
}
