import React from "react";
import Chart from "@/components/HomeComponents/Chart";
import { Separator } from "../ui/separator";

export default function SectionThree({ ...props }) {
  return (
    <div className="bg-dot-black/[0.2] pb-12 px-12">
      <div className="flex flex-col text-center my-12 ">
        <p className="text-black mb-6 font-semibold uppercase text-sm">
          THE NUMBERS
        </p>
        <h2 className="text-4xl font-semibold text-black mb-2 lg:text-6xl">
          What do they mean Mason?
        </h2>
      </div>
      <div className="">
        <Chart />
      </div>
    </div>
  );
}
