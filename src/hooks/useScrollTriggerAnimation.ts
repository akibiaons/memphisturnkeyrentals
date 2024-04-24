"use client";
import { useEffect, useRef } from "react";

// Animation shit
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useScrollTriggerAnimation = () => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (element) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: element,
            start: "top center",
            end: "bottom center",
            scrub: true,
            markers: true,
            // other scrolltrigger options...
          },
        })
        .fromTo(
          element,
          { y: 100, opacity: 2 },
          { y: 0, opacity: 1, duration: 5 }
        );
    }
  }, []);

  return ref;
};

export default useScrollTriggerAnimation;
