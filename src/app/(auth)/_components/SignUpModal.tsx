"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, ChevronRight, User, Phone } from "lucide-react";
import { signUp, confirmSignUp, resendSignUpCode, signIn, getCurrentUser } from "aws-amplify/auth";
import { v4 as uuidv4 } from "uuid";
import { useAuth } from "@/hooks/useAuth";
import { useCreateUser } from "@/hooks/userHooks";
import { useUserDataContext } from "@/providers/UserDataProvider";
import { Installer, UserUpdateOptions } from "@/API";
import { useToast } from "@chakra-ui/react";
import { CognitoUser } from "@/types/Auth/auth";
import { getAuthUser } from "@/lib/auth";
import Link from "next/link";

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSignUpSuccess: () => void;
  installer?: Installer | null;
}

interface VerificationProps {
  isOpen: boolean;
  onVerify: (code: string) => Promise<void>;
  onClose: () => void;
  resendCode: () => Promise<void>;
}

interface CodeInputProps {
  index: number;
  value: string;
  inputRef: React.RefObject<HTMLInputElement>;
  onChange: (value: string, index: number) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>, index: number) => void;
}

export function SignUpModal({ isOpen, onClose, onSignUpSuccess, installer }: SignUpModalProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState<string>("");
  const [isVerificationOpen, setIsVerificationOpen] = useState<boolean>(false);
  const { user, setUser, checkAuth } = useAuth();
  const toast = useToast();
  const { userData, setUserData } = useUserDataContext();
  const { createUser } = useCreateUser();

  const formatPhoneNumber = (value: string): string => {
    const cleaned = value.replace(/\D/g, "");
    return cleaned.startsWith("1") ? `+${cleaned}` : `+1${cleaned}`;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const { isSignUpComplete, nextStep } = await signUp({
        username: formData.email,
        password: formData.password,
        options: {
          userAttributes: {
            email: formData.email,
            phone_number: formatPhoneNumber(formData.phone),
            "custom:user_id": uuidv4(),
            "custom:first_name": formData.firstName,
            "custom:last_name": formData.lastName,
          },
        },
      });

      if (!isSignUpComplete) {
        setIsVerificationOpen(true);
      }
    } catch (error) {
      const err = error as Error;
      setError(err.message);
      console.error("Error during sign-up:", err);
    }
  };

  const handleVerification = async (code: string): Promise<void> => {
    try {
      await confirmSignUp({
        username: formData.email,
        confirmationCode: code,
      });

      const { isSignedIn, nextStep } = await signIn({
        username: formData.email,
        password: formData.password,
      });

      const currentUser = await getAuthUser();

      console.log("currentUser::", currentUser);

      if (isSignedIn && currentUser) {
        setUser(currentUser);

        const updatedUserData = {
          ...user,
          id: currentUser.attributes.sub,
          cognito_id: currentUser.attributes.sub,
          first_name: currentUser.attributes["custom:first_name"],
          last_name: currentUser.attributes["custom:last_name"],
          email: currentUser.attributes.email,
          // phone_number: currentUser.attributes.phone_number,
          updated_by: UserUpdateOptions.DYNAMO,
        };

        if ("google_solar_object" in updatedUserData) {
          delete updatedUserData.google_solar_object;
        }

        await createUser({
          //@ts-ignore
          variables: { input: updatedUserData },
        });
        checkAuth();
        onSignUpSuccess();
      }
    } catch (error) {
      const err = error as Error;
      console.error("Error confirming sign up:", err);
      toast({
        title: "Error verifying email",
        description: err.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const handleResendCode = async (): Promise<void> => {
    try {
      await resendSignUpCode({
        username: formData.email,
      });
      toast({
        title: "Success",
        description: "Verification code resent",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      const err = error as Error;
      toast({
        title: "Error",
        description: err.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 pt-0"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white dark:bg-[#121212] rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl text-main text-blue-50 mb-2 font-bold">Create Your Account</h2>
          {installer && <p className="text-main/70 dark:text-blue-50/70">to continue with {installer.company_name}</p>}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Form fields from SignUpPage */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-main/50 dark:text-blue-50/50 w-5 h-5" />
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full bg-white/5 border border-layer-10 dark:border-dark-layer-10 rounded-lg pl-10 pr-4 py-3 text-main dark:text-blue-50 placeholder-text-main/30 dark:placeholder-blue-50/30 focus:outline-none focus:border-amber-500"
                placeholder="First name"
              />
            </div>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-main/50 dark:text-blue-50/50 w-5 h-5" />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full bg-white/5 border border-layer-10 dark:border-dark-layer-10 rounded-lg pl-10 pr-4 py-3 text-main dark:text-blue-50 placeholder-text-main/30 dark:placeholder-blue-50/30 focus:outline-none focus:border-amber-500"
                placeholder="Last name"
              />
            </div>
          </div>

          <div>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-main/50 dark:text-blue-50/50 w-5 h-5" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-white/5 border border-layer-10 dark:border-dark-layer-10 rounded-lg pl-10 pr-4 py-3 text-main dark:text-blue-50 placeholder-text-main/30 dark:placeholder-blue-50/30 focus:outline-none focus:border-amber-500"
                placeholder="(123) 456-7890"
              />
            </div>
          </div>

          <div>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-main/50 dark:text-blue-50/50 w-5 h-5" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white/5 border border-layer-10 dark:border-dark-layer-10 rounded-lg pl-10 pr-4 py-3 text-main dark:text-blue-50 placeholder-text-main/30 dark:placeholder-blue-50/30 focus:outline-none focus:border-amber-500"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-main/50 dark:text-blue-50/50 w-5 h-5" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-white/5 border border-layer-10 dark:border-dark-layer-10 rounded-lg pl-10 pr-4 py-3 text-main dark:text-blue-50 placeholder-text-main/30 dark:placeholder-blue-50/30 focus:outline-none focus:border-amber-500"
                placeholder="Create password"
              />
            </div>
          </div>

          <div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-main/50 dark:text-blue-50/50 w-5 h-5" />
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full bg-white/5 border border-layer-10 dark:border-dark-layer-10 rounded-lg pl-10 pr-4 py-3 text-main dark:text-blue-50 placeholder-text-main/30 dark:placeholder-blue-50/30 focus:outline-none focus:border-amber-500"
                placeholder="Confirm password"
              />
            </div>
          </div>

          {error && <div className="text-red-400 text-sm">{error}</div>}

          <div className="flex space-x-4 pt-6">
            <button
              type="button"
              onClick={onClose}
              className="w-full border border-layer-10 dark:border-dark-layer-10 text-main dark:text-blue-50 py-3 rounded-lg font-semibold hover:bg-surface-layer-5 dark:hover:bg-surface-dark-layer-5 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full bg-amber-500 text-[#2b2b34] py-3 rounded-lg font-semibold hover:bg-amber-400 transition-colors flex items-center justify-center group"
            >
              Create Account
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </form>

        <div className="text-center mt-6">
          <p className="text-main/50 dark:text-blue-50/50 text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-amber-500 hover:text-amber-400">
              Sign in
            </Link>
          </p>
        </div>
      </motion.div>

      {/* Verification Modal */}
      {isVerificationOpen && (
        <VerificationModal
          isOpen={isVerificationOpen}
          onVerify={handleVerification}
          onClose={() => setIsVerificationOpen(false)}
          // @ts-ignore
          resendCode={() => {
            /* Add resend logic */
          }}
        />
      )}
    </motion.div>
  );
}

const VerificationModal: React.FC<VerificationProps> = ({ isOpen, onVerify, onClose, resendCode }) => {
  const [code, setCode] = useState<string[]>(Array(6).fill(""));
  const [error, setError] = useState<string>("");
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, 6);
  }, []);

  const handleChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return;

    setCode((prev) => {
      const newCode = [...prev];
      newCode[index] = value;
      return newCode;
    });

    // Use setTimeout to ensure state is updated before focusing
    if (value && index < 5) {
      setTimeout(() => {
        inputRefs.current[index + 1]?.focus();
      }, 0);
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace") {
      setCode((prev) => {
        const newCode = [...prev];
        newCode[index] = "";
        return newCode;
      });

      setTimeout(() => {
        if (index === 0) {
          inputRefs.current[index]?.focus();
        } else {
          inputRefs.current[index - 1]?.focus();
        }
      }, 0);
    }
  };

  const handleSubmit = () => {
    const verificationCode = code.join("");
    if (verificationCode.length !== 6) {
      setError("Please enter all 6 digits");
      return;
    }
    onVerify(verificationCode);
  };

  const CodeInput: React.FC<CodeInputProps> = ({ index, value, inputRef, onChange, onKeyDown }) => (
    <input
      key={index}
      ref={inputRef}
      type="text"
      maxLength={1}
      value={value}
      onChange={(e) => onChange(e.target.value, index)}
      onKeyDown={(e) => onKeyDown(e, index)}
      className="w-12 h-12 text-center bg-surface-layer-5 dark:bg-surface-dark-layer-5 border border-layer-10 dark:border-dark-layer-10 rounded-lg text-main dark:text-blue-50 text-xl font-bold focus:outline-none focus:border-amber-500"
    />
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white dark:bg-[#121212] rounded-lg p-8 max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold text-main dark:text-blue-50 mb-2 text-center">Enter Verification Code</h2>
        <p className="text-main/70 dark:text-blue-50/70 text-center mb-8">Enter the 6-digit code we sent to your email</p>

        <div className="flex justify-center gap-2 mb-8">
          {code.map((digit, index) => (
            <CodeInput
              key={index}
              index={index}
              value={digit}
              //@ts-ignore
              inputRef={(el) => (inputRefs.current[index] = el)}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
            />
          ))}
        </div>

        {error && <div className="text-red-400 text-sm text-center mb-4">{error}</div>}

        <button onClick={handleSubmit} className="w-full bg-amber-500 text-[#2b2b34] py-3 rounded-lg font-semibold hover:bg-amber-400 transition-colors">
          Verify Code
        </button>

        <button onClick={onClose} className="w-full mt-4 text-main/70 dark:text-blue-50/70 hover:text-main dark:hover:text-blue-50 transition-colors">
          Cancel
        </button>

        <div className="mt-6 text-center">
          <button className="text-amber-500 hover:text-amber-400 text-sm" onClick={() => void resendCode()}>
            Resend Code
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUpModal;
