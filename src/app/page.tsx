import Hero from "@/components/Home/Hero";
import SectionOne from "@/components/Home/SectionOne";
import SectionThree from "@/components/Home/SectionThree";
import SectionTwo from "@/components/Home/SectionTwo";
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
      <div className="relative bg-[#6A6A6A] flex flex-col min-h-screen lg:p-32">
        <SectionOne />
      </div>
      {/* End of section one */}
      {/* Start of section two */}
      <div className="relative bg-[#6A6A6A] flex flex-col min-h-screen lg:p-32">
        <SectionTwo
          name="Daniel Moreno"
          contactInfo="strongerinvestments@mtr.com"
        />
      </div>
      <div className="relative bg-[#6A6A6A] flex flex-col min-h-screen lg:p-32">
        <SectionThree />
      </div>
    </div>
  );
}
