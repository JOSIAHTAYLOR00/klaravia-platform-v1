"use client";

import { VStack, HStack, Box, Text, Image, Button, Alert, AlertDescription, AlertTitle, AlertIcon, Fade } from "@chakra-ui/react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { CheckCircle, Clock } from "lucide-react";
import { ProjectStatus } from "@/API";
import { StripeComponent } from "../payments/StripeComponent";
import { StageContentProps } from "@/app/user-dash/_types/dashboard";

export const DesignStage = ({ userData, projectStatus, projectStatusIndex, showStripePayment, setShowStripePayment }: StageContentProps) => {
  if (projectStatusIndex < 1) {
    return <PendingDesignView />;
  }

  return (
    <VStack mt="40px" spacing={6}>
      <Box w="full" className="bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm" p={{ base: "6", lg: "8" }}>
        <DesignContent status={projectStatus} projectStatusIndex={projectStatusIndex} showStripePayment={showStripePayment} setShowStripePayment={setShowStripePayment} />
      </Box>
      {projectStatusIndex === 1 && <DesignInfoSection />}
    </VStack>
  );
};

const PendingDesignView = () => (
  <Fade in={true} transition={{ enter: { duration: 0.9 } }}>
    <VStack mt="40px" spacing={6}>
      <Box w="full" className="bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm" p={{ base: "6", lg: "8" }}>
        <HStack w="full" flexDirection={{ base: "column", "2xl": "row" }} spacing={{ base: 6, lg: 8 }}>
          <Box className="relative w-full max-w-xl overflow-hidden rounded-lg" h={{ base: "200px", lg: "300px" }}>
            <Image borderRadius="12px" className="object-cover w-full h-full" src="https://solarbuildermag.com/wp-content/uploads/2022/04/EagleView-TrueDesign-50_50-Image.jpg" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </Box>

          <VStack flex="1" align="start" spacing={6}>
            <Text fontSize={{ base: "xl", lg: "2xl" }} fontWeight="bold" className="text-blue-50">
              Professional Solar Design
            </Text>
            <Text className="text-blue-50/70">After your electric bill has been reviewed, you'll be able to order your detailed solar design.</Text>
          </VStack>
        </HStack>
      </Box>
    </VStack>
  </Fade>
);

const DesignContent = ({
  status,
  projectStatusIndex,
  showStripePayment,
  setShowStripePayment,
}: {
  status?: ProjectStatus;
  projectStatusIndex: number;
  showStripePayment: boolean;
  setShowStripePayment: (show: boolean) => void;
}) => {
  if (projectStatusIndex > 1) {
    return <DesignCompletedView />;
  }
  switch (status) {
    case ProjectStatus.ELECTRIC_BILL_REVIEWED_AWAITING_TRUE_DESIGN_PAYMENT:
      return <DesignPaymentView showStripePayment={showStripePayment} setShowStripePayment={setShowStripePayment} />;

    case ProjectStatus.TRUE_DESIGN_PAYMENT_ISSUE_AWAITING_RESOLUTION:
      return <PaymentIssueView showStripePayment={showStripePayment} setShowStripePayment={setShowStripePayment} />;

    case ProjectStatus.TRUE_DESIGN_PAYMENT_SUCCEEDED_AWAITING_TRUE_DESIGN_ORDER:
      return <DesignOrderedView />;

    case ProjectStatus.TRUE_DESIGN_ORDER_FAILED_AWAITING_RESOLUTION:
      return <DesignOrderFailedView />;

    case ProjectStatus.TRUE_DESIGN_ORDER_COMPLETED_AWAITING_FINAL_DESIGN_CREATION:
      return <DesignInProgressView />;

    case ProjectStatus.FINAL_DESIGN_FAILED_AWAITING_RESOLUTION:
      return <DesignFailedView />;

    case ProjectStatus.FINAL_DESIGN_COMPLETE_AWAITING_CUSTOMER_APPROVAL:
      return <DesignReadyForReviewView />;

    case ProjectStatus.CUSTOMER_REJECTED_FINAL_DESIGN_AWAITING_RESOLUTION:
      return <DesignRevisionView />;

    case ProjectStatus.CUSTOMER_APPROVED_FINAL_DESIGN_AWAITING_INSTALLER_AGREEMENT_SIGNATURE:
    case ProjectStatus.DEPOSIT_SUCCESSFUL_AWAITING_SITE_SURVEY_SCHEDULE:
      return <DesignCompletedView />;

    default:
      return null;
  }
};

