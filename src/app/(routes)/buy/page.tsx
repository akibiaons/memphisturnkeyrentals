import React from "react";
import dynamic from "next/dynamic";

const MemphisMap = dynamic(() => import("@/components/leaflet/MemphisMap"), {
  ssr: false,
});

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
