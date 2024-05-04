"use client";

import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { SellForm } from "./sell-form";
import { CanvasRevealEffectDemo } from "./canvas-reveal";

export default function SellSectionOne() {
  return (
    <div className="">
      <div className="flex flex-col text-center my-6 ">
        <p className="text-black mb-6 font-semibold uppercase text-sm">
          How Selling Works
        </p>
        <div className="">
          <h2 className="text-4xl px-1 lg:px-0 font-semibold text-black mb-6 lg:text-6xl">
            Four Step Process
          </h2>
        </div>
      </div>
      <CanvasRevealEffectDemo />

      <div className="">
        <div className="">
          <h2 className="text-4xl px-1 text-center font-semibold text-black mb-6 lg:text-6xl">
            Lets start your sell!
          </h2>
        </div>
        <SellForm />
      </div>
    </div>
  );
}
