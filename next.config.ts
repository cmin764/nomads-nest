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
};

export default nextConfig;
