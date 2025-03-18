import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
// import { menu } from "@pub/data/navMenuList";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);


  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50">
      <div className="container mx-auto py-2 flex justify-between items-center max-w-9xl px-60">
        {/* Logo */}
        <div className="flex items-center py-3">
          <img
            src="https://www.nu.or.id/assets/images/logo.png"
            alt="NU Online Logo"
            className="h-10"
          />
          {/* <span className="ml-2 text-xs text-green-600 font-semibold border border-green-600 px-2 py-1 rounded-full">
            TERVERIFIKASI
          </span> */}
        </div>

        {/* Search Bar */}
        <div className="flex-row flex">
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Cari Berita"
            className="w-full px-4 py-2 bg-gray-200 focus:outline-none"
          />
          <FaSearch className="absolute right-3 top-3 text-gray-500" />
        </div>

        {/* Dark Mode & Language Switch */}
        <div className="flex items-center gap-4">
          <button onClick={() => setDarkMode(!darkMode)} className="p-2">
            <MdOutlineDarkMode size={20} />
          </button>
          <div className="flex items-center gap-1">
            <span className="w-5 h-3 bg-red-600 block"></span>
            <IoMdArrowDropdown size={20} />
          </div>
        </div>
        </div>
      </div>

      {/* Navigation Menu */}

    </header>
  );
};

export default Navbar;
