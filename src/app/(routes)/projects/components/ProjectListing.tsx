import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  id: number;
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

interface ProjectListingProps {
  project: Project;
}

const ProjectListing: React.FC<ProjectListingProps> = ({ project }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{project.address}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          {project.images.length > 0 ? (
            project.images.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`Project image ${index + 1}`}
                width={600}
                height={400}
                objectFit="cover"
                className="rounded-md"
              />
            ))
          ) : (
            <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center rounded-md">
              <span className="text-gray-500">No Image Available</span>
            </div>
          )}
        </div>
        <div>
          <p className="text-lg font-semibold">
            {formatter.format(project.price)}
          </p>
          <p>{project.description}</p>
          <p>Beds: {project.beds}</p>
          <p>Baths: {project.baths}</p>
          <p>Sqft: {project.sqft.toLocaleString()}</p>
          <p>Type: {project.propertyType}</p>
          <p>Year Built: {project.yearBuilt}</p>
          <p>Occupancy: {project.occupancyStatus}</p>
          <p>Listing Status: {project.listingStatus}</p>
          <p>
            Actual Monthly Rent: {formatter.format(project.actualMonthlyRent)}
          </p>
          <p>
            Projected Monthly Rent:{" "}
            {formatter.format(project.projectedMonthlyRent)}
          </p>
          <Link href="/projects">
            <a className="text-blue-500 underline">Back to Projects</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectListing;
