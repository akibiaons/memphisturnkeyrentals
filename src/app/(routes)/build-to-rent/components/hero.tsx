import { Button } from "@/components/ui/button";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div>
      <div className=" h-[600px] lg:h-[742px] w-full overflow-hidden ">
        <div className="hero-bg mx-auto   h-screen object-fit">
          <div className=" bg-black bg-opacity-50"></div>
          <HeroHighlight>
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className=" px-4 font-bold text-white max-w-4xl  text-center mx-auto
             "
            >
              <div className="text-4xl md:text-6xl lg:text-6xl mb-4">
                Properties built to rent
              </div>

              <Highlight className="text-neutral-50 text-2xl md:text-3xl">
                Find your cashflow generator here
              </Highlight>
            </motion.h1>
          </HeroHighlight>
        </div>
      </div>
    </div>
  );
};
export default Hero;
