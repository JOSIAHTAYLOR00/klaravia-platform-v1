"use client";

import { motion } from "framer-motion";
import { Mail, Lock, ChevronRight, User, Phone, Loader2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { signUp, confirmSignUp, resendSignUpCode, signIn } from "aws-amplify/auth";
import { v4 as uuidv4 } from "uuid";
import { Installer } from "@/API";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSignUpSuccess: () => void;
  installer?: Installer | null;
}

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export function AuthModals({ isOpen, onClose, onSignUpSuccess, installer }: AuthModalProps) {
  const [showLogin, setShowLogin] = useState(false);

  if (!isOpen) return null;

  return showLogin ? (
    <LoginModal onClose={onClose} onLoginSuccess={onSignUpSuccess} onBackToSignUp={() => setShowLogin(false)} />
  ) : (
    <SignUpModal installer={installer} onClose={onClose} onSignUpSuccess={onSignUpSuccess} onShowLogin={() => setShowLogin(true)} />
  );
}

interface LoginModalProps {
  onClose: () => void;
  onLoginSuccess: () => void;
  onBackToSignUp: () => void;
}

function LoginModal({ onClose, onLoginSuccess, onBackToSignUp }: LoginModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const { isSignedIn } = await signIn({
        username: email,
        password,
      });

      if (isSignedIn) {
        onLoginSuccess();
        onClose();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred during login");
    } finally {
      setIsLoading(false);
    }
  };

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
          <h2 className="text-2xl text-main dark:text-blue-50/80 mb-2 font-bold">Welcome Back</h2>
          <p className="text-main/70 dark:text-blue-50/70">Log in to your account</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-main/50 dark:text-blue-50/50 w-5 h-5" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-layer-10 dark:border-dark-layer-10 rounded-lg pl-10 pr-4 py-3 text-main dark:text-blue-50 placeholder-text-main/30 dark:placeholder-blue-50/30 focus:outline-none focus:border-amber-500"
                placeholder="Enter your email"
                disabled={isLoading}
              />
            </div>
          </div>

          <div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-main/50 dark:text-blue-50/50 w-5 h-5" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-layer-10 dark:border-dark-layer-10 rounded-lg pl-10 pr-4 py-3 text-main dark:text-blue-50 placeholder-text-main/30 dark:placeholder-blue-50/30 focus:outline-none focus:border-amber-500"
                placeholder="Enter your password"
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 rounded border-white/10 bg-white/5 text-amber-500 focus:ring-amber-500"
                disabled={isLoading}
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-main/70 dark:text-blue-50/70">
                Remember me
              </label>
            </div>

            <Link href="/reset-password" className="text-sm text-amber-500 hover:text-amber-400">
              Forgot password?
            </Link>
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
              disabled={isLoading}
              className="w-full bg-amber-500 text-[#2b2b34] py-3 rounded-lg font-semibold hover:bg-amber-400 transition-colors flex items-center justify-center group"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin mr-2" />
                  Logging in...
                </>
              ) : (
                <>
                  Log In
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </div>
        </form>

        <div className="text-center mt-6">
          <p className="text-main/50 dark:text-blue-50/50 text-sm">
            Don't have an account?{" "}
            <button onClick={onBackToSignUp} className="text-amber-500 hover:text-amber-400">
              Sign up
            </button>
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

interface SignUpModalProps {
  installer?: Installer | null;
  onClose: () => void;
  onSignUpSuccess: () => void;
  onShowLogin: () => void;
}

function SignUpModal({ installer, onClose, onSignUpSuccess, onShowLogin }: SignUpModalProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [isVerificationOpen, setIsVerificationOpen] = useState(false);

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

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const formatPhoneNumber = (value: string): string => {
    const cleaned = value.replace(/\D/g, "");
    return cleaned.startsWith("1") ? `+${cleaned}` : `+1${cleaned}`;
  };

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
        {/* Existing SignUpModal content */}
        <div className="text-center mb-8">
          <h2 className="text-2xl text-main dark:text-blue-50/80 mb-2 font-bold">Create Your Account</h2>
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
            <button onClick={onShowLogin} className="text-amber-500 hover:text-amber-400">
              Log in
            </button>
          </p>
        </div>
      </motion.div>

      {isVerificationOpen && (
        <VerificationModal
          isOpen={isVerificationOpen}
          onVerify={async (code) => {
            try {
              await confirmSignUp({
                username: formData.email,
                confirmationCode: code,
              });

              const { isSignedIn } = await signIn({
                username: formData.email,
                password: formData.password,
              });

              if (isSignedIn) {
                onSignUpSuccess();
                onClose();
              }
            } catch (error) {
              setError(error instanceof Error ? error.message : "Verification failed");
            }
          }}
          onClose={() => setIsVerificationOpen(false)}
          resendCode={async () => {
            try {
              await resendSignUpCode({
                username: formData.email,
              });
            } catch (error) {
              setError(error instanceof Error ? error.message : "Failed to resend code");
            }
          }}
        />
      )}
    </motion.div>
  );
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

export default AuthModals;
