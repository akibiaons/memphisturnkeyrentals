import React from "react";
import Image from "next/image";
import { MdAccountCircle } from "react-icons/md";
import { IoIosCall } from "react-icons/io";

type Props = {};

export default function SectionThree({}: Props) {
  return (
    <div>
      {/*  */}
      <div className="flex flex-col text-center mt-6">
        <p className="text-black mb-6 font-semibold uppercase text-sm">
          For Investors
        </p>
        <h2 className="text-4xl font-semibold text-black mb-6 lg:text-6xl">
          How we make you money
        </h2>
        <p className="text-black mb-4 text-sm lg:text-lg w-[95%] mx-auto">
          Our turnkey business model allows you to grow your long term real
          estate rental portfolio in the #1 rated cashflowing market in America
        </p>
      </div>
      {/* CTA for account creation card */}
      <div className="text-center border-2 w-[90%] mx-auto bg-[#0E0F11] text-white">
        <p className="text-xl font-bold">Create an investor profile</p>
        <span className="flex justify-center">
          <MdAccountCircle className="w-16 h-20" />
        </span>
        <button className="bg-[#930909] rounded-lg px-4 mt-6 mb-6  border-2">
          Create an account
        </button>
      </div>
      <div className="text-center border-2 w-[90%] mx-auto mt-8 bg-[#0E0F11] text-white">
        <p className="text-xl font-bold">Hop on a call with us!</p>
        <span className="flex justify-center">
          <IoIosCall className="w-16 h-20" />
        </span>
        <button className="bg-[#930909] rounded-lg px-4 mt-6 mb-6  border-2">
          Call now!
        </button>
      </div>
    </div>
  );
}
