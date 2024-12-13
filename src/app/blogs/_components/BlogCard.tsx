import Link from "next/link";
import { BlogPost } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="bg-surface-layer-5 dark:bg-surface-dark-layer-5 rounded-xl p-6 hover:bg-surface-layer-10 dark:hover:bg-surface-dark-layer-10 transition-all duration-300">
      <Link href={`/blogs/${post.slug}`} className="block">
        {post.metadata.image && (
          <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">
            <img src={post.metadata.image} alt={post.title} className="object-cover w-full h-full" />
          </div>
        )}
        <div className="space-y-2">
          <div className="flex gap-2">
            {post.categories.map((category) => (
              <span key={category} className="text-xs font-semibold bg-amber-500/10 text-amber-500 px-2 py-1 rounded">
                {category}
              </span>
            ))}
          </div>
          <h2 className="text-xl font-semibold text-main dark:text-white hover:text-amber-500">{post.title}</h2>
          <p className="text-main/80 dark:text-gray-400 text-md line-clamp-2">{post.excerpt}</p>
          <div className="flex items-center gap-4 text-sm text-gray-500 pt-2">
            <span>{post.author}</span>
            <span>•</span>
            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
            <span>•</span>
            <span>{post.readingTime}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
