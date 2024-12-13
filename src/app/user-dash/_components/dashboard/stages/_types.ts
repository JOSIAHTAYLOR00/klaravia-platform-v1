import { ProjectStatus, User } from "@/API";

export interface StageProps {
  userData: User;
  projectStatusIndex: number;
  projectStatus: ProjectStatus;
  showStripePayment: boolean;
  setShowStripePayment: (show: boolean) => void;
}

export interface StageContentProps {
  userData: User;
  projectStatus?: ProjectStatus;
  projectStatusIndex: number;
  showStripePayment: boolean;
  setShowStripePayment: (show: boolean) => void;
  filesHaveBeenUploaded: boolean;
  setFilesHaveBeenUploaded: (value: boolean) => void;
  errorUploadingImage: boolean;
  setErrorUploadingImage: (value: boolean) => void;
}

export interface LoanProviderProps {
  name: string;
  logoUrl: string;
  loanAmount: string;
  apr: string;
  creditScore: string;
  link: string;
}

export interface PaymentStageProps {
  userData: User;
  projectStatusIndex: number;
  projectStatus: ProjectStatus;
}

export interface StripeComponentProps {
  chargeAmount: number;
}

export interface CheckoutFormProps extends StripeComponentProps {
  onPaymentSuccess?: () => void;
  onPaymentError?: (error: string) => void;
}

export interface PaymentState {
  isLoading: boolean;
  isSuccessful: boolean;
  error?: string;
}

import { LucideIcon } from "lucide-react";

export interface Step {
  title: string;
  icon: LucideIcon;
}

export interface ProgressTrackerProps {
  setHoverIndex: (index: number) => void;
  hoverIndex: number;
  projectStatusIndex: number;
}

export interface StepIconProps {
  icon: LucideIcon;
  isActive: boolean;
  isHovered: boolean;
}

export interface StepLabelProps {
  title: string;
  isActive: boolean;
  isHovered: boolean;
}

export interface FileWithPreview extends File {
  preview: string;
}

export interface DocumentUploadProps {
  setFilesHaveBeenUploaded: (value: boolean) => void;
  setErrorUploadingImage: (value: boolean) => void;
}

export interface DropzoneProps {
  onFileUpload: (files: File[]) => Promise<void>;
  loadingFileUpload: boolean;
}