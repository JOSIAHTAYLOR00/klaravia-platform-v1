"use client";

import { useEffect, useState } from "react";
import { Box, VStack, Text, useColorModeValue } from "@chakra-ui/react";
import { ProjectStatus, User } from "@/API";
import { StageContent } from "./StageContent";
import { useAuth } from "@/hooks/useAuth";
import { getProjectStatusIndex } from "../../_utils";
import { UserProgressTracker } from "./progressTracker/UserProgressTracker";
import { useOnUpdateUserSubscription } from "@/hooks/userHooks";

export const UserPostOrderDash = () => {
  const [hoverIndex, setHoverIndex] = useState<number>(0);
  const [userData, setUserData] = useState<User | null>(null);
  const [projectStatusIndex, setProjectStatusIndex] = useState<number>(0);
  const [projectStatus, setProjectStatus] = useState<ProjectStatus>();
  const [showStripePayment, setShowStripePayment] = useState<boolean>(false);
  const [filesHaveBeenUploaded, setFilesHaveBeenUploaded] = useState(false);
  const [errorUploadingImage, setErrorUploadingImage] = useState(false);

  const { userData: authData } = useAuth();
  const { data: subscriptionData } = useOnUpdateUserSubscription(userData?.id ?? "");

  useEffect(() => {
    if (subscriptionData?.onUpdateUser?.projectStatus) {
      setProjectStatus(subscriptionData.onUpdateUser.projectStatus);
    }
  }, [subscriptionData]);

  useEffect(() => {
    if (projectStatus) {
      const newIndex = getProjectStatusIndex(projectStatus);
      setProjectStatusIndex(newIndex);
    }
  }, [projectStatus]);

  useEffect(() => {
    if (authData) {
      setUserData(authData);
      if (authData.projectStatus) {
        setProjectStatus(authData.projectStatus);
      }
    }
  }, [authData]);

  useEffect(() => {
    setHoverIndex(projectStatusIndex);
  }, [projectStatusIndex]);

  if (!userData) {
    return (
      <VStack w="full" minH="90vh" bg="#1f1f1f" justifyContent="center">
        <Text fontSize="32px" fontWeight="bold" className="text-blue-50">
          Loading...
        </Text>
      </VStack>
    );
  }

  return (
    <Box w="full" minH="92vh" p={{ base: "10px", lg: "40px" }} className="bg-surface-layer-5 dark:bg-surface-dark-layer-5 rounded-lg">
      <UserProgressTracker setHoverIndex={setHoverIndex} hoverIndex={hoverIndex} projectStatusIndex={projectStatusIndex} />
      <StageContent
        userData={userData}
        projectStatus={projectStatus}
        projectStatusIndex={projectStatusIndex}
        showStripePayment={showStripePayment}
        setShowStripePayment={setShowStripePayment}
        filesHaveBeenUploaded={filesHaveBeenUploaded}
        setFilesHaveBeenUploaded={setFilesHaveBeenUploaded}
        errorUploadingImage={errorUploadingImage}
        setErrorUploadingImage={setErrorUploadingImage}
        hoverIndex={hoverIndex}
      />
    </Box>
  );
};
