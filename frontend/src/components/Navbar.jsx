import React, { useEffect, useState } from "react";

const Navbar = () => {


  return (
    <nav className="bg-green-600 text-white p-4 flex justify-between">
    <div className="text-xl font-bold">NU Online</div>
    <ul className="flex space-x-4">
      <li>Home</li>
      <li>Berita</li>
      <li>Video</li>
      <li>Keislaman</li>
    </ul>
  </nav>
  );
};

export default Navbar;
      
      
      
      
