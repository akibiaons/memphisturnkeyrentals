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

  // Function to fetch team members
  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/teams?populate=*"
        );
        const fetchedTeam = response.data.data.map((item: any) => ({
          id: item.id,
          name: item.attributes.about.split(":")[1].trim(),
          image: item.attributes.profilepic.data
            ? `http://localhost:1337${item.attributes.profilepic.data.attributes.formats.medium.url}`
            : "https://via.placeholder.com/150", // Provide a default image if none is available
          designation: "Team Member", // Assuming a generic designation
        }));
        setTeam(fetchedTeam);
      } catch (error) {
        console.error("Failed to fetch team:", error);
      }
    };

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
