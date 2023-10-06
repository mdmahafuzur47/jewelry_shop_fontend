import React from "react";
import { FaChevronDown, FaListAlt } from "react-icons/fa";
import "./homeCss.css";
import TitalSecition from "./TitalSecition";

const HeroSection = () => {
  return (
    <section className="max-w-[1400px] mx-auto my-7 grid grid-cols-10 gap-6">
      <section className="border col-span-2 rounded-lg">
        <div className="bg-[#CDA557] text-white flex items-center gap-2 p-3 rounded-sm">
          <FaListAlt />
          <h3 className="font-semibold">SHOP BY CATEGORIES</h3>
        </div>
        <div className="p-3 text-[#222] flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <p>Hand Harness</p>
            <FaChevronDown />
          </div>
          <div className="flex items-center justify-between">
            <p>Maang Tika</p>
            <FaChevronDown />
          </div>
          <div className="flex items-center justify-between">
            <p>Toe Rings</p>
            <FaChevronDown />
          </div>
          <div className="flex items-center justify-between">
            <p>Traditional Earrings</p>
            <FaChevronDown />
          </div>
          <p>Kada Cum Bracelet</p>
          <p>Exquisite Rings</p>
          <p>Necklaces</p>
          <p>Foot Harness</p>
          <p>Braid Jewels</p>
        </div>
        <p className="p-3 border-t-[0.4px]">More Categories</p>
      </section>
      <section className="col-span-6 flex items-center border rounded-sm hero-bacground">
        <TitalSecition />
      </section>
      <section className="col-span-2 border hero-ads-img"></section>
    </section>
  );
};

export default HeroSection;
