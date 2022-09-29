import React from "react";
import { WorkMode } from "../../assets";
import Button from "../../components/Button";

const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse lg:pl-32 w-[100%] md:pl-16 lg:flex-row items-center gap-4">
      <div className="lg:w-1/2 w-[100%] mb-12 flex flex-col justify-center">
        <h1 className="font-[900] lg:text-6xl md:text-5xl text-[42px] mx-auto text-center lg:text-left lg:mx-[0px] w-[90%] font-black md:leading-[4rem] lg:leading-[6rem] mb-4">
          More than just shorter links
        </h1>
        <p className="text-gray md:text-lg text-lg text-center lg:text-left lg:mx-[0px] w-[90%] mx-auto lg:w-4/5 w-[100%] tracking-wider">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <Button className="px-6 mt-6 font-bold mx-auto lg:mx-[0px] text-base h-[48px] w-[180px]">
          Get Started
        </Button>
      </div>
      <div className="mb-12 pl-4 mt-8 lg:w-1/2">
        <img src={WorkMode} width="100%" />
      </div>
    </div>
  );
};

export default HeroSection;
