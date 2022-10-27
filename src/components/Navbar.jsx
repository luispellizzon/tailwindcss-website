import React from "react";
import Logo from "../assets/img/logo.svg";
import LinkList from "./LinkList";
import GetStartButton from "./GetStartButton.jsx";

function Navbar() {
  const links = ["Pricing", "Products", "About", "Careers", "Community"];

  return (
    <nav className="relative container mx-auto p-6">
      {/* Flex Container */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="pt-2">
          <img src={Logo} alt="" />
        </div>
        {/* Menu items */}
        <div className="hidden md:flex space-x-6">
          {links.map((link, index) => (
            <LinkList key={index} link={link} />
          ))}
        </div>
        {/* Button */}
        <GetStartButton hidden={true} />
        <button
          id="menu-btn"
          className="block hamburger md:hidden focus:outline-none"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-mid"></span>
          <span className="hamburger-bot"></span>
        </button>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden">
        <div
          id="menu"
          className="hidden absolute flex flex-col items-center self-end  py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-7 right-6 drop-shadow md"
        >
          <a href="">Pricing</a>
          <a href="">Product</a>
          <a href="">About Us</a>
          <a href="">Careers</a>
          <a href="">Community</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
