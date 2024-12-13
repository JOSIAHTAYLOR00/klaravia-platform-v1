import { HStack, Link } from "@chakra-ui/react";

export const MobileLogo = () => (
  <HStack w="full" pl="20px" display={{ base: "block", md: "none" }}>
    <Link href="/" color="white" className="font-['new-astro-soft'] text-2xl">
      Klaravia
    </Link>
  </HStack>
);
