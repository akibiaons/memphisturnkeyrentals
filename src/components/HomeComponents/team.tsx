"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { AnimatedTooltip } from "../ui/animated-tooltip";

// Define the structure of a team member
interface TeamMember {
  id: number;
  image: string; // The profile picture
  name: string; // The member name
  designation: string; // The member title
}

export function AnimatedTooltipPreview() {
  // State to hold the team members
  const [team, setTeam] = useState<TeamMember[]>([]);

  useEffect(() => {
    async function fetchTeam() {
      try {
        const response = await axios.get(
          "http://glorious-sparkle-1fb7e61245.strapiapp.com/api/teams?populate=*"
        );
        console.log(response.data); // Log the response to check the structure
        const fetchedTeam = response.data.data.map((item: any) => {
          // Safely get img url
          const getImageUrl = (formats: any) => {
            return (
              formats?.medium?.url ||
              formats?.small?.url ||
              "/path/to/default-image.png"
            );
          };
          return {
            id: item.id,
            name: item.attributes.memberTitle || "Unknown", // Use memberTitle as the name
            designation: item.attributes.memberDesc || "Team member", // Use member desc as the desc
            image: getImageUrl(
              item.attributes.profilepic.data.attributes.formats
            ),
          };
        });
        setTeam(fetchedTeam);
      } catch (error) {
        console.error("Failed to fetch team members:", error);
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
