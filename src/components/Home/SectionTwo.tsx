import React from "react";

type Props = {};

export default function SectionTwo({}: Props) {
  return (
    <div>
      {/*  */}
      <div className="flex flex-col text-center mt-6">
        <p className="text-white mb-6 font-semibold uppercase text-sm">
          About us
        </p>
        <h2 className="text-4xl font-semibold text-white mb-6 lg:text-6xl">
          Our Team
        </h2>
        <div className="text-white mb-4 text-sm lg:text-lg w-[95%] mx-auto">
          <div className="">
            <h3>Years of Experience</h3>
          </div>
          <div className="">
            <h3>Chat with us directly!</h3>
          </div>
        </div>
      </div>

      {/*  */}
    </div>
  );
}
