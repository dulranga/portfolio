/** @type {import("next").NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["localhost"],
    minimumCacheTTL: 60 * 60,
  },
  poweredByHeader: false,
  redirects: async () => {
    const redirects = [
      { destination: "https://github.com/dulranga", source: "/github" },
      { destination: "https://facebook.com/dulrangaD", source: "/facebook" },
      { destination: "https://twitter.com/dulrangaD", source: "/twitter" },
      { destination: "https://wa.link/ny9k96", source: "/whatsapp" },
    ];
    return redirects.map((redirect) => ({
      ...redirect,
      permanent: true,
      statusCode: 301,
    }));
  },
  publicRuntimeConfig: {
    backend: process.env.BACKEND_URL,
  },
};
