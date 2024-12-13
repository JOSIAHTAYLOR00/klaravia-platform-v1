"use client";

import { LoanOption } from "@/app/user-dash/_types/loan";
import { VStack, Box, Text, HStack, Image, Link } from "@chakra-ui/react";

const LOAN_OPTIONS: LoanOption[] = [
  {
    name: "LightStream",
    logo: "https://www.lightstream.com/getmedia/818a6f23-2baf-4819-b4e7-b1b6b26961cf/LS-logo-horizontal-2022.aspx?ext=.svg",
    minAmount: 5000,
    maxAmount: 100000,
    minAPR: 7.49,
    maxAPR: 9.94,
    creditScoreRequired: 660,
    applicationLink: "https://www.lightstream.com/solar-financing",
  },
  {
    name: "Upgrade",
    logo: "https://www.nerdwallet.com/cdn-cgi/image/height=60,quality=85,format=auto/cdn/loans/pl/Upgrade-logo.png",
    minAmount: 1000,
    maxAmount: 50000,
    minAPR: 8.49,
    maxAPR: 35.99,
    creditScoreRequired: 560,
    applicationLink: "https://www.upgrade.com/personal-loans/home-improvement/",
  },
  {
    name: "Navy Federal",
    logo: "https://www.nerdwallet.com/cdn/loans/pl/NavyFederalCreditUnion-logo.svg",
    minAmount: 250,
    maxAmount: 50000,
    minAPR: 7.49,
    maxAPR: 18.0,
    creditScoreRequired: "None",
    applicationLink: "https://www.navyfederal.org/loans-cards/personal-loans.html?nav=bold",
  },
];

export const LoanOptionsComponent = () => (
  <VStack mt="40px" shadow="lg" bgColor="white" minH="40vh" borderRadius="12px" justifyContent="center" p="40px">
    <LoanOptionsHeader />
    <VStack w="full" bgColor="gray.100" p="20px" borderRadius="12px" alignItems="flex-start">
      <VStack w="full" pt="20px" gap="20px">
        {LOAN_OPTIONS.map((loan, index) => (
          <LoanCard key={index} loan={loan} />
        ))}
      </VStack>
    </VStack>
  </VStack>
);

const LoanOptionsHeader = () => (
  <VStack w="full">
    <HStack w="full">
      <VStack w="full" alignItems="flex-start">
        <Text w="full" fontSize="32px" fontWeight="bold" fontFamily="'eurostile', sans-serif">
          Discover Financing Options
        </Text>
        <Text w="full" mb="20px">
          Apply for any of the loans listed below, or find a loan on your own. After your application has been accepted and the money has been deposited in your account, you can
          move forward with the process.
        </Text>
      </VStack>
    </HStack>
  </VStack>
);

const LoanCard = ({ loan }: { loan: LoanOption }) => (
  <Link w="full" href={loan.applicationLink} isExternal>
    <HStack w="full" bgColor="white" p="20px" borderRadius="12px">
      <VStack w="full">
        <Box w="full" mb="20px" display="flex" justifyContent="left">
          <Image w={loan.name === "Navy Federal" ? "150px" : "200px"} src={loan.logo} alt={loan.name} />
        </Box>
        <HStack w="full">
          <LoanDetail title="Loan Amount" value={`$${loan.minAmount.toLocaleString()} - $${loan.maxAmount.toLocaleString()}`} />
          <LoanDetail title="Est. APR" value={`${loan.minAPR}% - ${loan.maxAPR}%`} />
          <LoanDetail title="Credit Score Required" value={typeof loan.creditScoreRequired === "number" ? loan.creditScoreRequired.toString() : loan.creditScoreRequired} />
        </HStack>
      </VStack>
    </HStack>
  </Link>
);

const LoanDetail = ({ title, value }: { title: string; value: string }) => (
  <VStack w="full">
    <Text w="full" fontWeight="bold">
      {title}
    </Text>
    <Text w="full">{value}</Text>
  </VStack>
);
