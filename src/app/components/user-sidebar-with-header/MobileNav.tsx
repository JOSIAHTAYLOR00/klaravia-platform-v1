import { useDisclosure, Flex, HStack, useColorModeValue, useColorMode, Switch } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MobileNavProps } from "./navigation";
import { NotificationsDrawer } from "./Notifications";
import { UserMenu } from "./UserMenu";
import { useAuth } from "@/hooks/useAuth";
import { NotificationButton } from "./NotificationButton";
import { NotificationBadge } from "./NotificationsBadge";
import { MobileMenuButton } from "./MobileMenuButton";
import { MobileLogo } from "./MobileLogo";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export const MobileNav = ({ onOpen, signOut, messageCount, setMessageCount }: MobileNavProps) => {
  const router = useRouter();
  const { isOpen, onOpen: openNotifications, onClose } = useDisclosure();
  const { userData } = useAuth();
  const bgColor = useColorModeValue("white", "#121212");
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={4}
      height={{ base: "60px", md: "80px" }}
      align="center"
      bg={{ base: "#121212", md: bgColor }}
      justify={{ base: "space-between", md: "flex-end" }}
    >
      <HStack spacing={2} px="20px" display={{ base: "none", md: "flex" }}>
        {colorMode === "light" ? <SunIcon color="orange.500" /> : <MoonIcon color="orange.500" />}
        <Switch colorScheme="orange" defaultChecked isChecked={colorMode === "dark"} onChange={toggleColorMode} size="md" pl="2" />
      </HStack>
      <MobileMenuButton onOpen={onOpen} />
      <MobileLogo />
      <HStack spacing={{ base: 3, md: 6 }}>
        <NotificationBadge count={messageCount} />
        <NotificationButton onOpen={openNotifications} />
        <UserMenu userData={userData} signOut={signOut} />
      </HStack>
      <NotificationsDrawer isOpen={isOpen} onClose={onClose} messageCount={messageCount} setMessageCount={setMessageCount} router={router} />
    </Flex>
  );
};
