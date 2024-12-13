"use client";

import { useMemo } from "react";
import { Module, Lesson } from "@/app/new-course/_types/course";
import { LessonNavigation } from "./LessonNavigation";
import { useCourse } from "@/providers/NewCourseProvider";
import { motion } from "framer-motion";

interface LessonContentProps {
  module: Module;
  lesson: Lesson;
}

export default function LessonContent({ module, lesson }: LessonContentProps) {
  const { progress } = useCourse();

  // Get the lesson index for progress tracking
  const lessonIndex = useMemo(() => {
    return module.lessons.findIndex((l) => l.slug === lesson.slug);
  }, [module, lesson]);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="space-y-8">
      {/* Module Title */}
      <div className="border-b border-gray-200 dark:border-gray-800 pb-4">
        <h1 className="text-sm font-medium text-gray-500 dark:text-gray-400">{module.title}</h1>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-1">{lesson.title}</h2>
      </div>

      {/* Lesson Content */}
      <div className="prose dark:prose-invert max-w-none">
        {lesson.content.map((section, index) => {
          switch (section.type) {
            case "text":
              return (
                <p key={index} className="text-gray-700 dark:text-gray-300 leading-relaxed pb-6">
                  {section.body}
                </p>
              );
            case "heading":
              return (
                <h3 key={index} className="text-xl font-semibold text-gray-900 dark:text-white">
                  {section.body}
                </h3>
              );
            case "subheading":
              return (
                <h4 key={index} className="text-lg font-medium text-gray-700 dark:text-gray-300">
                  {section.body}
                </h4>
              );
            case "callout":
              return (
                <div key={index} className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg p-4 my-4">
                  {section.title && <h3 className="text-blue-900 dark:text-blue-100 font-semibold mb-2">{section.title}</h3>}
                  <p className="text-blue-800 dark:text-blue-200">{section.body}</p>
                </div>
              );
            case "list":
              return (
                <div key={index} className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 pt-0 my-4">
                  {section.title && <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{section.title}</h3>}
                  <ul className="space-y-2">
                    {section?.body?.split(",").map((item, i) => (
                      <li key={i} className="text-gray-700 dark:text-gray-300">
                        • {item.trim()}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            case "image":
              return (
                <div key={index} className="my-4">
                  <img src={section.url} alt={section.description || ""} className="rounded-lg shadow-md" />
                  {section.description && <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{section.description}</p>}
                </div>
              );
            case "code":
              return (
                <pre key={index} className="bg-gray-800 text-gray-100 rounded-md p-4 my-4 overflow-x-auto">
                  <code>{section.body}</code>
                </pre>
              );
            case "quote":
              return (
                <blockquote key={index} className="border-l-4 border-blue-500 pl-4 italic text-gray-700 dark:text-gray-300 my-4">
                  {section.body}
                </blockquote>
              );
            case "divider":
              return <hr key={index} className="border-gray-300 dark:border-gray-700 my-6" />;
            default:
              return null;
          }
        })}
      </div>

      {/* Navigation */}
      <LessonNavigation moduleSlug={module.slug} currentLesson={lesson} lessonIndex={lessonIndex} totalLessons={module.lessons.length} />
    </motion.div>
  );
}
