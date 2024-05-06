import React from "react";

// Leaflet Map component
import MapApp from "@/components/leaflet/map";

import { LogoutButton } from "@/components/custom/LogoutButton";

export default function page() {
  return (
    <div>
      {/* Buy page for individuals buying from MTR, this will be feature intensive asf */}
      <h1>Buy</h1>
      <LogoutButton />
      <div className="h-[2rem]">
        {/* Below this parent div is the map component to take up the full width and height of mobile screens */}
        <MapApp />
      </div>
    </div>
  );
}
