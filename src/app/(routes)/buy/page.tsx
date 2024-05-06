import React from "react";
import MemphisMap from "@/components/leaflet/MemphisMap";

export default function page() {
  return (
    <div>
      <div>
        {/* Map component */}
        <div>
          <MemphisMap />
        </div>
      </div>
    </div>
  );
}
