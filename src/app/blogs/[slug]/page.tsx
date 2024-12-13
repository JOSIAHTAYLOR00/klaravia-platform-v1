import { MDXRemote } from "next-mdx-remote/rsc";
import { getBlogPost, getBlogPosts, getRelatedPosts } from "@/lib/blog";
import { RelatedPosts } from "@/app/blogs/_components/RelatedPosts";
import components from "@/lib/mdx";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getBlogPost(params.slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }

  return {
    title: `${post.title} | Klaravia Blog`,
    description: post.excerpt,
    keywords: post.metadata.keywords,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: post.metadata.image
        ? [
            {
              url: post.metadata.image,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.metadata.image ? [post.metadata.image] : [],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const mdxComponents = {
    ...components,
    RelatedPostsWrapper: components.RelatedPostsWrapper.bind(null, {
      posts: post.relatedPosts || [],
    }),
  };

  return (
    <article className="prose prose-lg dark:prose-invert max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <div className="flex items-center gap-4 mt-4 text-gray-500">
          <span>{post.author}</span>
          <span>•</span>
          <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
          <span>•</span>
          <span>{post.readingTime}</span>
        </div>
      </header>

      <MDXRemote source={post.rawContent} components={mdxComponents} />
    </article>
  );
}
