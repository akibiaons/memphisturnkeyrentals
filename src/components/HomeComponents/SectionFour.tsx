import React from "react";

import { ProjectCarousel } from "@/components/HomeComponents/carousel/ProjectCarousel";

type Props = {};

export default function SectionFour({}: Props) {
  return (
    <div className="w-full mx-auto">
      <div className="flex flex-col text-center">
        <p className="text-black mb-6 font-semibold uppercase text-sm">
          Our Recent Projects
        </p>
        <h2 className="text-4xl font-semibold text-black mb-6 lg:text-6xl">
          Built to rent
        </h2>
        {/* Carousel component */}
        <div className="w-full">
          <ProjectCarousel />
        </div>
      </div>
    </div>
  );
}
