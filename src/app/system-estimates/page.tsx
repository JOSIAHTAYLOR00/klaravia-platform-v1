import { Metadata } from "next";
import { Suspense } from "react";
import { ErrorBoundary } from "../components/error-boundary/ErrorBoundary";
import SolarCalculator from "./_components/SolarCalculator";
import { SolarErrorBoundary } from "./_components/SolarErrorBoundary";
import { SolarLoadingSpinner } from "./_components/SolarLoadingSpinner";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Solar System Estimates | Klaravia",
  description: "Calculate your potential solar savings, system size, and environmental impact with our advanced solar calculator.",
  openGraph: {
    title: "Solar System Estimates | Klaravia",
    description: "Calculate your potential solar savings and system size.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SolarCalculatorPage() {
  return (
    <SolarErrorBoundary>
      <Navbar />
      <Suspense fallback={<SolarLoadingSpinner message="Loading solar calculator..." />}>
        <main className="min-h-screen">
          <SolarCalculator />
        </main>
      </Suspense>
    </SolarErrorBoundary>
  );
}
