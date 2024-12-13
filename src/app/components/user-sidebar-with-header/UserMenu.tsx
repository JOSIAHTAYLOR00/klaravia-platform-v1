"use client";

import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { UserMenuContent } from "./UserMenuContent";

export const UserMenu = ({ userData, signOut }: { userData: any; signOut: () => void }) => {
  const router = useRouter();

  return (
    <Menu>
      <MenuButton py={2} transition="all 0.3s">
        <UserMenuContent userData={userData} />
      </MenuButton>
      <MenuList>
        <MenuItem
          onClick={() => {
            router.push("/login");
            signOut();
          }}
        >
          Sign out
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
