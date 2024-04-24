import React from "react";
import Image from "next/image";
import { MdAccountCircle } from "react-icons/md";

type Props = {};

export default function SectionThree({}: Props) {
  return (
    <div>
      {/*  */}
      <div className="flex flex-col text-center mt-6">
        <p className="text-white mb-6 font-semibold uppercase text-sm">
          For Investors
        </p>
        <h2 className="text-4xl font-semibold text-white mb-6 lg:text-6xl">
          How we make you money
        </h2>
        <p className="text-white mb-4 text-sm lg:text-lg w-[95%] mx-auto">
          Our turnkey business model allows you to grow your long term real
          estate rental portfolio in the #1 rated cashflowing market in America
        </p>
      </div>
      {/* CTA for account creation card */}
      <div className="text-center">
        <p>Create your investor profile</p>
        <span className="flex justify-center">
          <MdAccountCircle className="w-16 h-20" />
        </span>
      </div>
    </div>
  );
}
