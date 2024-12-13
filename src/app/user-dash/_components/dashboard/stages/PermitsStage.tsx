// components/Dashboard/Stages/PermitsStage.tsx
"use client";

import { VStack, HStack, Box, Text, Fade } from "@chakra-ui/react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FileText, Clock } from "lucide-react";
import { ProjectStatus } from "@/API";
import { StageContentProps } from "@/app/user-dash/_types/dashboard";
import Image from "next/image";

export const PermitsStage = ({ userData, projectStatus, projectStatusIndex }: StageContentProps) => {
  if (projectStatusIndex < 4) {
    return <PendingPermitsView />;
  }

  return <PermitsContent status={projectStatus} projectStatusIndex={projectStatusIndex} installerName={userData?.installer?.company_name || "your installer"} />;
};

const PendingPermitsView = () => (
  <Fade in={true} transition={{ enter: { duration: 0.9 } }}>
    <VStack mt="40px" spacing={6}>
      <Box w="full" className="bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm" p={{ base: "6", lg: "8" }}>
        <HStack w="full" flexDirection={{ base: "column", "2xl": "row" }} spacing={{ base: 6, lg: 8 }}>
          <Box className="relative w-full max-w-xl overflow-hidden rounded-lg" h={{ base: "200px", lg: "300px" }}>
            <Image
              width="100"
              height="100"
              alt="documents & deposit page"
              style={{ borderRadius: "12px" }}
              className="object-cover w-full h-full"
              src="https://klaravia-public-assets.s3.us-east-2.amazonaws.com/document-review.jpeg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </Box>
          <VStack flex="1" align="start" spacing={6}>
            <Text fontSize={{ base: "xl", lg: "2xl" }} fontWeight="bold" className="text-blue-50">
              Permits & Approvals
            </Text>
            <Text className="text-blue-50/70">After your site survey is complete, we'll handle all necessary permits and approvals with local authorities.</Text>
          </VStack>
        </HStack>
      </Box>
    </VStack>
  </Fade>
);

const PermitsContent = ({ status, projectStatusIndex, installerName }: { status?: ProjectStatus; projectStatusIndex: number; installerName?: string }) => {
  switch (status) {
    case ProjectStatus.SITE_APPROVED_AWAITING_ENGINEERING_DOCS:
      return <EngineeringDocsView installerName={installerName} />;

    case ProjectStatus.ENGINEERING_DOCS_FINISHED_AWAITING_PERMITS:
      return <PermitProcessingView />;

    case ProjectStatus.PERMITS_NOT_OBTAINED_AWAITING_RESOLUTION:
      return <PermitIssueView />;

    case ProjectStatus.PERMITS_OBTAINED_AWAITING_SECOND_PAYMENT:
      return <PermitsReadyView />;

    default:
      if (projectStatusIndex > 4) {
        return <PermitsCompletedView />;
      }
      return null;
  }
};

const EngineeringDocsView = ({ installerName }: { installerName?: string }) => (
  <VStack spacing={6} align="start">
    <Text fontSize="2xl" fontWeight="bold" className="text-blue-50">
      Preparing Engineering Documents
    </Text>
    <Text className="text-blue-50/70">{installerName || "Our"} engineering team is creating technical documentation for permit applications.</Text>
    <DocumentProgress />
  </VStack>
);

const DocumentProgress = () => (
  <VStack w="full" className="bg-white/5 rounded-lg" p={6} spacing={4}>
    {[
      { text: "Structural Analysis", done: true },
      { text: "Electrical Diagrams", progress: 75 },
      { text: "Equipment Specs", progress: 50 },
      { text: "Safety Plans", progress: 25 },
    ].map((item, index) => (
      <Box key={index} w="full">
        <HStack justify="space-between">
          <Text className="text-blue-50/70">{item.text}</Text>
          <Text className="text-amber-500">{item.done ? "100%" : `${item.progress}%`}</Text>
        </HStack>
        <Box className="w-full h-2 bg-white/10 rounded-full mt-2">
          <Box className="h-full bg-gradient-to-r from-amber-500 to-amber-600" width={item.done ? "100%" : `${item.progress}%`} />
        </Box>
      </Box>
    ))}
  </VStack>
);

const PermitProcessingView = () => (
  <VStack spacing={6} align="start">
    <HStack spacing={4}>
      <Box className="bg-amber-500/20 p-3 rounded-full">
        <FileText className="w-8 h-8 text-amber-500" />
      </Box>
      <VStack align="start" spacing={1}>
        <Text fontSize="2xl" fontWeight="bold" className="text-blue-50">
          Permit Applications Submitted
        </Text>
        <Text className="text-blue-50/70">Documentation submitted to local authorities for review.</Text>
      </VStack>
    </HStack>
    <PermitTracker />
  </VStack>
);

const PermitTracker = () => (
  <Box w="full" className="bg-white/5 rounded-lg" p={6}>
    <VStack align="start" spacing={4}>
      {["Building Permit", "Electrical Permit", "HOA Approval", "Utility Interconnection"].map((item) => (
        <HStack key={item} spacing={3}>
          <FaRegCircleCheck className="w-5 h-5 text-amber-500" />
          <Text className="text-blue-50/70">{item}</Text>
        </HStack>
      ))}
    </VStack>
  </Box>
);

const PermitIssueView = () => (
  <VStack spacing={6} align="start">
    <Text fontSize="2xl" fontWeight="bold" className="text-blue-50">
      Permit Processing Delay
    </Text>
    <Text className="text-blue-50/70">We're working with authorities to address their questions. This typically resolves within 5-10 business days.</Text>
  </VStack>
);

const PermitsReadyView = () => (
  <VStack spacing={6} align="start">
    <Text fontSize="2xl" fontWeight="bold" className="text-blue-50">
      All Permits Approved!
    </Text>
    <Text className="text-blue-50/70">Great news! All permits are granted. Ready to proceed with installation.</Text>
  </VStack>
);

const PermitsCompletedView = () => (
  <HStack w="full" justifyContent="space-between">
    <Text fontSize="26px" fontWeight="bold" className="text-blue-50">
      All permits and approvals granted.
    </Text>
    <FaRegCircleCheck size="40px" color="#38A169" />
  </HStack>
);
