/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/press",
        destination: "/pr",
        permanent: true,
      },
      {
        source: "/collective-casestudies",
        destination: "/case-studies",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;



