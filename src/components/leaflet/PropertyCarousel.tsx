import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// import { Progress } from "@/components/ui/progress";

interface PropertyDetails {
  price: number;
  address: string;
  bed: number;
  bath: number;
  sqft: number;
}

interface PropertyCarouselProps {
  images: string[];
  onClose: () => void; // the function to hide the carousel
  propertyDetails: PropertyDetails; // Add propertyDetails to the props
}

export default function PropertyCarousel({
  images,
  onClose,
  propertyDetails,
}: PropertyCarouselProps) {
  // State and ref handlers:
  const [height, setHeight] = useState("h-1/4"); // Initial height
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.targetTouches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndY.current = e.targetTouches[0].clientY;
    e.preventDefault(); // Prevent scrolling while touching the carousel
  };

  const handleTouchEnd = () => {
    if (touchStartY.current - touchEndY.current > 50) {
      // Swipe up
      setHeight("h-1/2"); // Change to the height you want on swipe up
    } else if (touchEndY.current - touchStartY.current > 50) {
      // Swipe down
      setHeight("h-1/4"); // Change back to initial height on swipe down
    }
  };

  useEffect(() => {
    const handleTouchMoveGlobal = (e: TouchEvent) => e.preventDefault();
    document.addEventListener("touchmove", handleTouchMoveGlobal, {
      passive: false,
    });

    return () => {
      document.removeEventListener("touchmove", handleTouchMoveGlobal);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-20 left-0 right-0 lg:left-auto lg:right-0 ${height} lg:w-[25%] lg:h-full bg-white shadow-lg border-t lg:border-t-0 lg:border-1 p-4 transition-all duration-600 ease-in-out`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Swipe indicator */}
      <div className="flex justify-center items-center mb-2 z-10 lg:hidden">
        <div className="w-12 h-2 bg-gray-400 rounded-full"></div>
      </div>

      {/* Mobile view */}
      <div className="lg:hidden">
        <Carousel className="w-full h-full">
          <CarouselContent>
            {images.map((img, index) => (
              <CarouselItem key={index}>
                <div className="relative w-full h-full ">
                  <Image
                    src={img}
                    alt={`Property image ${index + 1}`}
                    layout="responsive" // Changed to responsive to maintain aspect ratio
                    width={400} // Define width
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
        <div className="relative w-full h-full p-4 bg-white">
          <p className="text-lg font-semibold">
            ${propertyDetails.price.toLocaleString()}
          </p>
          <p className="text-sm text-gray-600">{propertyDetails.address}</p>
          <p className="text-sm text-gray-600">
            {propertyDetails.bed} Beds, {propertyDetails.bath} Baths
          </p>
          <p className="text-sm text-gray-600">
            {propertyDetails.sqft.toLocaleString()} sqft
          </p>
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-3 gap-4">
          {images.map((img, index) => (
            <div key={index} className="relative w-full h-full col-span-1">
              <Image
                src={img}
                alt={`Property image ${index + 1}`}
                layout="responsive"
                width={400}
                height={300}
                objectFit="cover"
                className="rounded-md"
              />
            </div>
          ))}
        </div>
        <div className="mt-4">
          <p className="text-lg font-semibold">
            ${propertyDetails.price.toLocaleString()}
          </p>
          <p className="text-sm text-gray-600">{propertyDetails.address}</p>
          <p className="text-sm text-gray-600">
            {propertyDetails.bed} Beds, {propertyDetails.bath} Baths
          </p>
          <p className="text-sm text-gray-600">
            {propertyDetails.sqft.toLocaleString()} sqft
          </p>
        </div>
      </div>

      <button
        onClick={onClose}
        className="absolute top-0 right-0 p-2 text-xl lg:text-lg bg-white"
      >
        x
      </button>
    </div>
  );
}
