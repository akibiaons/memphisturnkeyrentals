import { cn } from "@/utils/cn";
import React from "react";

import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export function BentoTwoGridHome() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const items = [
  {
    header: (
      <DirectionAwareHover imageUrl="https://res.cloudinary.com/dfgr7tov1/image/upload/v1714246022/Screenshot_2024-04-27_at_12.26.56_PM_sdpx6h.png">
        <div className=" bg-opacity-50 flex justify-center items-center"></div>
      </DirectionAwareHover>
    ),
    title: "wow",
    className: "md:col-span-2",
    description: "123 Main St, Memphis",
    icon: "",
  },
  {
    imageSrc:
      "https://res.cloudinary.com/dfgr7tov1/image/upload/v1714246022/Screenshot_2024-04-27_at_12.26.56_PM_sdpx6h.png",
    description: "456 Elm St, Memphis",
    header: (
      <DirectionAwareHover imageUrl="https://res.cloudinary.com/dfgr7tov1/image/upload/v1714246022/Screenshot_2024-04-27_at_12.26.56_PM_sdpx6h.png">
        <div className=" bg-opacity-50 flex justify-center items-center"></div>
      </DirectionAwareHover>
    ),
    title: "wow",
    className: "md:col-span-1",
    icon: "",
  },
  {
    description: "789 Oak St, Memphis",
    header: (
      <DirectionAwareHover imageUrl="https://res.cloudinary.com/dfgr7tov1/image/upload/v1714246022/Screenshot_2024-04-27_at_12.26.56_PM_sdpx6h.png">
        <div className=" bg-opacity-50 flex justify-center items-center"></div>
      </DirectionAwareHover>
    ),
    title: "wow",
    className: "md:col-span-1",
    icon: "",
  },
  {
    description: "789 Oak St, Memphis",
    header: (
      <DirectionAwareHover imageUrl="https://res.cloudinary.com/dfgr7tov1/image/upload/v1714246022/Screenshot_2024-04-27_at_12.26.56_PM_sdpx6h.png">
        <div className=" bg-opacity-50 flex justify-center items-center"></div>
      </DirectionAwareHover>
    ),
    title: "wow",
    className: "md:col-span-2",
    icon: "",
  },
];
