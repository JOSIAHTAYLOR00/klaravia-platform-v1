import { Metadata } from "next";
import { getModuleBySlug } from "@/app/new-course/data/courseStructure";
import QuizContent from "@/app/new-course/_components/quiz/QuizContent";
import { notFound } from "next/navigation";

interface Props {
  params: {
    moduleSlug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const module = getModuleBySlug(params.moduleSlug);

  if (!module) {
    return {
      title: "Quiz Not Found",
    };
  }

  return {
    title: `${module.title} Quiz | Solar Expert Course`,
    description: `Test your knowledge of ${module.title}`,
  };
}

export default function QuizPage({ params }: Props) {
  const module = getModuleBySlug(params.moduleSlug);

  if (!module) {
    notFound();
  }

  return <QuizContent module={module} />;
}
