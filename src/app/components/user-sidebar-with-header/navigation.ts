import { IconType } from "react-icons";

export interface NavItem {
  name: string;
  icon: IconType;
  route: string;
}

export interface NavItemProps {
  icon: IconType;
  children: React.ReactNode;
  onClick?: () => void;
}

export interface SidebarProps {
  onClose: () => void;
  display?: object;
}

export interface MobileNavProps {
  onOpen: () => void;
  signOut: () => void;
  messageCount: number;
  setMessageCount: (val: number) => void;
}