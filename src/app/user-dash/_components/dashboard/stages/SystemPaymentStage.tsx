// components/Dashboard/Stages/SystemPaymentStage.tsx
"use client";

import { VStack, HStack, Box, Text, Button, Alert, AlertIcon, AlertTitle, AlertDescription, Fade } from "@chakra-ui/react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { StripeComponent } from "../payments/StripeComponent";
import { ProjectStatus } from "@/API";
import { StageContentProps } from "@/app/user-dash/_types/dashboard";
import Image from "next/image";

export const SystemPaymentStage = ({ userData, projectStatus, projectStatusIndex, showStripePayment, setShowStripePayment }: StageContentProps) => {
  if (projectStatusIndex < 5) return <PendingPaymentView />;

  if (projectStatusIndex === 5) {
    return (
      <Box w="full" className="bg-white/5 rounded-lg" p="40px">
        {userData?.final_payment_amount ? (
          <PaymentContent
            status={projectStatus}
            showStripePayment={showStripePayment}
            setShowStripePayment={setShowStripePayment}
            finalPaymentAmount={userData?.final_payment_amount}
          />
        ) : (
          <Box w="full" className="bg-red/40 rounded-lg" p="40px">
            Error - Cannot find final payment information
          </Box>
        )}
      </Box>
    );
  }

  return <PaymentCompletedView />;
};

const PendingPaymentView = () => (
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
              Second Payment
            </Text>
            <Text className="text-blue-50/70">After the permits have been obtained, you'll need to submit the final payment to complete the installation process.</Text>
          </VStack>
        </HStack>
      </Box>
    </VStack>
  </Fade>
);

const PaymentContent = ({
  status,
  showStripePayment,
  setShowStripePayment,
  finalPaymentAmount,
}: {
  status?: ProjectStatus;
  showStripePayment: boolean;
  setShowStripePayment: (show: boolean) => void;
  finalPaymentAmount?: number;
}) => {
  switch (status) {
    case ProjectStatus.PERMITS_OBTAINED_AWAITING_SECOND_PAYMENT:
      return <FinalPaymentView showStripePayment={showStripePayment} setShowStripePayment={setShowStripePayment} amount={finalPaymentAmount} />;

    case ProjectStatus.SECOND_PAYMENT_UNSUCCESSFUL_AWAITING_RESOLUTION:
      return <PaymentFailedView showStripePayment={showStripePayment} setShowStripePayment={setShowStripePayment} amount={finalPaymentAmount} />;

    default:
      return null;
  }
};

const FinalPaymentView = ({ showStripePayment, setShowStripePayment, amount }: { showStripePayment: boolean; setShowStripePayment: (show: boolean) => void; amount?: number }) => (
  <VStack spacing={6}>
    <Text fontSize="2xl" fontWeight="bold" className="text-blue-50">
      Submit Final Payment
    </Text>
    {showStripePayment && amount ? <StripeComponent chargeAmount={amount} /> : <PaymentDetails amount={amount} onPay={() => setShowStripePayment(true)} />}
  </VStack>
);

const PaymentDetails = ({ amount, onPay }: { amount?: number; onPay: () => void }) => (
  <VStack spacing={6} w="full">
    <Box className="bg-white/5 rounded-lg" p={6}>
      <HStack justify="space-between" className="border-b border-white/10 pb-4">
        <Text className="text-blue-50">Payment Amount</Text>
        <Text className="text-blue-50 font-bold">${amount?.toLocaleString()}</Text>
      </HStack>
      <Text className="text-blue-50/70 text-sm mt-4">Covers installation costs, equipment, labor, and interconnection fees.</Text>
    </Box>
    <Button onClick={onPay} className="bg-gradient-to-r from-amber-500 to-amber-600 text-white">
      Submit Payment
    </Button>
  </VStack>
);

const PaymentFailedView = ({ showStripePayment, setShowStripePayment, amount }: { showStripePayment: boolean; setShowStripePayment: (show: boolean) => void; amount?: number }) => (
  <VStack spacing={6}>
    <Alert status="error">
      <AlertIcon />
      <AlertTitle>Payment Failed</AlertTitle>
      <AlertDescription>Please check payment method and try again.</AlertDescription>
    </Alert>
    {showStripePayment && amount ? <StripeComponent chargeAmount={amount} /> : <Button onClick={() => setShowStripePayment(true)}>Retry Payment</Button>}
  </VStack>
);

const PaymentCompletedView = () => (
  <HStack justify="space-between" className="bg-white/5 rounded-lg p-6">
    <Text fontSize="xl" fontWeight="bold" className="text-blue-50">
      Final payment received
    </Text>
    <FaRegCircleCheck size="40px" color="#38A169" />
  </HStack>
);
