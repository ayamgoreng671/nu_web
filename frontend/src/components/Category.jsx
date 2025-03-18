import React from 'react';
import { useState, useEffect } from "react";


const Category = () => {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
      fetch("/data/navMenuList.json") // Fetch from public folder
        .then((response) => response.json())
        .then((data) => setNewsData(data))
        .catch((error) => console.error("Error fetching news:", error));
    }, []);

  return (
    <div className="xl:max-w-5xl  mx-auto">
    <nav className="bg-teal-700 text-white xl:mx-auto rounded-br-lg rounded-bl-lg fixed">
      <div className="container mx-auto px-4 py-2 flex gap-4 text-sm font-medium flex justify-around ">
        {/* <a href="#" className="hover:underline">Lapsus</a>
        <a href="#" className="hover:underline">Warta</a>
        <a href="#" className="hover:underline">Fragmen</a>
        <a href="#" className="hover:underline">Quran</a>
        <a href="#" className="hover:underline">Keislaman</a>
        <a href="#" className="hover:underline">Opini</a>
        <a href="#" className="hover:underline">Tokoh</a>
        <a href="#" className="hover:underline">Hikmah</a>
        <a href="#" className="hover:underline">Download</a>
        <a href="#" className="hover:underline">Kesehatan</a>
        <a href="#" className="hover:underline">Lainnya</a> */}
        {newsData.map((item, i) => {
          return (
             <a className="hover:underline" key={i} href={item.url | "#"}>{item.name}</a> 
          )
        })}
      </div>
    </nav>

    {/* Sub-menu Locations */}
    <div className="flex justify-around">
      <div className="text-center py-1 text-gray-700 text-xs">
        Jatim | Jateng | Jabar | Lampung | Jakarta | Kepri | Banten | Jombang
      </div>

      {/* Date Section */}
      <div className="text-center text-gray-500 text-xs py-1">
        Monday, 17 March 2025
      </div>
    </div>
    </div>
  )
}

export default Category
