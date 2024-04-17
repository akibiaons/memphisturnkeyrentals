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
      <div className="relative bg-[#6A6A6A] flex flex-col min-h-screen lg:p-32">
        <div className="flex flex-col text-center mt-10">
          <p className="text-white mb-6 font-semibold uppercase text-sm">
            For Investors
          </p>
          <h2 className="text-4xl font-semibold text-white mb-6 lg:text-6xl">
            How we make you money
          </h2>
          <p className="text-white mb-4 text-sm w-[95%] mx-auto">
            Our turnkey business model allows you to grow your long term real
            estate rental portfolio in the #1 rated cashflowing market in
            America
          </p>
        </div>
        <div className="mx-auto w-[90%] pb-6 mt-20 lg:grid lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            {/* <TechnicalCard />
            <TechnicalCardTwo />
            <TechnicalCardThree /> */}
          </div>
          <div className="w-full">
            {/* <img
              className=""
              src="https://res.cloudinary.com/dfgr7tov1/image/upload/v1710528445/dataism-24_y9ufhd.svg"
              alt="background"
            /> */}
          </div>
        </div>
      </div>
      {/* End of section one */}
    </div>
  );
}
