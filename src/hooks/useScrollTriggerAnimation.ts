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
            scrub: false,
            markers: false,
            // other scrolltrigger options...
          },
        })
        .fromTo(
          element,
          { y: 20, opacity: 0.7 },
          { y: 0, opacity: 1, duration: 2 }
        );
    }
  }, []);

  return ref;
};

export default useScrollTriggerAnimation;
