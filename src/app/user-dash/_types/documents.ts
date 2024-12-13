import { StageContentProps } from "./dashboard";

export interface DocumentStageProps extends StageContentProps {
  userSignedInstallerAgreement: boolean;
  setUserSignedInstallerAgreement: (value: boolean) => void;
  showPaymentReq: boolean;
  setShowPaymentReq: (value: boolean) => void;
}