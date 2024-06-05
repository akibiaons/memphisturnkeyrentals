// Card for mobile devices which contains all the uploaded proeprty info on /build to rent
import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface BtrProperty {
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
export interface BtrGridProps extends BtrProperty {
  tags: {
    text: string;
    className: string;
  }[];
}

interface BtrCardProps {
  imageUrl: string;
  imageAlt: string;
  address: string;
  price: number;
  tags: {
    text: string;
    className: string;
  }[];
}

const BtrListingCard: React.FC<BtrCardProps> = ({
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
          <p className="text-md cursor-pointer hover:underline tracking-normal">
            {address}
          </p>
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

export default BtrListingCard;
