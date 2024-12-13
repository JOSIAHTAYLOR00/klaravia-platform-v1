import { CourseProvider } from "@/providers/NewCourseProvider";
import CourseSidebar from "./_components/CourseSidebar";
import MobileNav from "./_components/MobileNav";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Solar Expert Course | Klaravia",
  description: "Learn everything about residential solar in this comprehensive course",
};

export default function CourseLayout({ children }: { children: React.ReactNode }) {
  return (
    <CourseProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-[#121212]">
        <Navbar />
        <MobileNav />
        <div className="flex">
          {/* Sidebar - hidden on mobile */}
          <div className="hidden md:block w-80 fixed left-0 top-0 h-screen overflow-y-auto border-r border-gray-200 dark:border-gray-800">
            <CourseSidebar />
          </div>

          {/* Main Content */}
          <main className="flex-1 md:ml-80">
            <div className="max-w-4xl mx-auto px-4 py-8 overflow-auto">{children}</div>
          </main>
        </div>
      </div>
    </CourseProvider>
  );
}
