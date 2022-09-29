import React from "react";
import { Logo, LogoWhite } from "../../assets";

const ShortlyLogo = ({ white = false }) => {
  return white ? (
    <img src={LogoWhite} className="h-8 min-w[120px]" />
  ) : (
    <img src={Logo} className="min-w-[120px]" />
  );
};

export default ShortlyLogo;
