"use client";

import { useRef, useState, useEffect } from "react";
import ListingCard from "./ListingCard";
import { fetchListings } from "@/data/fetchListings";

export interface Property {
  id: number; // Change this to number
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

interface ListingGridProps {
  className?: string;
}

const ListingGrid: React.FC<ListingGridProps> = ({ className }) => {
  const [properties, setProperties] = useState<Property[]>([]);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchListings();
      setProperties(data);
    };
    fetchData();
  }, []);

  const third = Math.ceil(properties.length / 3);
  const firstPart = properties.slice(0, third);
  const secondPart = properties.slice(third, 2 * third);
  const thirdPart = properties.slice(2 * third);

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-7xl mx-auto gap-10 ${className}`}
      ref={gridRef}
    >
      {[firstPart, secondPart, thirdPart].map((part, partIndex) => (
        <div className="grid gap-10" key={partIndex}>
          {part.map((property, idx) => (
            <div key={`grid-${partIndex}-${idx}`}>
              <ListingCard
                imageUrl={property.images[0] || ""}
                imageAlt={`Image of ${property.address}`}
                tags={[
                  { text: property.propertyType, className: "badge-class" },
                  { text: property.listingStatus, className: "badge-class" },
                ]}
                {...property}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ListingGrid;
