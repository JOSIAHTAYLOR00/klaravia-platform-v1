"use client";

import { motion } from "framer-motion";

const InstallerComparisonFallback = () => {
  return (
    <div className="min-h-screen py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-96 h-10 bg-white/10 rounded-lg mx-auto mb-4 animate-pulse" />
          <div className="w-[500px] h-6 bg-white/10 rounded-lg mx-auto animate-pulse" />
        </div>

        {/* Filters */}
        <div className="bg-white/5 rounded-lg p-4 mb-8">
          <div className="flex justify-between items-center">
            <div className="w-40 h-10 bg-white/10 rounded-lg animate-pulse" />
            <div className="w-48 h-6 bg-white/10 rounded-lg animate-pulse" />
          </div>
        </div>

        {/* Installer Cards */}
        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 p-6 rounded-lg border-2 border-white/10"
            >
              <div className="flex justify-between mb-6">
                <div className="space-y-4">
                  <div className="w-64 h-8 bg-white/10 rounded-lg animate-pulse" />
                  <div className="flex space-x-6">
                    {[1, 2, 3].map((j) => (
                      <div key={j} className="w-32 h-5 bg-white/10 rounded-lg animate-pulse" />
                    ))}
                  </div>
                </div>
                <div className="text-right space-y-2">
                  <div className="w-40 h-8 bg-white/10 rounded-lg animate-pulse ml-auto" />
                  <div className="w-32 h-4 bg-white/10 rounded-lg animate-pulse ml-auto" />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="w-24 h-8 bg-white/10 rounded-lg animate-pulse" />
                <div className="w-32 h-10 bg-amber-500/20 rounded-lg animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quality Guarantee */}
        <div className="mt-12 bg-blue-500/10 rounded-lg p-6">
          <div className="flex space-x-4">
            <div className="w-6 h-6 bg-white/10 rounded-full animate-pulse" />
            <div className="flex-1 space-y-3">
              <div className="w-48 h-6 bg-white/10 rounded-lg animate-pulse" />
              <div className="w-full h-16 bg-white/10 rounded-lg animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallerComparisonFallback;
