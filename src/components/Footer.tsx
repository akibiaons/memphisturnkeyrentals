import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="shadow-2xl shadow-black boxOne">
      {/*  */}
      <div className="flex flex-col items-center">
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
        <div className="flex flex-col items-center text-sm font-semibold text-gray-400">
          <a href="#" className="mx-4 my-2  lg:hover:bg-transparent  ">
            Buy
          </a>
          <a href="#" className="mx-4 my-2  lg:hover:bg-transparent  ">
            Sell
          </a>
          <a href="#" className="mx-4 my-2  lg:hover:bg-transparent  ">
            Manage
          </a>
          <a href="#" className="mx-4 my-2  lg:hover:bg-transparent  ">
            Built to Rent
          </a>
          <a href="#" className="mx-4 my-2  lg:hover:bg-transparent  ">
            Our Projects
          </a>
        </div>
      </div>

      {/*  */}
    </div>
  );
}
