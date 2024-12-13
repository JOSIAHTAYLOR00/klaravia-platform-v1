// app/_components/auth/LoginPage.tsx
"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { LoginForm } from "./LoginForm";
import { useAuth } from "@/hooks/useAuth";
import Navbar from "@/app/components/Navbar";

export default function LoginPage() {
  const router = useRouter();
  const { checkAuth } = useAuth();

  const handleLoginSuccess = () => {
    checkAuth();
    router.push("/");
  };

  const handleLoginError = (error: Error) => {
    // TODO: Additional error handling if needed
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Navbar />
      <div className="w-full max-w-md">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <h1 className="text-4xl text-main dark:text-blue-50 mb-2 logo">Klaravia</h1>
          <p className="text-main/70 dark:text-blue-50/70">Log in to access your account details</p>
        </motion.div>

        <LoginForm onSuccess={handleLoginSuccess} onError={handleLoginError} />

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-center mt-6">
          <p className="text-main/50 dark:text-blue-50/50 text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/user-sign-up" className="text-amber-500 hover:text-amber-400">
              Get started now
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
