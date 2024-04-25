import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  contactInfo: string;
};

export default function SectionTwo({ name, contactInfo }: Props) {
  return (
    <div>
      <div className="flex flex-col text-center mt-6">
        <p className="text-black mb-6 font-semibold uppercase text-sm">
          About us
        </p>
        <h2 className="text-4xl font-semibold text-black mb-6 lg:text-6xl">
          Our Team
        </h2>
        <p className="text-black mb-4 text-sm lg:text-lg w-[95%] mx-auto">
          With x years of experience in the Memphis market, we bring a high ROI
          with a value add investing mindset and strategy. Our win win approach
          with investors ensures that we all get a peice of the cake, so when
          you win we win too!
        </p>
      </div>
      <div className="rounded-xl w-[80%] mx-auto mt-10">
        {/* the photo!! and overlay  */}
        <div className="relative">
          <Image
            width={300}
            height={300}
            className="rounded-t-2xl lg:w-[90%]"
            src="https://res.cloudinary.com/dfgr7tov1/image/upload/v1713913243/Screenshot_2024-04-23_at_4.00.26_PM_z95dyr.png"
            alt="AboutPlaceholder"
          />
          <div className="absolute rounded-t-2xl inset-0 bg-black bg-opacity-10"></div>

          {/* Overlay content */}
          <div className="z-10 w-full h-full flex flex-col justify-center items-start bg-black">
            <h1 className="text-white text-xl lg:text-4xl font-bold mt-4 ml-2 underline decoration-[#930909]">
              {name}
            </h1>
            <p className="text-white text-sm lg:text-xl mt-4 mb-4 ml-2 underline decoration-[#930909]">
              {contactInfo}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
