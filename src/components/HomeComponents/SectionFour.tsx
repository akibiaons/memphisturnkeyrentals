import React from "react";
import { BuildToRentCard } from "@/components/AceUI/BuiltToRentCard";

type Props = {};

export default function SectionFour({}: Props) {
  return (
    <div>
      <div className="flex flex-col text-center mt-6">
        <p className="text-black mb-6 font-semibold uppercase text-sm">
          Our Recent Projects
        </p>
        <h2 className="text-4xl font-semibold text-black mb-6 lg:text-6xl">
          Built to rent
        </h2>
        <p className="text-black mb-4 text-sm lg:text-lg w-[95%] mx-auto"></p>
      </div>
      <div>
        <BuildToRentCard />
      </div>
    </div>
  );
}
