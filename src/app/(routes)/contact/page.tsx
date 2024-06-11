"use client";
import Hero from "@/components/contact-components/Hero";
import { ContactForm } from "@/components/contact-components/form/contact-form";
import { Separator } from "@/components/ui/separator";
import dynamic from "next/dynamic";
import React, { useMemo } from "react";

export default function ConctactPage() {
  // https://www.youtube.com/watch?v=tki4ktdQEKs&t=374s tutorial
  return (
    <div>
      {/* Contact for user to get in touch with company representatives */}
      <div>
        <Hero />
        <div className="max-w-7xl mx-auto my-16">
          {/* <div className="grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-6 mx-12 md:gap-8 md:justify-around mt-10">
            <div className="min-w-[170px] max-w-[300px] mx-auto h-full">
              <div className="border border-black p-4 h-full flex flex-col">
                <div className="flex-grow">
                  <h3 className="text-black text-3xl font-thin text-left mb-8 border-r-2 border-yellow-300 ">
                    Sales
                  </h3>
                  <p className=" leading-8 font-light">
                    Find out how we can help you scale up and grow your
                    ecommerce business!
                  </p>
                </div>
                <div className="flex justify-center items-end">
                  <button className="transition ease-in-out duration-150 bg-[#ECEBFF] hover:bg-[#D9DAFC] active:bg-[#ECEDFD] text-[#6663FD] px-8 py-3 rounded-lg mt-4">
                    Get in Touch
                  </button>
                </div>
              </div>
            </div>
            <div className="min-w-[170px] max-w-[300px] mx-auto h-full">
              <div className="border border-black p-4 h-full flex flex-col">
                <div className="flex-grow">
                  <h3 className="text-black text-3xl font-thin text-left mb-8 border-r-2 border-green-300 ">
                    Support
                  </h3>
                  <p className="leading-8 font-light">
                    Having trouble posting a blog, using a tool, or any bugs?
                    Use our bug free guarantee?
                  </p>
                </div>
                <div className="flex justify-center items-end">
                  <button className="transition ease-in-out duration-150 bg-[#ECEBFF] hover:bg-[#D9DAFC] active:bg-[#ECEDFD] text-[#6663FD] px-8 py-3 rounded-lg mt-4">
                    Get Support
                  </button>
                </div>
              </div>
            </div>
            <div className="min-w-[170px] max-w-[300px] mx-auto h-full">
              <div className="border border-black p-4 h-full flex flex-col">
                <div className="flex-grow">
                  <h3 className="text-black text-3xl font-thin text-left mb-8 border-r-2 border-red-300 ">
                    Media
                  </h3>
                  <p className=" leading-8 font-light">
                    Create content? Collaborate for our blog and amplify your
                    reach!
                  </p>
                </div>
                <div className="flex justify-center items-end">
                  <button className="transition ease-in-out duration-150 bg-[#ECEBFF] hover:bg-[#D9DAFC] active:bg-[#ECEDFD] text-[#6663FD] px-8 py-3 rounded-lg  mt-4">
                    Get in Touch
                  </button>
                </div>
              </div>
            </div>
            <div className="min-w-[170px] max-w-[300px] mx-auto h-full">
              <div className="border border-black p-4 h-full flex flex-col">
                <div className="flex-grow">
                  <h3 className="text-black text-3xl font-thin text-left mb-8 border-r-2 border-blue-300 ">
                    Partnerships
                  </h3>
                  <p className="leading-8 font-light ">
                    Be part of our brand! Join the affiliate program for
                    incredible co-marketing opportunities.
                  </p>
                </div>
                <div className="flex justify-center items-end">
                  <button className="transition ease-in-out duration-150 bg-[#ECEBFF] hover:bg-[#D9DAFC] active:bg-[#ECEDFD] text-[#6663FD] px-8 py-3 rounded-lg  mt-4">
                    Let's Talk
                  </button>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div>
          <Separator />
          <section className="my-20 mx-auto px-3">
            <div className="max-w-5xl mx-auto text-center mb-8">
              <h2 className="text-4xl lg:text-6xl font-semibold">Contact Us</h2>
              <p>
                Any questions? Concerns can be answered by our market experts
                based in Memphis!
              </p>
            </div>
            <ContactForm />
          </section>
          <Separator />
        </div>
        <div>
          <section className="bg-neutral-800">
            <div className="pt-28 pb-14 px-20 flex flex-col justify-center items-center">
              <h2 className="text-6xl tracking-wider text-center text-white font-light  md:whitespace-nowrap pb-10">
                Check out our duggout.
              </h2>
              <em className="mb-12 font-extralight text-white text-center ">
                Give us a call and a customer service rep will point you in the
                right direction. Be it a question, a bug, payment, we're here to
                help.
              </em>
            </div>
            <div className="mx-16 grid grid-cols-1 grid-rows-1 xl:grid-cols-2 gap-16 pb-16">
              <div className="flex flex-col md:flex-row gap-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3355.2556724694364!2d-117.15128401448122!3d32.758949817037035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d954e1cf32b25f%3A0x19bfe09db0698b63!2sLestat&#39;s%20on%20Park!5e0!3m2!1sen!2sus!4v1685728916392!5m2!1sen!2sus"
                  width="full"
                  height="full"
                  loading="lazy"
                ></iframe>
                <div>
                  <p className="text-white font-medium mb-4 text-xl tracking-wider">
                    Memphis Business Center
                  </p>
                  <p className="text-white font-light pr-3">
                    Feel free to drop by our office from the hours of 9am - 5pm
                    mon - fri
                  </p>
                  {/* <br /> */}
                  {/* <p className="text-white font-light pr-3">
                    For those who we work with locally, this will typically be
                    our meet up location unless stated otherwise
                  </p> */}
                </div>
              </div>
              <div className="pl-10 grid">
                <div className="flex flex-col gap-6">
                  <p className="text-white font-medium">
                    North America (Toll Free)
                  </p>
                  <p className="text-white font-light">901-571-9382</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
