import { Metadata } from "next";
import { getModuleBySlug, getLessonBySlug } from "@/app/new-course/data/courseStructure";
import LessonContent from "@/app/new-course/_components/lessons/LessonContent";
import { notFound } from "next/navigation";

interface Props {
  params: {
    moduleSlug: string;
    lessonSlug: string;
  };
}

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const module = getModuleBySlug(params.moduleSlug);
  const lesson = module ? getLessonBySlug(params.moduleSlug, params.lessonSlug) : null;

  if (!module || !lesson) {
    return {
      title: "Lesson Not Found",
    };
  }

  return {
    title: `${lesson.title} - ${module.title} | Solar Expert Course`,
    description: lesson.description,
    keywords: lesson.keywords,
  };
}

export default function LessonPage({ params }: Props) {
  const module = getModuleBySlug(params.moduleSlug);
  const lesson = module ? getLessonBySlug(params.moduleSlug, params.lessonSlug) : null;

  if (!module || !lesson) {
    notFound();
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] py-24 px-4 lg:px-12">
      <LessonContent module={module} lesson={lesson} />
    </div>
  );
}
