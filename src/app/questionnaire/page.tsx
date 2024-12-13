"use client";

import { AnimatePresence, motion } from "framer-motion";
import { questions } from "@/data/questions";
import { ProgressBar } from "@/app/questionnaire/_components/ProgressBar";
import { QuestionOption } from "@/app/questionnaire/_components/QuestionOption";
import { useQuestionnaireState } from "@/hooks/useQuestionnaireState";
import { Navigation } from "@/app/questionnaire/_components/Navigation";
import Navbar from "../components/Navbar";

export default function QuestionnairePage() {
  const { currentQuestionIndex, answers, direction, handleAnswer, nextQuestion, previousQuestion } = useQuestionnaireState();

  const currentQuestion = questions[currentQuestionIndex];

  if ("isCustomQuestion" in currentQuestion) {
    const CustomComponent = currentQuestion.component;
    return <CustomComponent onPrevious={previousQuestion} />;
  }

  return (
    <section className="min-h-screen flex items-center px-4 py-40">
      <Navbar />
      <div className="max-w-6xl mx-auto w-full">
        <ProgressBar currentIndex={currentQuestionIndex} total={questions.length} />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            initial={{ x: direction > 0 ? 1000 : -1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction < 0 ? 1000 : -1000, opacity: 0 }}
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-bold text-main dark:text-blue-50 mb-4">{currentQuestion.question}</h2>
              <p className="text-main dark:text-blue-50/70">{currentQuestion.description}</p>
            </div>

            <div className="space-y-4">
              {currentQuestion.options.map((option) => (
                <QuestionOption key={option.id} option={option} isSelected={answers[currentQuestion.id] === option.id} onSelect={(id) => handleAnswer(currentQuestion.id, id)} />
              ))}
            </div>

            <Navigation showPrevious={currentQuestionIndex > 0} canContinue={!!answers[currentQuestion.id]} onPrevious={previousQuestion} onNext={nextQuestion} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
