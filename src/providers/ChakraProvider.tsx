"use client";

import { ChakraProvider as BaseChakraProvider, extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { ReactNode } from "react";
import { mode } from "@chakra-ui/theme-tools";

// Color mode config
const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// Custom theme extensions
const theme = extendTheme({
  config,
  colors: {
    brand: {
      50: "#f7fafc",
      100: "#edf2f7",
      200: "#e2e8f0",
      300: "#cbd5e0",
      400: "#a0aec0",
      500: "#718096",
      600: "#4a5568",
      700: "#2d3748",
      800: "#1a202c",
      900: "#171923",
    },
    solar: {
      primary: "#F59E0B",
      secondary: "#059669",
      accent: "#3B82F6",
      primaryLight: "#FBBF24", // Lighter version for dark mode
      secondaryLight: "#34D399", // Lighter version for dark mode
      accentLight: "#60A5FA", // Lighter version for dark mode
    },
  },
  fonts: {
    body: "'eurostile', system-ui, sans-serif",
  },
  components: {
    // Button: {
    //   baseStyle: {
    //     fontWeight: "semibold",
    //     borderRadius: "lg",
    //   },
    //   variants: {
    //     solid: (props: Record<string, any>) => ({
    //       bg: mode("solar.primary", "solar.primaryLight")(props),
    //       color: "white",
    //       _hover: {
    //         bg: mode("solar.secondary", "solar.secondaryLight")(props),
    //       },
    //     }),
    //     outline: (props: Record<string, any>) => ({
    //       borderColor: mode("solar.primary", "solar.primaryLight")(props),
    //       color: mode("solar.primary", "solar.primaryLight")(props),
    //       _hover: {
    //         bg: mode("solar.primary", "solar.primaryLight")(props),
    //         color: "white",
    //       },
    //     }),
    //   },
    // },
    Link: {
      baseStyle: (props: Record<string, any>) => ({
        color: mode("solar.primary", "solar.primaryLight")(props),
        _hover: {
          textDecoration: "none",
          color: mode("solar.secondary", "solar.secondaryLight")(props),
        },
      }),
    },
    Heading: {
      baseStyle: (props: Record<string, any>) => ({
        color: mode("gray.800", "white")(props),
        fontFamily: "heading",
      }),
    },
    Text: {
      baseStyle: (props: Record<string, any>) => ({
        color: mode("gray.700", "gray.100")(props),
      }),
    },
  },
  styles: {
    global: (props: Record<string, any>) => ({
      body: {
        bg: mode("#ffffff", "#121212")(props),
        color: mode("black", "#aeb2b5")(props),
      },
      "::-webkit-scrollbar": {
        width: "10px",
      },
      "::-webkit-scrollbar-track": {
        background: mode("#f1f1f1", "#1a1a1a")(props),
      },
      "::-webkit-scrollbar-thumb": {
        background: mode("#888", "#333")(props),
        borderRadius: "5px",
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: mode("#555", "#444")(props),
      },
    }),
  },
  layerStyles: {
    card: (props: Record<string, any>) => ({
      bg: mode("white", "whiteAlpha.100")(props),
      borderRadius: "xl",
      padding: "6",
      boxShadow: mode("0 4px 6px rgba(0, 0, 0, 0.1)", "0 4px 6px rgba(255, 255, 255, 0.1)")(props),
      backdropFilter: "blur(10px)",
    }),
    gradientBg: (props: Record<string, any>) => ({
      bgGradient: mode("linear(to-r, solar.primary, solar.secondary)", "linear(to-r, solar.primaryLight, solar.secondaryLight)")(props),
      color: "white",
    }),
  },
  textStyles: {
    h1: {
      fontSize: ["4xl", "5xl", "6xl"],
      fontWeight: "bold",
      lineHeight: "110%",
      letterSpacing: "-2%",
    },
    h2: {
      fontSize: ["3xl", "4xl"],
      fontWeight: "semibold",
      lineHeight: "110%",
      letterSpacing: "-1%",
    },
  },
  breakpoints: {
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  },
});

interface ChakraProviderProps {
  children: ReactNode;
}

export function ChakraProvider({ children }: ChakraProviderProps) {
  return <BaseChakraProvider theme={theme}>{children}</BaseChakraProvider>;
}
