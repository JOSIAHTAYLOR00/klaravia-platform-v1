"use client";

import { VStack, HStack, Box, Text, Button, Link, Checkbox, Alert, AlertIcon, AlertTitle, AlertDescription, Heading, Fade } from "@chakra-ui/react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { ProjectStatus } from "@/API";
import { DocumentStageProps } from "@/app/user-dash/_types/documents";
import { useState } from "react";
import { StripeComponent } from "../payments/StripeComponent";
import Image from "next/image";

export const DocumentsStage = ({ userData, projectStatus, projectStatusIndex, showStripePayment, setShowStripePayment }: DocumentStageProps) => {
  const [userSignedInstallerAgreement, setUserSignedInstallerAgreement] = useState(false);
  const [showPaymentReq, setShowPaymentReq] = useState(false);

  const handleAgreementAcknowledgement = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserSignedInstallerAgreement(e.target.checked);
  };

  const handleUserDownpaymentSelected = () => {
    if (userSignedInstallerAgreement) {
      setShowPaymentReq(false);
      setShowStripePayment(true);
    } else {
      setShowPaymentReq(true);
      setShowStripePayment(false);
    }
  };

  if (projectStatusIndex < 2) {
    return <PendingDocumentsView />;
  }

  return (
    <VStack spacing={6}>
      <Box w="full" mt="40px" className="bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm" p={{ base: "6", lg: "8" }}>
        <DocumentsContent
          projectStatus={projectStatus}
          projectStatusIndex={projectStatusIndex}
          userData={userData}
          showStripePayment={showStripePayment}
          setShowStripePayment={setShowStripePayment}
          handleUserDownpaymentSelected={handleUserDownpaymentSelected}
          userSignedInstallerAgreement={userSignedInstallerAgreement}
          handleAgreementAcknowledgement={handleAgreementAcknowledgement}
        />
      </Box>
      {showPaymentReq && <PaymentRequirementAlert installerName={userData.installer?.company_name} />}
    </VStack>
  );
};

const PendingDocumentsView = () => (
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
              Documents & Deposit
            </Text>
            <Text className="text-blue-50/70">Once your design is approved, you'll receive your contract for review and can submit your initial deposit.</Text>
          </VStack>
        </HStack>
      </Box>
    </VStack>
  </Fade>
);

