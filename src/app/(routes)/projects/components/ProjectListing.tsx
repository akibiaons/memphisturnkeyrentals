/* eslint-disable @next/next/no-img-element */
"use client";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BadgeDollarSign, CalendarClock, Home } from "lucide-react";
import Image from "next/image";
import MortgageCalculator from "@/components/mortgage";

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

export function ProjectListing({ project }: ProjectListingProps) {
  // Determine the class for the status dot based on listingStatus
  const getStatusClass = (status: string) => {
    switch (status.toLowerCase()) {
      case "available":
        return "bg-green-600";
      case "sold":
        return "bg-red-600";
      case "under contract":
        return "bg-yellow-500";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="md:grid md:gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="grid gap-4">
            <div className="flex flex-row mb-12 md:grid grid-cols-3 gap-4">
              {project.images.map((image, index) => (
                <button
                  key={index}
                  className="rounded-lg border border-gray-200 transition-colors hover:border-gray-900 dark:border-gray-800 dark:hover:border-gray-50"
                >
                  <img
                    alt={`Project Image ${index + 1}`}
                    className="aspect-square w-full rounded-lg object-cover"
                    height={100}
                    src={image}
                    width={100}
                  />
                  <span className="sr-only">View Image {index + 1}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col md:grid md:gap-4 lg:flex">
            <div className="pb-0">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {project.address}
              </h1>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                {project.description}
              </p>
            </div>
            <div className="grid space-y-4">
              <div className="flex flex-row items-center gap-2">
                <div
                  className={`h-3 w-3 rounded-full ${getStatusClass(
                    project.listingStatus
                  )}`}
                ></div>
                <p className="text-md">{project.listingStatus}</p>
              </div>
              <div className="flex flex-row">
                <h2 className="text-xl font-bold">
                  <span>$</span>
                  <span>{project.price.toLocaleString()}</span>
                </h2>
              </div>
              <div>
                <div className="flex flex-row items-center gap-5">
                  <div>
                    <p>
                      <span className="font-bold mr-1">{project.beds}</span>
                      <span className="font-normal">Bed</span>
                    </p>
                  </div>
                  <div>
                    <p>
                      <span className="font-bold mr-1">{project.baths}</span>
                      <span className="font-normal">Bath</span>
                    </p>
                  </div>
                  <div>
                    <p>
                      <span className="font-bold mr-1">
                        {project.sqft.toLocaleString()}
                      </span>
                      <span className="font-normal">Sqft</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center gap-5">
                <div className="flex flex-row items-center">
                  <Home className="h-7 w-7" />
                  <div className="ml-2">
                    <p className="font-semibold">{project.propertyType}</p>
                    <p className="text-gray-500 dark:text-gray-400">
                      Home Type
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <CalendarClock className="h-7 w-7" />
                  <div className="ml-2">
                    <p className="font-semibold">{project.yearBuilt}</p>
                    <p className="text-gray-500 dark:text-gray-400">
                      Year Built
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center gap-5">
                <div className="flex flex-row items-center">
                  <BadgeDollarSign className="h-7 w-7" />
                  <div className="ml-2">
                    <p className="font-semibold">
                      {project.actualMonthlyRent.toLocaleString()}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      Actual Rent
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-center">
                  <BadgeDollarSign className="h-7 w-7" />
                  <div className="ml-2">
                    <p className="font-semibold">
                      {project.projectedMonthlyRent.toLocaleString()}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      Projected Rent
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full md:flex-row md:gap-4">
                <Button className="w-full" size="lg">
                  Ask a question
                </Button>
                <Button className="w-full" size="lg" variant="outline">
                  Share this project
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Specifications
            </h2>
            <div className="mt-6 grid gap-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="grid grid-cols-[150px_1fr] items-start gap-4">
                <span className="font-medium text-gray-900 dark:text-gray-50">
                  Bedrooms
                </span>
                <span>{project.beds}</span>
              </div>
              <div className="grid grid-cols-[150px_1fr] items-start gap-4">
                <span className="font-medium text-gray-900 dark:text-gray-50">
                  Bathrooms
                </span>
                <span>{project.baths}</span>
              </div>
              <div className="grid grid-cols-[150px_1fr] items-start gap-4">
                <span className="font-medium text-gray-900 dark:text-gray-50">
                  Property Type
                </span>
                <span>{project.propertyType}</span>
              </div>
              <div className="grid grid-cols-[150px_1fr] items-start gap-4">
                <span className="font-medium text-gray-900 dark:text-gray-50">
                  Occupancy Status
                </span>
                <span>{project.occupancyStatus}</span>
              </div>
            </div>
          </div>
          <div>
            <MortgageCalculator price={project.price} />
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectListing;
