import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  readingTime: string;
  categories: string[];
  relatedPosts?: {
    slug: string;
    title: string;
    excerpt: string;
    image?: string;
  }[];
  rawContent: string;
  metadata: {
    title: string;
    description: string;
    keywords: string[];
    image?: string;
  };
}

const postsDirectory = path.join(process.cwd(), 'src/content/blogs');

export async function getBlogPosts(): Promise<BlogPost[]> {
  const files = fs.readdirSync(postsDirectory);
  
  const posts = await Promise.all(
    files.map((filename) => getBlogPost(filename.replace(/\.mdx$/, '')))
  );

  // Filter out null values and sort the posts
  return posts
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    console.log(fullPath)
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    const { data, content } = matter(fileContents);

    return {
      slug,
      rawContent: content,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      author: data.author,
      readingTime: calculateReadingTime(content),
      categories: data.categories || [],
      metadata: {
        title: data.title,
        description: data.excerpt,
        keywords: data.keywords || [],
        image: data.image,
      },
      relatedPosts: data.relatedPosts || [],
    };
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

export async function getRelatedPosts(currentPost: BlogPost, limit = 3): Promise<BlogPost[]> {
  const allPosts = await getBlogPosts();
  
  return allPosts
    .filter(post => 
      // Don't include the current post
      post.slug !== currentPost.slug &&
      // Match by categories
      post.categories.some(category => 
        currentPost.categories.includes(category)
      )
    )
    .sort((a, b) => {
      // Count matching categories for better relevance
      const aMatches = a.categories.filter(cat => 
        currentPost.categories.includes(cat)
      ).length;
      const bMatches = b.categories.filter(cat => 
        currentPost.categories.includes(cat)
      ).length;
      
      return bMatches - aMatches;
    })
    .slice(0, limit);
}