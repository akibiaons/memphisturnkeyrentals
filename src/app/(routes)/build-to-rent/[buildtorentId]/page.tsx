"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchBtrProperty } from "@/data/fetchBtrProperty"; // Adjust the import path as needed
import { BtrListingId } from "@/components/btr-listing";
import { ImagesSlider } from "@/components/ui/image-slider";
import { motion } from "framer-motion";

interface BtrProperty {
  id: number;
  propertyAddress: string;
  latitude: number;
  longitude: number;
  beds: number;
  baths: number;
  sqft: number;
  price: number;
  propertyDesc: string;
  yearBuilt: number;
  occupancy: string;
  propertyStatus: string;
  actualRent: number;
  targetMonthlyRent: number;
  propertyType: string;
  images: string[];
}

const BtrListing = ({ params }: { params: { buildtorentId: string } }) => {
  const { buildtorentId } = params;
  const [property, setProperty] = useState<BtrProperty | null>(null);

  useEffect(() => {
    const getProperty = async () => {
      const fetchedProperty = await fetchBtrProperty(buildtorentId);
      console.log("Fetched property:", fetchedProperty);
      setProperty(fetchedProperty);
    };
    getProperty();
  }, [buildtorentId]);

  if (!property) {
    return <div>Loading property...</div>;
  }

  return (
    <div>
      <section className="w-full">
        <ImagesSlider
          className="lg:h-[40rem] h-[15rem]"
          images={property.images}
        >
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
            <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-black to-neutral-400 py-4">
              {property.propertyAddress}
            </motion.p>
          </motion.div>
        </ImagesSlider>
      </section>
      <section className="mx-auto max-w-7xl my-16">
        <BtrListingId property={property} />
      </section>
    </div>
  );
};

export default BtrListing;
