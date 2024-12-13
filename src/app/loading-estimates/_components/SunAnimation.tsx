"use client";

import { Sun } from "lucide-react";

export function SunAnimation() {
  return (
    <div className="flex justify-center mb-8">
      <div className="relative">
        <Sun
          className="w-24 h-24 text-yellow-500 animate-pulse"
          style={{
            filter: "drop-shadow(0 0 20px rgba(234, 179, 8, 0.5))",
          }}
        />
      </div>
    </div>
  );
}
