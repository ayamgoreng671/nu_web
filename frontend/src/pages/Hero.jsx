import React from 'react'
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BeritaTerkini from "../components/BeritaTerkini";
import BeritaList from "../components/BeritaList";
import Terpopuler from "../components/Terpopuler";
import Topik from "../components/Topik";
import News from "./Hero";
// import Jawa from "@/pages/news/Page";
import Navbar from "../components/Navbar";
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
    <div className="font-sans flex-1">
      <section>
      <BeritaList />
      </section>
 
      <section className="bg-gray-200 py-5">
      <Terpopuler />
      </section>

      <section>
        <BeritaTerkini />
      </section>

      <section className="bg-gray-200 py-5">
      <Topik/>
      </section>


    </div>
  )
}

export default Hero
