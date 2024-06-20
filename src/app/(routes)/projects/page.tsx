"use client";

import React from "react";
import Hero from "./components/hero";
import ProjectGrid from "./components/project-grid";
import { Separator } from "@/components/ui/separator";

export default function page() {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div className="flex flex-col">
        <div className=" max-w-7xl mx-auto ">
          <div className="my-20 px-3 sm:px-6 md:px-8  lg:px-4">
            <h2 className="text-2xl font-semibold mb-8 ">Our Projects</h2>
            <div className="px-1">
              <ProjectGrid />
            </div>
            {/* <div className="my-5 text-lg text-blue-300 cursor-pointer font-normal hover:underline ">
              <p>See all 34 houses for sale</p>
            </div> */}
          </div>
        </div>
        <Separator />
      </div>
    </div>
  );
}
