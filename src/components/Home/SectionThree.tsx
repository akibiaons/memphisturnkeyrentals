import React from "react";
import Image from "next/image";
import { MdAccountCircle } from "react-icons/md";
import { IoIosCall } from "react-icons/io";

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
      <div className="text-center border-2 w-[90%] mx-auto p-4 boxOne">
        <p className="text-xl font-bold">Create an investor profile</p>
        <span className="flex justify-center">
          <MdAccountCircle className="w-16 h-20" />
        </span>
        <button className="bg-[#930909] rounded-lg px-4 mt-6 mb-6 border-2">
          Create an account
        </button>
      </div>
      <div className="text-center border-2 w-[90%] mx-auto mt-8 p-4 boxOne">
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
