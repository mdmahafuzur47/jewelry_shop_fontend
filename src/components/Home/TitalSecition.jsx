import React from "react";
import { Link } from "react-router-dom";

const TitalSecition = ({}) => {
  return (
    <div className="ms-20 flex flex-col gap-2">
      <h5 className="text-xl">
        <span className="text-[#CDA557]">Black Friday</span> This Week
      </h5>
      <h2 className="text-5xl font-semibold">Work Desk</h2>
      <h3 className="text-3xl font-semibold">Surface Studio 2022</h3>
      <h4 className="text-[18px] my-3">
        Starting at{" "}
        <span className="ml-1 text-2xl text-[#CDA557]">£1599.00</span>
      </h4>
      <div className="bg-[#CDA557] w-fit text-white text-xl font-semibold px-7 py-3 rounded-md hover:bg-[#cda657e1] ">
        <Link>Shopping Now</Link>
      </div>
    </div>
  );
};

export default TitalSecition;
