import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Property {
  id: number;
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

export interface PropertyCardProperty extends Property {
  tags: {
    text: string;
    className: string;
  }[];
}

interface PropertyCardProps {
  id: number;
  imageUrl: string;
  imageAlt: string;
  address: string;
  price: number;
  tags: {
    text: string;
    className: string;
  }[];
}

const ListingCard: React.FC<PropertyCardProps> = ({
  id,
  imageUrl,
  imageAlt,
  address,
  price,
  tags,
}) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="min-h-[400px] flex flex-col shadow-md rounded-b-lg">
      <div className="relative w-full h-[250px] bg-gray-200 flex items-center justify-center">
        <Link href={`/listings/${id}`}>
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={imageAlt}
              layout="fill"
              className="rounded-t-md object-cover"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full text-gray-500">
              No Image Available
            </div>
          )}
        </Link>
      </div>

      <div className="flex flex-col p-2 px-5">
        <div className="mt-3 cursor-default text-lg">
          <div className="mb-1 font-medium">{formatter.format(price)}</div>
        </div>
        <div>
          <div className="flex flex-row items-center gap-5 mb-1 text-muted-foreground">
            <div>
              <p>
                <span className="mr-1">2</span>
                <span>Bed</span>
              </p>
            </div>
            <div>
              <p>
                <span className="mr-1">1</span>
                <span>Bath</span>
              </p>
            </div>
            <div>
              <p>
                <span className="mr-1">900</span>
                <span>Sqft</span>
              </p>
            </div>
          </div>
        </div>
        <div className="text-muted-foreground text-left flex flex-row flex-wrap items-start gap-2 mb-2 cursor-default">
          <Link href={`/listings/${id}`}>
            <p className="text-md cursor-pointer hover:underline tracking-normal">
              {address}
            </p>
          </Link>
          {tags.map((tag, index) => (
            <Badge
              key={index}
              className={`content-left items-start ${tag.className}`} // Use custom className for styling
            >
              {tag.text}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
