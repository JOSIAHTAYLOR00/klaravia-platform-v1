"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Mail, Lock, ChevronRight, User, Phone } from "lucide-react";
import { VerificationModal } from "./VerificationModal";
import { useSignUp } from "@/hooks/useSignUp";
import { type SignUpFormData } from "@/types/Auth/auth";
import { FormInput } from "./FormInput";
import { fetchUserAttributes } from "aws-amplify/auth";

export function SignUpForm() {
  const [formData, setFormData] = useState<SignUpFormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [isVerificationOpen, setIsVerificationOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [passwordErrors, setPasswordErrors] = useState<string[]>([]);
  const [passwordStrength, setPasswordStrength] = useState(0); // 0-4
  const [currentPasswordError, setCurrentPasswordError] = useState<string>("");
  const router = useRouter();

  const { signUp, verifyCode, resendCode, signIn } = useSignUp();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validatePassword(formData.password)) {
      setError("Password does not meet requirements");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await signUp(formData);
      setIsVerificationOpen(true);
    } catch (error) {
      setError(error instanceof Error ? error.message : "An error occurred");
      console.error("Error during sign-up:", error);
    }
  };

  const handleVerification = async (code: string) => {
    startTransition(async () => {
      try {
        await verifyCode(formData.email, code);

        await signIn(formData.email, formData.password);

        router.push("/");
      } catch (error) {
        console.error("Error confirming sign up", error);
        setError(error instanceof Error ? error.message : "Verification failed");
      }
    });
    setIsVerificationOpen(false);
  };

  const validatePassword = (password: string) => {
    // Return early with specific message if empty
    if (!password) {
      setCurrentPasswordError("Password is required");
      setPasswordStrength(0);
      return false;
    }

    // Check requirements one at a time
    if (password.length < 8) {
      setCurrentPasswordError("Password must be at least 8 characters long");
      setPasswordStrength(1);
      return false;
    }

    if (!/\d/.test(password)) {
      setCurrentPasswordError("Add at least 1 number");
      setPasswordStrength(2);
      return false;
    }

    if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
      setCurrentPasswordError("Add both uppercase and lowercase letters");
      setPasswordStrength(3);
      return false;
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setCurrentPasswordError("Add at least 1 special character");
      setPasswordStrength(4);
      return false;
    }

    // All requirements met
    setCurrentPasswordError("");
    setPasswordStrength(5);
    return true;
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-surface-layer-5 dark:bg-surface-dark-layer-5 backdrop-blur-sm rounded-lg p-8 "
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <FormInput
              icon={<User className="w-5 h-5" />}
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={(e) => setFormData((prev) => ({ ...prev, firstName: e.target.value }))}
              placeholder="First name"
            />

            <FormInput
              icon={<User className="w-5 h-5" />}
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={(e) => setFormData((prev) => ({ ...prev, lastName: e.target.value }))}
              placeholder="Last name"
            />
          </div>

          <FormInput
            icon={<Phone className="w-5 h-5" />}
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
            placeholder="(123) 456-7890"
          />

          <FormInput
            icon={<Mail className="w-5 h-5" />}
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
            placeholder="Enter your email"
          />

          <FormInput
            icon={<Lock className="w-5 h-5" />}
            type="password"
            name="password"
            value={formData.password}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, password: e.target.value }));
              validatePassword(e.target.value);
            }}
            placeholder="Create password"
          />

          <FormInput
            icon={<Lock className="w-5 h-5" />}
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, confirmPassword: e.target.value }));
              validatePassword(e.target.value);
            }}
            placeholder="Confirm password"
          />

          {formData.password && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="space-y-2">
              <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width: `${(passwordStrength / 5) * 100}%`,
                  }}
                  transition={{ duration: 0.3 }}
                  className={`h-full ${
                    passwordStrength === 0
                      ? "bg-red-500"
                      : passwordStrength === 1
                      ? "bg-red-500"
                      : passwordStrength === 2
                      ? "bg-orange-500"
                      : passwordStrength === 3
                      ? "bg-yellow-500"
                      : passwordStrength === 4
                      ? "bg-blue-500"
                      : "bg-green-500"
                  }`}
                />
              </div>
              {currentPasswordError && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }} className="text-sm text-red-400">
                  {currentPasswordError}
                </motion.p>
              )}
            </motion.div>
          )}

          {error && <div className="text-red-400 text-sm">{error}</div>}

          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-amber-500 text-main dark:text-[#2b2b34] py-3 rounded-lg font-semibold hover:bg-amber-400 transition-colors flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? (
              "Creating Account..."
            ) : (
              <>
                Create Account
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>
      </motion.div>
      {formData && formData.email && (
        <VerificationModal isOpen={isVerificationOpen} onVerify={handleVerification} onClose={() => setIsVerificationOpen(false)} resendCode={() => resendCode(formData.email)} />
      )}
    </>
  );
}
