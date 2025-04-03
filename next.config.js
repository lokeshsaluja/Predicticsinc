/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removing 'output: export' to enable API routes
  // output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
