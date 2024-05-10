import Image from "next/image";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface PropertyCardProps {
  imageUrl: string;
  imageAlt: string;
  address: string;
  content: string;
  footerText: string;
  tags: string[]; // Change this to an array of strings
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  imageUrl,
  imageAlt,
  address,
  content,
  footerText,
  tags, // Update to use the array of tags
}) => {
  return (
    <Card className="min-h-[500px] flex flex-col">
      <div className="relative w-full h-[400px]">
        <Image
          src={imageUrl}
          alt={imageAlt}
          layout="fill"
          className="rounded-t-lg"
        />
      </div>

      <div className="flex flex-col justify-between flex-grow">
        <CardHeader>
          <CardTitle className="cursor-pointer hover:underline">
            {address}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-md tracking-tight">{content}</p>
        </CardContent>
        <CardFooter className="text-muted-foreground text-left flex flex-col items-start gap-3">
          <p className="text-md">{footerText}</p>
          {tags.map((tag, index) => (
            <Badge
              key={index}
              variant="outline"
              className="content-left items-start"
            >
              {tag}
            </Badge>
          ))}
        </CardFooter>
      </div>
    </Card>
  );
};

export default PropertyCard;
