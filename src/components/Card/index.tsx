import React from "react";
import { ICardProps } from "../../types";

const Card = ({ title, details, img }: ICardProps) => {
  return (
    <div className="flex-col relative bg-white p-6 pb-12 w-[100%] rounded max-w-[360px] ">
      <div className="absolute top-[-60px] left-[36%] sm:left-[130px] md:left-[24px] rounded-full bg-dark-violet w-[100px] h-[100px]  flex items-center justify-center">
        <img src={img} />
      </div>
      <h3 className="font-bold text-lg mb-8 mt-[40px] text-center md:text-left">
        {title}
      </h3>
      <p className="font-medium text-base text-gray md:text-left text-center">
        {details}
      </p>
    </div>
  );
};

export default Card;
