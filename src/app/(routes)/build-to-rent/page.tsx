import React from "react";
import dynamic from "next/dynamic";

const PropertyMap = dynamic(
  () => import("@/components/BuildToRent/PropertyMap"),
  {
    ssr: false,
  }
);
const BtrGrid = dynamic(() => import("@/components/BuildToRent/BtrGrid"), {
  ssr: false,
});

export default function Page() {
  return (
    <div className="overflow-auto">
      <div className="hidden lg:block">
        <div className="w-[100%] lg:max-w-8xl lg:max-h-[100vh]">
          <PropertyMap />
        </div>
      </div>
      <div className="lg:hidden block overflow-y-auto h-screen">
        <BtrGrid />
      </div>
    </div>
  );
}
