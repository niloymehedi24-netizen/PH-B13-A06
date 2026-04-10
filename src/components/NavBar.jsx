import React from "react";
import { LuShoppingCart } from "react-icons/lu";

const NavBar = () => {
  return (
    <div className="navbar max-w-5xl mx-auto">
      <div className="navbar-start">
        <div className="flex items-center gap-1 font-bold text-3xl">
          <h2 className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            DigiTools
          </h2>
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-3 px-1 text-lg">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="flex navbar-end gap-2">
        <div>
          <LuShoppingCart></LuShoppingCart>
        </div>
        <div>
          <a className="text-lg" href="">
            Login
          </a>
        </div>
        <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white font-semibold">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default NavBar;
