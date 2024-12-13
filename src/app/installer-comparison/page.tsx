import { Metadata } from "next";
import InstallerComparisonFallback from "./_components/InstallerComparisonFallback";
import { Suspense } from "react";
import { ErrorBoundary } from "@/app/components/error-boundary/ErrorBoundary";
import InstallerComparison from "./_components/InstallerComparison";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Installer Comparison | Klaravia",
  description: "Compare local installers and chose the option that best suits your needs.",
  openGraph: {
    title: "Local Installer Comparison | Klaravia",
    description: "Compare Solar Installers In Your Area.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function InstallerSelectPage() {
  return (
    <ErrorBoundary>
      <Navbar />
      <Suspense fallback={<InstallerComparisonFallback />}>
        <InstallerComparison />
      </Suspense>
    </ErrorBoundary>
  );
}
