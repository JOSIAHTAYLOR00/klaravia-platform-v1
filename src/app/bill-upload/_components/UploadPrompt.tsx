import { FileText, Info, Upload } from "lucide-react";

interface UploadPromptProps {
  onBrowse: () => void;
}

export const UploadPrompt: React.FC<UploadPromptProps> = ({ onBrowse }) => (
  <div className="space-y-6">
    <div className="bg-amber-500/10 rounded-full p-4 inline-block">
      <Upload className="w-12 h-12 text-blue-500 dark:text-amber-500" />
    </div>
    <div>
      <p className="text-xl text-main dark:text-blue-50 mb-2">Drag and drop your bill here</p>
      <p className="text-blue-50/70">
        or{" "}
        <button onClick={onBrowse} className="text-blue-500 dark:text-amber-500 hover:text-blue-400 dark:hover:text-amber-400 transition-colors">
          browse files
        </button>
      </p>
    </div>
    <div className="flex justify-center space-x-4 text-sm text-main/50 dark:text-blue-50/50">
      <span className="flex items-center">
        <FileText className="w-4 h-4 mr-1" /> PDF or Images
      </span>
      <span className="flex items-center">
        <Info className="w-4 h-4 mr-1" /> Up to 10MB
      </span>
    </div>
  </div>
);
