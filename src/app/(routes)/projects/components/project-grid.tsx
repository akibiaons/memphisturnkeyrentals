import { useRef } from "react";
import PropertyCard from "./project-card";

const ProjectGrid = ({
  properties = [], // Expect an array of property objects instead of just image strings
  className,
}: {
  properties: {
    imageUrl: string;
    imageAlt: string;
    address: string;
    content: string;
    footerText: string;
    tags: string[];
  }[];
  className?: string;
}) => {
  const gridRef = useRef(null);

  const third = Math.ceil(properties.length / 3);
  const firstPart = properties.slice(0, third);
  const secondPart = properties.slice(third, 2 * third);
  const thirdPart = properties.slice(2 * third);

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-7xl mx-auto gap-10 py-40 px-4 md:px-8"
      ref={gridRef}
    >
      <div className="grid gap-10">
        {firstPart.map((property, idx) => (
          <div key={"grid-1" + idx}>
            <PropertyCard {...property} />
          </div>
        ))}
      </div>
      <div className="grid gap-10">
        {secondPart.map((property, idx) => (
          <div key={"grid-2" + idx}>
            <PropertyCard {...property} />
          </div>
        ))}
      </div>
      <div className="grid gap-10">
        {thirdPart.map((property, idx) => (
          <div key={"grid-3" + idx}>
            <PropertyCard {...property} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProjectGrid;
