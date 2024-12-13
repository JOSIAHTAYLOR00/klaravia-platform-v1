import { ChevronRight } from "lucide-react";
import { SubmitSectionProps } from "../_types";

export const SubmitSection: React.FC<SubmitSectionProps> = ({ uploadedFile, handleSubmit }) => (
  <div className="space-y-4">
    <button
      onClick={handleSubmit}
      disabled={!uploadedFile}
      className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center
        ${
          uploadedFile
            ? "bg-amber-500 hover:bg-amber-400 text-main dark:text-[#121212]"
            : "bg-surface-layer-10 dark:bg-surface-dark-layer-10 text-main/30 dark:text-blue-50/30 cursor-not-allowed"
        }`}
    >
      Continue
      <ChevronRight className="ml-2 w-5 h-5" />
    </button>

    <p className="text-center text-main/50 dark:text-blue-50/50 text-sm">Your bill information is securely processed and encrypted</p>
  </div>
);
