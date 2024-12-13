"use client";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Something went wrong!</h2>
        <p className="text-gray-400 mb-6">{error.message}</p>
        <button onClick={reset} className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg transition-colors">
          Try again
        </button>
      </div>
    </div>
  );
}
