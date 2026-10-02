import type {NextConfig} from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dl.lifelands.ir",
      },
    ],
  },
};

export default nextConfig;
