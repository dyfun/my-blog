import { Link } from "react-router-dom";
import Moon from "../../images/moon.svg";
import Search from "../../images/search.svg";

const Navbar = ({ search, setSearch, toggleTheme }) => {
  return (
    <>
      <nav className="flex gap-x-8 items-center justify-center mt-5 sm:mt-0 dark:text-white">
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
          <div className="relative">
            <img
              src={Search}
              className="w-5"
              alt="search"
              onClick={() => setSearch(!search)}
            />
            <div className={`${search ? 'block': 'hidden'} absolute left-0 transition`}>
              <form>
                <input type="text" placeholder="search" className="border-2 p-1 px-4 mt-3"/>
              </form>
            </div>
          </div>
          <div>
            <img src={Moon} className="w-5" alt="moon" onClick={() => toggleTheme()}/>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
