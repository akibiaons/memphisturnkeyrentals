import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export interface Projects {
  id: string;
  images: string[];
  price: number;
  address: string;
  beds: number;
  baths: number;
  sqft: number;
  latitude: number | null;
  longitude: number | null;
  description: string;
  propertyType: string;
  yearBuilt: number;
  occupancyStatus: string;
  listingStatus: string;
  actualMonthlyRent: number;
  projectedMonthlyRent: number;
}

export interface PropertyCardProperty extends Projects {
  tags: {
    text: string;
    className: string;
  }[];
}

interface PropertyCardProps {
  imageUrl: string;
  imageAlt: string;
  address: string;
  price: number;
  tags: {
    text: string;
    className: string;
  }[];
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  imageUrl,
  imageAlt,
  address,
  price,
  tags,
}) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  return (
    <div className="min-h-[400px] flex flex-col shadow-md rounded-b-lg">
      <div className="relative w-full h-[250px]">
        <Image
          src={imageUrl}
          alt={imageAlt}
          layout="fill"
          className=" rounded-t-md"
        />
      </div>

      <div className="flex flex-col p-2 px-5">
        <div className="mt-3 cursor-default text-lg ">
          <div className=" mb-1 font-medium">{formatter.format(price)}</div>
        </div>
        <div>
          <div>
            <div className="flex flex-row items-center gap-5 mb-1 text-muted-foreground ">
              <div>
                <p>
                  <span className=" mr-1">2</span>
                  <span className="font-">Bed</span>
                </p>
              </div>
              <div>
                <p>
                  <span className=" mr-1">1</span>
                  <span className="font-">Bath</span>
                </p>
              </div>
              <div>
                <p>
                  <span className=" mr-1">900</span>
                  <span className="font-">Sqft</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-muted-foreground text-left flex flex-row flex-wrap items-start gap-2 mb-2 cursor-default">
          <p className="text-md cursor-pointer hover:underline tracking-normal">
            {" "}
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

export default PropertyCard;
