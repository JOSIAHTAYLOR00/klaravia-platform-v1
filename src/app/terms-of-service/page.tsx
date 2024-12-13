import { Metadata } from "next";
import TOS from "./_components/TOS";

export const metadata: Metadata = {
  title: "Terms of Service | Klaravia",
  description:
    "Read our Terms of Service to understand your rights and responsibilities when using Klaravia's solar planning and installation platform. We provide transparent guidelines for homeowners and solar installers.",

  // OpenGraph metadata for social sharing
  openGraph: {
    title: "Terms of Service | Klaravia",
    description: "Understand your rights and responsibilities when using Klaravia's solar planning and installation platform. Clear guidelines for homeowners and installers.",
    type: "website",
    locale: "en_US",
    siteName: "Klaravia",
    url: "https://klaravia.com/terms-of-service",
    images: [
      {
        url: "/images/og-terms.jpg", // You'll need to create this image
        width: 1200,
        height: 630,
        alt: "Klaravia Terms of Service",
      },
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Klaravia",
    description: "Clear guidelines for using Klaravia's solar platform. Understand your rights and responsibilities as a homeowner or installer.",
    images: ["/images/og-terms.jpg"],
  },

  // Robots metadata
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Alternative languages if you support them
  alternates: {
    canonical: "https://klaravia.com/terms-of-service",
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },

  // Additional metadata
  category: "Legal",
  keywords: [
    "solar installation terms",
    "solar panel agreement",
    "Klaravia terms",
    "solar energy terms",
    "residential solar terms",
    "solar installation agreement",
    "solar platform terms",
  ],
  authors: [{ name: "Klaravia Legal Team" }],
  publisher: "Klaravia",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ffffff",
};

export default function TermsOfService() {
  return <TOS />;
}
