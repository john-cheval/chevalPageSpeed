/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  target: "modern",
  trailingSlash: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.chevalme.com" }],
        destination: "https://chevalme.com/:path*",
        permanent: true, // 301 Redirect for SEO
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/ar/:path*",
        destination: "/:path*",
      },
      {
        source: "/sitemap.xml",
        destination: "/public/sitemap.xml",
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "chevalme.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "s3-alpha-sig.figma.com",
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "d331b20430.nxcli.net",
      },
      {
        protocol: "https",
        hostname: "manage.chevalme.com",
      },
      {
        protocol: "https",
        hostname: "bunny-wp-pullzone-1uo9uvm3si.b-cdn.net",
      },
    ],
  },
  webpack(config) {
    // Add support for handling videos and GIF files
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|gif)$/,
      type: "asset/resource",
    });

    return config;
  },
};

export default nextConfig;
