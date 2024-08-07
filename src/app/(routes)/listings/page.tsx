import React from "react";
import dynamic from "next/dynamic";

const MemphisMap = dynamic(() => import("@/components/leaflet/MemphisMap"), {
  ssr: false,
});

const ListingGrid = dynamic(() => import("@/components/leaflet/ListingGrid"), {
  ssr: false,
});

export default async function ListingPage() {
  return (
    <div className="overflow-auto">
      <div className="hidden lg:block">
        <div className="w-[100%] lg:max-w-8xl lg:max-h-[100vh]">
          <MemphisMap />
        </div>
      </div>
      <div className="lg:hidden block overflow-y-auto h-screen">
        <ListingGrid />
      </div>
    </div>
  );
}
