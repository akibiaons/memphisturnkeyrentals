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

interface PropertyCarouselProps {
  images: string[];
  onClose: () => void; // the function to hide the carousel
}

export default function PropertyCarousel({
  images,
  onClose,
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
      className={`fixed bottom-20 left-0 right-0 ${height} bg-white shadow-lg border-t p-4 lg:w-[20%] lg:h-full transition-all duration-600 ease-in-out`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Swipe indicator */}
      <div className="flex justify-center items-center mb-2 z-10">
        <div className="w-12 h-2 bg-gray-400 rounded-full"></div>
      </div>

      <Carousel className="w-full h-full ">
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
      <button onClick={onClose} className="absolute top-0 right-0 p-2 text-xl ">
        x
      </button>
    </div>
  );
}
