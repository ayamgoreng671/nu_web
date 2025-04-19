import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BeritaTerkini from "./components/BeritaTerkini";
import BeritaList from "./components/BeritaList";
import Terpopuler from "./components/Terpopuler";
import News from "./pages/Hero";
import Jawa from "./pages/news/Page";
// import NewsDetail from "./pages/news/Page";



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
        <Routes>
          <Route path="/" element={<News/>}/>
          <Route path="/news/:id" element={<Jawa/>} />
        </Routes>
  );
};

export default App;
