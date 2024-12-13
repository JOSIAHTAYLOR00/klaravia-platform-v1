import { Box, Text } from "@chakra-ui/react";

export const NotificationBadge = ({ count }: { count: number }) => {
  if (count === 0) return null;

  return (
    <Box
      w="18px"
      h="18px"
      borderRadius="50%"
      bgColor="red.500"
      color="white"
      fontWeight="bold"
      fontSize="10px"
      display="flex"
      // justify="center"
      // align="center"
      pos="relative"
      left={{ base: "52px", md: "66px" }}
      bottom="12px"
      zIndex={10}
    >
      <Text>{count}</Text>
    </Box>
  );
};
