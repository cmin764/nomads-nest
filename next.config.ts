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
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              // 'unsafe-inline' required for the inline theme-init script in layout.tsx
              "script-src 'self' 'unsafe-inline' va.vercel-scripts.com",
              "style-src 'self' 'unsafe-inline'",
              // data: for next/image blur placeholders; maps.googleapis.com for contact page embed
              "img-src 'self' data: maps.googleapis.com maps.gstatic.com",
              "font-src 'self'",
              // va.vercel-scripts.com beacon; maps.googleapis.com for Google Maps widget
              "connect-src 'self' va.vercel-scripts.com",
              // Google Maps iframe on contact page
              "frame-src maps.google.com www.google.com",
              "frame-ancestors 'none'",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
