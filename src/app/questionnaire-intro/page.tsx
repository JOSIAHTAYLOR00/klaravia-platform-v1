import { assessmentSteps } from "@/data/steps";
import { IntroHeading } from "@/app/questionnaire-intro/_components/IntroHeading";
import { AssessmentSteps } from "@/app/questionnaire-intro/_components/AssessmentSteps";
import { BeginButton } from "@/app/questionnaire-intro/_components/BeginButton";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function QuestionnaireIntroPage() {
  return (
    <section className="min-h-screen flex items-center px-4">
      <Navbar />
      <div className="max-w-6xl mx-auto w-full grid sm:grid-cols-1 gap-16 py-12">
        <div className="space-y-8">
          <IntroHeading />
          <AssessmentSteps />
          <div className="pt-4">
            <BeginButton />
          </div>
        </div>
      </div>
    </section>
  );
}
