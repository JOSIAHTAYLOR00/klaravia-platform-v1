"use client";

interface ErrorStateProps {
  error?: Error;
  reset?: () => void;
}

export function SolarErrorState({ error, reset }: ErrorStateProps) {
  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center">
      <div className="text-center text-blue-50">
        <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
        {error && <p className="mb-4">{error.message}</p>}
        {reset && (
          <button onClick={reset} className="px-4 py-2 bg-amber-500 text-[#121212] rounded-lg hover:bg-amber-400 transition-colors">
            Try again
          </button>
        )}
      </div>
    </div>
  );
}
