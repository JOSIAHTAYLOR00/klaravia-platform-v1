// components/BillUpload/UploadArea.tsx
import { Upload, FileText, CheckCircle, Info, X } from "lucide-react";
import { motion } from "framer-motion";
import { UploadAreaProps } from "../_types";
import { UploadedFileView } from "./UploadedFileView";
import { UploadPrompt } from "./UploadPrompt";

export const UploadArea: React.FC<UploadAreaProps> = ({ dragActive, uploadedFile, fileInputRef, handleDrag, handleDrop, handleFileInput, setUploadedFile }) => (
  <div
    className={`relative border-2 border-dashed rounded-lg p-12 text-center transition-colors
      ${dragActive ? "border-amber-500 bg-amber-500/5" : " dark:border-dark-layer-10 bg-blue-500/10 dark:bg-surface-dark-layer-5"}
      ${uploadedFile ? "border-green-500 bg-green-500/5" : ""}`}
    onDragEnter={handleDrag}
    onDragLeave={handleDrag}
    onDragOver={handleDrag}
    onDrop={handleDrop}
  >
    <input ref={fileInputRef} type="file" className="hidden" accept="application/pdf,image/*" onChange={handleFileInput} />

    {uploadedFile ? <UploadedFileView file={uploadedFile} onRemove={() => setUploadedFile(null)} /> : <UploadPrompt onBrowse={() => fileInputRef.current?.click()} />}
  </div>
);

// Additional components exported from separate files...
