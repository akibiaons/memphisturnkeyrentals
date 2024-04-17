import React from "react";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  imageUrl: string;
};

export default function Hero({ title, description, imageUrl }: Props) {
  return (
    <div className="relative h-[400px] w-full overflow-hidden">
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
        <h1 className="text-stroke text-shadow text-white text-4xl font-bold">
          {title}
        </h1>
        <p className="text-stroke text-shadow text-white text-xl mt-4">
          {description}
        </p>
      </div>
    </div>
  );
}
