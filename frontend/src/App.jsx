import { useState, useEffect } from "react";
import BeritaTerkini from "./components/BeritaTerkini";
import BeritaList from "./components/BeritaList";
import Terpopuler from "./components/Terpopuler";
import Navbar from "./components/Navbar";
const App = () => {
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
    <div className="font-sans">
      {/* Navbar */}
    <Navbar/>

      {/* Hero Section */}
      <section className="bg-gray-200 p-8 text-center">
        <h1 className="text-3xl font-bold">Berita Utama</h1>
        <p className="mt-2 text-gray-700">
          Kumpulan berita terbaru dari NU Online
        </p>
      </section>

      {/* List Berita */}

      <BeritaTerkini />

      <section className="bg-gray-200">
      <Terpopuler />
      </section>

      <BeritaList />
      {/* Footer */}
      <footer className="bg-green-600 text-white text-center p-4 mt-8">
        &copy; 2025 NU Online
      </footer>
    </div>
  );
};

export default App;
