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
    <div>
      <div>
        {/* Map component */}
        <div>
          <PropertyMap />
        </div>
      </div>
    </div>
  );
}
