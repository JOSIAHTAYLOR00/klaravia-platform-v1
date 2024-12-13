"use client";

import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Link,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  VStack,
  Avatar,
  Switch,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { FiChevronDown } from "react-icons/fi";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useColorMode } from "@chakra-ui/react";
import NextLink from "next/link";
import { isAuthenticated } from "@/lib/auth";
import { useColorSync } from "@/hooks/useColorSync";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const [signedIn, setSignedIn] = useState(false);
  const { user, userData, signOut } = useAuth();
  const [userName, setUserName] = useState<string>();
  const menuColor = useColorModeValue("black", "white");
  const menuHoverColor = useColorModeValue("gray.100", "gray.700");
  const menuListColor = useColorModeValue("white", "#212121");
  const menuListBorderColor = useColorModeValue("gray.200", "gray.800");
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (user !== null) {
      setUserName(user.attributes.email);
      setSignedIn(true);
    }
    if (userData !== null && userData.username) {
      setUserName(userData?.username || "");
      setSignedIn(true);
    }
    if (userData === null && user === null) {
      setSignedIn(false);
    }
  }, [userData, user]);

  const handleLogOut = () => {
    signOut();
    router.push("/");
  };

  useColorSync();

  return (
    <Box w="100vw" position="fixed" top={0} left={0} zIndex={50}>
      <Flex
        bg={useColorModeValue("#ffffff", "#121212")}
        color={useColorModeValue("#378043", "white")}
        minH={{ base: "40px", md: "60px" }}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex maxW="40px" flex={{ base: 1, md: "auto" }} ml={{ base: -2 }} display={{ base: "flex", md: "none" }}>
          <IconButton
            onClick={onToggle}
            _active={{ bgColor: "rgba(255,255,255,0.2)" }}
            _focus={{ bgColor: "rgba(255,255,255,0.2)" }}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <HStack w={{ base: "full", md: "unset" }} pl={{ base: "6px", md: "0px" }} justifyContent="flex-start">
            <NextLink href="/" passHref>
              <Link textAlign={{ base: "center", md: "left" }} className="logo" fontSize="24px" color={useColorModeValue("black", "white")}>
                Klaravia
              </Link>
            </NextLink>
          </HStack>
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
        <HStack spacing={2} px="20px" display={{ base: "none", md: "flex" }}>
          {colorMode === "light" ? <SunIcon color="orange.500" /> : <MoonIcon color="orange.500" />}
          <Switch colorScheme="orange" defaultChecked isChecked={colorMode === "dark"} onChange={toggleColorMode} size="md" />
        </HStack>
        {signedIn ? (
          <HStack>
            <Flex alignItems={"center"}>
              <Menu>
                <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: "none" }}>
                  <HStack>
                    <Avatar size={"sm"} bgColor="gray.400" border="1px solid #D3D3D3" name={userName} />
                    <VStack display={{ base: "none", md: "flex" }} alignItems="flex-start" spacing="1px" ml="2">
                      <Text fontSize="sm" fontWeight="bold">
                        {userName?.slice(0, userName?.indexOf("@"))}
                      </Text>
                      <Text fontSize="xs" color={useColorModeValue("#2d3748", "white")}>
                        Your Account
                      </Text>
                    </VStack>
                    <Box display={{ base: "none", md: "flex" }} color={useColorModeValue("#2d3748", "white")}>
                      <FiChevronDown />
                    </Box>
                  </HStack>
                </MenuButton>
                <MenuList bg={menuListColor} borderColor={menuListBorderColor} color={menuColor} fontFamily="'eurostile', sans-serif">
                  <MenuItem as="a" href="/terms-of-service" bg={menuListColor} _hover={{ bg: menuHoverColor }}>
                    Terms of Service
                  </MenuItem>
                  <MenuItem onClick={handleLogOut} bg={menuListColor} _hover={{ bg: menuHoverColor }}>
                    Sign out
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </HStack>
        ) : (
          <Stack flex={{ base: 1, md: 0 }} justify={"flex-end"} direction={"row"} spacing={6} align="center">
            <NextLink href="/login" passHref>
              <Link
                minW={{ base: "30px", md: "40px" }}
                display="flex"
                alignItems="center"
                fontSize={{ base: "14px", md: "md" }}
                fontWeight={400}
                fontFamily="'eurostile', sans-serif"
              >
                Log In
              </Link>
            </NextLink>
            <Button
              bg={"rgb(245, 158, 11)"}
              _hover={{ bg: "rgb(251, 191, 36)" }}
              fontSize={{ base: "14px", md: "sm" }}
              fontWeight={600}
              fontFamily="'eurostile', sans-serif"
              p={{ base: "10px", md: "" }}
              h={{ base: "30px", md: "unset" }}
              onClick={() => router.push("/signup")}
              color={useColorModeValue("white", "black")}
            >
              Sign Up
            </Button>
          </Stack>
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("#2d3748", "#f4eee9");
  const linkHoverColor = useColorModeValue("#f59e0b", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <HStack spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <NextLink href={navItem.href ?? "#"} passHref>
                <Link p={2} fontSize={"md"} borderRadius="6px" fontWeight={500} color={linkColor} fontFamily="'eurostile', sans-serif">
                  {navItem.label}
                </Link>
              </NextLink>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent border={0} boxShadow={"xl"} bg={popoverContentBgColor} p={4} rounded={"md"} minW={"sm"}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
          {navItem.badge}
        </Box>
      ))}
    </HStack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <NextLink href={href ?? "#"} passHref legacyBehavior>
      <Link role={"group"} display={"block"} p={2} rounded={"md"}>
        <Stack direction={"row"} align={"center"} _hover={{ bg: useColorModeValue("gray.100", "gray.900") }}>
          <Box>
            <Text transition={"all .3s ease"} color="black" _groupHover={{ color: "gray.700" }} fontWeight={500} fontFamily="'eurostile', sans-serif">
              {label}
            </Text>
            <Text fontSize={"sm"} color="gray.500" fontFamily="'eurostile', sans-serif">
              {subLabel}
            </Text>
          </Box>
          <Flex
            transition={"all .3s ease"}
            transform={"translateX(-10px)"}
            opacity={0}
            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
            justify={"flex-end"}
            align={"center"}
            flex={1}
          >
            <Icon color={"gray.400"} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    </NextLink>
  );
};

const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue("white", "gray.800")} p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <NextLink href={href ?? "#"} passHref>
        <Link py={2} justifyContent="space-between" alignItems="center">
          <Text fontWeight={600} color={useColorModeValue("gray.600", "gray.200")} fontFamily="'eurostile', sans-serif">
            {label}
          </Text>
          {children && <Icon as={ChevronDownIcon} transition={"all .25s ease-in-out"} transform={isOpen ? "rotate(180deg)" : ""} w={6} h={6} />}
        </Link>
      </NextLink>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack mt={2} pl={4} borderLeft={1} borderStyle={"solid"} borderColor={useColorModeValue("gray.200", "gray.700")} align={"start"}>
          {children &&
            children.map((child) => (
              <NextLink key={child.label} href={child.href ?? "#"} passHref>
                <Link py={2} fontFamily="'eurostile', sans-serif">
                  {child.label}
                </Link>
              </NextLink>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
  badge?: JSX.Element;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Blogs",
    subLabel: "Articles written to help you on your solar journey",
    href: "/blogs",
  },
  {
    label: "Solar Course",
    subLabel: "A zero to hero course on residential solar",
    href: "/new-course",
  },
];
