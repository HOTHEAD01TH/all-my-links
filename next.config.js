/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['api.microlink.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.microlink.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
