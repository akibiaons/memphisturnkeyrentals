"use client";
// The grid layout on the mobile /buildtorent page
import { useRef, useState, useEffect } from "react"; // useRef, state and hook imports to manage the page state and useeffect to anchor the data to the pages DOM I beleive
import ListingCard from "./BtrCard"; // The ui for the cards and their details
import { fetchBtrListings } from "@/data/fetchbtr";

// Interface of property as this is the data type being passed down from the strapi api url
export interface BtrProperty {
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

//  Not too sure what this does and why it is a className? Is this in charge of styling??
interface BtrGridProps {
  className?: string;
}

const BtrGrid: React.FC<BtrGridProps> = ({ className }) => {
  const [properties, setProperties] = useState<BtrProperty[]>([]);
  const gridRef = useRef<HTMLDivElement>(null); // Not too sure what useRef does in the application

  // UseEffect to fetch the data function and anchor the most recent data from the Strapi apiURL
  useEffect(() => {
    const getProperties = async () => {
      const btrListings = await fetchBtrListings();
      console.log("Fetched property:", btrListings);
      setProperties(btrListings);
    };
    getProperties();
  }, []);

  // Not too sure what these 4 variables do, perhaps something with the grid sizing??
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

export default BtrGrid;
