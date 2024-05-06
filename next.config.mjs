/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "res.cloudinary.com" },
      { hostname: "images.unsplash.com" },
      { hostname: "static.vecteezy.com" },
      { hostname: "media.graphassets.com" },
    ],
  },
};

export default nextConfig;
