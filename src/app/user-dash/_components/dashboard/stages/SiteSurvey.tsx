"use client";

import { VStack, HStack, Box, Text, Button, Alert, AlertIcon, AlertTitle, AlertDescription, Heading, Fade } from "@chakra-ui/react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { Calendar, Clock, CheckCircle } from "lucide-react";
import { ProjectStatus } from "@/API";
import { StageContentProps } from "@/app/user-dash/_types/dashboard";
import Image from "next/image";

export const SiteSurveyStage = ({ userData, projectStatus, projectStatusIndex }: StageContentProps) => {
  if (projectStatusIndex < 3) {
    return <PendingSurveyView />;
  }

  return (
    <VStack mt="40px" spacing={6}>
      <Box w="full" className="bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm" p={{ base: "6", lg: "8" }}>
        <SiteSurveyContent
          status={projectStatus}
          projectStatusIndex={projectStatusIndex}
          installerName={userData?.installer?.company_name || "your installer"}
          installationDate={userData?.installation_date || "no date"}
        />
      </Box>
    </VStack>
  );
};

const PendingSurveyView = () => (
  <Fade in={true} transition={{ enter: { duration: 0.9 } }}>
    <VStack mt="40px" spacing={6}>
      <Box w="full" className="bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm" p={{ base: "6", lg: "8" }}>
        <HStack w="full" flexDirection={{ base: "column", "2xl": "row" }} spacing={{ base: 6, lg: 8 }}>
          <Box className="relative w-full max-w-xl overflow-hidden rounded-lg" h={{ base: "200px", lg: "300px" }}>
            <Image
              width="100"
              height="100"
              alt="Site Survey image"
              style={{ borderRadius: "12px" }}
              className="object-cover w-full h-full"
              src="https://klaravia-public-assets.s3.us-east-2.amazonaws.com/document-review.jpeg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </Box>
          <VStack flex="1" align="start" spacing={6}>
            <Text fontSize={{ base: "xl", lg: "2xl" }} fontWeight="bold" className="text-blue-50">
              Site Survey
            </Text>
            <Text className="text-blue-50/70">After contract signing and deposit, a professional surveyor will visit your property to finalize installation details.</Text>
          </VStack>
        </HStack>
      </Box>
    </VStack>
  </Fade>
);

const SiteSurveyContent = ({
  status,
  projectStatusIndex,
  installerName,
  installationDate,
}: {
  status?: ProjectStatus;
  projectStatusIndex: number;
  installerName?: string;
  installationDate?: string;
}) => {
  if (projectStatusIndex > 3) {
    return <SiteApprovedView />;
  }

  switch (status) {
    case ProjectStatus.DEPOSIT_SUCCESSFUL_AWAITING_SITE_SURVEY_SCHEDULE:
      return <AwaitingScheduleView installerName={installerName} />;

    case ProjectStatus.SITE_SURVEY_SCHEDULED_AWAITING_SITE_VISIT:
      return <SurveyScheduledView installerName={installerName} installationDate={installationDate} />;

    case ProjectStatus.SITE_VISITED_AWAITING_SITE_APPROVAL:
      return <SurveyCompletedView installerName={installerName} />;

    case ProjectStatus.SITE_NOT_APPROVED_CHANGE_ORDER_REQUIRED:
      return <ChangeOrderRequiredView />;

    case ProjectStatus.CHANGE_ORDER_SUBMITTED_AWAITING_CUSTOMER_SIGNATURE:
      return <ChangeOrderReadyView />;

    case ProjectStatus.CUSTOMER_SIGNATURE_OBTAINED_AWAITING_ENGINEERING_DOCS:
      return <ChangeOrderSignedView installerName={installerName} />;

    case ProjectStatus.SITE_NOT_APPROVED_CANNOT_SERVICE:
      return <SiteNotApprovedView />;

    case ProjectStatus.SITE_APPROVED_AWAITING_ENGINEERING_DOCS:
      return <SiteApprovedView />;

    default:
      return null;
  }
};

const AwaitingScheduleView = ({ installerName }: { installerName?: string }) => (
  <VStack spacing={6} align="start">
    <Text fontSize={{ base: "xl", lg: "2xl" }} fontWeight="bold" className="text-blue-50">
      Scheduling Your Site Survey
    </Text>
    <Text className="text-blue-50/70">
      We're coordinating with {installerName || "your installer"} to schedule your site survey. You'll be contacted shortly to arrange a convenient time.
    </Text>
    <ExpectationsList />
  </VStack>
);

const ExpectationsList = () => (
  <Box w="full" className="bg-white/5 rounded-lg" p={6}>
    <VStack align="start" spacing={4}>
      <Text className="text-blue-50" fontWeight="semibold">
        What to Expect:
      </Text>
      {["Detailed roof inspection", "Electrical system assessment", "Shading analysis", "Installation path planning", "Equipment placement confirmation"].map((item, index) => (
        <HStack key={index} spacing={3}>
          <CheckCircle className="w-5 h-5 text-amber-500" />
          <Text className="text-blue-50/70">{item}</Text>
        </HStack>
      ))}
    </VStack>
  </Box>
);

