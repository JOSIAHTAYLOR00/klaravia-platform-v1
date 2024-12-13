import { BiHomeAlt } from "react-icons/bi";
import { BsFiles, BsCardImage } from "react-icons/bs";
import { IoTodayOutline } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import { NavItem } from "./navigation";


export const NAV_ITEMS: NavItem[] = [
  { name: "Home", icon: BiHomeAlt, route: "" },
  { name: "Final Design", icon: BsCardImage, route: "final-design" },
  { name: "Documents", icon: BsFiles, route: "documents" },
  { name: "Calendar", icon: IoTodayOutline, route: "calendar" },
  { name: "Support Chat", icon: GoMail, route: "support-chat" },
];