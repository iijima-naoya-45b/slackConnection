/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'placehold.jp',
          port: '',
          pathname: '/150x150.png',
        },
      ],
    },
  };
  

export default nextConfig;
