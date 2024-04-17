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
      </div>
      {/*  */}
    </div>
  );
}
