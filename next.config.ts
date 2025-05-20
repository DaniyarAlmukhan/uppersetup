import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        pathname: '/images/**',
      },
    ],
  },
  env: {
    OMDB_API_KEY: process.env.OMDB_API_KEY,
  },
};

export default nextConfig;
