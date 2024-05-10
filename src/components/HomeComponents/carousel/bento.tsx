"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import Link from "next/link";

interface BuildToRentHome {
  id: number;
  image: string;
  address: string;
}

export function BentoTwoGridHome() {
  const [buildToRent, setBuiltToRent] = useState<BuildToRentHome[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBuildToRentProperties() {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/buildtorents?populate=*"
        );
        const fetchedBuildToRentProperties = response.data.data.map(
          (item: any) => ({
            id: item.id,
            address: item.attributes.propertyAddress,
            image: `http://localhost:1337${item.attributes.propertyImg.data[0].attributes.url}`, // Correctly formatted image URL
          })
        );
        setBuiltToRent(fetchedBuildToRentProperties);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch build to rent properties:", error);
        setLoading(false);
      }
    }

    fetchBuildToRentProperties();
  }, []);

  if (loading) {
    return (
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </BentoGrid>
    );
  }

  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {buildToRent.map((item) => (
        <BentoGridItem
          key={item.id}
          header={
            <DirectionAwareHover imageUrl={item.image}>
              <Link href="/build-to-rent">
                <img
                  src={item.image}
                  alt={item.address}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </Link>
            </DirectionAwareHover>
          }
          title={item.address}
          className="md:col-span-1" // Adjust span as necessary
          description={""} // Any additional description you might want
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
