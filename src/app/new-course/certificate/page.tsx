import { Metadata } from "next";
import Certificate from "@/app/new-course/_components/certificate/Certificate";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Your Solar Expert Certificate | Klaravia",
  description: "Congratulations on completing the Solar Expert Course",
};

export default function CertificatePage() {
  return <Certificate />;
}
