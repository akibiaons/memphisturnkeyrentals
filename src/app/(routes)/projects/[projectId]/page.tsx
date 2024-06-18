"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchProject } from "@/data/fetchProjectId";
import { ProjectListing } from "../components/ProjectListing";
import { ImagesSlider } from "@/components/ui/image-slider";
import { motion } from "framer-motion";

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

const Project = ({ params }: { params: { projectId: string } }) => {
  // Hooks used for calling the state in the page based on the project data being fetched
  const { projectId } = params;
  const [project, setProject] = useState<Project | null>(null);

  // use effect to store fetched projects
  useEffect(() => {
    const getProject = async () => {
      const fetchedProject = await fetchProject(projectId);
      console.log("Fetched project:", fetchedProject);
      setProject(fetchedProject);
    };
    getProject();
  }, [projectId]);

  // Conditional to throw out a "loading" screen if projects have not yet rendered
  if (!project) {
    return <div>Loading Projects...</div>;
  }

  return (
    <div>
      <section className="w-full">
        <ImagesSlider
          className="lg:h-[40rem] h-[15rem]"
          images={project.images}
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
              {project.address}
            </motion.p>
          </motion.div>
        </ImagesSlider>
      </section>
      <section className="mx-auto max-w-7xl my-16">
        <ProjectListing project={project} />
      </section>
    </div>
  );
};

export default Project;
