import React from 'react'
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BeritaTerkini from "./BeritaTerkini";
import BeritaList from "./BeritaList";
import Terpopuler from "./Terpopuler";
import News from "./Hero";
// import Jawa from "@/pages/news/Page";
import Navbar from "./Navbar";
import Category from "./Category";

const Hero = () => {
  const [berita, setBerita] = useState([]);

  useEffect(() => {
    // Simulasi data berita
    setBerita([
      {
        id: 1,
        title: "Judul Berita 1",
        description: "Deskripsi singkat berita 1",
      },
      {
        id: 2,
        title: "Judul Berita 2",
        description: "Deskripsi singkat berita 2",
      },
      {
        id: 3,
        title: "Judul Berita 3",
        description: "Deskripsi singkat berita 3",
      },
    ]);
  }, []);

  return (
    <div className="font-sans mt-20">
      <Category/>


      {/* Hero Section */}
      <section className="bg-gray-200 p-8 text-center">
        <h1 className="text-3xl font-bold">Berita Utama</h1>
        <p className="mt-2 text-gray-700">
          Kumpulan berita terbaru dari NU Online
        </p>
      </section>

      {/* nav under */}
      


      {/* List Berita */}
      <BeritaList />

      

      <section className="bg-gray-200 py-5">
      <Terpopuler />
      </section>

      <section>
        {/* <News/> */}
        <BeritaTerkini />
      </section>

      <section className="bg-gray-200 py-5">
      <Terpopuler />
      </section>

      
      {/* Footer */}
      <footer className="bg-teal-700 text-white text-center p-4 mt-8">
        &copy; 2025 NU Online
      </footer>


    </div>
  )
}

export default Hero
