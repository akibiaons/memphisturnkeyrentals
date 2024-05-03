// ShadCn component
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

type ProjectCardProps = {
  imageSrc: string;
  address: string;
};

const projectData: ProjectCardProps[] = [
  {
    imageSrc:
      "https://res.cloudinary.com/dfgr7tov1/image/upload/v1714246022/Screenshot_2024-04-27_at_12.26.56_PM_sdpx6h.png",
    address: "123 Main St, Memphis",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dfgr7tov1/image/upload/v1714246022/Screenshot_2024-04-27_at_12.26.56_PM_sdpx6h.png",
    address: "456 Elm St, Memphis",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dfgr7tov1/image/upload/v1714246022/Screenshot_2024-04-27_at_12.26.56_PM_sdpx6h.png",
    address: "789 Oak St, Memphis",
  },
];

export function ProjectCarousel() {
  return (
    <Carousel
      className="w-full"
      opts={{
        loop: true,
      }}
    >
      <CarouselContent className="my-8">
        {projectData.map((item, index) => (
          <CarouselItem key={index}>
            <div className="relative flex flex-row justify-center items-center">
              <DirectionAwareHover imageUrl={item.imageSrc}>
                <div className=" bg-opacity-50 flex justify-center items-center">
                  <p className="font-bold text-xl">{item.address}</p>
                </div>
              </DirectionAwareHover>
            </div>
          </CarouselItem>
        ))}
        {/* For some reason these cause problems inside of small screens (max overflow) */}
        <CarouselPrevious />
        <CarouselNext />
      </CarouselContent>
    </Carousel>
  );
}
