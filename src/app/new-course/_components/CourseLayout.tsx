import { ReactNode } from "react";
import CourseSidebar from "./CourseSidebar";
import MobileNav from "./MobileNav";

export default function CourseLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Mobile Navigation */}
      <MobileNav />

      <div className="flex">
        {/* Sidebar - hidden on mobile */}
        <div className="hidden md:block w-80 fixed left-0 top-0 h-screen overflow-y-auto border-r border-gray-200 dark:border-gray-800">
          <CourseSidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 md:ml-80">
          <div className="max-w-4xl mx-auto px-4 py-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
