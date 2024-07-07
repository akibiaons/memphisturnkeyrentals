"use client"; // Ensure this is at the top

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("jwt");

    console.log("Token from localStorage in useAuth:", token);

    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      router.push("/signin");
    }
  }, [router]);

  console.log("isAuthenticated state in useAuth:", isAuthenticated);

  return { isAuthenticated };
};
