"use client";
import { CardStack } from "../ui/card-stack";
import { cn } from "@/utils/cn";

export function CardStackDemo() {
  return (
    <div className="mt-8 flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-[#8A9CD0] text-[#2b3c6d] dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Manu Arora",
    designation: "First Time investor",
    content: (
      <p>
        I could not believe it,{" "}
        <Highlight>I made my first passive income</Highlight> with Turnkey
        Memphis, I thought owning property would cost me.
      </p>
    ),
  },
  {
    id: 1,
    name: "Arthur Fernandez",
    designation: "Property Management",
    content: (
      <p>
        Not common for us to purchase through another bussiness,{" "}
        <Highlight>but Turnkey Memphis made it easy</Highlight> and saved us
        time and money. With their team of professionals{" "}
        <Highlight>collectively we have saved 30% of net income</Highlight>{" "}
        nationwide.
      </p>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Small Business Owner",
    content: (
      <p>
        Typically I would not have put money into property,
        <Highlight>but with Turnkey</Highlight>, they managed to convince me and
        show proof that money could be made, and made me
        <Highlight>20K in the first quarter.</Highlight> Thats far greater than
        what my coffee shop makes in the quarter! club.
      </p>
    ),
  },
];
