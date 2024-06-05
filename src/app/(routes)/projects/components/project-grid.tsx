import { useRef, useState, useEffect } from "react";
import PropertyCard from "./project-card";
import { fetchProjects } from "@/data/fetchProjects";

interface Projects {
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

interface ProjectGridProps {
  className?: string;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ className }) => {
  const [properties, setProperties] = useState<Projects[]>([]);
  const gridRef = useRef<HTMLDivElement>(null);
  // useEffect to fetch the data
  useEffect(() => {
    const getProperties = async () => {
      const projects = await fetchProjects();
      console.log("Fetched projects:", projects);
      setProperties(projects);
    };
    getProperties();
  });
  // part of the ui component here
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
              <PropertyCard
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

export default ProjectGrid;
