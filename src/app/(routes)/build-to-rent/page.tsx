import React from "react";
import dynamic from "next/dynamic";

const PropertyMap = dynamic(
  () => import("@/components/BuildToRent/PropertyMap"),
  {
    ssr: false,
  }
);

const BuildToRentPage: React.FC = () => {
  const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/buildtorents?populate=*`;
  return (
    <PropertyMap
      apiUrl={
        "https://glorious-sparkle-1fb7e61245.strapiapp.com/api/buildtorents?populate=*"
      }
    />
  );
};

export default BuildToRentPage;
