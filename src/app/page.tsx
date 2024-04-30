import Hero from "@/components/HomeComponents/Hero";
import SectionOne from "@/components/HomeComponents/SectionOne";
import SectionTwo from "@/components/HomeComponents/SectionTwo";
import SectionThree from "@/components/HomeComponents/SectionThree";
import SectionFour from "@/components/HomeComponents/SectionFour";

// Other component import
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div>
      {/* Hero section below  */}
      <div>
        <Hero imageUrl="https://res.cloudinary.com/dfgr7tov1/image/upload/v1713393089/biggerHero_vvduaq.jpg" />
      </div>
      {/* Section one below */}
      <div className="max-w-7xl mx-auto max-h-screen">
        <div className="relative flex flex-col my-16 lg:px-8  ">
          <SectionOne />
          <Separator />
        </div>
        {/* End of section one */}
        <div className="relative flex flex-col my-16  px-4">
          <SectionThree />
        </div>

        {/* Start of section two */}
        <div className="relative flex flex-col my-16 px-4">
          <SectionTwo />
        </div>
        <div className="relative flex flex-col my-16 px-4 ">
          <SectionFour />
        </div>
      </div>
    </div>
  );
}

// bg-[#6A6A6A] to the left is the og background color
