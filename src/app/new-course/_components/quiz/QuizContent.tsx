"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useCourse } from "@/providers/NewCourseProvider";
import { Module } from "@/app/new-course/_types/course";
import { getNextModule } from "@/app/new-course/data/courseStructure";
import { CheckCircle2, AlertCircle } from "lucide-react";

type Feedback = {
  correct: string;
  incorrect: string;
};

interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  feedback: Feedback;
}

// This would normally come from your data layer
const getQuizQuestions = (moduleSlug: string): QuizQuestion[] => {
  // Example questions for solar basics
  if (moduleSlug === "solar-basics") {
    return [
      {
        question: "What type of electricity do solar panels produce?",
        options: ["Alternating Current (AC)", "Direct Current (DC)", "Both AC and DC", "Neither AC nor DC"],
        correctIndex: 1,
        feedback: {
          correct: "Correct! Solar panels produce DC electricity which must then be converted to AC by an inverter for home use.",
          incorrect: "Solar panels produce Direct Current (DC) electricity. This is why an inverter is needed to convert it to AC for home use.",
        },
      },
      {
        question: "Which component is often referred to as the 'brain' of a solar system?",
        options: ["Solar Panels", "Racking System", "Inverter", "Monitoring System"],
        correctIndex: 2,
        feedback: {
          correct: "Correct! The inverter manages power conversion, system monitoring, and grid communication, making it the system's brain.",
          incorrect: "The inverter is the brain of the system because it manages power conversion, system monitoring, and grid communication.",
        },
      },
      {
        question: "What is the primary factor affecting solar panel efficiency?",
        options: ["Wind speed", "Air pressure", "Sunlight exposure", "Humidity levels"],
        correctIndex: 2,
        feedback: {
          correct: "Correct! While other factors matter, sunlight exposure is the most crucial factor for solar panel efficiency.",
          incorrect: "Sunlight exposure is the primary factor affecting efficiency. Without adequate sunlight, other environmental factors become secondary.",
        },
      },
      {
        question: "Which type of solar system is most common for residential installations?",
        options: ["Off-grid systems", "Grid-tied systems", "Hybrid systems", "Standalone systems"],
        correctIndex: 1,
        feedback: {
          correct: "Correct! Grid-tied systems are most common due to their cost-effectiveness and simplicity.",
          incorrect: "Grid-tied systems are the most common choice for homes because they're cost-effective and simpler than other options.",
        },
      },
      {
        question: "What happens to excess solar power in a grid-tied system?",
        options: ["It's wasted", "It's stored in batteries", "It's sent back to the grid", "It's converted to heat"],
        correctIndex: 2,
        feedback: {
          correct: "Correct! Excess power is sent back to the grid, often earning credits through net metering programs.",
          incorrect: "In grid-tied systems, excess power is sent back to the utility grid, which usually provides credits through net metering.",
        },
      },
      {
        question: "True or false: Solar panels perform better in very hot temperatures",
        options: ["True", "False"],
        correctIndex: 1,
        feedback: {
          correct: "Correct! Solar panels actually perform better in cooler temperatures. Heat can reduce their efficiency.",
          incorrect: "This is false. Solar panels actually perform better in cooler temperatures. Excessive heat reduces their efficiency.",
        },
      },
      {
        question: "Which solar panel type is known for highest efficiency?",
        options: ["Polycrystalline", "Thin-film", "Monocrystalline", "Amorphous"],
        correctIndex: 2,
        feedback: {
          correct: "Correct! Monocrystalline panels offer the highest efficiency rates among all panel types.",
          incorrect: "Monocrystalline panels are the most efficient type, though they typically come at a higher cost.",
        },
      },
      {
        question: "What is the typical warranty period for quality solar panels?",
        options: ["10 years", "15 years", "20 years", "25 years"],
        correctIndex: 3,
        feedback: {
          correct: "Correct! Most quality solar panels come with 25-year performance warranties, showing their long-term durability.",
          incorrect: "Quality solar panels typically come with 25-year performance warranties, reflecting their long-term durability.",
        },
      },
      {
        question: "Which component attaches solar panels to the roof?",
        options: ["Inverter", "Racking system", "Conduit", "Monitoring system"],
        correctIndex: 1,
        feedback: {
          correct: "Correct! The racking system securely mounts panels while maintaining proper ventilation and angle.",
          incorrect: "The racking system is responsible for securely mounting panels to the roof while ensuring proper ventilation and angle.",
        },
      },
      {
        question: "What is the main advantage of microinverters over string inverters?",
        options: ["Lower cost", "Panel-level optimization", "Simpler installation", "Longer warranty"],
        correctIndex: 1,
        feedback: {
          correct: "Correct! Microinverters optimize each panel individually, maximizing system performance even if some panels are shaded.",
          incorrect: "Microinverters provide panel-level optimization, allowing each panel to perform independently regardless of other panels' conditions.",
        },
      },
    ];
  }

  if (moduleSlug === "solar-economics") {
    return [
      {
        question: "What percentage of a solar system's cost can be deducted through the Federal Solar Tax Credit (ITC)?",
        options: ["15%", "20%", "30%", "40%"],
        correctIndex: 2,
        feedback: {
          correct: "Correct! The federal solar Investment Tax Credit (ITC) allows you to deduct 30% of your solar system's cost from your federal taxes through 2032.",
          incorrect:
            "The current federal solar Investment Tax Credit (ITC) is 30% of the system cost through 2032, making it one of the most significant solar incentives available.",
        },
      },
      {
        question: "What is a Solar Renewable Energy Credit (SREC)?",
        options: [
          "A tax deduction for solar installation",
          "A credit earned for generating solar power that can be sold",
          "A utility company rebate program",
          "A type of solar loan",
        ],
        correctIndex: 1,
        feedback: {
          correct: "Correct! SRECs are credits you earn for generating solar power, which can be sold to utility companies for additional income.",
          incorrect: "SRECs are credits earned for generating solar power that can be sold to utility companies, providing an additional source of income from your solar system.",
        },
      },
      {
        question: "What does net metering allow solar owners to do?",
        options: ["Monitor their system's performance", "Receive credit for excess power sent to the grid", "Get additional tax benefits", "Finance their solar system"],
        correctIndex: 1,
        feedback: {
          correct: "Correct! Net metering allows solar owners to receive credits for excess power sent back to the grid, which can offset their electricity costs.",
          incorrect: "Net metering is a billing mechanism that credits solar owners for excess electricity they send back to the grid, helping offset their electricity costs.",
        },
      },
      {
        question: "Which factor typically affects solar production the LEAST?",
        options: ["Roof orientation", "Local weather patterns", "Home's square footage", "Shading from trees"],
        correctIndex: 2,
        feedback: {
          correct: "Correct! While home size affects energy consumption, solar production primarily depends on factors like roof orientation, shading, and weather patterns.",
          incorrect:
            "A home's square footage mainly affects energy consumption, not solar production. Factors like roof orientation, shading, and weather patterns are more important for production.",
        },
      },
      {
        question: "What is typically the main advantage of a cash purchase for solar?",
        options: ["Fastest installation time", "Better warranty coverage", "Highest long-term financial returns", "More equipment options"],
        correctIndex: 2,
        feedback: {
          correct: "Correct! Cash purchases provide the highest long-term returns since you avoid interest charges and own the system outright.",
          incorrect: "Cash purchases offer the highest long-term financial returns because you avoid interest charges and immediately own the system outright.",
        },
      },
      {
        question: "In a solar lease arrangement, who typically owns the solar system?",
        options: ["The homeowner", "The leasing company", "The utility company", "The installation company"],
        correctIndex: 1,
        feedback: {
          correct: "Correct! In a solar lease, the leasing company owns the system while the homeowner pays a monthly fee to use it.",
          incorrect: "With a solar lease, the leasing company maintains ownership of the system, while the homeowner pays a monthly fee for its use.",
        },
      },
      {
        question: "What is a typical solar system payback period?",
        options: ["1-3 years", "5-10 years", "15-20 years", "25-30 years"],
        correctIndex: 1,
        feedback: {
          correct: "Correct! Most solar systems have a payback period of 5-10 years, after which all savings go directly to the homeowner.",
          incorrect: "Solar systems typically have a payback period of 5-10 years, depending on factors like electricity costs, incentives, and system production.",
        },
      },
      {
        question: "What typically happens to electricity rates over time?",
        options: ["They decrease by 2-4% annually", "They stay exactly the same", "They increase by 2-4% annually", "They fluctuate randomly"],
        correctIndex: 2,
        feedback: {
          correct: "Correct! Utility rates historically increase by 2-4% annually, making future solar savings even more valuable.",
          incorrect: "Historically, utility rates increase by 2-4% annually, which is why future solar savings often become more valuable over time.",
        },
      },
      {
        question: "What is a Power Purchase Agreement (PPA)?",
        options: ["A loan to purchase solar panels", "An agreement to buy power at a set rate from your solar system", "A warranty agreement", "A maintenance contract"],
        correctIndex: 1,
        feedback: {
          correct: "Correct! A PPA is an agreement to purchase the power produced by your solar system at a predetermined rate.",
          incorrect: "A PPA (Power Purchase Agreement) is a financial arrangement where you agree to buy the power produced by your solar system at a set rate.",
        },
      },
      {
        question: "Which solar financing option typically requires no upfront cost?",
        options: ["Cash purchase", "Home equity loan", "Solar lease", "SREC sale"],
        correctIndex: 2,
        feedback: {
          correct: "Correct! Solar leases typically require no upfront cost, allowing homeowners to go solar with zero down payment.",
          incorrect: "Solar leases are designed to require no upfront cost, making solar accessible to homeowners who prefer not to make an initial investment.",
        },
      },
    ];
  }

  if (moduleSlug === "solar-installation-process") {
    return [
      {
        question: "What is typically the first step in the solar installation process?",
        options: ["Pulling permits", "Installation of panels", "Site assessment", "System activation"],
        correctIndex: 2,
        feedback: {
          correct: "Correct! A thorough site assessment is the crucial first step to ensure proper system design and installation.",
          incorrect: "The process begins with a site assessment to evaluate your property and determine the optimal system design.",
        },
      },
      {
        question: "Approximately how much roof space is needed per kilowatt of solar capacity?",
        options: ["50 square feet", "100 square feet", "150 square feet", "200 square feet"],
        correctIndex: 1,
        feedback: {
          correct: "Correct! Each kilowatt of solar capacity typically requires about 100 square feet of roof space, though this can vary based on panel efficiency.",
          incorrect: "Each kilowatt of solar capacity typically requires approximately 100 square feet of roof space, though this can vary with panel efficiency.",
        },
      },
      {
        question: "Which of the following is NOT typically included in a solar permit application?",
        options: ["Electrical diagrams", "Property tax records", "Site plans", "Equipment specifications"],
        correctIndex: 1,
        feedback: {
          correct: "Correct! While property tax records may be needed for other purposes, they're not typically part of solar permit applications.",
          incorrect:
            "Property tax records aren't typically required for solar permits. Permits usually need technical documentation like electrical diagrams, site plans, and equipment specs.",
        },
      },
      {
        question: "What is the typical timeline from contract signing to system activation?",
        options: ["1-2 weeks", "2-3 weeks", "1-2 months", "2-3 months"],
        correctIndex: 3,
        feedback: {
          correct: "Correct! The entire process typically takes 2-3 months due to permitting, inspections, and utility approval requirements.",
          incorrect: "The complete process typically takes 2-3 months, mainly due to the time required for permitting, inspections, and utility approvals.",
        },
      },
      {
        question: "Which of these factors is most important in a shade analysis?",
        options: ["Interior home layout", "Nearby trees and buildings", "House color", "Street orientation"],
        correctIndex: 1,
        feedback: {
          correct: "Correct! Nearby trees and buildings are crucial in shade analysis as they can significantly impact solar production throughout the day.",
          incorrect: "Nearby trees and buildings are the most important factors in shade analysis as they can cast shadows that affect solar production.",
        },
      },
      {
        question: "What is 'commissioning' in the solar installation process?",
        options: ["Ordering equipment", "Testing system components", "Getting HOA approval", "Installing panels"],
        correctIndex: 1,
        feedback: {
          correct: "Correct! Commissioning involves testing and verifying all system components are working correctly after installation.",
          incorrect: "Commissioning is the process of testing and verifying that all system components are working correctly after installation.",
        },
      },
      {
        question: "Which inspection typically occurs last in the installation process?",
        options: ["Structural inspection", "Rough electrical inspection", "Utility inspection", "Fire department inspection"],
        correctIndex: 2,
        feedback: {
          correct: "Correct! The utility inspection and approval is typically the final step before system activation.",
          incorrect: "The utility inspection is usually the final inspection, as their approval is needed before the system can be activated.",
        },
      },
      {
        question: "What should be considered when evaluating roof structural capacity?",
        options: ["House age only", "Wind and snow loads", "Panel color", "Neighborhood aesthetics"],
        correctIndex: 1,
        feedback: {
          correct: "Correct! Wind and snow loads are crucial factors in determining if a roof can safely support a solar system.",
          incorrect: "Wind and snow loads must be considered when evaluating roof structural capacity to ensure safe solar system installation.",
        },
      },
      {
        question: "Which document is typically NOT required for HOA approval?",
        options: ["System design plans", "Panel specifications", "Neighbor signatures", "Property plot plan"],
        correctIndex: 2,
        feedback: {
          correct: "Correct! While HOAs may have various requirements, neighbor signatures are not typically required for solar approval.",
          incorrect: "Neighbor signatures are not typically required for HOA solar approval, though other documentation like design plans and specifications are.",
        },
      },
      {
        question: "What is the primary purpose of the final system training?",
        options: ["To sell additional equipment", "To teach basic operation and monitoring", "To schedule maintenance", "To process final payment"],
        correctIndex: 1,
        feedback: {
          correct: "Correct! Final system training ensures you understand how to operate and monitor your solar system effectively.",
          incorrect: "The primary purpose of final system training is to ensure you understand how to operate and monitor your solar system effectively.",
        },
      },
    ];
  }

  if (moduleSlug === "solar-industry-navigation") {
    return [
      {
        question: "What unique advantage does Klaravia's platform offer compared to traditional solar sales?",
        options: ["Door-to-door sales approach", "Self-paced online shopping with no sales pressure", "Required in-home consultations", "Limited installer options"],
        correctIndex: 1,
        feedback: {
          correct: "Correct! Klaravia's online platform lets you shop for solar at your own pace without sales pressure, putting you in control of the process.",
          incorrect: "Klaravia's platform differentiates itself by offering a pressure-free, self-paced online shopping experience, unlike traditional sales methods.",
        },
      },
      {
        question: "Which of these is NOT one of Klaravia's installation quality assurance measures?",
        options: ["Pre-vetted installer network", "Exclusive use of in-house installers", "Installation best practices requirements", "Workmanship warranty standards"],
        correctIndex: 1,
        feedback: {
          correct:
            "Correct! Rather than limiting options to in-house installers, Klaravia maintains a network of pre-vetted, independent installers to provide choice and competition.",
          incorrect: "Klaravia doesn't use in-house installers but instead maintains a network of pre-vetted, independent installers to ensure quality while providing choice.",
        },
      },
      {
        question: "Which financial aspect does Klaravia's platform help optimize?",
        options: ["Bank account management", "Stock market investments", "Solar incentive capture", "Cryptocurrency trading"],
        correctIndex: 2,
        feedback: {
          correct: "Correct! Klaravia's platform helps identify and capture all available solar incentives to maximize your financial returns.",
          incorrect: "Klaravia's platform specializes in helping customers identify and capture all available solar incentives to maximize their investment.",
        },
      },
      {
        question: "How does Klaravia protect customers from low-quality installations?",
        options: ["By only allowing premium equipment", "Through comprehensive installer vetting", "By requiring cash purchases", "Through monthly inspections"],
        correctIndex: 1,
        feedback: {
          correct: "Correct! Klaravia protects customers through comprehensive vetting of installers, checking credentials, experience, and customer satisfaction.",
          incorrect:
            "Klaravia ensures installation quality through comprehensive vetting of installers, including verification of credentials, experience, and customer satisfaction.",
        },
      },
      {
        question: "What tool does Klaravia use to ensure accurate system design?",
        options: ["In-person measurements only", "Customer-provided photos only", "AI-powered satellite imagery analysis", "Random size estimates"],
        correctIndex: 2,
        feedback: {
          correct: "Correct! Klaravia uses AI-powered analysis of satellite imagery to create accurate 3D models and system designs.",
          incorrect: "Klaravia utilizes AI-powered analysis of satellite imagery to create accurate 3D models and ensure optimal system design.",
        },
      },
      {
        question: "How does Klaravia help customers compare installers?",
        options: [
          "By limiting choices to one installer",
          "Through sales representative recommendations",
          "By providing standardized comparison metrics",
          "Through random selection",
        ],
        correctIndex: 2,
        feedback: {
          correct: "Correct! Klaravia provides standardized comparison metrics across installers, making it easy to evaluate options objectively.",
          incorrect: "Klaravia enables objective installer comparison through standardized metrics covering price, experience, reviews, and other key factors.",
        },
      },
      {
        question: "How does Klaravia's platform typically impact total system cost?",
        options: ["Increases cost by 15-25%", "No impact on cost", "Reduces cost by 15-25%", "Doubles the cost"],
        correctIndex: 2,
        feedback: {
          correct: "Correct! By eliminating traditional sales costs and creating competition among installers, Klaravia typically reduces total system cost by 15-25%.",
          incorrect: "Klaravia's efficient platform and competitive installer network typically reduce total system cost by 15-25% compared to traditional sales channels.",
        },
      },
      {
        question: "What aspect of solar shopping does Klaravia's educational content primarily address?",
        options: ["Entertainment", "Informed decision-making", "Social networking", "Gaming"],
        correctIndex: 1,
        feedback: {
          correct: "Correct! Klaravia's educational content focuses on empowering customers to make informed decisions about their solar investment.",
          incorrect: "Klaravia's educational content is designed to empower customers to make informed decisions throughout their solar journey.",
        },
      },
      {
        question: "What makes Klaravia's customer reviews more reliable than typical online reviews?",
        options: ["They only show positive reviews", "They are paid reviews", "They are verified from actual installations", "They are written by employees"],
        correctIndex: 2,
        feedback: {
          correct: "Correct! Klaravia only displays verified reviews from actual completed installations, ensuring authentic feedback.",
          incorrect: "Klaravia ensures review reliability by only displaying verified feedback from actual completed installations.",
        },
      },
    ];
  }
  return [];
};

