import { Metadata } from "next";
import { getBlogPosts } from "@/lib/blog";
import { BlogList } from "@/app/blogs/_components/BlogList";
import { ArrowRight, Rss } from "lucide-react";
import Link from "next/link";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Solar Energy & Sustainability Blog | Klaravia",
  description:
    "Discover the latest insights, trends, and innovations in solar energy, sustainability, and renewable technologies. Expert analysis and practical tips from Klaravia.",
  openGraph: {
    title: "Solar Energy & Sustainability Blog | Klaravia",
    description: "Explore expert insights on solar energy and sustainability",
    type: "website",
  },
};

export default async function BlogsPage() {
  const posts = await getBlogPosts();
  console.error("posts");

  return (
    <main className="max-w-7xl mx-auto min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
      <Navbar />
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl p-10 md:p-4 sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Klaravia Blog</h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Stay informed about the latest developments in solar energy, sustainability, and renewable technologies.
        </p>
      </div>

      {/* Featured Post Section (if available) */}
      {posts.length > 0 && (
        <div className="mb-16">
          <div className="relative rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 p-6 sm:p-8">
            <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-full">Featured</span>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">{posts[0].title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">{posts[0].excerpt}</p>
            <Link href="/blogs/achieving-energy-independence">
              <button className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium">
                Read More <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      )}

      {/* Blog List */}
      <BlogList posts={posts} />

      {/* Newsletter Signup */}
      {/* <div className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">Get the latest solar energy and sustainability insights delivered to your inbox.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700"
          />
          <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">Subscribe</button>
        </div>
      </div> */}
    </main>
  );
}
