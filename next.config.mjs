/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mtrbackend-production.up.railway.app", // Add your Railway hostname here
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "glorious-sparkle-1fb7e61245.strapiapp.com",
      },
      {
        protocol: "https",
        hostname: "glorious-sparkle-1fb7e61245.media.strapiapp.com",
      },
    ],
  },
};

export default nextConfig;
