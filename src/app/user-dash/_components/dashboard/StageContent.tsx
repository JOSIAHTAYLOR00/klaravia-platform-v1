"use client";

import { useEffect, useState, useRef } from "react";
import { Fade } from "@chakra-ui/react";
import { ElectricBillStage } from "./stages/ElectricBillStage";
import { DesignStage } from "./stages/DesignStage";
import { DocumentsStage } from "./stages/DocumentStage";
import { SiteSurveyStage } from "./stages/SiteSurvey";
import { PermitsStage } from "./stages/PermitsStage";
import { SystemPaymentStage } from "./stages/SystemPaymentStage";
import { InstallationStage } from "./stages/InstallationStage";
import { ActivationStage } from "./stages/ActivationStage";
import { StageContentProps } from "./stages/_types";

export const StageContent = ({
  userData,
  projectStatus,
  projectStatusIndex,
  hoverIndex,
  showStripePayment,
  setShowStripePayment,
  filesHaveBeenUploaded,
  setFilesHaveBeenUploaded,
  errorUploadingImage,
  setErrorUploadingImage,
}: StageContentProps & { hoverIndex: number }) => {
  const stages = [ElectricBillStage, DesignStage, DocumentsStage, SiteSurveyStage, PermitsStage, SystemPaymentStage, InstallationStage, ActivationStage];
  const [currentIndex, setCurrentIndex] = useState<number>(projectStatusIndex);
  const indexRef = useRef({ index: projectStatusIndex });

  useEffect(() => {
    console.log("hoverIndexChanged", hoverIndex, indexRef.current.index);
    if (hoverIndex !== indexRef.current.index) {
      indexRef.current.index = hoverIndex;
      setCurrentIndex(hoverIndex);
    } else if (projectStatusIndex !== indexRef.current.index) {
      indexRef.current.index = projectStatusIndex;
      setCurrentIndex(projectStatusIndex);
    }
  }, [hoverIndex, projectStatusIndex]);

  const CurrentStage = stages[currentIndex];

  return (
    <Fade in={true} transition={{ enter: { duration: 0.9 } }}>
      <CurrentStage
        userData={userData}
        projectStatus={projectStatus}
        projectStatusIndex={projectStatusIndex}
        showStripePayment={showStripePayment}
        setShowStripePayment={setShowStripePayment}
        filesHaveBeenUploaded={filesHaveBeenUploaded}
        setFilesHaveBeenUploaded={setFilesHaveBeenUploaded}
        errorUploadingImage={errorUploadingImage}
        setErrorUploadingImage={setErrorUploadingImage}
        userSignedInstallerAgreement={false}
        setUserSignedInstallerAgreement={function (value: boolean): void {
          throw new Error("Function not implemented.");
        }}
        showPaymentReq={false}
        setShowPaymentReq={function (value: boolean): void {
          throw new Error("Function not implemented.");
        }}
      />
    </Fade>
  );
};
