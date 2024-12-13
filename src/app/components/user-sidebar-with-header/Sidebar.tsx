"use client";

import { useAuth } from "@/hooks/useAuth";
import { Box, useDisclosure } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { MobileDrawer } from "./MobileDrawer";
import { MobileNav } from "./MobileNav";
import { SidebarContent } from "./SidebarContent";

export const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [messageCount, setMessageCount] = useState(0);
  const { signOut } = useAuth();
  const { userData } = useAuth();

  // const { data: subscriptionData } = useOnCreateMessageSubscription(userData?.id || "");

  // useEffect(() => {
  //   if (subscriptionData?.onCreateMessage?.sender === "support") {
  //     setMessageCount(prev => prev + 1);
  //   }
  // }, [subscriptionData]);

  return (
    <Box minH="100vh">
      <SidebarContent onClose={onClose} />
      <MobileDrawer isOpen={isOpen} onClose={onClose} />
      <MobileNav onOpen={onOpen} signOut={signOut} messageCount={messageCount} setMessageCount={setMessageCount} />
      <Box ml={{ base: 0, md: 60 }}>{children}</Box>
    </Box>
  );
};
