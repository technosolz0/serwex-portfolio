/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // 👇 Allow LAN/devices in your network to access assets
    allowedDevOrigins: [
      "http://194.164.148.133:3001", // your LAN IP with port
      "http://localhost:3001",
      "http://192.168.1.18':3000",
      '192.168.1.18'     // keep localhost too
    ],
  },
  webpack(config: { module: { rules: { test: RegExp; use: string; }[]; }; }) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });

    return config;
  },
};

export default nextConfig;
