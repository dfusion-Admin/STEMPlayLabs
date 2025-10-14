/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i0.wp.com" },
      { protocol: "https", hostname: "i1.wp.com" },
      { protocol: "https", hostname: "i2.wp.com" },
      {
        protocol: "https",
        hostname: "dfusioninc.com", // optional if you also serve images from the root domain
      },
    ],
  },
};

module.exports = nextConfig;
