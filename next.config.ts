import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configured as a dynamic full-stack Next.js web application for Hostinger / Node.js hosting
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
