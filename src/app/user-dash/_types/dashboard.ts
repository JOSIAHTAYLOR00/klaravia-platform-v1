import { ProjectStatus, PaymentMethod, User } from "@/API";

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