export default function QuizContent({ module }: { module: Module }) {
  const router = useRouter();
  const { completeQuiz, canTakeCertificate } = useCourse();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);

  const questions = getQuizQuestions(module.slug);
  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (answerIndex: number) => {
    // Only allow changing answer if not submitted or if previous answer was wrong
    if (!submitted || answers[currentQuestionIndex] !== currentQuestion.correctIndex) {
      const newAnswers = [...answers];
      newAnswers[currentQuestionIndex] = answerIndex;
      setAnswers(newAnswers);
      setSubmitted(false); // Reset submitted state when selecting a new answer
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);

    // Check if answer is correct
    if (answers[currentQuestionIndex] === currentQuestion.correctIndex) {
      // If this was the last question
      if (currentQuestionIndex === questions.length - 1) {
        completeQuiz(module.slug);
        setQuizComplete(true);
      } else {
        // Move to next question after a brief delay
        setTimeout(() => {
          setCurrentQuestionIndex((prev) => prev + 1);
          setSubmitted(false);
        }, 2000);
      }
    }
  };

  const handleContinue = () => {
    const nextModule = getNextModule(module.slug);
    if (nextModule) {
      router.push(`/new-course/${nextModule.slug}/${nextModule.lessons[0].slug}`);
    } else if (!canTakeCertificate()) {
      router.push("/new-course/incomplete");
    } else if (canTakeCertificate()) {
      router.push("/new-course/completion");
    }
  };

  if (quizComplete) {
    return (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center flex-col h-[80vh] content-center">
        <div className="mb-8">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Quiz Completed!</h2>
          <p className="text-gray-600 dark:text-gray-400">You've successfully completed the {module.title} quiz.</p>
        </div>
        <button onClick={handleContinue} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition-colors">
          Continue
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div key={currentQuestionIndex} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="max-w-2xl mx-auto py-24">
      {/* Progress indicator */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
          <span>
            Question {currentQuestionIndex + 1} of {questions.length}
          </span>
          <span>{module.title} Quiz</span>
        </div>
        <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full">
          <div className="h-full bg-blue-600 rounded-full transition-all duration-300" style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }} />
        </div>
      </div>

      {/* Question */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">{currentQuestion.question}</h3>

        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => {
            const isSelected = answers[currentQuestionIndex] === index;
            const isCorrect = index === currentQuestion.correctIndex;
            const isWrong = submitted && isSelected && !isCorrect;

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={submitted && answers[currentQuestionIndex] === currentQuestion.correctIndex}
                className={`w-full p-4 text-left rounded-lg border transition-colors ${
                  isSelected
                    ? submitted
                      ? isCorrect
                        ? "bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800"
                        : "bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-800"
                      : "bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800"
                    : "border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>

        {submitted && (
          <div
            className={`mt-4 p-4 rounded-lg ${
              answers[currentQuestionIndex] === currentQuestion.correctIndex
                ? "bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                : "bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300"
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              {answers[currentQuestionIndex] === currentQuestion.correctIndex ? (
                <>
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span className="font-medium">Correct!</span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="font-medium">Incorrect.</span>
                </>
              )}
            </div>
            <p className="text-sm ml-7">{answers[currentQuestionIndex] === currentQuestion.correctIndex ? currentQuestion.feedback.correct : currentQuestion.feedback.incorrect}</p>
          </div>
        )}

        {(!submitted || answers[currentQuestionIndex] !== currentQuestion.correctIndex) && (
          <button onClick={handleSubmit} className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors w-full">
            Submit Answer
          </button>
        )}
      </div>
    </motion.div>
  );
}
