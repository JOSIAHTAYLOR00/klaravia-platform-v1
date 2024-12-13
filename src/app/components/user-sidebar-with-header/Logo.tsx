import { Flex, HStack, CloseButton, Link, useColorModeValue } from "@chakra-ui/react";
import router from "next/router";
import Image from "next/image";

export const Logo = ({ onClose }: { onClose: () => void }) => {
  const logoColor = useColorModeValue("black", "white");
  return (
    <Flex w="full" h="20" align="center" justify={{ base: "space-between", md: "flex-start" }} pl="24px">
      <HStack onClick={() => router.push("/")} cursor="pointer">
        {/* <Image height="38" width="38" src="/logo-light.png" alt="Logo" /> */}
        <Link href="/" color={logoColor} className="font-['new-astro-soft'] text-2xl">
          Klaravia
        </Link>
      </HStack>
      <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
    </Flex>
  );
};
