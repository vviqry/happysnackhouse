/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "iili.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "freeimage.host",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
