"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import {
  Box,
  VStack,
  Text,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  Heading,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Button,
  Grid,
  useColorModeValue,
} from "@chakra-ui/react";
import { FileText, Download, Upload, Info, AlertCircle } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import PDFViewer from "./_components/PDFViewer";
import { DocumentUpload } from "../_components/dashboard/upload/DocumentUpload";
import { UploadPrompt } from "@/app/bill-upload/_components/UploadPrompt";
import { convertToBase64 } from "@/app/bill-upload/_utils";
import { uploadFile } from "@/lib/api/upload";
import { FileWithPreview } from "@/app/bill-upload/_types";
import { UploadArea } from "@/app/bill-upload/_components/UploadArea";
import { Sidebar } from "@/app/components/user-sidebar-with-header/Sidebar";

const UserDocumentsPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: pictureIsOpen, onOpen: pictureOnOpen, onClose: pictureOnClose } = useDisclosure();
  const [pictureSrc, setPictureSrc] = useState<string | null>(null);
  const btnRef = React.useRef();
  const { userData } = useAuth();

  const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<FileWithPreview | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  return (
    <Sidebar>
      <Box w="full" minH="92vh" p={{ base: "20px", lg: "40px" }} className="bg-surface-layer-5 dark:bg-surface-dark-layer-5 rounded-lg" fontFamily="'eurostile', sans-serif">
        <VStack w="full" spacing={8}>
          <HStack justify="space-between" w="full">
            <Text fontSize={{ base: "32px", lg: "54px" }} fontWeight="bold" className="text-blue-50">
              Your Documents
            </Text>
            <Button onClick={onOpen} leftIcon={<Upload className="w-6 h-6" />} colorScheme="blue" variant="solid">
              Upload Documents
            </Button>
          </HStack>
          <VStack w="full" alignItems="flex-start" spacing={6}>
            {userData && userData.final_payment_invoice && (
              <VStack w="full" className="bg-surface-layer-5 dark:bg-surface-dark-layer-5 border border-white/10 rounded-lg backdrop-blur-sm p-6">
                <HStack align="center" spacing={4} w="full">
                  <FileText className="w-8 h-8 text-amber-500" />
                  <Text fontSize={{ base: "24px", lg: "32px" }} fontWeight="bold" className="text-blue-50">
                    Total Remaining Payment Invoice
                  </Text>
                </HStack>
                <Text className="text-blue-50/70 mt-4">
                  This is the invoice for the remainder of what you owe for your system. Please make a check out to Klaravia Inc for the amount indicated above.
                </Text>
                <Box w="full" className="rounded-lg shadow-lg cursor-pointer hover:shadow-lg mt-4">
                  <PDFViewer pdfUrl={userData?.installer?.user_agreement} />
                </Box>
              </VStack>
            )}
            {userData && userData.installer && userData.installer.user_agreement && (
              <VStack w="full" className="bg-surface-layer-5 dark:bg-surface-dark-layer-5 border border-white/10 rounded-lg backdrop-blur-sm p-6">
                <HStack align="center" spacing={4} w="full">
                  <FileText className="w-8 h-8 text-amber-500" />
                  <Text fontSize={{ base: "24px", lg: "32px" }} fontWeight="bold" className="text-blue-50">
                    Installer Agreement
                  </Text>
                </HStack>
                <Text className="text-blue-50/70 mt-4">
                  You can review your agreement with your installer here, but the actual agreement will be sent to {userData && userData.email ? userData.email : "your email"} for
                  you to sign by {userData.installer ? userData.installer.company_name : "your installer"}.
                </Text>
                <Box w="full" className="bg-white rounded-lg shadow-lg cursor-pointer hover:shadow-lg mt-4">
                  <PDFViewer pdfUrl={userData.installer.user_agreement} />
                </Box>
              </VStack>
            )}
            {userData && userData.user_images && userData.user_images.length > 0 && (
              <VStack w="full" alignItems="flex-start" className="bg-surface-layer-5 dark:bg-surface-dark-layer-5 border border-white/10 rounded-lg backdrop-blur-sm p-6">
                <HStack align="center" spacing={4} w="full">
                  <Upload className="w-8 h-8 text-amber-500" />
                  <Text fontSize={{ base: "24px", lg: "32px" }} fontWeight="bold" className="text-blue-50">
                    Your Uploads
                  </Text>
                </HStack>
                <Grid templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }} gap={4} mt={4}>
                  {userData &&
                    userData.user_images &&
                    userData.user_images.map((e: string | null, i: number) => (
                      <Box
                        key={i}
                        p="20px"
                        className="bg-black/10 dark:bg-black/60 rounded-lg shadow-lg cursor-pointer hover:shadow-lg"
                        display="flex"
                        flexDir="column"
                        justifyContent="space-between"
                        onClick={() => {
                          setPictureSrc(e?.replace("&quot;", "") || "");
                          pictureOnOpen();
                        }}
                      >
                        <Image
                          src={e?.replace("[", "").replace("&quot;]", "") || "/api/placeholder/400/320"}
                          alt={`Upload ${i + 1}`}
                          width={160}
                          height={180}
                          className="rounded-lg"
                        />
                        <Text className="text-white mt-2">{`Upload ${i + 1}`}</Text>
                      </Box>
                    ))}
                </Grid>
              </VStack>
            )}
          </VStack>
        </VStack>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          size="md"
          //@ts-ignore
          finalFocusRef={btnRef}
        >
          <DrawerContent fontFamily="'eurostile', sans-serif" className="bg-[#121212] text-blue-50">
            <DrawerCloseButton className="text-blue-50" />
            <DrawerHeader className="text-blue-50">
              <HStack align="center" spacing={4}>
                <Upload className="w-6 h-6" />
                <Text>Upload Documents</Text>
              </HStack>
            </DrawerHeader>
            <DrawerBody bgColor="#121212">
              <VStack align="start" mt="10px" spacing={6}>
                <Text className="text-blue-50/70">
                  Welcome to our secure document upload portal! This feature allows you to effortlessly share important documents with our team, ensuring a smooth and efficient
                  process towards installing your new solar panel system. Here's how you can get started:
                </Text>
                <VStack w="full" mt="40px" spacing={4}>
                  <UploadArea
                    dragActive={dragActive}
                    uploadedFile={uploadedFile}
                    fileInputRef={fileInputRef}
                    handleDrag={handleDrag}
                    handleDrop={handleDrop}
                    handleFileInput={handleFileInput}
                    setUploadedFile={setUploadedFile}
                  />
                </VStack>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <PictureModal src={pictureSrc || "/api/placeholder/800/600"} pictureIsOpen={pictureIsOpen} pictureOnClose={pictureOnClose} />
      </Box>
    </Sidebar>
  );
};

export default UserDocumentsPage;

const PictureModal = ({ src, pictureIsOpen, pictureOnClose }: { src: string; pictureIsOpen: boolean; pictureOnClose: () => void }) => {
  return (
    <Modal isOpen={pictureIsOpen} onClose={pictureOnClose} isCentered>
      <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
      <ModalContent w="full" maxW="800px" pt="40px" resize="both" bgColor="#121212">
        <ModalCloseButton className="text-white bg-[#121212]" />
        <ModalBody className="bg-[#121212]">
          <Image src={src} alt="Uploaded Image" width={800} height={600} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
