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
        <h4 className="text-center w-8/12 mx-auto tracking-wide font-medium text-muted-foreground leading-8 mb-12">
          Welcome to Memphis Turnkey Properties where we specialize in providing
          turnkey, cash-flowing assets for buy-and-hold investors. With a
          passion for real estate investment and a commitment to strive for
          excellence, we offer a seamless experience for investors seeking to
          grow their portfolios with stable, income-generating properties. At
          Memphis Turnkey Properties, we understand the unique needs of
          buy-and-hold investors. Our dedicated team meticulously selects and
          builds properties in prime locations with high rental demand and
          strong appreciation potential. We handle every aspect of the
          acquisition process, from property sourcing and renovation or
          developing to tenant placement and property management, ensuring a
          hassle-free investment journey for our clients. Backed by years of
          industry expertise and a proven track record of success, we take pride
          in empowering investors to achieve their financial goals through real
          estate. Whether you're a seasoned investor or new to the game, Memphis
          Turnkey Properties is your trusted partner in building wealth through
          turnkey real estate investments.   Experience the difference with
          Memphis Turnkey Properties. Invest with confidence, invest for the
          future.
        </h4>
      </div>
    </div>
  );
}
