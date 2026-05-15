/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],

  // Performance optimizations for Lighthouse
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
  },

  // Enable compression
  compress: true,

  // Optimize fonts
  optimizeFonts: true,

  // Enable SWC minification
  swcMinify: true,

  // Output standalone for better performance
  output: 'standalone',
  poweredByHeader: false,

  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks.chunks = 'all';
      config.optimization.splitChunks.cacheGroups = {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          priority: 10,
          enforce: true,
        },
        nextjs: {
          test: /[\\/]node_modules[\\/]next[\\/]/,
          name: 'nextjs',
          chunks: 'all',
          priority: 20,
          enforce: true,
        },
        react: {
          test: /[\\/]node_modules[\\/]react/,
          name: 'react',
          chunks: 'all',
          priority: 30,
          enforce: true,
        },
      };
    }

    if (!dev) {
      config.optimization.minimize = true;
      config.optimization.usedExports = true;
    }

    return config;
  },

  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },

  experimental: {
    mdxRs: true,
    scrollRestoration: true,
    typedRoutes: true,
    optimizePackageImports: ['lucide-react', '@next/font'],
  },

  ...(process.env.ANALYZE === 'true' && {
    bundleAnalyzer: {
      enabled: true,
      openAnalyzer: true,
    },
  }),
};

export default nextConfig;
