import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/VemAquiPet",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
