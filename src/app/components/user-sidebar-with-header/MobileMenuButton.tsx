import { IconButton } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

export const MobileMenuButton = ({ onOpen }: { onOpen: () => void }) => (
  <IconButton
    display={{ base: "flex", md: "none" }}
    onClick={onOpen}
    _hover={{ bgColor: "rgba(0,0,0,.2)" }}
    _focus={{ bgColor: "rgba(0,0,0,.2)" }}
    variant="ghost"
    color="white"
    aria-label="open menu"
    icon={<FiMenu />}
  />
);
