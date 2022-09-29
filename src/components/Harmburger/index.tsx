import React from "react";

const Harmbuger = ({ onClick }: { onClick: (e: any) => void }) => {
  return (
    <div className="flex flex-col justify-center gap-[7px]" onClick={onClick}>
      {[...Array(3).keys()].map((el) => (
        <div key={el} className="w-[30px] h-[3px] bg-gray  md:hidden" />
      ))}
    </div>
  );
};

export default Harmbuger;
