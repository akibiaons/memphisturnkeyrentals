// ShadCn component
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function ProjectCarousel() {
  return (
    <Carousel className="w-[100%] mx-auto">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

// OG carousel custom made
// "use client";
// // components/ProjectCarousel.tsx
// import React from "react";
// import Slider from "react-slick";
// import Image from "next/image";

// type ProjectCardProps = {
//   imageSrc: string;
//   address: string;
// };

// const ProjectCard: React.FC<ProjectCardProps> = ({ imageSrc, address }) => (
//   <div className="relative group">
//     <Image
//       src={
//         "https://res.cloudinary.com/dfgr7tov1/image/upload/v1714246022/Screenshot_2024-04-27_at_12.26.56_PM_sdpx6h.png"
//       }
//       alt="Property"
//       className="w-full h-auto rounded-lg"
//       width={200}
//       height={200}
//     />
//     <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm hidden group-hover:block">
//       {address}
//     </div>
//   </div>
// );

// const ProjectCarousel: React.FC = () => {
//   //
//   const NextArrow = (props: any) => {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={`${className} custom-arrow custom-next-arrow`}
//         style={{ ...style, display: "block", background: "black" }}
//         onClick={onClick}
//       />
//     );
//   };

//   const PrevArrow = (props: any) => {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={`${className} custom-arrow custom-prev-arrow`}
//         style={{ ...style, display: "block", background: "black" }}
//         onClick={onClick}
//       />
//     );
//   };

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: { slidesToShow: 1 },
//       },
//     ],
//   };

//   return (
//     <div className="flex flex-col text-center mt-6">
//       <Slider {...settings}>
//         {/* Placeholder data for the carousel */}
//         <ProjectCard
//           imageSrc="/path/to/your/image.jpg"
//           address="123 Main St, Memphis"
//         />
//         <ProjectCard
//           imageSrc="/path/to/your/image.jpg"
//           address="456 Elm St, Memphis"
//         />
//         <ProjectCard
//           imageSrc="/path/to/your/image.jpg"
//           address="789 Oak St, Memphis"
//         />
//         {/* Add more cards as needed */}
//       </Slider>
//     </div>
//   );
// };

// export default ProjectCarousel;
