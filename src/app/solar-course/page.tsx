import { Metadata } from "next";
import { Solar101Course } from "./_components/Solar101Course";

export const metadata: Metadata = {
  title: "Solar 101 Course | Complete Guide to Solar Energy - Klaravia",
  description: "Master the basics of solar energy with our comprehensive Solar 101 course. Learn about solar technology, financial benefits, and installation process.",
  keywords: ["solar energy course", "solar panels guide", "solar installation guide", "solar power basics", "renewable energy education", "solar 101"],
  openGraph: {
    title: "Solar 101 Course | Complete Guide to Solar Energy",
    description: "Master solar energy basics with our comprehensive guide. Learn about technology, benefits, and installation.",
    type: "article",
    images: [
      {
        url: "/images/solar-course-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Solar 101 Course Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar 101 Course | Complete Guide to Solar Energy",
    description: "Master solar energy basics with our comprehensive guide.",
    images: ["/images/solar-course-banner.jpg"],
  },
};

export default function Page() {
  return <Solar101Course />;
}