const DesignPaymentView = ({ showStripePayment, setShowStripePayment }: { showStripePayment: boolean; setShowStripePayment: (show: boolean) => void }) => {
  if (showStripePayment) {
    return (
      <VStack w="full" minH="600px" className="bg-white/5 rounded-lg" p="40px">
        <StripeComponent chargeAmount={10000} />
      </VStack>
    );
  }

  return (
    <HStack w="full" flexDirection={{ base: "column", xl: "row" }} spacing={8}>
      <Box className="relative w-full max-w-xl overflow-hidden rounded-lg" h={{ base: "200px", lg: "300px" }}>
        <Image
          borderRadius="12px"
          className="object-cover w-full h-full"
          src="https://solarbuildermag.com/wp-content/uploads/2022/04/EagleView-TrueDesign-50_50-Image.jpg"
          alt="Solar Design"
        />
      </Box>
      <VStack flex="1" align="start" spacing={6}>
        <Text fontSize={{ base: "2xl", lg: "3xl" }} fontWeight="bold" className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
          Order Your Professional Design
        </Text>
        <Text className="text-blue-50/70">
          Ready to move forward with your solar journey? Order your professional design now and we'll create a detailed plan customized for your home.
        </Text>
        <DesignFeatures />
        <Button
          onClick={() => setShowStripePayment(true)}
          className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3 rounded-lg 
              hover:from-amber-600 hover:to-amber-700 transition-all duration-300"
        >
          Order Design - $100
        </Button>
      </VStack>
    </HStack>
  );
};

const DesignFeatures = () => (
  <VStack align="start" spacing={4} w="full">
    {["Precise panel placement simulation", "Detailed energy production analysis", "Comprehensive shading study", "Full electrical system design"].map((item, index) => (
      <HStack key={index} spacing={3}>
        <CheckCircle className="w-5 h-5 text-amber-500" />
        <Text className="text-blue-50/70">{item}</Text>
      </HStack>
    ))}
  </VStack>
);

const PaymentIssueView = ({ showStripePayment, setShowStripePayment }: { showStripePayment: boolean; setShowStripePayment: (show: boolean) => void }) => (
  <VStack w="full" spacing={6}>
    <Alert status="error">
      <AlertIcon />
      <VStack align="start" spacing={2}>
        <AlertTitle>Payment Issue</AlertTitle>
        <AlertDescription>There was an issue processing your payment for the design. Please check your payment method and try again.</AlertDescription>
      </VStack>
    </Alert>

    {showStripePayment ? (
      <VStack w="full" minH="600px" className="bg-white/5 rounded-lg" p="40px">
        <StripeComponent chargeAmount={10000} />
      </VStack>
    ) : (
      <Button
        onClick={() => setShowStripePayment(true)}
        className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3 rounded-lg 
            hover:from-amber-600 hover:to-amber-700 transition-all duration-300"
      >
        Retry Payment
      </Button>
    )}
  </VStack>
);

const DesignOrderedView = () => (
  <VStack w="full" spacing={6} align="start">
    <HStack spacing={4}>
      <div className="bg-green-500/20 p-3 rounded-full">
        <CheckCircle className="w-8 h-8 text-green-500" />
      </div>
      <Text fontSize={{ base: "xl", lg: "2xl" }} fontWeight="bold" className="text-blue-50">
        Design Payment Confirmed!
      </Text>
    </HStack>
    <Text className="text-blue-50/70">Thank you for your payment. Our design team has been notified and will begin working on your custom solar design.</Text>
    <Box w="full" className="bg-amber-500/10 border border-amber-500/20 rounded-lg" p={4}>
      <HStack spacing={3}>
        <Clock className="w-5 h-5 text-amber-500" />
        <Text className="text-amber-500">Estimated completion: 1 business day</Text>
      </HStack>
    </Box>
  </VStack>
);

const DesignOrderFailedView = () => (
  <VStack w="full" spacing={6}>
    <Alert status="warning">
      <AlertIcon />
      <VStack align="start" spacing={2}>
        <AlertTitle>Design Order Issue</AlertTitle>
        <AlertDescription>We've encountered an issue while processing your design order. Our team has been notified and will contact you shortly to resolve this.</AlertDescription>
      </VStack>
    </Alert>
  </VStack>
);

const DesignInProgressView = () => (
  <VStack w="full" spacing={6} align="start">
    <Text fontSize={{ base: "xl", lg: "2xl" }} fontWeight="bold" className="text-blue-50">
      Creating Your Custom Design
    </Text>
    <Text className="text-blue-50/70">Our design team is hard at work creating your custom solar system design. We'll notify you as soon as it's ready for your review.</Text>
    <DesignProgressTracker />
  </VStack>
);

