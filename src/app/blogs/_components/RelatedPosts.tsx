import React from "react";
import Link from "next/link";

interface RelatedPost {
  slug: string;
  title: string;
  excerpt: string;
  image?: string;
}

interface RelatedPostsProps {
  posts: RelatedPost[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="mt-16 border-t pt-8">
      <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blogs/${post.slug}`} className="group">
            {post.image && (
              <div className="aspect-video relative mb-4 overflow-hidden rounded-lg">
                <img src={post.image} alt={post.title} className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" />
              </div>
            )}
            <h3 className="font-semibold text-lg mb-2 group-hover:text-amber-500 transition-colors">{post.title}</h3>
            <p className="text-gray-500 text-sm line-clamp-2">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
