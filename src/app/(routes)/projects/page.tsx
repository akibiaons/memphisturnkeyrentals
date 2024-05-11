"use client";

import React from "react";
import Hero from "./components/hero";
import ProjectGrid from "./components/project-grid";
import { PropertyCardProperty } from "./components/project-card";
import { Separator } from "@/components/ui/separator";

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
      { text: "New Listing", className: "bg-blue-500" },
      { text: "City View", className: "bg-indigo-500" },
      { text: "Pet Friendly", className: "bg-gray-500" },
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
      { text: "New Listing", className: "bg-amber-500" },
      { text: "City View", className: "bg-red-500" },
      { text: "Pet Friendly", className: "bg-orange-500" },
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
      { text: "City View", className: "bg-red-500" },
      { text: "Pet Friendly", className: "bg-yellow-500" },
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
      { text: "New Listing", className: "bg-lime-500" },
      { text: "City View", className: "bg-stone-500" },
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
      <div className="flex flex-col">
        <div className=" max-w-7xl mx-auto ">
          <div className="my-20 px-3 sm:px-6 md:px-8  lg:px-4">
            <h2 className="text-2xl font-semibold mb-8 ">
              Memphis Houses for sale
            </h2>
            <div className="px-1">
              <ProjectGrid properties={properties} />
            </div>
            <div className="my-5 text-lg text-blue-300 cursor-pointer font-normal hover:underline ">
              <p>See all 34 houses for sale</p>
            </div>
          </div>
        </div>
        <Separator />
        <div className=" max-w-7xl mx-auto ">
          <div className="my-20 px-3 sm:px-6 md:px-8 lg:px-4">
            <h2 className="text-2xl font-semibold mb-8 ">
              Downtown condos for rent
            </h2>
            <div className="px-1">
              <ProjectGrid properties={properties} />
            </div>
            <div className="my-5 text-lg text-blue-300 cursor-pointer font-normal hover:underline ">
              <p>See all 992 properties for rent</p>
            </div>
          </div>
        </div>
        <Separator />
        <div className=" max-w-7xl mx-auto ">
          <div className="my-20 px-3 sm:px-6 md:px-8 lg:px-4">
            <h2 className="text-2xl font-semibold mb-8 ">
              Chiraq Houses for rent
            </h2>
            <div className="px-1">
              <ProjectGrid properties={properties} />
            </div>
            <div className="my-5 text-lg text-blue-300 cursor-pointer font-normal hover:underline ">
              <p>See all 12 houses for rent</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
