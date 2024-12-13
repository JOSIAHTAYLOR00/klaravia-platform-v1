import React from "react";
import { Box, VStack, Button, Text } from "@chakra-ui/react";
import { Lock } from "lucide-react";

const SolarReadyFeature = () => {
  return (
    <Box w="full" h="600px" bg="#121212" shadow="lg" position="relative" overflow="hidden" borderRadius="12px">
      <Box
        w="full"
        h="600px"
        backgroundImage="https://solarbuildermag.com/wp-content/uploads/2022/04/EagleView-TrueDesign-50_50-Image.jpg"
        backgroundSize="cover"
        backgroundPosition="center"
        filter="blur(28px) brightness(50%)"
        zIndex={-1}
      />
      <VStack w="full" position="relative" bottom="54%" display="flex" justifyContent="center" zIndex={1}>
        <Button colorScheme="blue">
          <span className="pr-3">
            <Lock size="16" />
          </span>
          Unlock Preview - $10
        </Button>
        <Text color="white" cursor="pointer">
          What is this?
        </Text>
      </VStack>
    </Box>
  );
};

export default SolarReadyFeature;
