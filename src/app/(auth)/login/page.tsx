// app/login/page.tsx
import { Metadata } from "next";
import LoginPage from "@/app/(auth)/_components/LoginPage";

export const metadata: Metadata = {
  title: "Login | Klaravia",
  description: "Log in to access your Klaravia account details",
};

export default function Page() {
  return <LoginPage />;
}