const SurveyScheduledView = ({ installerName, installationDate }: { installerName?: string; installationDate?: string }) => (
  <VStack spacing={6} align="start">
    <HStack spacing={4}>
      <div className="bg-green-500/20 p-3 rounded-full">
        <Calendar className="w-8 h-8 text-green-500" />
      </div>
      <VStack align="start" spacing={1}>
        <Text fontSize={{ base: "xl", lg: "2xl" }} fontWeight="bold" className="text-blue-50">
          Site Survey Scheduled
        </Text>
        <Text className="text-blue-50/70">
          {installationDate
            ? `Scheduled for ${new Date(installationDate).toLocaleDateString()} at ${new Date(installationDate).toLocaleTimeString()}`
            : "Date and time to be confirmed"}
        </Text>
      </VStack>
    </HStack>
    <PreparationChecklist />
  </VStack>
);

const PreparationChecklist = () => (
  <Box w="full" className="bg-amber-500/10 border border-amber-500/20 rounded-lg" p={4}>
    <VStack align="start" spacing={3}>
      <Text className="text-amber-500" fontWeight="semibold">
        Preparation Checklist:
      </Text>
      {["Ensure access to your electrical panel", "Clear access to your roof/attic", "Secure any pets", "Allow 2-3 hours for the survey"].map((item, index) => (
        <HStack key={index} spacing={3}>
          <CheckCircle className="w-4 h-4 text-amber-500" />
          <Text className="text-amber-500">{item}</Text>
        </HStack>
      ))}
    </VStack>
  </Box>
);

const SurveyCompletedView = ({ installerName }: { installerName?: string }) => (
  <VStack spacing={6} align="start">
    <Text fontSize="26px" fontWeight="bold" className="text-blue-50">
      Site Survey Completed
    </Text>
    <Text className="text-blue-50/70">{installerName || "Your installer"} is reviewing the survey results to confirm everything is ready for installation.</Text>
    <ReviewProgress />
  </VStack>
);

const ReviewProgress = () => (
  <Box w="full" className="bg-white/5 rounded-lg" p={6}>
    <VStack align="start" spacing={4}>
      <Text className="text-blue-50" fontWeight="semibold">
        Survey Results Under Review:
      </Text>
      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
        <div className="w-3/4 h-full bg-gradient-to-r from-amber-500 to-amber-600"></div>
      </div>
      <Text className="text-blue-50/70">Estimated completion: 1-2 business days</Text>
    </VStack>
  </Box>
);

const ChangeOrderRequiredView = () => (
  <VStack spacing={6}>
    <Alert status="warning">
      <AlertIcon />
      <VStack align="start" spacing={2}>
        <AlertTitle>Site Survey Results: Changes Required</AlertTitle>
        <AlertDescription>Based on the site survey, some adjustments are necessary. Our team will contact you with details.</AlertDescription>
      </VStack>
    </Alert>
  </VStack>
);

const ChangeOrderReadyView = () => (
  <VStack spacing={6} align="start">
    <Text fontSize="26px" fontWeight="bold" className="text-blue-50">
      Change Order Ready
    </Text>
    <Text className="text-blue-50/70">Please review and sign the updated agreement based on the site survey results.</Text>
    <Button className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3 rounded-lg">Review Changes</Button>
  </VStack>
);

const ChangeOrderSignedView = ({ installerName }: { installerName?: string }) => (
  <VStack spacing={6} align="start">
    <Text fontSize="26px" fontWeight="bold" className="text-blue-50">
      Change Order Signed
    </Text>
    <Text className="text-blue-50/70">{installerName || "Your installer"}'s engineering team is preparing final installation documentation.</Text>
    <EngineeringTimeline />
  </VStack>
);

const EngineeringTimeline = () => (
  <Box w="full" className="bg-white/5 rounded-lg" p={6}>
    <VStack align="start" spacing={4}>
      <Text className="text-blue-50" fontWeight="semibold">
        Next Steps:
      </Text>
      {["Engineering review", "Technical documentation", "System specifications", "Design modifications"].map((item, index) => (
        <HStack key={index} spacing={3}>
          <Clock className="w-5 h-5 text-amber-500" />
          <Text className="text-blue-50/70">{item}</Text>
        </HStack>
      ))}
    </VStack>
  </Box>
);

const SiteNotApprovedView = () => (
  <VStack spacing={6}>
    <Alert status="error">
      <AlertIcon />
      <VStack align="start" spacing={2}>
        <AlertTitle>Unable to Proceed with Installation</AlertTitle>
        <AlertDescription>Due to technical limitations, we cannot proceed with installation. A representative will contact you to discuss alternatives.</AlertDescription>
      </VStack>
    </Alert>
  </VStack>
);

const SiteApprovedView = () => (
  <HStack w="full" justifyContent="space-between">
    <Text fontSize="26px" fontWeight="bold">
      Your site has passed inspection.
    </Text>
    <FaRegCircleCheck size="40px" color="#38A169" />
  </HStack>
);
