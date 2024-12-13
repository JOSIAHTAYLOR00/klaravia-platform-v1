import { CheckCircle, X } from "lucide-react";
import { FileWithPreview } from "../_types";
import { motion } from "framer-motion";

interface UploadedFileViewProps {
  file: FileWithPreview;
  onRemove: () => void;
}

export const UploadedFileView: React.FC<UploadedFileViewProps> = ({ file, onRemove }) => (
  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="space-y-4">
    <div className="bg-green-500/10 rounded-full p-4 inline-block">
      <CheckCircle className="w-12 h-12 text-green-500" />
    </div>
    <div>
      <p className="text-main dark:text-blue-50 text-xl font-semibold mb-2">Bill Uploaded Successfully</p>
      <p className="text-main/70 dark:text-blue-50/70">{file.name}</p>
    </div>
    <button onClick={onRemove} className="text-blue-50/70 hover:text-blue-50 transition-colors inline-flex items-center">
      <X className="w-4 h-4 mr-2" />
      Choose different file
    </button>
  </motion.div>
);
