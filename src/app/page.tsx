import Hero from "@/components/HomeComponents/Hero";
import SectionOne from "@/components/HomeComponents/SectionOne";
import SectionTwo from "@/components/HomeComponents/SectionTwo";
import SectionThree from "@/components/HomeComponents/SectionThree";
import SectionFour from "@/components/HomeComponents/SectionFour";
import ProjectCarousel from "@/components/HomeComponents/carousel/ProjectCarousel";

// Other component import
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero section below  */}
      <div>
        <Hero
          title="Turnkey Rentals in Memphis"
          description="Secure your stakes, Memphis awaits"
          imageUrl="https://res.cloudinary.com/dfgr7tov1/image/upload/v1713393089/biggerHero_vvduaq.jpg"
        />
      </div>
      {/* Section one below */}
      <div className="relative flex flex-col min-h-screen lg:p-32">
        <SectionOne />
      </div>
      {/* End of section one */}
      {/* Start of section two */}
      <div className="relative flex flex-col min-h-screen lg:p-32 bg-[#6A6A6A]">
        <SectionTwo
          name="Daniel Moreno"
          contactInfo="strongerinvestments@mtr.com"
        />
      </div>
      <div className="relative flex flex-col min-h-screen lg:p-32">
        <SectionThree />
      </div>
      <div className="relative flex flex-col min-h-screen lg:p-32 overflow-x-hidden">
        <SectionFour />
        <ProjectCarousel />
      </div>
    </div>
  );
}

// bg-[#6A6A6A] to the left is the og background color
