import Hero from "@/components/Home/Hero";
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
      <div></div>
    </div>
  );
}
