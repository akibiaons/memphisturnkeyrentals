"use client";
// The grid layout on the mobile /buildtorent page
import { useRef, useState, useEffect } from "react";
import BtrListingCard from "./BtrCard";
import { fetchBtrListings } from "@/data/fetchbtr";

// Interface of property as this is the data type being passed down from the strapi api url
export interface BtrProperty {
  id: number;
  propertyAddress: string;
  latitude: number;
  longitude: number;
  beds: number;
  baths: number;
  sqft: number;
  price: number;
  propertyDesc: string;
  yearBuilt: number;
  occupancy: string;
  propertyStatus: string;
  actualRent: number;
  targetMonthlyRent: number;
  propertyType: string;
  images: string[];
}

// Not too sure what this does and why it is a className? Is this in charge of styling??
interface BtrGridProps {
  className?: string;
}

const BtrGrid: React.FC<BtrGridProps> = ({ className }) => {
  const [properties, setProperties] = useState<BtrProperty[]>([]);
  const gridRef = useRef<HTMLDivElement>(null);

  // UseEffect to fetch the data function and anchor the most recent data from the Strapi apiURL
  useEffect(() => {
    const getProperties = async () => {
      const btrListings = await fetchBtrListings();
      console.log("Fetched property:", btrListings);
      setProperties(btrListings);
    };
    getProperties();
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
              <BtrListingCard
                id={property.id}
                images={property.images}
                price={property.price}
                address={property.propertyAddress}
                beds={property.beds}
                baths={property.baths}
                sqft={property.sqft}
                latitude={property.latitude}
                longitude={property.longitude}
                description={property.propertyDesc}
                propertyType={property.propertyType}
                yearBuilt={property.yearBuilt}
                occupancyStatus={property.occupancy}
                listingStatus={property.propertyStatus}
                actualMonthlyRent={property.actualRent}
                projectedMonthlyRent={property.targetMonthlyRent}
                tags={[
                  { text: property.propertyType, className: "badge-class" },
                  { text: property.propertyStatus, className: "badge-class" },
                ]}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BtrGrid;
``;
