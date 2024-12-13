import { HStack, useColorMode, VStack } from "@chakra-ui/react";
import { AddressFormClient } from "./AddressFormClient";
import { HeroFeatures } from "./HeroFeatures";
import { HeroSection } from "./HeroSection";
import { HeroTrustIndicators } from "./HeroTrustIndicators";
import Image from "next/image";

export default function EntrySection() {
  const { colorMode } = useColorMode();
  return (
    <div className="w-full px-2  py-0 xl:py-24">
      <HStack
        w="full"
        justifyContent="space-evenly"
        gap="12"
        py={{ base: "28", md: "36" }}
        className="rounded-lg "
        backdropBlur="lg"
        bgColor={{ base: colorMode === "dark" ? "rgba(18,18,18,.7)" : "rgba(255,255,255,.7)", xl: "rgba(0,0,0,0)" }}
      >
        <VStack w={{ base: "full", lg: "full" }} style={{ maxWidth: "700px" }}>
          <HeroSection />
          <AddressFormClient />
        </VStack>
        <VStack display={{ base: "none", xl: "block" }} maxW="36vw">
          <Image width="700" height="100" src={"/hero.svg"} alt="hero image" />
        </VStack>
      </HStack>
      {/* <HeroFeatures /> */}
      {/* <HeroTrustIndicators /> */}
    </div>
  );
}
