"use client";

import { SolarErrorState } from "../SolarErrorState";

export default function SolarErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <SolarErrorState error={error} reset={reset} />;
}
