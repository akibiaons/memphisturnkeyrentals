import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface BtrProperty {
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
export interface BtrCardProps extends BtrProperty {
  tags: {
    text: string;
    className: string;
  }[];
}

const BtrListingCard: React.FC<BtrCardProps> = ({
  id,
  images,
  price,
  address,
  beds,
  baths,
  sqft,
  tags,
}) => {
  const imageUrl = images.length > 0 ? images[0] : "";
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="min-h-[400px] flex flex-col shadow-md rounded-b-lg">
      <div className="relative w-full h-[250px] bg-gray-200 flex items-center justify-center">
        <Link href={`/build-to-rent/${id}`}>
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={`Image of ${address}`}
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
                <span className="mr-1">{beds}</span>
                <span>Bed</span>
              </p>
            </div>
            <div>
              <p>
                <span className="mr-1">{baths}</span>
                <span>Bath</span>
              </p>
            </div>
            <div>
              <p>
                <span className="mr-1">{sqft.toLocaleString()}</span>
                <span>Sqft</span>
              </p>
            </div>
          </div>
        </div>
        <div className="text-muted-foreground text-left flex flex-row flex-wrap items-start gap-2 mb-2 cursor-default">
          <Link href={`/build-to-rent/${id}`}>
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

export default BtrListingCard;
