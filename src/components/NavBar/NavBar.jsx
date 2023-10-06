import React from "react";
import { FaCartPlus, FaRegHeart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-[#CDA557] text-white">
      <div className="mycontainer flex justify-between items-center py-3">
        <div className="flex gap-4">
          <NavLink
            to="/"
            className={` font-semibold ${({ isActive }) =>
              isActive ? "underline" : ""}`}
          >
            HOME
          </NavLink>
          <NavLink
            to="/"
            className={` font-semibold ${({ isActive }) =>
              isActive ? "underline" : ""}`}
          >
            SHOP
          </NavLink>
          <NavLink
            to="/"
            className={` font-semibold ${({ isActive }) =>
              isActive ? "underline" : ""}`}
          >
            BLOG
          </NavLink>
          <NavLink
            to="/"
            className={` font-semibold ${({ isActive }) =>
              isActive ? "underline" : ""}`}
          >
            MY JEWELLERY
          </NavLink>
          <NavLink
            to="/"
            className={` font-semibold ${({ isActive }) =>
              isActive ? "underline" : ""}`}
          >
            ADD JEWELLERY
          </NavLink>
          <NavLink
            to="/"
            className={` font-semibold ${({ isActive }) =>
              isActive ? "underline" : ""}`}
          >
            ABOUT US
          </NavLink>
          <NavLink
            to="/"
            className={` font-semibold ${({ isActive }) =>
              isActive ? "underline" : ""}`}
          >
            CONTACT
          </NavLink>
        </div>
        <div className="flex gap-5 text-2xl">
          <Link>
            <FaRegHeart />
          </Link>
          <Link>
            <FaCartPlus />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
