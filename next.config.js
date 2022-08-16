/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "https://Image.icons8.com",
      "image.icons8.com",
      "https://image.icons8.com",
      "https://img.icons8.com",
      "img.icons8.com",
      "plugins.jetbrains.com",
      "svgrepo.com",
      "iconape.com",
    ],
  },
};

module.exports = nextConfig;
