import { Link } from "react-router-dom";
import React from "react";
import Moon from "../../images/moon.svg";
import Search from "../../images/search.svg";

const Navbar = () => {
  return (
    <nav className="flex gap-x-8 items-center">
      <Link
        className="text-opacity-80 uppercase font-bold text-sm transition hover:text-opacity-100 hover:text-gray-600"
        to="/"
      >
        Home
      </Link>
      <Link
        className="text-opacity-80 uppercase font-bold text-sm transition hover:text-opacity-100 hover:text-gray-600"
        to="/about"
      >
        About
      </Link>
      <Link
        className="text-opacity-80 uppercase font-bold text-sm transition hover:text-opacity-100 hover:text-gray-600"
        to="/contact"
      >
        Contact
      </Link>
      <div className="flex gap-x-4">
        <img src={Search} className="w-5" alt="search"/>
        <img src={Moon} className="w-5" alt="moon"/>
      </div>
    </nav>
  );
};

export default Navbar;
