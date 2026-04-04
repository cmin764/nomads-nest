import type { NextConfig } from "next";
import os from "os";

// Collect all local network IPs so cross-origin HMR works from any LAN device.
const localIPs = Object.values(os.networkInterfaces())
  .flat()
  .filter((iface) => iface && !iface.internal && iface.family === "IPv4")
  .map((iface) => iface!.address);

const nextConfig: NextConfig = {
  allowedDevOrigins: localIPs,
  images: {
    maximumDiskCacheSize: 50 * 1024 * 1024, // 50 MB — default is too small in dev
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
