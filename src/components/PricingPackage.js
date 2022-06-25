import React from "react";
import { IconSpring } from "./../utils/MyIcons";
import PricingCard from './elements/PricingCard';
export default function PricingPackage() {
  return (
    <>
      <div className="container mx-auto bg-white">
        <div className="flex flex-col items-center mt-24">
          <div className="font-overclock font-bold fs-36 lh-46">
            Pricing Package Choose Your Plan
          </div>
          <div className="mt-2">
            <IconSpring />
          </div>
          <div className="fs-18 lh-32 mt-6 max-w-xl text-center color-font-light">
            We believe that great design should not be out of reach, so our
            services are less than half the price of a full-time designer.
          </div>
        </div>
        <div className="flex items-center justify-center mt-8">
          <button className="fs-18 lh-24 bg-soft-blue border-radius-7 height-48 width-135 mx-3">
            Monthly
          </button>
          <button className="fs-18 lh-24 bg-hard-blue color-white border-radius-7 height-48 width-135 mx-3">
            Yearly
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-24">
            <PricingCard color="soft"/>
            <PricingCard color="hard"/>
            <PricingCard color="soft"/>
        </div>
      </div>
    </>
  );
}
