import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/baxtop-hero-website',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
