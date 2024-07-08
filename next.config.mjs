/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "hotelbala-menu.s3.ap-southeast-2.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
