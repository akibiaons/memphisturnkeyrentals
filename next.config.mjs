/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "dfgr7tov1",
    NEXT_PUBLIC_CLOUDINARY_PRESET_NAME: "o4beoehp",
  },
  images: {
    deviceSizes: [640, 768, 1024, 1280, 1600],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [
      "res.cloudinary.com",
      "images.unsplash.com",
      "static.vecteezy.com",
      "media.graphassets.com",
    ],
  },
};

export default nextConfig;
