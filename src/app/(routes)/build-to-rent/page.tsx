import React from "react";
import dynamic from "next/dynamic";

const PropertyMap = dynamic(
  () => import("@/components/BuildToRent/PropertyMap"),
  {
    ssr: false,
  }
);

const BuildToRentPage: React.FC = () => {
  return (
    <PropertyMap apiUrl="https://strapiurl.com//api/buildtorents?populate=* " />
  ); // Change url endpoint to the public Strapi or private Strapi url
};

export default BuildToRentPage;
