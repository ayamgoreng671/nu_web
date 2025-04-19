import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { MdOutlineDarkMode } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
// import { menu } from "@pub/data/navMenuList";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [newsData, setNewsData] = useState([]);

  
  useEffect(() => {
    fetch("/data/navMenuList.json") // Fetch from public folder
      .then((response) => response.json())
      .then((data) => setNewsData(data))
      .catch((error) => console.error("Error fetching news:", error));
  }, []);


  return (
    <div>
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
    <div className="flex justify-center mt-20">
      <nav className="bg-teal-700 text-white fixed z-1 rounded-br-lg rounded-bl-lg">
        <div className="container mx-auto px-6 py-2 flex justify-around gap-10 text-sm font-medium rounded-br-lg rounded-bl-lg">
          {newsData.map((item, i) => (
            <a className="hover:underline" key={i} href={item.url || "#"}>
              {item.name}
            </a>
          ))}
        </div>
      </nav>

      <div className="flex mx-auto mt-9 max-w-5xl">
          <div className="text-center py-1 text-gray-700 text-xs">
            Jatim | Jateng | Jabar | Lampung | Jakarta | Kepri | Banten | Jombang
          </div>

        {/* Date Section */}
          <div className="text-center text-gray-500 text-xs py-1">
            Monday, 17 March 2025
          </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
