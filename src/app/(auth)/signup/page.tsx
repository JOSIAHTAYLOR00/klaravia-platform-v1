"use client";

import { SignUpForm } from "@/app/(auth)/_components/SignUpForm";
import Navbar from "@/app/components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-12">
      <Navbar />
      <div className="w-full max-w-md">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <h1 className="text-4xl text-main dark:text-blue-50 mb-2 font-bold">Create Account</h1>
          <p className="text-main/70 dark:text-blue-50/70">Start your solar journey with Klaravia</p>
        </motion.div>

        <SignUpForm />

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-center mt-6">
          <p className="text-main/50 dark:text-blue-50/50 text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-amber-500 hover:text-amber-400">
              Sign in
            </Link>
          </p>
        </motion.div>
      </div>
    </main>
  );
}
