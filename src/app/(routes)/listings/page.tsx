"use client"; // Ensure this is at the top

import React from "react";
import dynamic from "next/dynamic";
import { useAuth } from "@/hooks/useAuth";

const MemphisMap = dynamic(() => import("@/components/leaflet/MemphisMap"), {
  ssr: false,
});

const ListingGrid = dynamic(() => import("@/components/leaflet/ListingGrid"), {
  ssr: false,
});

const ListingPage = () => {
  const { isAuthenticated } = useAuth();

  console.log("ListingPage rendered. Auth status:", isAuthenticated);

  if (isAuthenticated === null) {
    return <p>Loading...</p>; // or you can return a spinner/loader component
  }

  if (!isAuthenticated) {
    return <p>Redirecting to sign in...</p>;
  }

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
};

export default ListingPage;
