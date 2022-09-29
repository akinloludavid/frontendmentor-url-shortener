import React from "react";
import { IChildren } from "../../types";

const Container = ({
  children,
  className,
}: IChildren &
  React.DetailedHTMLProps<
    React.AllHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >) => {
  return (
    <div className={`lg:px-32 md:px-16 px-4 ${className}`}>{children}</div>
  );
};

export default Container;
