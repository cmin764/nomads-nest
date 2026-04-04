import type { NextConfig } from "next";
import os from "os";

// Collect all local network IPs so cross-origin HMR works from any LAN device.
const localIPs = Object.values(os.networkInterfaces())
  .flat()
  .filter((iface) => iface && !iface.internal && iface.family === "IPv4")
  .map((iface) => iface!.address);

const isDev = process.env.NODE_ENV === "development";

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
              // 'unsafe-eval' required by React dev mode only (call stack reconstruction)
              // vercel.live is the Vercel toolbar/feedback widget injected on preview deployments
              `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} va.vercel-scripts.com vercel.live`,
              "style-src 'self' 'unsafe-inline' vercel.live",
              // data: for next/image blur placeholders; maps.googleapis.com for contact page embed
              "img-src 'self' data: maps.googleapis.com maps.gstatic.com vercel.live",
              "font-src 'self' vercel.live",
              // va.vercel-scripts.com beacon; maps.googleapis.com for Google Maps widget; vercel.live toolbar WS
              "connect-src 'self' va.vercel-scripts.com vercel.live wss://ws-us3.pusher.com",
              // Google Maps iframe on contact page
              // Google Maps iframe on contact page; YouTube injected by Vercel preview toolbar
              "frame-src maps.google.com www.google.com www.youtube.com",
              "frame-ancestors 'none'",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
