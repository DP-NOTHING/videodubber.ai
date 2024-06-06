/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['flagcdn.com'],
      unoptimized: true,
    },
    output: 'export',
  };
  
  export default nextConfig;