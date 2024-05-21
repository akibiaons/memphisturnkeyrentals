import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface PropertyDetails {
  id: string;
  images: string[];
  price: number;
  address: string;
  beds: number;
  baths: number;
  sqft: number;
  latitude: number;
  longitude: number;
}

interface PropertyCarouselProps {
  activeProperty: PropertyDetails;
  properties: PropertyDetails[];
  activePropertyId: string;
  onClose: () => void;
}

export default function PropertyCarousel({
  activeProperty,
  properties,
  activePropertyId,
  onClose,
}: PropertyCarouselProps) {
  const [height, setHeight] = useState("25%");
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);

  // Card highlight on click effect below
  const propertyRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.targetTouches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndY.current = e.targetTouches[0].clientY;
    e.preventDefault();
  };

  const handleTouchEnd = () => {
    if (touchStartY.current - touchEndY.current > 50) {
      setHeight("70%");
    } else if (touchEndY.current - touchStartY.current > 50) {
      setHeight("25%");
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
      className={`lg:block lg:bottom-0 lg:sticky fixed bottom-0 left-0 right-0 lg:left-auto lg:right-0 lg:w-[25%] lg:h-full bg-white shadow-lg border-t lg:border-t-0 lg:border-1 p-4 transition-all duration-600 ease-in-out overflow-y-auto`}
      style={{ height: height }}
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
            {activeProperty.images.map((img, index) => (
              <CarouselItem key={index}>
                <div className="relative w-full h-full">
                  <Image
                    src={img}
                    alt={`Property image ${index + 1}`}
                    layout="responsive"
                    width={400}
                    height={300}
                    objectFit="contain"
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
            ${activeProperty?.price?.toLocaleString() || "N/A"}
          </p>
          <p className="text-sm text-gray-600">
            {activeProperty?.address || "Address not available"}
          </p>
          <p className="text-sm text-gray-600">
            {activeProperty?.beds || "N/A"} Beds,{" "}
            {activeProperty?.baths || "N/A"} Baths
          </p>
          <p className="text-sm text-gray-600">
            {activeProperty?.sqft?.toLocaleString() || "N/A"} sqft
          </p>
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden lg:flex lg:flex-col lg:h-full lg:overflow-y-auto">
        {properties.map((property, index) => (
          <div
            key={property.id}
            ref={(el) => {
              propertyRefs.current[property.id] = el;
            }}
            className={`mb-4 flex flex-col bg-white p-4 shadow-lg rounded-lg ${
              property.id === activePropertyId ? "border-4 border-blue-500" : ""
            }`}
          >
            <div className="grid grid-cols-3 gap-4 flex-grow">
              {property.images.map((img, imgIndex) => (
                <div
                  key={imgIndex}
                  className="relative w-full h-full col-span-1"
                >
                  <Image
                    src={img}
                    alt={`Property image ${imgIndex + 1}`}
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
                ${property.price?.toLocaleString()}
              </p>
              <p className="text-sm text-gray-600">{property.address}</p>
              <p className="text-sm text-gray-600">
                {property.beds} Beds, {property.baths} Baths
              </p>
              <p className="text-sm text-gray-600">
                {property.sqft?.toLocaleString()} sqft
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
