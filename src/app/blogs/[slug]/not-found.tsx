import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Blog Post Not Found</h2>
        <p className="text-gray-400 mb-6">The blog post you're looking for doesn't exist or has been moved.</p>
        <Link href="/blogs" className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg transition-colors">
          Back to Blog
        </Link>
      </div>
    </div>
  );
}
