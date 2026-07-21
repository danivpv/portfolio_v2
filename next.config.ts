import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  serverExternalPackages: ["@sendgrid/mail", "@sendgrid/client"],
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85, 90],
  },
  async redirects() {
    return [
      {
        source: "/education",
        destination: "/#experience",
        permanent: true,
      },
      {
        source: "/industry",
        destination: "/#experience",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/#contact",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/#about",
        permanent: true,
      },
      {
        source: "/projects",
        destination: "/#projects",
        permanent: true,
      },
      {
        source: "/resume",
        destination: "/cv.pdf",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
