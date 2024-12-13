// components/Dashboard/Stages/InstallationStage.tsx
"use client";

import { VStack, HStack, Box, Text, Alert, AlertIcon, AlertTitle, AlertDescription, Fade } from "@chakra-ui/react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { Calendar, Clock, CheckCircle } from "lucide-react";
import { ProjectStatus } from "@/API";
import { StageContentProps } from "@/app/user-dash/_types/dashboard";
import Image from "next/image";

export const InstallationStage = ({ userData, projectStatus, projectStatusIndex }: StageContentProps) => (
  <Fade in={true} transition={{ enter: { duration: 0.9 } }}>
    <VStack mt="40px" spacing={6}>
      <Box w="full" className="bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm" p={{ base: "6", lg: "8" }}>
        {projectStatusIndex < 6 ? (
          <PendingInstallView />
        ) : (
          <InstallContent
            status={projectStatus}
            installerName={userData?.installer?.company_name || "your installer"}
            installationDate={userData?.installation_date || "no installation date"}
          />
        )}
      </Box>
    </VStack>
  </Fade>
);

const PendingInstallView = () => (
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
        Installation Scheduling
      </Text>
      <Text className="text-blue-50/70">With all the necessary steps completed, we'll now schedule your installation appointment with the crew.</Text>
    </VStack>
  </HStack>
);

const InstallContent = ({ status, installerName, installationDate }: { status?: ProjectStatus; installerName?: string; installationDate?: string }) => {
  switch (status) {
    case ProjectStatus.SECOND_PAYMENT_SUCCESSFUL_AWAITING_INSTALL_SCHEDULE:
      return <SchedulingView installerName={installerName} />;

    case ProjectStatus.INSTALL_SCHEDULED_AWAITING_INSTALL:
      return <InstallScheduledView installerName={installerName} installationDate={installationDate} />;

    case ProjectStatus.INSTALL_NOT_COMPLETED_AWAITING_RESOLUTION:
      return <InstallIssueView />;

    case ProjectStatus.INSTALL_COMPLETED_AWAITING_UTILITY_APPROVAL:
      return <InstallCompletedView />;

    default:
      return null;
  }
};

const SchedulingView = ({ installerName }: { installerName?: string }) => (
  <VStack spacing={6} align="start">
    <Text fontSize="2xl" fontWeight="bold" className="text-blue-50">
      Scheduling Installation
    </Text>
    <Text className="text-blue-50/70">{installerName || "Your installer"} is coordinating your installation schedule.</Text>
    <InstallationSteps />
  </VStack>
);

const InstallationSteps = () => (
  <Box className="bg-white/5 rounded-lg" p={6}>
    <VStack align="start" spacing={4}>
      {["System installation", "Electrical connections", "Testing and inspection", "Utility interconnection"].map((step) => (
        <HStack key={step} spacing={3}>
          <CheckCircle className="w-5 h-5 text-amber-500" />
          <Text className="text-blue-50/70">{step}</Text>
        </HStack>
      ))}
    </VStack>
  </Box>
);

const InstallScheduledView = ({ installerName, installationDate }: { installerName?: string; installationDate?: string }) => (
  <VStack spacing={6} align="start">
    <HStack spacing={4}>
      <Box className="bg-green-500/20 p-3 rounded-full">
        <Calendar className="w-8 h-8 text-green-500" />
      </Box>
      <VStack align="start">
        <Text fontSize="2xl" fontWeight="bold" className="text-blue-50">
          Installation Scheduled
        </Text>
        <Text className="text-blue-50/70">{installationDate ? new Date(installationDate).toLocaleString() : "Date to be confirmed"}</Text>
      </VStack>
    </HStack>
    <PreparationSteps />
  </VStack>
);

const PreparationSteps = () => (
  <Box className="bg-amber-500/10 border-amber-500/20 rounded-lg" p={4}>
    <VStack align="start" spacing={3}>
      <Text className="text-amber-500" fontWeight="semibold">
        Preparation Steps:
      </Text>
      {["Clear access to work areas", "Secure pets during installation", "Allow 6-8 hours for completion"].map((step) => (
        <HStack key={step} spacing={3}>
          <CheckCircle className="w-4 h-4 text-amber-500" />
          <Text className="text-amber-500">{step}</Text>
        </HStack>
      ))}
    </VStack>
  </Box>
);

const InstallIssueView = () => (
  <Alert status="warning">
    <AlertIcon />
    <VStack align="start" spacing={2}>
      <AlertTitle>Installation Delay</AlertTitle>
      <AlertDescription>We've encountered an issue during installation. Our team is working to resolve it.</AlertDescription>
    </VStack>
  </Alert>
);

const InstallCompletedView = () => (
  <HStack justify="space-between">
    <Text fontSize="xl" fontWeight="bold" className="text-blue-50">
      Installation Complete!
    </Text>
    <FaRegCircleCheck size="40px" color="#38A169" />
  </HStack>
);
