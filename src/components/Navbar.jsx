import React from "react";
import Logo from "../assets/img/logo.svg";
import LinkList from "./LinkList";

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
        <a
          href=""
          className="hidden md:block p-3 px-6 text-white bg-brightRed rounded-full hover:bg-brightRedLight "
        >
          Get Started
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
