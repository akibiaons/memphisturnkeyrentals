"use client";

import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import Hero from "./components/hero";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Speech, User } from "lucide-react";

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
    <section>
      <div>
        <Hero />
      </div>
      <div className="my-20">
        <ParallaxScroll properties={properties} />
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="my-16">
          <div className="flex flex-col gap-10 ">
            {/* first section */}
            <div className="flex flex-col text-center my-12">
              <p className="text-black mb-6 font-semibold uppercase text-sm">
                HOW IT WORKS
              </p>
              <h2 className="text-4xl font-semibold text-black mb-2 lg:text-6xl">
                We build and manage, just choose what suits you.
              </h2>
            </div>
            <div className="flex flex-col md:flex-row space-x-8">
              <div className="relative w-full h-[400px]">
                <Image
                  src="https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="just an image"
                  layout="fill"
                  className="rounded-lg"
                />
              </div>

              <div className="flex flex-col space-y-3 my-8">
                <h1 className="font-semibold text-3xl">Hi there</h1>
                <div className="space-y-2 tracking- text-neutral-700">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum natus nostrum odit odio eligendi fuga architecto
                    quidem possimus consequatur quam, est suscipit repellendus
                    qui aspernatur.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum natus nostrum odit odio eligendi fuga architecto
                    quidem possimus consequatur quam, est suscipit repellendus
                    qui aspernatur.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum natus nostrum odit odio eligendi fuga architecto
                    quidem possimus consequatur quam, est suscipit repellendus
                    qui aspernatur.
                  </p>
                </div>
              </div>
            </div>

            {/* second section */}
            <div className="flex flex-col md:flex-row-reverse space-x-8">
              <div className="relative w-full h-[400px]">
                <Image
                  src="https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="just an image"
                  layout="fill"
                  className="rounded-lg"
                />
              </div>

              <div className="flex flex-col space-y-3 my-8">
                <h1 className="font-semibold text-3xl">Hi there</h1>
                <div className="space-y-2 tracking- text-neutral-700">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum natus nostrum odit odio eligendi fuga architecto
                    quidem possimus consequatur quam, est suscipit repellendus
                    qui aspernatur.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum natus nostrum odit odio eligendi fuga architecto
                    quidem possimus consequatur quam, est suscipit repellendus
                    qui aspernatur.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum natus nostrum odit odio eligendi fuga architecto
                    quidem possimus consequatur quam, est suscipit repellendus
                    qui aspernatur.
                  </p>
                </div>
                <div className="">
                  <Button className="mx-auto mr-5 mt-2">Call to Action</Button>
                  <Button className="mx-auto" variant="outline">
                    Call to Action
                  </Button>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
        <div className="my-36">
          <div className="flex flex-col gap-10 ">
            {/* first section */}
            <div className="flex flex-col text-center my-12">
              <p className="text-black mb-6 font-semibold uppercase text-sm">
                GET STARTED
              </p>
              <h2 className="text-4xl font-semibold text-black mb-2 lg:text-6xl">
                Here are some ways to start working with us!
              </h2>
            </div>
            <div className="flex flex-col flex-1 lg:flex-row gap-8 justify-center items-center mx-auto">
              <Card className="min-w-[300px] max-w-[350px] min-h-[250px] flex flex-col justify-between group/bento hover:shadow-xl transition duration-200 shadow-input ">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="group-hover/bento:translate-x-2 transition duration-200">
                    Investor Profile
                  </CardTitle>
                  <User className="h-7 w-7 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm  text-neutral-500">
                    Answer a few short questions to activate a customized
                    dashboard and property recommendations based on your
                    investor profile.
                  </p>
                </CardContent>
                <CardFooter className="">
                  <Button>Create an Investor Profile</Button>
                </CardFooter>
              </Card>
              <Card className="min-w-[300px] max-w-[350px]  min-h-[250px] flex flex-col justify-between group/bento hover:shadow-xl transition duration-200 shadow-input">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="group-hover/bento:translate-x-2 transition duration-200">
                    {" "}
                    Consultation
                  </CardTitle>
                  <Speech className="h-7 w-7 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm  text-neutral-500">
                    Speak with an expert on the subject. Receive a complimentary
                    strategy session or to answer any questions you may have.
                  </p>
                </CardContent>
                <CardFooter className="">
                  <Button>Create an Investor Profile</Button>
                </CardFooter>
              </Card>
              {/* <Card className="min-w-[300px] max-w-[350px] min-h-[250px] flex flex-col justify-between">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="">DIY</CardTitle>
              <Blocks className="h-7 w-7 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-sm  text-neutral-500">
                We give you the building blocks, and you build it out from
                there. We will handle the rest from here.
              </p>
            </CardContent>
            <CardFooter className="">
              <Button>Create an Investor Profile</Button>
            </CardFooter>
          </Card> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
