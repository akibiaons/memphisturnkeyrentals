"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchPropertyDetails } from "@/data/propertyId"; // fetching strapi data in this component
import { ProductListing } from "@/components/product-listing";
import { ImagesSlider } from "@/components/ui/image-slider";
import { motion } from "framer-motion";

interface DetailedProperty {
  id: string;
  images: string[];
  price: number;
  address: string;
  description: string;
  beds: number;
  baths: number;
  sqft: number;
  yearBuilt: number;
  neighborhoodScore: number;
  targetMonthlyRent: number;
  cashOnCashReturn: number;
  monthlyCashFlow: number;
  fiveYearProjectedReturn: number;
  occupancyStatus: string;
  homeType: string;
}

const Listing = () => {
  const params = useParams();
  const listingId = params?.listingId as string; // Type assertion for params
  const [property, setProperty] = useState<DetailedProperty | null>(null);

  // useEffect to collect data
  useEffect(() => {
    const getProperty = async () => {
      const fetchedProperty = await fetchPropertyDetails(listingId);
      setProperty(fetchedProperty);
    };
    getProperty();
  }, [listingId]);

  if (!property) {
    return <div>Loading property...</div>;
  }

  return (
    <div>
      <section className="w-full">
        <ImagesSlider className="h-[40rem]" images={property.images}>
          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="z-50 flex flex-col justify-center items-center"
          >
            <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
              {property.address}
            </motion.p>
          </motion.div>
        </ImagesSlider>
      </section>
      <section className="mx-auto max-w-7xl my-16">
        <ProductListing property={property} />
      </section>
    </div>
  );
};
export default Listing;