const DocumentsContent = ({
  projectStatus,
  projectStatusIndex,
  userData,
  showStripePayment,
  setShowStripePayment,
  handleUserDownpaymentSelected,
  userSignedInstallerAgreement,
  handleAgreementAcknowledgement,
}: {
  projectStatus?: ProjectStatus;
  projectStatusIndex: number;
  userData: any;
  showStripePayment: boolean;
  setShowStripePayment: (val: boolean) => void;
  handleUserDownpaymentSelected: () => void;
  userSignedInstallerAgreement: boolean;
  handleAgreementAcknowledgement: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  if (projectStatusIndex > 2) {
    return <DocumentsCompletedView />;
  }

  switch (projectStatus) {
    case ProjectStatus.CUSTOMER_APPROVED_FINAL_DESIGN_AWAITING_INSTALLER_AGREEMENT_SIGNATURE:
      return (
        <VStack w="full">
          <ContractSigningSection installerName={userData.installer?.company_name} userEmail={userData.email} handleAgreementAcknowledgement={handleAgreementAcknowledgement} />
          <DepositSection showStripePayment={showStripePayment} handleUserDownpaymentSelected={handleUserDownpaymentSelected} />
        </VStack>
      );

    case ProjectStatus.DEPOSIT_UNSUCCESSFUL_AWAITING_RESOLUTION:
      return <DepositFailureView showStripePayment={showStripePayment} setShowStripePayment={setShowStripePayment} />;

    case ProjectStatus.DEPOSIT_SUCCESSFUL_AWAITING_SITE_SURVEY_SCHEDULE:
      return <DocumentsCompletedView />;

    default:
      return null;
  }
};

const ContractSigningSection = ({
  installerName,
  userEmail,
  handleAgreementAcknowledgement,
}: {
  installerName?: string;
  userEmail?: string;
  handleAgreementAcknowledgement: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <VStack w="full" mt="60px" className="bg-white/5 rounded-lg" p="20px">
    <HStack w="full" flexDirection={{ base: "column", lg: "row" }} px="20px">
      <VStack w="full">
        <Heading w="full" mb="10px" fontSize="26px">
          Sign your contract
        </Heading>
        <VStack w="full" lineHeight={1}>
          <Text w="full">
            A contract from {installerName || "the installer you chose"} will be sent to {userEmail || "your email"} shortly. Please sign the agreement document and check the box
            below once you are finished.
          </Text>
        </VStack>
      </VStack>
    </HStack>
    <HStack w="full" justifyContent="center" mt="40px">
      <Text>I have signed the installer agreement with {installerName || "my installer"}.</Text>
      <Checkbox size="lg" onChange={handleAgreementAcknowledgement} />
    </HStack>
  </VStack>
);

const DepositSection = ({ showStripePayment, handleUserDownpaymentSelected }: { showStripePayment: boolean; handleUserDownpaymentSelected: () => void }) => (
  <VStack mt="20px" className="bg-white/5 rounded-lg" p="20px">
    <HStack w="full" flexDirection={{ base: "column", lg: "row" }} px="20px">
      <VStack w="full">
        <Heading w="full" mb="10px" fontSize="26px">
          Submit your deposit
        </Heading>
        <VStack w="full" alignItems="flex-start">
          <Text w="80%">
            This deposit is non-refundable and is used to pay the installation company for the work involved in performing a site survey and acquiring the necessary permits and
            approvals for your project. Check out our{" "}
            <Link color="blue.600" href="/terms-of-service#Payments-and-Fees">
              terms of service
            </Link>{" "}
            for more details.
          </Text>
        </VStack>
      </VStack>
      {!showStripePayment ? (
        <Button
          h="46px"
          minW="120px"
          className="bg-gradient-to-r from-amber-500 to-amber-600 text-white"
          _hover={{
            bg: "linear-gradient(270deg, rgba(241,206,63,1) 0%, rgba(247,187,42,1) 61%)",
            boxShadow: "lg",
          }}
          onClick={handleUserDownpaymentSelected}
        >
          Pay Now
        </Button>
      ) : (
        <VStack w="full" minH="600px" className="bg-white/5 rounded-lg" p="40px">
          <StripeComponent chargeAmount={300000} />
        </VStack>
      )}
    </HStack>
  </VStack>
);

const DepositFailureView = ({ showStripePayment, setShowStripePayment }: { showStripePayment: boolean; setShowStripePayment: (show: boolean) => void }) => (
  <VStack mt="40px" className="bg-white/5 rounded-lg" p="40px">
    <Alert status="error">
      <AlertIcon />
      <VStack align="start" spacing={2}>
        <AlertTitle>Deposit Payment Failed</AlertTitle>
        <AlertDescription>There was an issue processing your deposit. Please check your payment method and try again.</AlertDescription>
      </VStack>
    </Alert>

    {!showStripePayment ? (
      <Button mt={4} colorScheme="blue" onClick={() => setShowStripePayment(true)}>
        Retry Deposit Payment
      </Button>
    ) : (
      <VStack w="full" minH="600px" className="bg-white/5 rounded-lg" p="40px">
        <StripeComponent chargeAmount={300000} />
      </VStack>
    )}
  </VStack>
);

const DocumentsCompletedView = () => (
  <HStack w="full" justifyContent="space-between" flexDirection={{ base: "column", lg: "row" }} spacing={4}>
    <VStack align="start" spacing={3}>
      <Text fontSize={{ base: "xl", lg: "2xl" }} fontWeight="bold" className="text-blue-50">
        Deposit Submitted
      </Text>
      <Text className="text-blue-50/70">You've signed the installer agreement and we've received your deposit.</Text>
    </VStack>
    <FaRegCircleCheck className="w-10 h-10 text-green-500 flex-shrink-0" />
  </HStack>
);

const PaymentRequirementAlert = ({ installerName }: { installerName?: string | null }) => (
  <Box w="full" display="flex" justifyContent="center" pt="20px">
    <Text color="red.500">You must confirm that you've signed your installer agreement with {installerName || "your installer"} by checking the box above before continuing.</Text>
  </Box>
);
