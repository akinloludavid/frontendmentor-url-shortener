import React from "react";

type ButtonProps = {
  className?: string;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
const Button = ({ children, className = "", ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={`rounded-full bg-cyan py-2 px-4 font-bold text-white text-sm ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
