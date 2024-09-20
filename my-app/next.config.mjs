// @type {import('next').NextConfig}
const nextConfig = {
  images: {
    domains: ["/icons/*.{png,svg,jpg,jpeg}"], // <-- This should contain actual domains like 'example.com'
  },
};

export default nextConfig;

