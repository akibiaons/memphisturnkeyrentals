import Hero from "@/components/HomeComponents/Hero";
import SectionOne from "@/components/HomeComponents/SectionOne";
import SectionTwo from "@/components/HomeComponents/SectionTwo";
import SectionThree from "@/components/HomeComponents/SectionThree";
import SectionFour from "@/components/HomeComponents/SectionFour";
import { AnimatedTooltipPreview } from "@/components/HomeComponents/team";
import { CardStackDemo } from "@/components/HomeComponents/card-stack";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Other component import
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div>
      {/* Hero section below  */}
      <div>
        <Hero />
      </div>
      {/* Section one below */}
      <div className="max-w-7xl mx-auto ">
        <div className=" flex flex-col my-16 px-2  ">
          <SectionOne />
          <Separator />
        </div>
        <div className=" flex flex-col my-28 px-2  ">
          <div className="flex flex-col md:flex-row">
            <div className="px-6 md:px-8 lg:px-3">
              <div className="">
                <h3 className="text-2xl font-bold">
                  With our team of investors and agents, we make it easy to
                  start...
                </h3>
                <AnimatedTooltipPreview />
              </div>
              <div className=" text-neutral-700  font-medium mb-4 text-md space-y-3">
                <p className="">
                  Our turnkey business model allows you to grow your long term
                  real estate rental portfolio in the #1 rated cashflowing
                  market in America.
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
            <div className="px-4 ">
              <div className="flex flex-col">
                <h4 className="mt-8 text-center font-semibold text-3xl">
                  What some people have to say
                </h4>
                <div className="md:col-start-1 mb-12 content-start">
                  <CardStackDemo />
                </div>
              </div>
            </div>
          </div>
          <div className=" my-8 mb-20 mx-2">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Certified Properties - 6 Month Warranty
                </AccordionTrigger>
                <AccordionContent>
                  We use a third party inspector of your choice to certify the
                  overall property structure, condition, and quality of material
                  to make sure there are no quick suprises, so you can rent them
                  out ASAP.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Build to Rent</AccordionTrigger>
                <AccordionContent>
                  Take advantage of our new home sales average of $360,827! Our
                  homes built to rent are at a value of $149,928
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Property Management</AccordionTrigger>
                <AccordionContent>
                  We offer everything under one roof for you to leverage when
                  creating cashflow, from our in house property management,
                  keeping your property at 98% occupied year round!
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <Separator />
        </div>
        {/* End of section one */}
        <div className=" flex flex-col my-16  px-4">
          <div className="mb-12">
            <SectionThree />
          </div>
          <Separator />
        </div>

        {/* Start of section two */}
        <div className=" flex flex-col my-32 px-4">
          <SectionTwo />
        </div>
        <div className=" flex flex-col my-32 px-4 ">
          {/* <SectionFour /> */}
        </div>
      </div>
    </div>
  );
}
