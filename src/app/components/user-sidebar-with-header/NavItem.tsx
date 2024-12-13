"use client";
import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import { NavItemProps } from "./navigation";

export const NavItem = ({ icon: Icon, children, onClick }: NavItemProps) => {
  const linkColor = useColorModeValue("black", "white");
  const linkHoverColor = useColorModeValue("gray.100", "rgba(255,255,255,.2)");
  return (
    <Box as="a" style={{ textDecoration: "none" }} _focus={{ boxShadow: "none" }}>
      <Flex align="center" p="4" mx="6" borderRadius="lg" role="group" cursor="pointer" onClick={onClick} _hover={{ bg: linkHoverColor, color: linkColor }}>
        {Icon && <Icon color={linkColor} className="mr-4 group-hover:text-white" />}
        {children}
      </Flex>
    </Box>
  );
};
