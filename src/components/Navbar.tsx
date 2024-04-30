"use client";

import { FaWhatsapp } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, MessageSquareMore, PhoneCall } from "lucide-react";

type Props = {};

export default function Navbar({}: Props) {
  //   State hooks below from React
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
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
          className={`hamburger-menu ${isOpen ? "open" : "md:hidden"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="line line1"></span>
          <span className="line line2"></span>
        </div>
        {/* Navigation links and such */}
        <div
          className={`${
            isOpen ? "flex items-center z-50" : "hidden md:flex"
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
          {/* Contact Button/SHADCN for desktop */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>Contact</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Contact Us</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <MessageSquareMore className="mr-2 h-4 w-4" />
                  <span>Message</span>
                  {/* <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> */}
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Mail className="mr-2 h-4 w-4" />
                  <span>Email</span>
                  {/* <DropdownMenuShortcut>⌘B</DropdownMenuShortcut> */}
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <PhoneCall className="mr-2 h-4 w-4" />
                  <span>Phone</span>
                  {/* <DropdownMenuShortcut>⌘S</DropdownMenuShortcut> */}
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <FaWhatsapp className="mr-2 h-4 w-4" />
                  <span>WhatsApp</span>
                  {/* <DropdownMenuShortcut>⌘K</DropdownMenuShortcut> */}
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
