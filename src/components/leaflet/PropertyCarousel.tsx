import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

interface Property {
  id: string;
  images: string[];
  price: number;
  address: string;
  beds: number;
  baths: number;
  sqft: number;
  latitude: number;
  longitude: number;
  description: string;
  propertyType: string;
  yearBuilt: number;
  occupancyStatus: string;
  listingStatus: string;
  actualMonthlyRent: number;
  projectedMonthlyRent: number;
}

interface PropertyCarouselProps {
  activeProperty: Property | null;
  properties: Property[];
  activePropertyId: string;
  onClose: () => void;
  onCardClick: (property: Property) => void; // Add the card click handler
}

export default function PropertyCarousel({
  activeProperty,
  properties,
  activePropertyId,
  onClose,
  onCardClick, // Add the card click handler
}: PropertyCarouselProps) {
  const [height, setHeight] = useState("25%");
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);

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

  useEffect(() => {
    if (activePropertyId && propertyRefs.current[activePropertyId]) {
      propertyRefs.current[activePropertyId]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [activePropertyId]);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;

  return (
    <div
      className={`lg:block lg:bottom-0 lg:sticky fixed bottom-0 left-0 right-0 lg:left-auto lg:right-0 lg:w-full lg:h-full bg-white shadow-lg border-t lg:border-t-0 lg:border-1 transition-all duration-600 ease-in-out overflow-y-auto z-50 ${
        isMobile ? "lg:overflow-scroll z-0" : ""
      }`}
      style={{ height: isMobile ? height : "100%" }}
      onTouchStart={isMobile ? handleTouchStart : undefined}
      onTouchMove={isMobile ? handleTouchMove : undefined}
      onTouchEnd={isMobile ? handleTouchEnd : undefined}
    >
      <div className="flex justify-center items-center mb-2 z-10 lg:hidden">
        <div className="w-12 h-2 bg-gray-400 rounded-full"></div>
      </div>
      {/* Mobile View */}
      <div className="block lg:hidden">
        {activeProperty && (
          <div className="mb-4 flex flex-col bg-white p-4 shadow-lg rounded-lg min-h-[200px] border-4 border-blue-500">
            <Carousel className="w-full h-full">
              <CarouselContent>
                {activeProperty.images.map((img, imgIndex) => (
                  <CarouselItem key={imgIndex}>
                    <div className="relative w-full h-full">
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
              <p className="text-sm text-gray-600 underline">
                <Link href={`/listings/${activeProperty.id}`}>
                  {activeProperty?.address || "Address not available"}
                </Link>
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
        )}

        {properties
          .filter((property) => property.id !== activePropertyId)
          .map((property, index) => (
            <div
              key={property.id}
              ref={(el) => {
                propertyRefs.current[property.id] = el;
              }}
              className={`mb-4 flex flex-col bg-white p-4 shadow-lg rounded-lg min-h-[200px] ${
                property.id === activePropertyId
                  ? "border-4 border-blue-500"
                  : ""
              }`}
              onClick={() => onCardClick(property)}
            >
              <div className="relative w-full h-full col-span-1">
                {property.images.length > 0 ? (
                  <Image
                    src={property.images[0]}
                    alt={`Property image ${index + 1}`}
                    layout="responsive"
                    width={400}
                    height={300}
                    objectFit="cover"
                    className="rounded-md"
                  />
                ) : (
                  <div className="w-full h-[300px] bg-gray-200 flex items-center justify-center rounded-md">
                    <span className="text-gray-500">No Image Available</span>
                  </div>
                )}
              </div>
              <div className="mt-4">
                <p className="text-lg font-semibold">
                  ${property.price?.toLocaleString()}
                </p>
                <p className="text-sm text-gray-600 underline">
                  <Link href={`/listings/${property.id}`}>
                    {property.address}
                  </Link>
                </p>
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

      {/* Desktop view ================= */}
      <div className="h-full flex flex-col lg:overflow-hidden">
        <div className="hidden lg:flex lg:flex-col lg:h-full lg:overflow-y-scroll flex-grow">
          {activeProperty && (
            <div
              ref={(el) => {
                propertyRefs.current[activeProperty.id] = el;
              }}
              className={`mb-4 flex flex-col bg-white p-4 shadow-lg rounded-lg min-h-[200px] border-4 border-blue-500`}
            >
              <Carousel className="w-full h-full">
                <CarouselContent>
                  {activeProperty.images.map((img, imgIndex) => (
                    <CarouselItem key={imgIndex}>
                      <div className="relative w-full h-full">
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
                <p className="text-sm text-gray-600 underline">
                  <Link href={`/listings/${activeProperty.id}`}>
                    {activeProperty?.address || "Address not available"}
                  </Link>
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
          )}

          {properties
            .filter((property) => property.id !== activePropertyId)
            .map((property, index) => (
              <div
                key={property.id}
                ref={(el) => {
                  propertyRefs.current[property.id] = el;
                }}
                className={`mb-4 flex flex-col bg-white p-4 shadow-lg rounded-lg min-h-[200px] lg:overflow-hidden ${
                  property.id === activePropertyId
                    ? "border-4 border-blue-500"
                    : "lg:overflow-y-scroll"
                }`}
                onClick={() => onCardClick(property)} // Handle card click
              >
                <div className="relative w-full h-full col-span-1">
                  {property.images.length > 0 ? (
                    <Image
                      src={property.images[0]}
                      alt={`Property image ${index + 1}`}
                      layout="responsive"
                      width={400}
                      height={300}
                      objectFit="cover"
                      className="rounded-md"
                    />
                  ) : (
                    <div className="w-full h-[300px] bg-gray-200 flex items-center justify-center rounded-md">
                      <span className="text-gray-500">No Image Available</span>
                    </div>
                  )}
                </div>
                <div className="mt-4">
                  <p className="text-lg font-semibold">
                    ${property.price?.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-600 underline">
                    <Link href={`/listings/${property.id}`}>
                      {property.address}
                    </Link>
                  </p>
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
      </div>
    </div>
  );
}
