"use client";

import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";

type Props = {
  title: string;
  description: string;
  imageUrl: string;
};

export default function Hero({ title, description, imageUrl }: Props) {
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
            className="text-2xl  px-4 md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto
             "
          >
            <div className="">{title}</div>

            <Highlight className="text-neutral-200 text-3xl">
              {description}
            </Highlight>
            <div>
              <Button className="  bg-blue-500">Property Listings</Button>
            </div>
          </motion.h1>
        </HeroHighlight>
      </div>
    </div>
  );
}
