import React from "react";
import dynamic from "next/dynamic";

const MemphisMap = dynamic(() => import("@/components/leaflet/MemphisMap"), {
  ssr: false,
});

const ListingGrid = dynamic(() => import("@/components/leaflet/ListingGrid"), {
  ssr: false,
});

export default function page() {
  return (
    <div>
      <div className="hidden lg:block">
        {/* Map component */}
        <div className="w-[100%] lg:max-w-8xl lg:max-h-[100vh]">
          <MemphisMap />
        </div>
      </div>

      {/* Mobile version which just has the property cards from carousel component */}
      <div className="lg:hidden block">
        <ListingGrid />
      </div>
    </div>
  );
}
