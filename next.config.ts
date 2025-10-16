/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i0.wp.com" },
      { protocol: "https", hostname: "i1.wp.com" },
      { protocol: "https", hostname: "i2.wp.com" },
      {
        protocol: "https",
        hostname: "vtl.sey.mybluehost.me/website_ace37854.com", // optional if you also serve images from the root domain
      },
    ],
  },
};

module.exports = nextConfig;
