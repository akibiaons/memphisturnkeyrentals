/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"], // Might have to change in production
    remotePatterns: [
      { hostname: "res.cloudinary.com" },
      { hostname: "images.unsplash.com" },
      { hostname: "static.vecteezy.com" },
      { hostname: "media.graphassets.com" },
    ],
  },
};

export default nextConfig;
