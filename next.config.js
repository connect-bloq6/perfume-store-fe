/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.unsplash.com',
      },
    ],
    // Device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Image sizes for different layouts
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],
    // Enable AVIF format for better quality
    formats: ['image/avif', 'image/webp'],
    // Disable image optimization for local images (shows original quality)
    unoptimized: false,
  },
};

module.exports = nextConfig;

