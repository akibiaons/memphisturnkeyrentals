"use client";

import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CardStackDemo } from "../HomeComponents/card-stack";
import { AnimatedTooltipPreview } from "../HomeComponents/team";

import { SellForm } from "./sell-form";

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
      <div className="flex flex-col gap-12 lg:gap-0 lg:grid grid-cols-5 grid-rows-1 my-12">
        <div className="col-span-2 row-span-1 px-4 ">
          <div className="flex flex-col">
            {/* <h4 className="mt-8 text-center font-semibold text-3xl">
              What some people have to say
            </h4> */}
            {/* <div className="md:col-start-1 mb-12 content-start">
              <CardStackDemo />
            </div> */}
          </div>
          <div className="">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>1. Contact us</AccordionTrigger>
                <AccordionContent>
                  Fill out the form or reach out via our form below
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>2. Free market analysis</AccordionTrigger>
                <AccordionContent>
                  Our team will send you a free Market Analysis that will give
                  you an in-depth look into the value of your property.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>3. Share with our Database</AccordionTrigger>
                <AccordionContent>
                  Memphis Turnkey has a large database of investors who are
                  looking to grow your portfolio, you choose to list the
                  property with out team and we find a buyer.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>4. Sell your property</AccordionTrigger>
                <AccordionContent>Sold!</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <SellForm />
        </div>
      </div>
    </div>
  );
}
