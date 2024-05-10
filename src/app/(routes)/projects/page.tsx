"use client";

import React from "react";
import Hero from "./components/hero";
import ProjectGrid from "./components/project-grid";
import { PropertyCardProperty } from "./components/project-card";

const properties: PropertyCardProperty[] = [
  {
    imageUrl:
      "https://res.cloudinary.com/dfgr7tov1/image/upload/v1713393089/biggerHero_vvduaq.jpg",
    imageAlt: "Luxury urban apartment exterior",
    address: "1234 Main St, Apartment 101, Big City, State 12345",
    content:
      "This modern apartment features 2 bedrooms, 2 bathrooms, a fully equipped kitchen, and a spacious living room with a great view of the downtown skyline.",
    footerText: "Available from June 1st, 2024 - Contact us for more details!",
    tags: [
      { text: "New Listing", className: "bg-green-500" },
      { text: "City View", className: "bg-blue-500" },
      { text: "Pet Friendly", className: "bg-purple-500" },
    ],
    price: 250000,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Luxury urban apartment exterior",
    address: "1234 Main St, Apartment 101, Big City, State 12345",
    content:
      "This modern apartment features 2 bedrooms, 2 bathrooms, a fully equipped kitchen, and a spacious living room with a great view of the downtown skyline.",
    footerText: "Available from June 1st, 2024 - Contact us for more details!",
    tags: [
      { text: "New Listing", className: "bg-green-500" },
      { text: "City View", className: "bg-blue-500" },
      { text: "Pet Friendly", className: "bg-purple-500" },
    ],
    price: 130000,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Luxury urban apartment exterior",
    address: "1234 Main St, Apartment 101, Big City, State 12345",
    content:
      "This modern apartment features 2 bedrooms, 2 bathrooms, a fully equipped kitchen, and a spacious living room with a great view of the downtown skyline.",
    footerText: "Available from June 1st, 2024 - Contact us for more details!",
    tags: [
      { text: "New Listing", className: "bg-green-500" },
      { text: "City View", className: "bg-blue-500" },
      { text: "Pet Friendly", className: "bg-purple-500" },
    ],
    price: 210000,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Luxury urban apartment exterior",
    address: "1234 Main St, Apartment 101, Big City, State 12345",
    content:
      "This modern apartment features 2 bedrooms, 2 bathrooms, a fully equipped kitchen, and a spacious living room with a great view of the downtown skyline.",
    footerText: "Available from June 1st, 2024 - Contact us for more details!",
    tags: [
      { text: "New Listing", className: "bg-green-500" },
      { text: "City View", className: "bg-blue-500" },
      { text: "Pet Friendly", className: "bg-purple-500" },
    ],
    price: 230000,
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dfgr7tov1/image/upload/v1713393089/biggerHero_vvduaq.jpg",
    imageAlt: "Luxury urban apartment exterior",
    address: "1234 Main St, Apartment 101, Big City, State 12345",
    content:
      "This modern apartment features 2 bedrooms, 2 bathrooms, a fully equipped kitchen, and a spacious living room with a great view of the downtown skyline.",
    footerText: "Available from June 1st, 2024 - Contact us for more details!",
    tags: [
      { text: "New Listing", className: "bg-green-500" },
      { text: "City View", className: "bg-blue-500" },
      { text: "Pet Friendly", className: "bg-purple-500" },
    ],
    price: 150000,
  },
];

export default function projects() {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div>
        <div>
          <div className="flex flex-col md:grid grid-cols-2 lg:grid-cols-3"></div>
          <div>
            <ProjectGrid properties={properties} />
          </div>
        </div>
      </div>
    </div>
  );
}
