import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/kanbanly",
        destination: "https://kanbanly.caiocesardev.com.br",
      },
      {
        source: "/kanbanly/:path*",
        destination: "https://kanbanly.caiocesardev.com.br/:path*",
      },
    ];
  },
};

export default nextConfig;
