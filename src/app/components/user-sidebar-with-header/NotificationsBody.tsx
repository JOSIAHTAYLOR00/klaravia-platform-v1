import { DrawerBody, VStack } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { MessageNotifications } from "./MessageNotifications";
import { EmptyNotifications } from "./EmptyNotifications";

export const NotificationsBody = ({
  messageCount,
  setMessageCount,
  router,
  onClose,
}: {
  messageCount: number;
  setMessageCount: (count: number) => void;
  router: any;
  onClose: () => void;
}) => (
  <DrawerBody p={4} bgColor="#121212">
    <VStack spacing={3}>
      <AnimatePresence>
        {messageCount > 0 ? <MessageNotifications count={messageCount} router={router} onClose={onClose} setMessageCount={setMessageCount} /> : <EmptyNotifications />}
      </AnimatePresence>
    </VStack>
  </DrawerBody>
);
