/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    minimumCacheTTL: 60 * 60 * 24 * 7,
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
