"use client";

interface LoadingSpinnerProps {
  message?: string;
}

export function SolarLoadingSpinner({ message = "Loading..." }: LoadingSpinnerProps) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-amber-500 mx-auto mb-4" />
        <p className="text-main dark:text-blue-50 text-lg">{message}</p>
      </div>
    </div>
  );
}
