/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  experimental: {
    mdxRs: true,
  },
  images: {
    domains: ['installer-cover-images.s3.us-east-2.amazonaws.com', 'klaravia-public-assets.s3.us-east-2.amazonaws.com', "user-image-uploads-dev.s3.us-east-2.amazonaws.com"], // Add your image domains
  },
};

module.exports = nextConfig;