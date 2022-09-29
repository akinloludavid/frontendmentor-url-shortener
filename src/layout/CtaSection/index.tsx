import React from "react";
import Button from "../../components/Button";
import { CtaBgimage } from "../../assets";
const CtaSection = () => {
  return (
    <div
      className={`flex flex-col items-center py-12 gap-6 bg-dark-violet bg-no-repeat bg-[url('/src/assets/bg-boost-desktop.svg')]`}
    >
      <h3 className="font-bold text-[28px] md:text-3xl mx-auto text-center text-white">
        Boost your links today
      </h3>
      <Button className="px-8 py-3 font-bold text-base h-[48px] w-[180px] mb-6">
        Get Started
      </Button>
    </div>
  );
};

export default CtaSection;
