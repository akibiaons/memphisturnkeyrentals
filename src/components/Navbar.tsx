"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {};

export default function Navbar({}: Props) {
  //   State hooks below from React
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`${
        isOpen
          ? "left-10 bg-[#141415] mt-2 w-[90%] rounded-t-xl lg:mx-auto lg:container lg:left-0 lg:right-0 lg:w-[90%]"
          : "left-10 bg-[#141415] mt-2 w-[90%] rounded-xl lg:mx-auto lg:container lg:left-0 lg:right-0 lg:w-[90%]"
      }`}
    >
      {/*  */}
      <div className="bg-white flex justify-between items-center lg:w-[100%]">
        <div>
          <Link href="/">
            <Image
              width={100}
              height={100}
              src={
                "https://res.cloudinary.com/dfgr7tov1/image/upload/v1713386709/Screenshot_2024-04-16_at_3.27_2_tw8bsq.png"
              }
              alt="MTR Logo"
            />
          </Link>
        </div>
        <div
          className={`hamburger-menu ${isOpen ? "open" : "lg:hidden"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="line line1"></span>
          <span className="line line2"></span>
        </div>
        {/* Navigation links and such */}
        <div
          className={`${
            isOpen ? "flex items-center z-50" : "hidden lg:flex"
          } lg:items-center lg:flex-row flex-col absolute lg:relative top-full lg:top-auto left-0 w-full lg:w-auto bg-white shadow-inner lg:shadow-none lg:bg-transparent text-[#bfbfbf] pt-4 lg:pt-0 pb-6 lg:pb-0 `}
        >
          <a
            href="#"
            className="mx-4 my-2  lg:hover:bg-transparent text-black "
          >
            Buy
          </a>
          <a
            href="#"
            className="mx-4 my-2  lg:hover:bg-transparent text-black "
          >
            Sell
          </a>
          <a
            href="#"
            className="mx-4 my-2  lg:hover:bg-transparent text-black "
          >
            Manage
          </a>
          <a
            href="#"
            className="mx-4 my-2  lg:hover:bg-transparent text-black "
          >
            Built to Rent
          </a>
          <a
            href="#"
            className="mx-4 my-2  lg:hover:bg-transparent text-black "
          >
            Our Projects
          </a>
          {/* Contact button for desktop */}
          <div className="border-2 rounded-lg px-2 bg-[#073363]">
            <p>(619) 866-7776</p>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
}
