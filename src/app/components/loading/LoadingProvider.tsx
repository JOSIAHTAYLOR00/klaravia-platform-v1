"use client";

import { Box, Spinner, Text } from "@chakra-ui/react";

interface LoadingProviderProps {
  name?: string;
}

export function LoadingProvider({ name }: LoadingProviderProps) {
  return (
    <Box
      height="100vh"
      width="100vw"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      position="fixed"
      top={0}
      left={0}
      bg="rgba(0, 0, 0, 0.5)"
      zIndex={9999}
    >
      <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
      <Text mt={4} color="white" fontSize="lg">
        {name ? `Loading ${name}...` : "Loading..."}
      </Text>
    </Box>
  );
}
