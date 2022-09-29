import React from "react";
import Button from "../Button";
import Container from "../Container";

const MobileMenu = () => {
  return (
    <Container className="absolute w-full top-[96px] md:hidden">
      <div className="rounded-lg bg-dark-violet py-8 px-6 flex flex-col items-center">
        <ul className="flex flex-col gap-8">
          {["Features", "Pricing", "Resources"].map((el) => (
            <li
              key={el}
              className=" cursor-pointer text-white text-center text-lg font-[700]"
            >
              {el}
            </li>
          ))}
        </ul>
        <div className="h-[1px] w-[100%] bg-gray my-8" />

        <div className="flex flex-col items-center gap-8 w-full">
          <ul>
            <li className="cursor-pointer text-white text-center text-lg font-[700]">
              Login
            </li>
          </ul>
          <Button className="w-[100%] h-[48px]">Sign Up</Button>
        </div>
      </div>
    </Container>
  );
};

export default MobileMenu;
