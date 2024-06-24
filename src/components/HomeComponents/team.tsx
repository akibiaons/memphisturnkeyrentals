"use client";
import React, { useState, useEffect } from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { fetchMembers } from "../../data/fetchTeam";

interface TeamMember {
  id: number;
  profile: string;
  name: string;
  title: string;
}

export function AnimatedTooltipPreview() {
  const [team, setTeam] = useState<TeamMember[]>([]);

  useEffect(() => {
    const getTeams = async () => {
      const members = await fetchMembers();
      setTeam(members);
    };
    getTeams();
  }, []);

  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      {team.length > 0 ? <AnimatedTooltip items={team} /> : <p>Loading...</p>}
    </div>
  );
}
