import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '', // Leave empty if no specific port
        pathname: '/**', // Allows any path from this hostname
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
