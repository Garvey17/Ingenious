import React from "react";
import logo from "../assets/LOGO.svg"



const navItems = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Review", href: "#" },
  ];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent py-4 px-6 backdrop-blur-3xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo on the left */}
        <div className="flex items-center">
          <a href="/" >
            <img src={logo} alt="" className="w-32" />
          </a>
        </div>

        {/* Navigation links in the center - hidden on small screens */}
        <div className="hidden md:flex items-center space-x-8 bg-white rounded-3xl px-20 py-2 font-montserrat text-sm font-medium mr-14">
          {navItems.map((item) => <a href={item.href} className="py-1 px-2 rounded-2xl hover:bg-[#CFDCE1] duration-200">{item.label}</a> )}
        </div>

        {/* Login button on the right */}
        <div className="flex items-center">
         
            <span className="bg-[#4C9DFF] text-gray-800 px-4 py-2 rounded-full hover:bg-gray-200 transition-colors duration-200 font-medium text-sm">
              Login
            </span>
       
        </div>
      </div>
    </nav>
  );
};

export default Navbar;