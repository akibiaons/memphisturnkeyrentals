import React from "react";

type Props = {};

export default function SectionThree({}: Props) {
  return (
    <div>
      {/*  */}
      <div className="flex flex-col text-center mt-6">
        <p className="text-white mb-6 font-semibold uppercase text-sm">
          How to get started
        </p>
        <h2 className="text-4xl font-semibold text-white mb-6 lg:text-6xl">
          Get Started Investing
        </h2>
        <div className="text-white mb-4 text-sm lg:text-lg w-[95%] mx-auto">
          <div className="">
            <h3>Create an Investor Account</h3>
          </div>
          <div className="">
            <h3>Chat with us!</h3>
          </div>
        </div>
      </div>

      {/*  */}
    </div>
  );
}
