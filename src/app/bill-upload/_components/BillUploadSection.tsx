"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { convertToBase64 } from "../_utils";
import { FileWithPreview } from "../_types";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { ErrorMessage } from "./ErrorMessage";
import { uploadFile, HelperInfo } from "./HelperInfo";
import { SubmitSection } from "./SubmitSection";
import { UploadArea } from "./UploadArea";
import Navbar from "@/app/components/Navbar";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

export const BillUploadSection = () => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<FileWithPreview | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { userData } = useAuth();
  const router = useRouter();

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === "dragenter" || e.type === "dragover");
  };

  const validateFile = (file: File): string | null => {
    if (!file.type.startsWith("image/") && file.type !== "application/pdf") {
      return "Please upload a PDF or image file of your electric bill";
    }
    if (file.size > MAX_FILE_SIZE) {
      return "File size must be less than 10MB";
    }
    return null;
  };

  const handleFile = async (file: File) => {
    const validationError = validateFile(file);
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsLoading(true);
    setError(null);

    if (!userData?.id) {
      setError("User authentication required");
      setIsLoading(false);
      return;
    }

    try {
      const fileBase64 = await convertToBase64(file);
      const response = await uploadFile(userData.id, fileBase64, file.type);

      if (response.data.statusCode === 501) {
        throw new Error("File type not allowed");
      }

      if (response.data.statusCode === 500) {
        throw new Error("Error uploading file. Please try again.");
      }

      setUploadedFile(file);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Error uploading file. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleSubmit = () => {
    if (uploadedFile) {
      router.push("/transition");
    }
  };

  return (
    <section className="min-h-screen flex items-center px-4 py-8">
      <Navbar />
      <div className="max-w-2xl mx-auto w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
          <Header />

          <UploadArea
            dragActive={dragActive}
            uploadedFile={uploadedFile}
            fileInputRef={fileInputRef}
            handleDrag={handleDrag}
            handleDrop={handleDrop}
            handleFileInput={handleFileInput}
            setUploadedFile={setUploadedFile}
          />

          <ErrorMessage error={error} />

          <SubmitSection uploadedFile={uploadedFile} handleSubmit={handleSubmit} />

          <HelperInfo
            message="We'll analyze your bill to determine your energy usage patterns and design 
              a solar system that maximizes your savings. Your information is kept private 
              and secure."
          />
        </motion.div>
      </div>
    </section>
  );
};

const Header = () => (
  <div className="text-center">
    <h1 className="text-4xl font-bold text-main/80 dark:text-white/80 mb-4">Upload Your Electric Bill</h1>
    <p className="text-xl text-main dark:text-blue-50/70">We'll analyze your usage to design your perfect solar system</p>
  </div>
);
