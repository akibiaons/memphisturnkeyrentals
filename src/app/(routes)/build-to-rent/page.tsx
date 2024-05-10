"use client";

import { ParallaxScroll } from "@/components/ui/parallax-scroll";

const properties = [
  {
    imageUrl:
      "https://res.cloudinary.com/dfgr7tov1/image/upload/v1713393089/biggerHero_vvduaq.jpg",
    imageAlt: "Luxury urban apartment exterior",
    address: "1234 Main St, Apartment 101, Big City, State 12345",
    content:
      "This modern apartment features 2 bedrooms, 2 bathrooms, a fully equipped kitchen, and a spacious living room with a great view of the downtown skyline.",
    footerText: "Available from June 1st, 2024 - Contact us for more details!",
    tags: ["New Listing", "City View", "Pet Friendly"], // Array of strings for tags
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Luxury urban apartment exterior",
    address: "1234 Main St, Apartment 101, Big City, State 12345",
    content:
      "This modern apartment features 2 bedrooms, 2 bathrooms, a fully equipped kitchen, and a spacious living room with a great view of the downtown skyline.",
    footerText: "Available from June 1st, 2024 - Contact us for more details!",
    tags: ["New Listing", "City View", "Pet Friendly"], // Array of strings for tags
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Luxury urban apartment exterior",
    address: "1234 Main St, Apartment 101, Big City, State 12345",
    content:
      "This modern apartment features 2 bedrooms, 2 bathrooms, a fully equipped kitchen, and a spacious living room with a great view of the downtown skyline.",
    footerText: "Available from June 1st, 2024 - Contact us for more details!",
    tags: ["New Listing", "City View", "Pet Friendly"], // Array of strings for tags
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Luxury urban apartment exterior",
    address: "1234 Main St, Apartment 101, Big City, State 12345",
    content:
      "This modern apartment features 2 bedrooms, 2 bathrooms, a fully equipped kitchen, and a spacious living room with a great view of the downtown skyline.",
    footerText: "Available from June 1st, 2024 - Contact us for more details!",
    tags: ["New Listing", "City View", "Pet Friendly"], // Array of strings for tags
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dfgr7tov1/image/upload/v1713393089/biggerHero_vvduaq.jpg",
    imageAlt: "Luxury urban apartment exterior",
    address: "1234 Main St, Apartment 101, Big City, State 12345",
    content:
      "This modern apartment features 2 bedrooms, 2 bathrooms, a fully equipped kitchen, and a spacious living room with a great view of the downtown skyline.",
    footerText: "Available from June 1st, 2024 - Contact us for more details!",
    tags: ["New Listing", "City View", "Pet Friendly"], // Array of strings for tags
  },
];

export default function Page() {
  return (
    <div>
      <h1>Build to Rent Page</h1>
      <ParallaxScroll properties={properties} />
    </div>
  );
}
