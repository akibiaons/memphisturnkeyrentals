import Image from "next/image";

interface PropertyCardProps {
  imageUrl: string;
  imageAlt: string;
  address: string;
  price: number;
  tags: string[]; // Change this to an array of strings
}
import { Badge } from "@/components/ui/badge";

const PropertyCard: React.FC<PropertyCardProps> = ({
  imageUrl,
  imageAlt,
  address,
  price,
  tags, // Update to use the array of tags
}) => {
  return (
    <div className="min-h-[400px] flex flex-col">
      <div className="relative w-full h-[250px]">
        <Image
          src={imageUrl}
          alt={imageAlt}
          layout="fill"
          className=" rounded-t-md"
        />
      </div>

      <div className="flex flex-col px-1">
        <div>
          <div className="cursor-pointer hover:underline tracking-normal ">
            {price}
          </div>
        </div>
        <div>
          <p></p>
        </div>
        <div className="text-muted-foreground text-left flex flex-row flex-wrap items-start gap-3">
          <p className="text-md"> {address}</p>
          {tags.map((tag, index) => (
            <Badge
              key={index}
              variant="outline"
              className="content-left items-start"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
