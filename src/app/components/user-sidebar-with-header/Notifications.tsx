"use client";

import { Drawer, DrawerContent } from "@chakra-ui/react";
import { NotificationsBody } from "./NotificationsBody";
import { NotificationsHeader } from "./NotificationsHeader";

export const NotificationsDrawer = ({
  isOpen,
  onClose,
  messageCount,
  setMessageCount,
  router,
}: {
  isOpen: boolean;
  onClose: () => void;
  messageCount: number;
  setMessageCount: (count: number) => void;
  router: any;
}) => (
  <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
    <DrawerContent className="bg-white/10 backdrop-blur-md border-lg border-white/10">
      <NotificationsHeader onClose={onClose} />
      <NotificationsBody messageCount={messageCount} setMessageCount={setMessageCount} router={router} onClose={onClose} />
    </DrawerContent>
  </Drawer>
);
