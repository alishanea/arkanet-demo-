/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/prostack",
        destination: "https://prostack.arkanet.ae/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
