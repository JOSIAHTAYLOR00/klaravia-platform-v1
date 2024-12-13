"use client";

import { useState } from "react";
import { BookOpen } from "lucide-react";
import CourseSidebar from "./CourseSidebar";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden absolute top-0 left-0 right-0 h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 flex items-center">
        <div className="w-full flex items-center content-center justify-center mt-32 mb-2">
          <button onClick={() => setIsOpen(true)} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg inline-flex text-blue-600">
            <span className="pr-2">
              <BookOpen className="w-6 h-6" />
            </span>
            Course Menu{" "}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black/20 dark:bg-black/40 md:hidden z-40" onClick={() => setIsOpen(false)} />
          <div className="fixed inset-y-0 left-0 w-80 bg-white dark:bg-gray-900 z-50 md:hidden">
            <CourseSidebar />
          </div>
        </>
      )}
    </>
  );
}
