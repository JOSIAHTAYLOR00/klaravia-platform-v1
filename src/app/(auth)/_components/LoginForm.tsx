"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, ChevronRight, Loader2 } from "lucide-react";
import Link from "next/link";
import { LoginFormProps } from "@/types/Auth/LoginForm/types";
import { useLoginForm } from "@/hooks/useLoginForm";

export function LoginForm({ onSuccess, onError }: LoginFormProps) {
  const { email, setEmail, password, setPassword, rememberMe, setRememberMe, isLoading, error, handleLogin } = useLoginForm({ onSuccess, onError });

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && !isLoading) {
      handleLogin(event);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="bg-surface-layer-5 dark:bg-surface-dark-layer-5 backdrop-blur-sm rounded-lg p-8"
    >
      <form onSubmit={handleLogin} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-main/70 dark:text-blue-50/70 text-sm mb-2">
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-main/50 dark:text-blue-50/50 w-5 h-5" />
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white dark:bg-surface-dark-layer-5 border border-layer-10 dark:border-dark-layer-10 rounded-lg pl-10 pr-4 py-3 text-main dark:text-blue-50 placeholder-main/30 dark:placeholder-blue-50/30 focus:outline-none focus:border-amber-500"
              placeholder="Enter your email"
              autoComplete="email"
              disabled={isLoading}
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-main/70 dark:text-blue-50/70 text-sm mb-2">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-main/50 dark:text-blue-50/50 w-5 h-5" />
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full bg-white dark:bg-surface-dark-layer-5 border border-layer-10 dark:border-dark-layer-10 rounded-lg pl-10 pr-4 py-3 text-main dark:text-blue-50 placeholder-main/30 dark:placeholder-blue-50/30 focus:outline-none focus:border-amber-500"
              placeholder="Enter your password"
              autoComplete="current-password"
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

        {error && (
          <div className="text-red-400 text-sm" role="alert">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-amber-500 text-main dark:text-[#2b2b34] py-3 rounded-lg font-semibold hover:bg-amber-400 transition-colors flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
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
      </form>
    </motion.div>
  );
}
