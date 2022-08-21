/** @type {import('next').NextConfig} */
const { remarkCodeHike } = require("@code-hike/mdx")
const theme = require("shiki/themes/github-dark-dimmed.json")

const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [[remarkCodeHike, { theme, lineNumbers: false, showCopyButton: true }]],
  },
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
      "www.rainbowkit.com",
    ],
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
})

module.exports = nextConfig
