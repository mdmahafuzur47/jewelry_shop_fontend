import React, { useState } from "react";
import "../../NavBar/navCss.css";

import { FaChevronDown, FaDollarSign, FaEuroSign, FaSearch } from "react-icons/fa";
import bdImg from "../../../assets/flag/bd.jpg";
import usImg from "../../../assets/flag/us.png";
import logo from "../../../assets/logo/logo.webp";

const HeadPart = () => {
  const [isHoveredCurrency, setIsHoveredCurrency] = useState(false);
  const [isHoveredLang, setIsHoveredLang] = useState(false);
  const [isHoveredAccount, setIsHoveredAccount] = useState(false);
  const handleMouseEnter = () => {
    setIsHoveredCurrency(true);
  };
  const handleMouseLeft = () => {
    setIsHoveredCurrency(false);
  };
  const handleMouseEnterA = () => {
    setIsHoveredAccount(true);
  };
  const handleMouseLeftA = () => {
    setIsHoveredAccount(false);
  };
  const handleMouseEnterL = () => {
    setIsHoveredLang(true);
  };
  const handleMouseLeftL = () => {
    setIsHoveredLang(false);
  };
  return (
    <>
      <div className="text-[#595959] coustom-border">
        <div className="mycontainer flex justify-between items-center">
          <p className="py-2">Telephone Enquiry: (+123) 123 321 345</p>
          <div className="flex divide-x cursor-pointer">
            <div
              className={`py-2 px-[17px] relative ${
                isHoveredCurrency ? "text-[#CDA557]" : ""
              } flex items-center gap-1`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeft}
            >
              <p>Currency</p>
              <FaChevronDown className="-mb-1" />
              {isHoveredCurrency && (
                <div className="absolute top-10 divide-y border py-2 px-1 w-[100px] text-sm text-[#595959] ">
                  <div className="my-1 flex items-center hover:text-[#CDA557]">
                    <FaEuroSign />
                    <p>EUR</p>
                  </div>
                  <div className="my-1 flex items-center hover:text-[#CDA557]">
                    <FaDollarSign />
                    <p>Us Dollar</p>
                  </div>
                </div>
              )}
            </div>
            <div
              className={`py-2 px-[17px] relative ${
                isHoveredLang ? "text-[#B76E79]" : ""
              } flex items-center gap-1`}
              onMouseEnter={handleMouseEnterL}
              onMouseLeave={handleMouseLeftL}
            >
              <p>Language</p>
              <FaChevronDown className="-mb-1" />
              {isHoveredLang && (
                <div className="absolute top-10 divide-y border py-2 px-1 w-[100px] text-sm text-[#595959] ">
                  <div className="my-1 flex items-center hover:text-[#CDA557] gap-3">
                    <img className="w-5 h-4" src={usImg} alt="us flag" />
                    <p>English</p>
                  </div>
                  <div className="my-1 flex items-center hover:text-[#CDA557] gap-3">
                    <img className="w-5 h-4" src={bdImg} alt="bd flag" />
                    <p>Bangla</p>
                  </div>
                </div>
              )}
            </div>
            <div
              className={`py-2 px-[17px] relative ${
                isHoveredAccount ? "text-[#B76E79]" : ""
              } flex items-center gap-1`}
              onMouseEnter={handleMouseEnterA}
              onMouseLeave={handleMouseLeftA}
            >
              <p>My Account</p>
              <FaChevronDown className="-mb-1" />
              {isHoveredAccount && (
                <div className="absolute top-10 divide-y border py-2 px-1 w-[120px] text-sm text-[#595959] ">
                  <div className="my-1 flex items-center hover:text-[#CDA557]">
                    <p>Register</p>
                  </div>
                  <div className="my-1 flex items-center hover:text-[#CDA557]">
                    <p>Login</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mycontainer py-6 flex items-center justify-between">
        <img className="w-44" src={logo} alt="logo" />
        <div className="border flex w-[600px] gap-3 rounded-lg">
          <div className="px-4 py-3">
            <p>All</p>
          </div>
          <input className="w-full py-3 outline-none" placeholder="Enter your search key ..." type="text" />
          <button className="bg-[#CDA557] px-4 py-3 rounded-lg">
          <FaSearch className="text-white text-xl" />
          </button>
        </div>
      </div>
    </>
  );
};

export default HeadPart;
