import { Drawer, DrawerContent } from "@chakra-ui/react";
import { SidebarContent } from "./SidebarContent";

export const MobileDrawer = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
  <Drawer isOpen={isOpen} placement="left" onClose={onClose} returnFocusOnClose={false} onOverlayClick={onClose} size="xs">
    <DrawerContent>
      <SidebarContent onClose={onClose} />
    </DrawerContent>
  </Drawer>
);
