/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "glorious-sparkle-1fb7e61245.strapiapp.comhttps",
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
        hostname: "glorious-sparkle-1fb7e61245.media.strapiapp.com",
      },
    ],
  },
};

export default nextConfig;
