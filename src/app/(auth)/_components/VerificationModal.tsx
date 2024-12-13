import { useState, useRef, KeyboardEvent } from "react";
import { motion } from "framer-motion";

interface VerificationModalProps {
  isOpen: boolean;
  onVerify: (code: string) => Promise<void>;
  onClose: () => void;
  resendCode: () => Promise<any>;
}

export function VerificationModal({ isOpen, onVerify, onClose, resendCode }: VerificationModalProps) {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    if (isNaN(Number(value))) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value !== "" && index < 5 && inputs && inputs.current && inputs.current[index + 1] !== null) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputs.current[index - 1]?.focus();
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-[#2b2b34] rounded-lg p-8 max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold text-blue-50 mb-2 text-center">Enter Verification Code</h2>
        <p className="text-blue-50/70 text-center mb-8">Enter the 6-digit code we sent to your email</p>

        <div className="flex justify-center gap-2 mb-8">
          {code.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputs.current[index] = el)}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-12 text-center bg-white/5 border border-white/10 rounded-lg text-blue-50 text-xl font-bold focus:outline-none focus:border-amber-500"
            />
          ))}
        </div>

        {error && <div className="text-red-400 text-sm text-center mb-4">{error}</div>}

        <button onClick={handleSubmit} className="w-full bg-amber-500 text-[#2b2b34] py-3 rounded-lg font-semibold hover:bg-amber-400 transition-colors">
          Verify Code
        </button>

        <button onClick={onClose} className="w-full mt-4 text-blue-50/70 hover:text-blue-50 transition-colors">
          Cancel
        </button>

        <div className="mt-6 text-center">
          <button className="text-amber-500 hover:text-amber-400 text-sm" onClick={resendCode}>
            Resend Code
          </button>
        </div>
      </motion.div>
    </div>
  );
}
