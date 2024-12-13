import Link from "next/link";
import { GraduationCap, Clock, BookOpen, Award } from "lucide-react";

export default function CourseHomePage() {
  return (
    <div className="max-w-4xl mx-auto pt-28 md:pt-12 px-6">
      <header className="text-center mb-16">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
            <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Residential Solar 101</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">Master the essentials of residential solar in under 30 minutes</p>
      </header>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
          <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
            <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="font-semibold text-gray-900 dark:text-white mb-2">Self-Paced</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Learn at your own pace with bite-sized lessons</p>
        </div>

        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
          <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
            <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="font-semibold text-gray-900 dark:text-white mb-2">Comprehensive</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Cover all aspects of residential solar</p>
        </div>

        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
          <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
            <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="font-semibold text-gray-900 dark:text-white mb-2">Expert Status</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Earn your Solar Expert certification</p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">What You'll Learn</h2>
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-400">This comprehensive course covers everything you need to know about residential solar, including:</p>
          <ul className="space-y-3 text-gray-600 dark:text-gray-400">
            <li className="flex items-start gap-2">• Understanding solar technology and how it works</li>
            <li className="flex items-start gap-2">• Evaluating your home's solar potential</li>
            <li className="flex items-start gap-2">• Exploring financing options and incentives</li>
            <li className="flex items-start gap-2">• Selecting equipment and qualified installers</li>
            <li className="flex items-start gap-2">• Making informed decisions about your solar investment</li>
          </ul>
        </div>
      </div>

      <div className="text-center">
        <Link
          href="/new-course/solar-basics/understanding-solar-power"
          className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
        >
          Start Learning
        </Link>
      </div>
    </div>
  );
}
