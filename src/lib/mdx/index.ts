import * as React from 'react';
import Link from 'next/link';
import { RelatedPosts as RelatedPostsComponent } from '@/app/blogs/_components/RelatedPosts';

type Props = React.ComponentPropsWithoutRef<any>;

interface RelatedPost {
  slug: string;
  title: string;
  excerpt: string;
  image?: string;
}

interface RelatedPostsProps {
  posts: Array<RelatedPost>;
}


const components = {
  h1: (props: Props) => 
    React.createElement('h1', {
      className: "text-4xl font-bold mb-6",
      ...props
    }),
  
  h2: (props: Props) =>
    React.createElement('h2', {
      className: "text-3xl font-semibold mb-4 mt-8",
      ...props
    }),
  
  h3: (props: Props) =>
    React.createElement('h3', {
      className: "text-2xl font-semibold mb-3 mt-6",
      ...props
    }),
  
  p: (props: Props) =>
    React.createElement('p', {
      className: "text-main/80 dark:text-gray-400 mb-4 leading-relaxed",
      ...props
    }),
  
  a: ({ href = '#', ...props }: Props & { href?: string }) =>
    React.createElement(Link, {
      href,
      className: "text-amber-500 hover:text-amber-400 transition-colors",
      ...props
    }),
  
  ul: (props: Props) =>
    React.createElement('ul', {
      className: "list-disc list-inside mb-4 space-y-2 text-gray-300",
      ...props
    }),
  
  ol: (props: Props) =>
    React.createElement('ol', {
      className: "list-decimal list-inside mb-4 space-y-2 text-gray-300",
      ...props
    }),
  
  blockquote: (props: Props) =>
    React.createElement('blockquote', {
      className: "border-l-4 border-amber-500 pl-4 my-4 italic text-gray-400",
      ...props
    }),
  
  code: (props: Props) =>
    React.createElement('code', {
      className: "bg-white/10 rounded px-2 py-1 text-sm",
      ...props
    }),
  
  pre: (props: Props) =>
    React.createElement('pre', {
      className: "bg-white/10 rounded-lg p-4 overflow-x-auto mb-4",
      ...props
    }),

  RelatedPostsWrapper: function RelatedPostsWrapper(props: RelatedPostsProps) {
    return React.createElement(RelatedPostsComponent, props);
  }
};

export default components;