import React from "react";
import SellHero from "@/components/SellComponents/SellHero";
import SellSectionOne from "@/components/SellComponents/SellSectionOne";

// UI Component imports
import { Separator } from "@/components/ui/separator";

export default function page() {
  return (
    <div>
      <div>
        <SellHero imageUrl="https://res.cloudinary.com/dfgr7tov1/image/upload/v1713393089/biggerHero_vvduaq.jpg" />
      </div>
      {/* Section one below */}
      <div className="max-w-7xl mx-auto ">
        <div className=" flex flex-col my-16 px-8">
          <SellSectionOne />
          <Separator />
        </div>
      </div>
    </div>
  );
}