import React from "react";
import dynamic from "next/dynamic";

const PropertyMap = dynamic(
  () => import("@/components/BuildToRent/PropertyMap"),
  {
    ssr: false,
  }
);

export default function page() {
  return (
    <div className="lg:overflow-hidden">
      <div>
        {/* Map component */}
        <div className="w-[100%] lg:max-w-8xl lg:max-h-[100vh]">
          <PropertyMap />
        </div>
      </div>
    </div>
  );
}
