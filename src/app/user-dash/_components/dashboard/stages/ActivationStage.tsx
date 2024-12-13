import { VStack, HStack, Box, Text, Alert, AlertIcon, AlertTitle, AlertDescription, Fade, useColorModeValue } from "@chakra-ui/react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { Shield, Clock, Info } from "lucide-react";
import { ProjectStatus } from "@/API";
import { StageContentProps } from "@/app/user-dash/_types/dashboard";
import Image from "next/image";

export const ActivationStage = ({ userData, projectStatus, projectStatusIndex }: StageContentProps) => {
  return (
    <Fade in={true} transition={{ enter: { duration: 0.9 } }}>
      <VStack mt="40px" spacing={6}>
        <Box w="full" className="bg-surface-layer-5 dark:bg-surface-dark-layer-5 border border-white/10 rounded-lg backdrop-blur-sm" p={{ base: "6", lg: "8" }}>
          {projectStatusIndex < 7 ? <PendingActivationView /> : <ActivationContent status={projectStatus} installerName={userData?.installer?.company_name || "your installer"} />}
        </Box>
      </VStack>
    </Fade>
  );
};

const PendingActivationView = () => (
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
        Utility Approval
      </Text>
      <Text className="text-blue-50/70">After your solar installation is complete, we'll work with the utility company to get your system approved and connected to the grid.</Text>
    </VStack>
  </HStack>
);

const ActivationContent = ({ status, installerName }: { status?: ProjectStatus; installerName?: string }) => {
  switch (status) {
    case ProjectStatus.INSTALL_COMPLETED_AWAITING_UTILITY_APPROVAL:
      return <UtilityApprovalView installerName={installerName} />;

    case ProjectStatus.UTILITY_APPROVAL_ISSUE_AWAITING_RESOLUTION:
      return <UtilityIssueView installerName={installerName} />;

    case ProjectStatus.UTILITY_APPROVED_AWAITING_SYSTEM_TURN_ON:
      return <ReadyForActivationView installerName={installerName} />;

    case ProjectStatus.SYSTEM_NOT_TURNED_ON_AWAITING_RESOLUTION:
      return <ActivationIssueView installerName={installerName} />;

    case ProjectStatus.SYSTEM_TURNED_ON:
      return <SystemActivatedView />;

    default:
      return null;
  }
};

const UtilityApprovalView = ({ installerName }: { installerName?: string }) => (
  <VStack spacing={6} align="start">
    <HStack spacing={4}>
      <Box className="bg-amber-500/20 p-3 rounded-full">
        <Shield className="w-8 h-8 text-amber-500" />
      </Box>
      <Text fontSize="2xl" fontWeight="bold" className="text-blue-50">
        Awaiting Utility Approval
      </Text>
    </HStack>
    <Text className="text-blue-50/70">{installerName || "Your installer"} is coordinating with the utility company.</Text>
    <ApprovalSteps />
  </VStack>
);

const ApprovalSteps = () => (
  <VStack className="bg-white/5 rounded-lg" p={6} spacing={4} align="start">
    {["Utility inspection", "Agreement review", "Meter installation", "Final testing"].map((step) => (
      <HStack key={step} spacing={3}>
        <FaRegCircleCheck className="w-5 h-5 text-amber-500" />
        <Text className="text-blue-50/70">{step}</Text>
      </HStack>
    ))}
  </VStack>
);

const UtilityIssueView = ({ installerName }: { installerName?: string }) => (
  <Alert status="warning" borderRadius="12px">
    <AlertIcon />
    <VStack align="start" spacing={2}>
      <AlertTitle>Utility Approval Delay</AlertTitle>
      <AlertDescription>{installerName || "Your installer"} is working with the utility company to resolve pending items.</AlertDescription>
    </VStack>
  </Alert>
);

const ReadyForActivationView = ({ installerName }: { installerName?: string }) => (
  <VStack spacing={6} align="start">
    <Text fontSize="2xl" fontWeight="bold" className="text-green-500">
      Ready for Activation!
    </Text>
    <Text className="text-blue-50/70">{installerName || "Your installer"} will activate your system shortly.</Text>
    <Box className="bg-amber-500/10 rounded-lg" p={4}>
      <HStack spacing={3}>
        <Clock className="w-5 h-5 text-amber-500" />
        <Text className="text-amber-500">Estimated activation: 1-2 business days</Text>
      </HStack>
    </Box>
  </VStack>
);

const ActivationIssueView = ({ installerName }: { installerName?: string }) => (
  <Alert status="error" borderRadius="12px">
    <AlertIcon />
    <VStack align="start" spacing={2}>
      <AlertTitle>Activation Issue</AlertTitle>
      <AlertDescription>{installerName || "Your installer"} is resolving an activation issue.</AlertDescription>
    </VStack>
  </Alert>
);

const SystemActivatedView = () => (
  <VStack spacing={6} align="start">
    <Text fontSize="3xl" fontWeight="bold" className="text-green-500">
      Congratulations!
    </Text>
    <Text fontSize="xl" className="text-blue-50">
      Your Solar System is Now Active
    </Text>
    <Text className="text-blue-50/70">You're now producing clean, renewable energy!</Text>
  </VStack>
);
