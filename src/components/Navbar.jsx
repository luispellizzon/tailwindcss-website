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
      </div>
    </nav>
  );
}

export default Navbar;
