"use client";

import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CardStackDemo } from "./card-stack";
import { AnimatedTooltipPreview } from "./team";

type Props = {};

export default function SectionOne({}: Props) {
  return (
    <div className="">
      <div className="flex flex-col text-center my-6 ">
        <p className="text-black mb-6 font-semibold uppercase text-sm">
          For Investors
        </p>
        <h2 className="text-4xl px-1 lg:px-0 font-semibold text-black mb-6 lg:text-6xl">
          How we make you money
        </h2>
      </div>
      <div className="flex flex-col gap-12 lg:gap-0 lg:grid grid-cols-5 grid-rows-1 my-12">
        <div className="col-span-2 row-span-1 px-4">
          <div className="">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Inspected Property</AccordionTrigger>
                <AccordionContent>
                  We use a third party inspector of your choice to certify the
                  overall property structure, condition, and quality of material
                  to make sure there are no quick suprises, so you can rent them
                  out ASAP.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Build to Rent Value</AccordionTrigger>
                <AccordionContent>
                  Take advantage of our new home sales average of $360,827! Our
                  homes built to rent are at a value of $149,928
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Stable Income</AccordionTrigger>
                <AccordionContent>
                  We offer everything under one roof for you to leverage when
                  creating cashflow, from our in house property management,
                  keeping your property at 98% occupied year round!
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="flex flex-col">
            <h4 className="mt-8 text-center font-semibold text-3xl">
              What some people have to say
            </h4>
            <div className="md:col-start-1  content-start">
              <CardStackDemo />
            </div>
          </div>
        </div>
        <div className="col-start-3 col-span-3 mx-8 justify-center flex flex-col space-x-4 space-y-2">
          <div className="">
            <div className="">
              <h3 className="text-2xl font-bold">
                With our team of investors and agents, we make it easy to
                start...
              </h3>

              <AnimatedTooltipPreview />
            </div>
            <div className="space-y-2 text-neutral-700  font-medium mb-4 text-md ">
              <p className="">
                Our turnkey business model allows you to grow your long term
                real estate rental portfolio in the #1 rated cashflowing market
                in America
              </p>
              <p>
                We prioritize you the client,We use a third party inspector of
                your choice to certify the overall property structure,
                condition, and quality of material to make sure there are no
                quick suprises, so you can rent them out ASAP.
              </p>
              <p>
                We prioritize you the client,We use a third party inspector of
                your choice to certify the overall property structure,
                condition, and quality of material to make sure there are no
                quick suprises, so you can rent them out ASAP.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
