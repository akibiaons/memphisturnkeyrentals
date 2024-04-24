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
      <div className="parentBox mt-[-2rem]" ref={animationRef}>
        <div className="boxOne">
          {/* SVG Icon here  */}
          <h2 className="text-center font-bold text-xl mb-6 mt-4">
            Inspected Property
          </h2>
          <p className="text-center text-sm font-extralight mx-4 mb-4">
            We use a third party inspector of your choice to certify the overall
            property structure, condition, and quality of material to make sure
            there are no quick suprises, so you can rent them out ASAP.
          </p>
        </div>
        <div className="boxTwo">
          {/* SVG Icon here  */}
          <h2 className="text-center font-bold text-xl mb-6 mt-4">
            Build to Rent Value
          </h2>
          <p className="text-center text-sm font-extralight mx-4 mb-4">
            Take advantage of our new home sales average of $360,827! Our homes
            built to rent are at a value of $149,928
          </p>
        </div>
        <div className="boxThree">
          {/* SVG Icon here  */}
          <h2 className="text-center font-bold text-xl mb-6 mt-4">
            Stable Income
          </h2>
          <p className="text-center text-sm font-extralight mx-4 mb-4">
            We offer everything under one roof for you to leverage when creating
            cashflow, from our in house property management, keeping your
            property at 98% occupied year round!
          </p>
        </div>
      </div>
    </div>
  );
}
