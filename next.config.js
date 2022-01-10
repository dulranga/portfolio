/** @type {import("next").NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["localhost"],
    minimumCacheTTL: 60 * 60,
  },
  poweredByHeader: false,
};
