import React from "react";
import MemphisMap from "@/components/leaflet/MemphisMap";

export default function page() {
  return (
    <div>
      {/* Buy page for individuals buying from MTR, this will be feature intensive asf */}
      <h1>Buy page shit</h1>
      <div>
        {/* Map component */}
        <div>
          <MemphisMap />
        </div>
      </div>
    </div>
  );
}
