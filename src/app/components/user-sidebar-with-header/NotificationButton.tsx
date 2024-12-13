import { IconButton } from "@chakra-ui/react";
import { FiBell } from "react-icons/fi";

export const NotificationButton = ({ onOpen }: { onOpen: () => void }) => (
  <IconButton
    size="lg"
    variant="ghost"
    _hover={{ bg: "none" }}
    onClick={onOpen}
    color={{ base: "white", md: "black" }}
    aria-label="open notifications"
    icon={<FiBell color="white" />}
  />
);
