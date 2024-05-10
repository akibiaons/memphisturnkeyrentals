import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// import { Progress } from "@/components/ui/progress";

interface PropertyCarouselProps {
  images: string[];
  onClose: () => void; // the function to hide the carousel
}

export default function PropertyCarousel({
  images,
  onClose,
}: PropertyCarouselProps) {
  return (
    <div className="fixed bottom-20 left-0 right-0 h-1/4 bg-white shadow-lg border-t p-4 lg:w-[20%] lg:h-full">
      <Carousel className="w-full h-full">
        <CarouselContent>
          {images.map((img, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-full">
                <Image
                  src={img}
                  alt={`Property image ${index + 1}`}
                  layout="responsive" // Changed to responsive to maintain aspect ratio
                  width={500} // Define width
                  height={300} // Define height
                  objectFit="contain" // Changed to contain to see the whole image
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <button onClick={onClose} className="absolute top-0 right-0 p-2 text-xl">
        x
      </button>
    </div>
  );
}
