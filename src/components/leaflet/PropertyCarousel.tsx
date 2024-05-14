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
  id: string;
  name: string;
  images: string[];
  price: number;
  address: string;
  bed: number;
  bath: number;
  sqft: number;
}

interface PropertyCarouselProps {
  images: string[];
  onClose: () => void; // the function to hide the carousel
  properties: PropertyDetails[]; // Add propertyDetails to the props
}

export default function PropertyCarousel({
  images,
  onClose,
  properties,
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
      className={`fixed bottom-20 left-0 right-0 lg:left-auto lg:right-0 ${height} lg:w-[25%] lg:h-full bg-white shadow-lg border-t lg:border-t-0 lg:border-1 p-4 lg:pt-[10rem] transition-all duration-600 ease-in-out`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Swipe indicator */}
      <div className="flex justify-center items-center mb-2 z-10 lg:hidden">
        <div className="w-12 h-2 bg-gray-400 rounded-full"></div>
      </div>

      {/* Mobile view for the active property */}
      <div className="lg:hidden">
        <Carousel className="w-full h-full ">
          <CarouselContent>
            {images.map((img, index) => (
              <CarouselItem key={index}>
                <div className="relative w-full h-full">
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
        <div className="bg-white p-4 mt-4 shadow-lg rounded-lg">
          <p className="text-lg font-semibold">
            ${properties[0]?.price.toLocaleString()}
          </p>
          <p className="text-sm text-gray-600">{properties[0]?.address}</p>
          <p className="text-sm text-gray-600">
            {properties[0]?.bed} Beds, {properties[0]?.bath} Baths
          </p>
          <p className="text-sm text-gray-600">
            {properties[0]?.sqft.toLocaleString()} sqft
          </p>
        </div>
      </div>
      {/* Desktop view for all properties */}
      <div className="hidden lg:flex lg:flex-col lg:h-full lg:overflow-y-auto">
        {properties.map((property) => (
          <div
            key={property.id}
            className="mb-4 flex flex-col bg-white p-4 shadow-lg rounded-lg"
          >
            <div className="grid grid-cols-3 gap-4 flex-grow">
              {property.images.map((img, index) => (
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
                ${property.price.toLocaleString()}
              </p>
              <p className="text-sm text-gray-600">{property.address}</p>
              <p className="text-sm text-gray-600">
                {property.bed} Beds, {property.bath} Baths
              </p>
              <p className="text-sm text-gray-600">
                {property.sqft.toLocaleString()} sqft
              </p>
            </div>
          </div>
        ))}
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
