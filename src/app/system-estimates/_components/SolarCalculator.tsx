"use client";

import { useSolarCalculator } from "@/hooks/useSolarCalculator";
import Loading from "./states/Loading";
import { SolarErrorState } from "./SolarErrorState";
import SystemResultsPage from "./SystemResultsPage";

export default function SolarCalculator() {
  const { loading, systemEstimates } = useSolarCalculator();

  if (loading) {
    return <Loading />;
  }

  if (!systemEstimates) {
    return <SolarErrorState />;
  }

  return <SystemResultsPage {...systemEstimates} />;
}
