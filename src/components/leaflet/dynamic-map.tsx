import dynamic from "next/dynamic";
import { useMemo } from "react";

export default function DynamicMap() {
  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/leaflet/map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );

  return (
    <div>
      <Map />
    </div>
  );
}
