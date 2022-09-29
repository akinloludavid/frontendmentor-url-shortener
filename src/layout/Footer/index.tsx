import React from "react";
import { Logo } from "../../assets";
import Container from "../../components/Container";
import {
  FbIcon,
  IgIcon,
  PinterestIcon,
  TwitterIcon,
} from "../../components/Icons";
import ShortlyLogo from "../../components/Logo";
import FooterColumn from "./FooterColumn";

const Footer = () => {
  const lists1 = [
    { label: "Link Shortening" },
    { label: "Branded Links" },
    { label: "Analytics" },
  ];
  const lists2 = [
    { label: "Blog" },
    { label: "Developers" },
    { label: "Support" },
  ];
  const lists3 = [
    { label: "About" },
    { label: "Our Team" },
    { label: "Careers" },
    { label: "Contact" },
  ];
  return (
    <div className="bg-very-dark-violet py-12">
      <Container>
        <div className="flex flex-col md:flex-col md:gap-6 md:justify-between lg:flex-row ">
          <div className="mx-auto md:mx-[0px]">
            <ShortlyLogo white />
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-24 mt-24 md:mt-[0px]">
            <FooterColumn header="Features" lists={lists1} />
            <FooterColumn header="Resources" lists={lists2} />
            <FooterColumn header="Company" lists={lists3} />
            <div className="flex gap-6 mt-2 md:mt-[0pxx] justify-center md:justify-start">
              <FbIcon />
              <TwitterIcon />
              <PinterestIcon />
              <IgIcon />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
