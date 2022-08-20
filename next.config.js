/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
})

const nextConfig = withMDX({
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
      "www.rainbowkit.com"
    ],
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
});

module.exports = nextConfig;
