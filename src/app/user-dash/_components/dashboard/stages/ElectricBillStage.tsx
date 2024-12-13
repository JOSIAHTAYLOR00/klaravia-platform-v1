"use client";

import { VStack, HStack, Box, Text, Image } from "@chakra-ui/react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { AlertCircle, CheckCircle, Clock } from "lucide-react";
import { StageContentProps } from "../../../_types/dashboard";
import { ProjectStatus, PaymentMethod } from "@/API";
import { LoanOptionsComponent } from "../loanoptions/LoanOptionsComponent";
import { DocumentUpload } from "../upload/DocumentUpload";

export const ElectricBillStage = ({ userData, projectStatus, projectStatusIndex, setFilesHaveBeenUploaded, setErrorUploadingImage }: StageContentProps) => {
  // if (userData.payment_method === PaymentMethod.CASH) {
  return (
    <CashView
      {...{
        projectStatus,
        projectStatusIndex,
        setFilesHaveBeenUploaded,
        setErrorUploadingImage,
      }}
    />
  );
  // }

  // return <LoanView installer={userData.installer?.company_name} />;
};

const CashView = ({
  projectStatus,
  projectStatusIndex,
  setFilesHaveBeenUploaded,
  setErrorUploadingImage,
}: Pick<StageContentProps, "projectStatus" | "projectStatusIndex" | "setFilesHaveBeenUploaded" | "setErrorUploadingImage">) => {
  const isAwaitingReview =
    projectStatus === ProjectStatus.AWAITING_ELECTRIC_BILL_REVIEW || (projectStatusIndex === 0 && projectStatus !== ProjectStatus.ELECTRIC_BILL_ISSUE_AWAITING_CUSTOMER_RE_UPLOAD);

  const needsReupload = projectStatus === ProjectStatus.ELECTRIC_BILL_ISSUE_AWAITING_CUSTOMER_RE_UPLOAD;

  const isReviewComplete = projectStatus === ProjectStatus.ELECTRIC_BILL_REVIEWED_AWAITING_TRUE_DESIGN_PAYMENT || projectStatusIndex > 0;

  return (
    <VStack mt="40px" spacing={6}>
      <Box w="full" className="bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm" p={{ base: "6", lg: "8" }}>
        {isAwaitingReview && <BillReviewContent />}

        {needsReupload && <ReuploadContent setFilesHaveBeenUploaded={setFilesHaveBeenUploaded} setErrorUploadingImage={setErrorUploadingImage} />}

        {isReviewComplete && <ReviewCompletedContent />}
      </Box>
    </VStack>
  );
};

const BillReviewContent = () => (
  <HStack w="full" flexDirection={{ base: "column", xl: "row" }} spacing={{ base: 6, lg: 8 }}>
    <Box className="relative w-full max-w-xl overflow-hidden rounded-lg" h={{ base: "200px", lg: "300px" }}>
      <Image borderRadius="12px" className="object-cover w-full h-full" src="https://speedyelectricac.com/wp-content/uploads/2020/02/electric-bill.jpg" alt="Electric Bill" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </Box>

    <VStack flex="1" align="start" spacing={6}>
      <VStack align="start" spacing={3}>
        <Text fontSize={{ base: "2xl", lg: "3xl" }} fontWeight="bold" className="text-blue-50">
          Analyzing Your Energy Usage
        </Text>
        <Text className="text-blue-50/70">We're carefully reviewing your electric bill to design the perfect solar system for your home.</Text>
      </VStack>

      <AnalysisChecklist />
      <EstimatedTime />
    </VStack>
  </HStack>
);

const AnalysisChecklist = () => (
  <VStack w="full" align="start" spacing={4}>
    {["Calculating average monthly consumption", "Identifying peak usage patterns", "Determining optimal system size", "Estimating potential savings"].map((item, index) => (
      <HStack key={index} spacing={3}>
        <CheckCircle className="w-5 h-5 text-amber-500" />
        <Text className="text-blue-50/70">{item}</Text>
      </HStack>
    ))}
  </VStack>
);

const EstimatedTime = () => (
  <Box w="full" className="bg-amber-500/10 border border-amber-500/20 rounded-lg" p={4}>
    <HStack spacing={3}>
      <Clock className="w-5 h-5 text-amber-500" />
      <Text className="text-amber-500">Estimated review completion: 1hr</Text>
    </HStack>
  </Box>
);

const ReuploadContent = ({ setFilesHaveBeenUploaded, setErrorUploadingImage }: Pick<StageContentProps, "setFilesHaveBeenUploaded" | "setErrorUploadingImage">) => (
  <VStack w="full" spacing={6}>
    <VStack spacing={3}>
      <AlertCircle className="w-12 h-12 text-red-500" />
      <Text fontSize={{ base: "xl", lg: "2xl" }} fontWeight="bold" className="text-blue-50 text-center">
        We weren't able to review your electric bill
      </Text>
      <Text className="text-blue-50/70 text-center">
        Please upload new photos of your electric bill, and if you have any questions, please reach out to us in your support chat.
      </Text>
    </VStack>

    <Box w="full" className="bg-white/5 border border-white/10 rounded-lg" p={6}>
      <DocumentUpload />
    </Box>
  </VStack>
);

const ReviewCompletedContent = () => (
  <HStack w="full" justifyContent="space-between" flexDirection={{ base: "column", lg: "row" }} spacing={4}>
    <VStack align="start" spacing={3}>
      <Text fontSize={{ base: "xl", lg: "2xl" }} fontWeight="bold" className="text-blue-50">
        Your electric bill has been reviewed!
      </Text>
      <Text className="text-blue-50/70">
        We've analyzed your usage patterns and confirmed your solar design requirements. You're now ready to proceed with your professional solar design.
      </Text>
    </VStack>
    <FaRegCircleCheck className="w-10 h-10 text-green-500 flex-shrink-0" />
  </HStack>
);

const LoanView = ({ installer }: { installer?: string | null }) => (
  <>
    <BillLoanStatus installer={installer} />
    <LoanOptions />
  </>
);

const BillLoanStatus = ({ installer }: { installer?: string | null }) => (
  <VStack mt="40px" shadow="lg" bgColor="white" borderRadius="12px" justifyContent="center" p="20px">
    <HStack w="full" flexDirection={{ base: "column", lg: "row" }} px="20px">
      <VStack w="full">
        <VStack w="full" align="start" spacing={3}>
          <Text fontSize={{ base: "xl", lg: "2xl" }} fontWeight="bold" className="text-blue-50">
            Your electric bill is being reviewed
          </Text>
          <Text className="text-blue-50/70">We will notify you once we have finished reviewing your electric bill. In the meantime, apply for one of the loans listed below.</Text>
        </VStack>
      </VStack>
      <FaRegCircleCheck size="40px" />
    </HStack>
  </VStack>
);

const LoanOptions = () => {
  // This component would be implemented in a separate file
  // due to its complexity and reusability
  return <LoanOptionsComponent />;
};
