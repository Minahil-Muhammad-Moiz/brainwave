import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <Heading title="Pay once, use forever" />
        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
          <div className="flex justify-center mt-10">
            <a
              className="text-base font-code font-bold tracking-wider hover:border-b uppercase"
              href="/pricing"
            >
              See the full Details
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
