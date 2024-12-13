"use client";
import { Box, VStack, Text, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { NAV_ITEMS } from "./config";
import { SidebarProps } from "./navigation";
import { NavItem } from "./NavItem";
import { Logo } from "./Logo";

export const SidebarContent = ({ onClose }: SidebarProps) => {
  const router = useRouter();

  return (
    <Box color="white" bgColor={useColorModeValue("white", "#121212")} w={{ base: "full", md: 60 }} pos="fixed" h="full" display={{ base: "none", md: "block" }}>
      <VStack h="full" align="flex-start" justify="space-between">
        <VStack w="full" align="flex-start">
          <Logo onClose={onClose} />
          {NAV_ITEMS.map((link) => (
            <NavItem key={link.name} icon={link.icon} onClick={() => router.push(`/user-dash/${link.route}`)}>
              <Box _hover={{ w: "100%" }} h="24px">
                <Text w="120px" overflow="hidden">
                  {link.name}
                </Text>
              </Box>
            </NavItem>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};
