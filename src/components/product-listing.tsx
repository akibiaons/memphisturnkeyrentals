"use client";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import {
  BadgeDollarSign,
  CalendarFold,
  Home,
  NotebookTabs,
  Speech,
  UsersRound,
} from "lucide-react";

export function ProductListing() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="grid gap-4">
            <div className="grid grid-cols-3 gap-4">
              <button className="rounded-lg border border-gray-200 transition-colors hover:border-gray-900 dark:border-gray-800 dark:hover:border-gray-50">
                <img
                  alt="Watch Thumbnail"
                  className="aspect-square w-full rounded-lg object-cover"
                  height={100}
                  src="/placeholder.svg"
                  width={100}
                />
                <span className="sr-only">View Image 1</span>
              </button>
              <button className="rounded-lg border border-gray-200 transition-colors hover:border-gray-900 dark:border-gray-800 dark:hover:border-gray-50">
                <img
                  alt="Watch Thumbnail"
                  className="aspect-square w-full rounded-lg object-cover"
                  height={100}
                  src="/placeholder.svg"
                  width={100}
                />
                <span className="sr-only">View Image 2</span>
              </button>
              <button className="rounded-lg border border-gray-200 transition-colors hover:border-gray-900 dark:border-gray-800 dark:hover:border-gray-50">
                <img
                  alt="Watch Thumbnail"
                  className="aspect-square w-full rounded-lg object-cover"
                  height={100}
                  src="/placeholder.svg"
                  width={100}
                />
                <span className="sr-only">View Image 3</span>
              </button>
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Precision Timepiece: The Elegant Chronograph
              </h1>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Crafted with the finest materials, this chronograph watch
                combines timeless style and advanced functionality. Elevate your
                everyday with this exceptional timepiece.
              </p>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">$399</span>
                <div className="flex items-center gap-0.5">
                  <StarIcon className="h-5 w-5 fill-primary" />
                  <StarIcon className="h-5 w-5 fill-primary" />
                  <StarIcon className="h-5 w-5 fill-primary" />
                  <StarIcon className="h-5 w-5 fill-muted stroke-muted-foreground" />
                  <StarIcon className="h-5 w-5 fill-muted stroke-muted-foreground" />
                </div>
              </div>
              <Button className="w-full" size="lg">
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Specifications
            </h2>
            <div className="mt-6 grid gap-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="grid grid-cols-[150px_1fr] items-start gap-4">
                <span className="font-medium text-gray-900 dark:text-gray-50">
                  Movement
                </span>
                <span>Automatic self-winding mechanical movement</span>
              </div>
              <div className="grid grid-cols-[150px_1fr] items-start gap-4">
                <span className="font-medium text-gray-900 dark:text-gray-50">
                  Case
                </span>
                <span>
                  Stainless steel case, 42mm diameter, 12mm thickness,
                  screw-down caseback
                </span>
              </div>
              <div className="grid grid-cols-[150px_1fr] items-start gap-4">
                <span className="font-medium text-gray-900 dark:text-gray-50">
                  Dial
                </span>
                <span>
                  Black dial with applied indices, luminous hands and markers
                </span>
              </div>
              <div className="grid grid-cols-[150px_1fr] items-start gap-4">
                <span className="font-medium text-gray-900 dark:text-gray-50">
                  Strap
                </span>
                <span>
                  Genuine leather strap, 20mm width, stainless steel buckle
                </span>
              </div>
              <div className="grid grid-cols-[150px_1fr] items-start gap-4">
                <span className="font-medium text-gray-900 dark:text-gray-50">
                  Water Resistance
                </span>
                <span>100 meters (330 feet)</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Reviews
            </h2>
            <div className="mt-6 grid gap-6">
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <img
                    alt="User Avatar"
                    className="h-10 w-10 rounded-full"
                    height={40}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "40/40",
                      objectFit: "cover",
                    }}
                    width={40}
                  />
                  <div>
                    <h4 className="font-medium">John Doe</h4>
                    <div className="flex items-center gap-0.5">
                      <StarIcon className="h-4 w-4 fill-primary" />
                      <StarIcon className="h-4 w-4 fill-primary" />
                      <StarIcon className="h-4 w-4 fill-primary" />
                      <StarIcon className="h-4 w-4 fill-primary" />
                      <StarIcon className="h-4 w-4 fill-muted stroke-muted-foreground" />
                    </div>
                  </div>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  "This watch is an absolute gem! The craftsmanship is
                  impeccable, and the design is both timeless and modern. I've
                  been wearing it every day and it's quickly become my favorite
                  accessory."
                </p>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <img
                    alt="User Avatar"
                    className="h-10 w-10 rounded-full"
                    height={40}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "40/40",
                      objectFit: "cover",
                    }}
                    width={40}
                  />
                  <div>
                    <h4 className="font-medium">Jane Smith</h4>
                    <div className="flex items-center gap-0.5">
                      <StarIcon className="h-4 w-4 fill-primary" />
                      <StarIcon className="h-4 w-4 fill-primary" />
                      <StarIcon className="h-4 w-4 fill-primary" />
                      <StarIcon className="h-4 w-4 fill-primary" />
                      <StarIcon className="h-4 w-4 fill-primary" />
                    </div>
                  </div>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  "I'm absolutely in love with this watch! The attention to
                  detail is remarkable, and the performance is top-notch. It's
                  the perfect blend of style and functionality. Highly
                  recommended!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 mx-4 lg:mx-0 text-left lg:mr-[20rem]">
        <Accordion type="multiple">
          <AccordionItem value="item-1">
            <AccordionTrigger className="flex flex-row font-semibold text-2xl">
              <p className="flex flex-row items-center gap-2">
                <span>
                  <Home />
                </span>
                Open House{" "}
              </p>
            </AccordionTrigger>
            <AccordionContent className="text-lg font-normal">
              We use a third party inspector of your choice to certify the
              overall property structure, condition, and quality of material to
              make sure there are no quick suprises, so you can rent them out
              ASAP.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="flex flex-row font-semibold text-2xl">
              <p className="flex flex-row items-center gap-2">
                <span>
                  <NotebookTabs />
                </span>
                Property Details{" "}
              </p>
            </AccordionTrigger>
            <AccordionContent className="text-lg font-normal">
              Take advantage of our new home sales average of $360,827! Our
              homes built to rent are at a value of $149,928
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="flex flex-row font-semibold text-2xl">
              <p className="flex flex-row items-center justify-left gap-2">
                <span>
                  <Speech />
                </span>
                Connect with a lender
              </p>
            </AccordionTrigger>
            <AccordionContent className="text-lg font-normal">
              We offer everything under one roof for you to leverage when
              creating cashflow, from our in house property management, keeping
              your property at 98% occupied year round!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="flex flex-row font-semibold text-2xl">
              <p className="flex flex-row items-center gap-2">
                <span>
                  <CalendarFold />
                </span>
                Monthly Payment
              </p>
            </AccordionTrigger>
            <AccordionContent className="text-lg font-normal">
              We offer everything under one roof for you to leverage when
              creating cashflow, from our in house property management, keeping
              your property at 98% occupied year round!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="flex flex-row font-semibold text-2xl">
              <p className="flex flex-row items-center gap-2">
                <span>
                  <BadgeDollarSign />
                </span>
                Home Value
              </p>
            </AccordionTrigger>
            <AccordionContent className="text-lg font-normal">
              We offer everything under one roof for you to leverage when
              creating cashflow, from our in house property management, keeping
              your property at 98% occupied year round!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="flex flex-row font-semibold text-2xl">
              <p className="flex flex-row items-center gap-2">
                <span>
                  <UsersRound />
                </span>
                Agents
              </p>
            </AccordionTrigger>
            <AccordionContent className="text-lg font-normal">
              We offer everything under one roof for you to leverage when
              creating cashflow, from our in house property management, keeping
              your property at 98% occupied year round!
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </>
  );
}

function StarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
