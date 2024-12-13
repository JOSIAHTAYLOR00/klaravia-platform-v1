"use client";

import { ReactNode } from "react";
import { Box, Container, SimpleGrid, Stack, Text, HStack, useColorMode } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  const { colorMode } = useColorMode();

  return (
    <Box className="w-full relative bottom-0 left-0 bg-surface-layer-10 dark:bg-[#181818] text-black/90 dark:text-[#E2E8F0]" zIndex={50} fontFamily="'eurostile', sans-serif">
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }} spacing={8}>
          <Stack spacing={6}>
            <Box>
              <HStack>
                <Image height="100" width="160" alt="Klaravia logo" src={colorMode === "dark" ? "/light-logo.png" : "/black-logo.png"} />
              </HStack>
            </Box>
            <Text fontSize={"sm"}>© 2024 Klaravia. All rights reserved</Text>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>
              <b>Support</b>
            </ListHeader>
            <Link href={"/terms-of-service"}>Terms of Service</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>
              <b>Company</b>
            </ListHeader>
            <Link href={"/"}>About</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
