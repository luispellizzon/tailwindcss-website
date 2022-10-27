import { useState } from "react";
import Logo from "../assets/img/logo.svg";
import LinkList from "./LinkList";
import GetStartButton from "./GetStartButton.jsx";

function Navbar() {
  const links = ["Pricing", "Products", "About", "Careers", "Community"];
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

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
          className={`${
            isOpen ? "open" : ""
          } block hamburger md:hidden focus:outline-none`}
          onClick={() => setIsOpen((prev) => !prev)}
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
          className={`${
            !isOpen ? "hidden" : ""
          } absolute flex flex-col items-center py-8 mt-10 space-y-6 font-bold bg-white left-7 right-7 drop-shadow-md`}
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
