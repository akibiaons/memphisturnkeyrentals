import React from "react";
import StickySlideComponent from "./SectionOne/StickySlideComponent";

type Props = {};

export default function SectionOne({}: Props) {
  return (
    <div className="">
      <div className="flex flex-col text-center mt-6">
        <p className="text-black mb-6 font-semibold uppercase text-sm">
          For Investors
        </p>
        <h2 className="text-4xl font-semibold text-black mb-6 lg:text-6xl">
          How we make you money
        </h2>
        <p className="text-black mb-4 text-md lg:text-lg w-[95%] mx-auto">
          Our turnkey business model allows you to grow your long term real
          estate rental portfolio in the #1 rated cashflowing market in America
        </p>
      </div>
      <div className="mx-auto w-[90%] pb-6 mt-20">
        <div className="flex flex-col gap-4">
          <StickySlideComponent />
        </div>
      </div>
    </div>
  );
}
