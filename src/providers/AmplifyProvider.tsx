"use client";

import { ReactNode, useEffect, useState } from "react";
import { Amplify } from "aws-amplify";
import { config } from "@/lib/amplify-config";

export function AmplifyProvider({ children }: { children: ReactNode }) {
  const [isConfigured, setIsConfigured] = useState(false);

  useEffect(() => {
    Amplify.configure(config, { ssr: true });
    setIsConfigured(true);
  }, []);

  if (!isConfigured) {
    return null; // or a loading spinner
  }

  return <>{children}</>;
}
