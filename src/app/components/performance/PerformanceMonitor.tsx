"use client";

import { useEffect, ReactNode } from "react";
import { usePathname, useSearchParams } from "next/navigation";

interface PerformanceMonitorProps {
  children: ReactNode;
}

export function PerformanceMonitor({ children }: PerformanceMonitorProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const reportWebVitals = (metric: any) => {
      // Replace with your analytics service
      console.log(metric);
    };

    // Register performance observer
    if (typeof window !== "undefined" && "PerformanceObserver" in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach(reportWebVitals);
      });

      observer.observe({ entryTypes: ["web-vitals"] });
      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    // Track route changes
    const routeChangeComplete = () => {
      // Report to analytics
      console.log(`Route changed to: ${pathname}${searchParams.toString()}`);
    };

    routeChangeComplete();
  }, [pathname, searchParams]);

  return <>{children}</>;
}
