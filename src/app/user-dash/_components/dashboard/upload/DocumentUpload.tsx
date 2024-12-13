"use client";

import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { uploadFile } from "@/lib/api/upload";
import { Dropzone } from "./Dropzone";
import { useAuth } from "@/hooks/useAuth";
import { convertToBase64 } from "./_utils";

export const DocumentUpload = () => {
  const [loadingFileUpload, setLoadingFileUpload] = useState(false);
  const { userData } = useAuth();
  const toast = useToast();
  console.log("userData", userData);
  const handleFileUpload = async (files: File[]) => {
    if (!userData?.id || !files.length) return;

    setLoadingFileUpload(true);
    const file = files[0];

    try {
      const fileBase64 = await convertToBase64(file);
      const response = await uploadFile(userData.id, fileBase64, file.type);

      if (response.data.statusCode === 501) {
        handleUploadError("File type not allowed.");
        return;
      }

      if (response.data.statusCode === 500) {
        handleUploadError("Please make sure the file size is not too large, or try again later.");
        return;
      }

      setLoadingFileUpload(false);
    } catch (error) {
      handleUploadError("Please make sure the file is not too large and is in the correct format.");
      console.error("Error uploading file:", error);
    }
  };

  const handleUploadError = (message: string) => {
    setLoadingFileUpload(false);
    toast({
      title: "Error uploading image",
      description: message,
      status: "error",
      duration: 9000,
      isClosable: true,
    });
  };

  return <Dropzone onFileUpload={handleFileUpload} loadingFileUpload={loadingFileUpload} />;
};