const DesignProgressTracker = () => (
  <VStack w="full" className="bg-white/5 rounded-lg" p={6} spacing={4}>
    <HStack w="full" justify="space-between" className="border-b border-white/10 pb-4">
      <Text className="text-blue-50">Design Progress</Text>
      <Text className="text-amber-500">In Progress</Text>
    </HStack>
    <VStack w="full" align="start" spacing={4}>
      {[
        { text: "Site Analysis", done: true },
        { text: "Initial Layout", done: true },
        { text: "Production Modeling", done: false },
        { text: "Final Documentation", done: false },
      ].map((step, index) => (
        <HStack key={index} spacing={3}>
          <div className={`p-1 rounded-full ${step.done ? "bg-green-500" : "bg-white/10"}`}>
            <CheckCircle className={`w-4 h-4 ${step.done ? "text-white" : "text-white/30"}`} />
          </div>
          <Text className={step.done ? "text-blue-50" : "text-blue-50/50"}>{step.text}</Text>
        </HStack>
      ))}
    </VStack>
  </VStack>
);

const DesignFailedView = () => (
  <VStack w="full" spacing={6}>
    <Alert status="error">
      <AlertIcon />
      <VStack align="start" spacing={2}>
        <AlertTitle>Design Creation Issue</AlertTitle>
        <AlertDescription>We've encountered an issue while creating your final design. Our team is working to resolve this and will update you soon.</AlertDescription>
      </VStack>
    </Alert>
  </VStack>
);

const DesignReadyForReviewView = () => (
  <VStack w="full" spacing={6} align="start">
    <HStack spacing={4}>
      <div className="bg-green-500/20 p-3 rounded-full">
        <CheckCircle className="w-8 h-8 text-green-500" />
      </div>
      <Text fontSize={{ base: "xl", lg: "2xl" }} fontWeight="bold" className="text-blue-50">
        Your Design is Ready!
      </Text>
    </HStack>
    <Text className="text-blue-50/70">
      Your custom solar design is complete and ready for your review. Please check your email for the design documents and approval instructions.
    </Text>
    <Button
      className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3 rounded-lg 
        hover:from-amber-600 hover:to-amber-700 transition-all duration-300"
      onClick={() => {
        // Handle review action
      }}
    >
      Review Design
    </Button>
  </VStack>
);

const DesignRevisionView = () => (
  <VStack w="full" spacing={6}>
    <Text fontSize={{ base: "xl", lg: "2xl" }} fontWeight="bold" className="text-blue-50">
      Design Revision in Progress
    </Text>
    <Text className="text-blue-50/70">
      We've received your feedback on the design. Our team is working on incorporating your requested changes and will present an updated design soon.
    </Text>
    <Box w="full" className="bg-amber-500/10 border border-amber-500/20 rounded-lg" p={4}>
      <HStack spacing={3}>
        <Clock className="w-5 h-5 text-amber-500" />
        <Text className="text-amber-500">Estimated revision completion: 1-2 business days</Text>
      </HStack>
    </Box>
  </VStack>
);

const DesignCompletedView = () => (
  <HStack w="full" justifyContent="space-between" flexDirection={{ base: "column", lg: "row" }} spacing={4}>
    <VStack align="start" spacing={3}>
      <Text fontSize={{ base: "xl", lg: "2xl" }} fontWeight="bold" className="text-blue-50">
        Design Approved
      </Text>
      <Text className="text-blue-50/70">Your solar system design has been finalized and approved. We're now ready to move forward with the next steps.</Text>
    </VStack>
    <FaRegCircleCheck className="w-10 h-10 text-green-500 flex-shrink-0" />
  </HStack>
);

const DesignInfoSection = () => (
  <VStack mt="40px" shadow="lg" bgColor="white" borderRadius="12px" p="40px">
    <Text w="full" fontSize="24px" fontWeight="semibold" mb="40px">
      What is a final design?
    </Text>
    <Text w="full">
      The final design is a detailed and complete plan for installing solar panels on your property. This design is created after a thorough analysis of your site using advanced
      technology to ensure accurate measurements and optimal panel placement.
    </Text>
    <Text w="full">
      The final design includes a precise layout of where each solar panel will be installed on your roof, taking into account factors like roof dimensions, angles, and potential
      shading. It also provides detailed electrical schematics showing how the panels will connect to your home's electrical system.
    </Text>
    <Text w="full">
      The final design is a comprehensive plan that guarantees your solar system will be installed correctly and efficiently, maximizing energy production and ensuring compliance
      with all regulations. It's the last step before moving forward with the installation, ensuring everything is perfectly tailored to your property.
    </Text>
  </VStack>
);
