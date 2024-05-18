"use client";

import React from "react";

import { Drill, Fence, Hammer, Home, PaintRoller } from "lucide-react";
import { MdManageAccounts } from "react-icons/md";

import { Separator } from "../ui/separator";

export default function SectionOne() {
  return (
    <div className="">
      <div className="flex flex-col text-center my-6 ">
        <p className="text-black mb-6 font-semibold uppercase text-sm">
          For Investors
        </p>
        <div className="">
          <h2 className="text-4xl px-1 lg:px-0 font-semibold text-black mb-6 lg:text-6xl">
            How we make you money
          </h2>
        </div>
      </div>
      <div className="flex flex-col gap-12 lg:gap-0 lg:grid grid-cols-5 grid-rows-1 my-12 mb-32">
        <div className="col-start-1 col-span-5  mx-8 justify-center flex flex-col space-x-4 space-y-2">
          <div>
            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start align-top content-center gap-12 ">
              <div className="flex flex-col items-center max-w-[300px] max-h-[275px]">
                <div className=" flex flex-col items-center w-min mx-auto my-8">
                  <div className="flex flex-row space-x-2 h-[3rem] items-center">
                    <PaintRoller className="w-14 h-14 mb-3   text-[#9a031e]" />
                    <Separator orientation="vertical" />
                    <Hammer className="w-14 h-14 mb-3  text-[#9a031e]" />
                  </div>
                  <Separator />
                  <div className="flex flex-row space-x-2 h-[3rem] items-center">
                    <Drill className="w-14 h-14 mt-3  text-[#9a031e]" />
                    <Separator orientation="vertical" />
                    <Home className="w-14 h-14 mt-3  text-[#9a031e]" />
                  </div>
                </div>

                <div>
                  <h4 className="text-lg">
                    All properties are fully remodeled from the inside out.
                    Making it seamless maintenace and quick tenant placement.
                  </h4>
                </div>
              </div>
              <Separator className="lg:hidden my-12" />
              <div className="flex flex-col items-center max-w-[300px] max-h-[275px]">
                <div className="flex flex-col items-center  mx-auto my-8">
                  <Fence className="w-20 h-20  text-[#9a031e]" />
                </div>
                <div>
                  <h4 className="text-lg">
                    We are dedicated to meet your rental investment needs. We
                    ensure your properties are managed efficiently, keeping
                    tenants satisfied, and profits growing
                  </h4>
                </div>
              </div>
              <Separator className="lg:hidden my-8" />

              <div className="flex flex-col items-center max-w-[300px] max-h-[275px]">
                <div className=" flex flex-col items-center  mx-auto my-8">
                  <MdManageAccounts className="w-20 h-20  text-[#9a031e]" />
                </div>
                <div>
                  <h4 className="text-lg">
                    We offer in-house property management services to all
                    investors. We will renovate or build, place a tenant, and
                    after you purchase it, we will manage it for you!
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h4 className="text-center w-10/12 mx-auto tracking-wide font-medium text-muted-foreground leading-4 mb-12">
          Whether you are new to investing or a seasoned veteran, our team will
          give you the tools you need to succeed. We act as your boots on the
          ground and our goal is to deliver results that affect your bottom
          line.
        </h4>
      </div>
    </div>
  );
}
