import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import { Providers } from "@/providers/Providers";
import { eurostile } from "@/styles/fonts";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | Klaravia",
    default: "Klaravia - Solar Simplified",
  },
  description: "Transform your home with professional solar solutions in just minutes online. Get instant quotes, compare installers, and save on energy costs.",
  keywords: ["solar energy", "home solar", "solar installation", "renewable energy", "solar savings"],
  authors: [{ name: "Klaravia" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Klaravia",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#121212",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${eurostile.variable}`}>
      <head>
        <script async src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBJxxSgSxoucgTpI09qbTz_BOjP05eh-kk&libraries=places"></script>
      </head>
      <body className={`antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
