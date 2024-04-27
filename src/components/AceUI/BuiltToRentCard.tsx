"use client";

import React from "react";
import { BackgroundGradient } from "./background-gradient";
import Image from "next/image";

export function BuildToRentCard() {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={`/jordans.webp`}
          alt="house"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          4344 Given Ave Memphis, TN 38122
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Summarized info about this specfic rent to own project
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <button className="rounded-lg px-2 bg-[#073363] mt-6 p-2">
            <p className="text-white font-extralight">View properties</p>
          </button>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            $100
          </span>
        </button>
      </BackgroundGradient>
    </div>
  );
}
