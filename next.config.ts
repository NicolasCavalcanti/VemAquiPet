import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/VemAquiPet",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: "/VemAquiPet",
  },
};

export default nextConfig;
