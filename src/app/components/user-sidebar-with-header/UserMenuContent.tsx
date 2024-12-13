import { Box, Text, HStack, Avatar, VStack } from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";

export const UserMenuContent = ({ userData }: { userData: any }) => {
  return (
    <HStack minW={{ base: "50px", md: "100%" }} justifyContent="flex-end">
      <Avatar size="sm" alignSelf="center" fontFamily="'eurostile', sans-serif" bgColor="gray.400" border="1px solid #D3D3D3" color="white" name={userData?.email || "Error"} />
      <VStack display={{ base: "none", md: "flex" }} align="flex-start" spacing="1px" ml="2">
        <Text fontSize="sm" fontWeight="bold" className="text-[#EEEEEE] font-['eurostile']">
          {userData?.email ? userData.email.slice(0, userData.email.indexOf("@")) : "Error"}
        </Text>
        <Text w="full" textAlign="right" fontSize="xs" color="gray.400">
          Your Account
        </Text>
      </VStack>
      <Box display={{ base: "none", md: "flex" }}>
        <FiChevronDown />
      </Box>
    </HStack>
  );
};
