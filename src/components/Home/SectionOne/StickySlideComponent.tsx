"use client";
import React from "react";
// GSAP Animation Imports Below
import useScrollTriggerAnimation from "@/hooks/useScrollTriggerAnimation";

export default function StickySlideComponent() {
  //  AnimationRef declaration
  const animationRef = useScrollTriggerAnimation();

  return (
    <div>
      {/* Below is boxes parent div and above is the component div  */}
      <div className="parentBox" ref={animationRef}>
        <div className="boxOne">
          {/* SVG Icon here  */}
          <h2 className="text-center">Heading Text</h2>
          <p>Description text</p>
        </div>
        <div className="boxTwo">
          {/* SVG Icon here  */}
          <h2 className="text-center">Heading Text</h2>
          <p>Description text</p>
        </div>
        <div className="boxThree">
          {/* SVG Icon here  */}
          <h2 className="text-center">Heading Text</h2>
          <p>Description text</p>
        </div>
      </div>
    </div>
  );
}
