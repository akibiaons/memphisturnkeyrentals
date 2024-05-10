import { useRef } from "react";
import PropertyCard from "./project-card";

interface Property {
  imageUrl: string;
  imageAlt: string;
  address: string;
  content: string;
  footerText: string;
  tags: {
    text: string;
    className: string;
  }[];
  price: number;
}

interface ProjectGridProps {
  properties: Property[];
  className?: string;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ properties, className }) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const third = Math.ceil(properties.length / 3);
  const firstPart = properties.slice(0, third);
  const secondPart = properties.slice(third, 2 * third);
  const thirdPart = properties.slice(2 * third);

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-7xl mx-auto gap-10 py-40 px-4 md:px-8 ${className}`}
      ref={gridRef}
    >
      {[firstPart, secondPart, thirdPart].map((part, partIndex) => (
        <div className="grid gap-10" key={partIndex}>
          {part.map((property, idx) => (
            <div key={`grid-${partIndex}-${idx}`}>
              <PropertyCard {...property} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
