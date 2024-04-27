import React from "react";
import Chart from "@/components/HomeComponents/Chart";

type Props = {};

export default function SectionThree({}: Props) {
  return (
    <div>
      <div className="flex flex-col text-center mt-6">
        <p className="text-black mb-6 font-semibold uppercase text-sm">
          Get Started
        </p>
        <h2 className="text-4xl font-semibold text-black mb-6 lg:text-6xl">
          Start Investing
        </h2>
        <p className="text-black mb-4 text-sm lg:text-lg w-[95%] mx-auto">
          Create an investor account or just hop on a call with us!
        </p>
      </div>
      {/* CTA for account creation card */}
      <div className="flex justify-center items-center align-middle">
        <div className="text-center w-[90%] mx-auto p-4">
          <button className="rounded-lg px-2 bg-[#073363] mt-6 p-2">
            <p className="text-white font-extralight">Create a profile</p>
          </button>
        </div>
        {/* Button divider */}
        <div className="text-center w-[90%] mx-auto p-4">
          <button className="rounded-lg px-2 mt-6 p-2 border-2 border-double border-[#073363]">
            <p className="text-black font-extralight">Hop on a call!</p>
          </button>
        </div>
      </div>
      <div>
        <Chart />
      </div>
    </div>
  );
}
