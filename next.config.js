/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },

  images: {
    domains: ["images.unsplash.com"],
  },

  target: 'server',
}

module.exports = nextConfig
