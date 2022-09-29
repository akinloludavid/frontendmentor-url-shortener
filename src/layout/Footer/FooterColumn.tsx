import React from "react";
import { IFooterColumnProps } from "../../types";

const FooterColumn = ({ header = "", lists = [] }: IFooterColumnProps) => {
  return (
    <div className="flex flex-col">
      <h6 className="text-white text-center md:text-left font-bold text-base mb-4">
        {header}
      </h6>
      {React.Children.toArray(
        lists.map((el) => (
          <p className="text-gray text-center md:text-left cursor-pointer hover:text-cyan text-base mb-2">
            {el.label}
          </p>
        ))
      )}
    </div>
  );
};

export default FooterColumn;
