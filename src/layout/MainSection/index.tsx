import { ChangeEvent, useState } from "react";
import Card from "../../components/Card";
import Container from "../../components/Container";
import { useFetch } from "../../utils/customHooks";
import { baseUrl, cardDetails } from "../../utils/data";
import { isValidUrl } from "../../utils/helpers";
import ShortenSection from "../ShortenSection";

const MainSection = () => {
  return (
    <div className="bg-light py-24 mt-24">
      <Container>
        <ShortenSection />
        <div className="text-center mb-8 mt-[112px]">
          <h3 className="font-extrabold text-[28px] md:text-4xl tracking-tight mb-6">
            Advanced Statistics
          </h3>
          <p className="text-gray font-medium text-lg w-[100%] md:w-[50%] mx-auto">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 pb-12 justify-between relative mt-[80px] md:mt-[120px]">
          <div className="bg-cyan block md:flex h-[80%] left-[49%] md:left-[0%] top-[10%] md:h-[10px] w-[10px] md:w-full absolute md:top-[50%]" />
          <div className={`mx-auto lg:mx-[0px] mt-[80px]  md:mt-[0px] `}>
            <Card {...cardDetails[0]} />
          </div>
          <div className={`mx-auto lg:mx-[0px] mt-[80px]  md:mt-[40px] `}>
            <Card {...cardDetails[1]} />
          </div>
          <div className={`mx-auto lg:mx-[0px] mt-[80px]  md:mt-[80px] `}>
            <Card {...cardDetails[2]} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MainSection;
