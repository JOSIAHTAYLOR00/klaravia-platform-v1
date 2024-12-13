export interface FileWithPreview extends File {
  preview?: string;
}

export interface UploadAreaProps {
  dragActive: boolean;
  uploadedFile: FileWithPreview | null;
  fileInputRef: React.RefObject<HTMLInputElement>;
  handleDrag: (e: React.DragEvent) => void;
  handleDrop: (e: React.DragEvent) => void;
  handleFileInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setUploadedFile: (file: FileWithPreview | null) => void;
}

export interface ErrorMessageProps {
  error: string | null;
}

export interface SubmitSectionProps {
  uploadedFile: FileWithPreview | null;
  handleSubmit: () => void;
}

export interface HelperInfoProps {
  message: string;
}