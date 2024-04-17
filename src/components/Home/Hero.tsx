import React from "react";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  imageUrl: string;
};

export default function Hero({ title, description, imageUrl }: Props) {
  return (
    <div className="relative h-[600px] lg:h-[742px] w-full overflow-hidden">
      <Image
        src={
          "https://res.cloudinary.com/dfgr7tov1/image/upload/v1713393089/biggerHero_vvduaq.jpg"
        }
        layout="fill"
        objectFit="cover"
        quality={100}
        alt="Background"
        className="z-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Overlay content */}
      <div className=" absolute z-10 w-full h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-stroke text-shadow text-white text-4xl lg:text-7xl font-bold">
          {title}
        </h1>
        <p className="text-stroke text-shadow text-white text-lg lg:text-4xl mt-4">
          {description}
        </p>
        <button className="rounded-lg px-2 bg-[#073363] mt-6 p-2">
          <p className="text-white font-extralight">View properties</p>
        </button>
      </div>
    </div>
  );
}
