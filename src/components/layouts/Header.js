import { useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [search, setSearch] = useState(false);
  const root = window.document.documentElement;

  const toggleTheme = () => {
    root.classList.toggle("dark");
    if(localStorage.theme === "dark"){
      localStorage.setItem("theme", "light");
    }else {
      localStorage.setItem("theme", "dark");
    }
  };

  if (localStorage.theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }

  return (
    <div className="sm:w-100 py-10 dark:bg-gray-800">
      <div className="container mx-auto text-center sm:flex sm:w-8/12 sm:justify-between sm:items-center">
        <div className="font-bold text-xl text-logo-grey capitalize dark:text-white">
          Tayfun Güler
        </div>
        <Navbar
          search={search}
          setSearch={setSearch}
          toggleTheme={toggleTheme}
        />
      </div>
    </div>
  );
};

export default Header;
