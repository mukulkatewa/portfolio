import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "cdn.simpleicons.org" }],
  },
  async redirects() {
    // Awards now live on the Experience page.
    return [{ source: "/awards", destination: "/experience#awards", permanent: true }];
  },
};

export default nextConfig;
