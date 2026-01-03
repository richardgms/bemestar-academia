import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Otimizações de imagem
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [375, 768, 1024, 1280, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  // Compressão
  compress: true,

  // Experimental features para performance
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },

  // Headers de segurança e cache
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
