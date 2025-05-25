import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // ← Esta linha desativa a otimização automática
  },
};

export default nextConfig;
