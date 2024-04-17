/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "dfgr7tov1",
    NEXT_PUBLIC_CLOUDINARY_PRESET_NAME: "o4beoehp",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
