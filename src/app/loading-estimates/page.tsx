// app/loading/page.tsx
import { Metadata } from "next";
import LoadingSequence from "./_components/LoadingSequence";

export const metadata: Metadata = {
  title: "Generating Your Solar Proposal | Klaravia",
  description: "Please wait while we analyze your roof and generate your personalized solar proposal.",
};

export default function LoadingPage() {
  return <LoadingSequence />;
}
