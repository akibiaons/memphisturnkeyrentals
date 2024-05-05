"use client";

import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ExternalLink, Mail, MessageSquareMore, PhoneCall } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative h-[600px] lg:h-[742px] w-full overflow-hidden ">
      <div className="hero-bg mx-auto   h-screen object-fit">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <HeroHighlight>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className=" px-4 font-bold text-white max-w-4xl  text-center mx-auto
             "
          >
            <div className="text-4xl md:text-6xl lg:text-6xl mb-4">
              We wanna hear from <em className="uppercase">You</em>.
            </div>

            <Highlight className="text-neutral-200 text-2xl md:text-3xl">
              Get in touch, learn more about what we offer.
            </Highlight>
            <div className="mt-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="bg-blue-500/50">Contact</Button>
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
          </motion.h1>
        </HeroHighlight>
      </div>
    </div>
  );
}
