import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="w-100 py-10">
      <div className="container w-8/12 mx-auto flex justify-between items-center">
        <div className="font-bold text-xl text-logo-grey capitalize">Tayfun Güler</div>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
