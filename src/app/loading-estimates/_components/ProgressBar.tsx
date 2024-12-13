"use client";

interface ProgressBarProps {
  progress: number;
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="relative pt-1">
      <div className="text-center">
        <span className="text-xl mb-4 font-semibold inline-block text-yellow-500">{Math.round(progress)}%</span>
      </div>
      <div className="overflow-hidden h-3 mb-4 text-sm flex rounded bg-surface-layer-10 dark:bg-surface-dark-layer-10">
        <div className="transition-all duration-300 ease-out bg-gradient-to-r from-orange-500 to-yellow-500 rounded-3xl" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
