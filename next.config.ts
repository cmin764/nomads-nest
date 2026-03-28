import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    maximumDiskCacheSize: 50 * 1024 * 1024, // 50 MB — default is too small in dev
  },
};

export default nextConfig;
