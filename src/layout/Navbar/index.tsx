import React, { useState } from "react";
import { Logo } from "../../assets";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Harmbuger from "../../components/Harmburger";
import ShortlyLogo from "../../components/Logo";
import MobileMenu from "../../components/MobileMenu";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-[100%]">
      {showMenu && <MobileMenu />}
      <Container>
        <div className="py-8 md:py-12 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <ShortlyLogo />
            <ul className="items-center gap-8 hidden md:flex">
              {["Features", "Pricing", "Resources"].map((item) => (
                <li
                  className="cursor-pointer text-gray-violet hover:text-black font-medium"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Harmbuger onClick={() => setShowMenu((prev) => !prev)} />
          <div className="hidden items-center gap-8 md:flex">
            <ul>
              <li className="cursor-pointer text-gray-violet hover:text-black font-medium">
                Login
              </li>
            </ul>
            <Button className="px-8 py-3 font-bold text-base h-[48px]">
              Sign up
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
