import Image from "next/image";
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
        <p className="text-white mb-4 text-sm lg:text-lg w-[95%] mx-auto">
          With x years of experience in the Memphis market, we bring a high ROI
          with a value add investing mindset and strategy. Our win win approach
          with investors ensures that we all get a peice of the cake, so when
          you win we win too!
        </p>
      </div>
      {/*  */}
      <div className="rounded-xl w-[80%] mx-auto mt-10">
        {/* the photo!!  */}
        <div className="about_image__hW1fB">
          <Image
            width={300}
            height={300}
            className="rounded-2xl lg:w-[90%]"
            src="https://res.cloudinary.com/dfgr7tov1/image/upload/v1713913243/Screenshot_2024-04-23_at_4.00.26_PM_z95dyr.png"
            alt="AboutPlaceholder"
          />
        </div>
      </div>
    </div>
  );
}
