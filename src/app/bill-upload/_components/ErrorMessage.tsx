import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle } from "lucide-react";
import { ErrorMessageProps } from "../_types";

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => (
  <AnimatePresence>
    {error && (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="bg-red-500/10 text-red-400 p-4 rounded-lg flex items-center"
      >
        <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
        {error}
      </motion.div>
    )}
  </AnimatePresence>
);
