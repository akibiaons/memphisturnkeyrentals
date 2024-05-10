import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/utils/cn";
import PropertyCard from "../PropertyCard";

export const ParallaxScroll = ({
  properties, // Expect an array of property objects instead of just image strings
  className,
}: {
  properties: {
    imageUrl: string;
    imageAlt: string;
    address: string;
    content: string;
    footerText: string;
    tags: string[];
  }[];
  className?: string;
}) => {
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(properties.length / 3);
  const firstPart = properties.slice(0, third);
  const secondPart = properties.slice(third, 2 * third);
  const thirdPart = properties.slice(2 * third);

  return (
    <div
      className={cn("h-[100rem] items-start overflow-y-auto w-full", className)}
      ref={gridRef}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-7xl mx-auto gap-10 py-40 px-4 md:px-8">
        <div className="grid gap-10">
          {firstPart.map((property, idx) => (
            <motion.div style={{ y: translateFirst }} key={"grid-1" + idx}>
              <PropertyCard {...property} />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((property, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <PropertyCard {...property} />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((property, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              <PropertyCard {...property} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
