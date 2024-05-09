"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { AnimatedTooltip } from "../ui/animated-tooltip";

// Define the structure of a team member
interface TeamMember {
  id: number;
  name: string;
  designation: string;
  image: string;
}

export function AnimatedTooltipPreview() {
  // State to hold the team members
  const [team, setTeam] = useState<TeamMember[]>([]);

  useEffect(() => {
    async function fetchTeam() {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/teams?populate=*"
        );
        console.log(response.data); // Log the response to check the structure
        const fetchedTeam = response.data.data.map((item: any) => {
          // Add checks to ensure data exists
          const aboutText = item.attributes.about || "";
          const namePart = aboutText.split(":")[1]; // Check if splitting is safe
          const image = item.attributes.profilepic.data
            ? `http://localhost:1337${item.attributes.profilepic.data.attributes.formats.medium.url}`
            : "/path/to/default-image.png"; // Fallback for missing images

          return {
            id: item.id,
            name: namePart ? namePart.trim() : "Unknown", // Fallback for missing name
            designation: "Team Member",
            image,
          };
        });
        setTeam(fetchedTeam);
      } catch (error) {
        console.error("Failed to fetch team:", error);
      }
    }

    fetchTeam();
  }, []);

  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      {team.length > 0 ? (
        <AnimatedTooltip items={team} />
      ) : (
        <p>Loading...</p> // Display a loading message or spinner here
      )}
    </div>
  );
}
