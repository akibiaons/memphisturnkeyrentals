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
    ],
  },
};

export default nextConfig;

// glorious-sparkle-1fb7e61245.strapiapp.com
// glorious-sparkle-1fb7e61245.media.strapiapp.com
