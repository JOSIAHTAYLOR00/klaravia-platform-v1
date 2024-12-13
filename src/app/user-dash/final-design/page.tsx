"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, VStack, Text, Button, HStack, Flex, Spacer, useColorModeValue } from "@chakra-ui/react";
import { FileText, Download, Info, AlertCircle } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import PDFViewer from "../documents/_components/PDFViewer";
import { ProjectStatus } from "@/API";
import { Sidebar } from "@/app/components/user-sidebar-with-header/Sidebar";

const FinalDesignPage = () => {
  const [showPDF, setShowPDF] = useState(false);
  const { userData } = useAuth();

  return (
    <Sidebar>
      <Box w="full" minH="92vh" p={{ base: "10px", lg: "40px" }} className="bg-surface-layer-5 dark:bg-surface-dark-layer-5 rounded-lg">
        {userData && userData.finalDesign && userData.finalDesign.designPdf && (
          <VStack spacing={8} align="start" w="full">
            <Text fontSize={{ base: "2xl", lg: "3xl" }} fontWeight="bold" className="text-blue-50">
              Your Final Solar Design
            </Text>
            <Text className="text-blue-50/70">
              Congratulations! Your custom solar design is complete and ready for your review. Please download the PDF to view the full details.
            </Text>

            <Box w="full" className="bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm" p={{ base: "6", lg: "8" }}>
              <VStack spacing={6} align="start">
                <HStack spacing={4}>
                  <div className="bg-green-500/20 p-3 rounded-full">
                    <FileText className="w-8 h-8 text-green-500" />
                  </div>
                  <VStack align="start" spacing={1}>
                    <Text fontSize={{ base: "xl", lg: "2xl" }} fontWeight="bold" className="text-blue-50">
                      Final Design PDF
                    </Text>
                    <Text className="text-blue-50/70">Your final design document is ready for download.</Text>
                  </VStack>
                </HStack>

                <Flex w="full" align="center">
                  <Spacer />
                  <Button
                    onClick={() => setShowPDF(true)}
                    className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3 rounded-lg 
                hover:from-amber-600 hover:to-amber-700 transition-all duration-300"
                  >
                    <Download className="mr-2" />
                    Download PDF
                  </Button>
                </Flex>
              </VStack>
            </Box>

            {showPDF && (
              <AnimatePresence>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                  <Box className="bg-white rounded-lg shadow-lg w-full max-w-4xl h-full max-h-[80vh] overflow-auto">
                    <VStack spacing={6} align="start" p={8}>
                      <HStack spacing={4}>
                        <div className="bg-green-500/20 p-3 rounded-full">
                          <FileText className="w-8 h-8 text-green-500" />
                        </div>
                        <VStack align="start" spacing={1}>
                          <Text fontSize={{ base: "xl", lg: "2xl" }} fontWeight="bold" className="text-gray-800">
                            Final Solar Design
                          </Text>
                          <Text className="text-gray-600">PDF Document</Text>
                        </VStack>
                      </HStack>

                      <Box w="full" h="full">
                        <PDFViewer pdfUrl={userData?.finalDesign?.designPdf} />
                      </Box>
                    </VStack>
                  </Box>
                </motion.div>
              </AnimatePresence>
            )}
          </VStack>
        )}
        {!userData?.finalDesign?.designPdf &&
        (userData?.projectStatus === ProjectStatus.TRUE_DESIGN_PAYMENT_SUCCEEDED_AWAITING_TRUE_DESIGN_ORDER ||
          userData?.projectStatus === ProjectStatus.TRUE_DESIGN_ORDER_COMPLETED_AWAITING_FINAL_DESIGN_CREATION) ? (
          <VStack w="full" minH="70vh" maxW="1440px" justifyContent="center">
            <HStack align="center" spacing={4}>
              <AlertCircle className="w-12 h-12 text-amber-500" />
              <Text fontSize={{ base: "2xl", lg: "3xl" }} fontWeight="bold" className="text-blue-50">
                Your Design is Still in Progress
              </Text>
            </HStack>
            <Text className="text-blue-50/70 mt-6">Your custom solar design is currently being prepared. We'll notify you as soon as it's ready for your review.</Text>
          </VStack>
        ) : (
          <VStack w="full" minH="70vh" maxW="1440px" justifyContent="center" spacing={6}>
            <HStack align="center" spacing={4}>
              <AlertCircle className="w-10 h-10 text-blue-500" />
              <Text fontSize={{ base: "2xl", lg: "3xl" }} fontWeight="bold" className="text-blue-50">
                Order Your Final Design
              </Text>
            </HStack>
            <Text className="text-blue-50/70 mt-4">
              You haven't ordered your final design yet. Please navigate to the "Design" tab on your progress tracker and place your order.
            </Text>
          </VStack>
        )}
      </Box>
    </Sidebar>
  );
};

export default FinalDesignPage;
