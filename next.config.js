/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.traction.one'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig

