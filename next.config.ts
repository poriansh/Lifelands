import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lifelands.ir",
      },
    ],
  },
};

export default nextConfig;
