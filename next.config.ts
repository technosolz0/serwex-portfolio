/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // 👇 Allow LAN/devices in your network to access assets
    allowedDevOrigins: [
      "http://192.168.43.227:3000", // your LAN IP with port
      "http://localhost:3000",      // keep localhost too
    ],
  },
};

export default nextConfig;
