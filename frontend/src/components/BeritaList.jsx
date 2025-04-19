import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const BeritaList = () => {
  const [beritaList, setBeritaList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data/berita.json")
      .then((response) => response.json())
      .then((data) => setBeritaList(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const latestArticles = [...beritaList]
  .slice(-6)            // Ambil 6 terakhir
  .reverse();           // Urutkan dari yang terbaru ke yang lebih lama

  return (
    <div className="container mx-auto px-4 py-6 max-w-5xl">
      <div className="divide-dashed divide-y-3 divide-gray-200 top-0 mt-8 grid aspect-auto w-full grid-cols-4 gap-4 font-roboto sm:grid-cols-1 md:sticky md:grid-cols-3 lg:sticky xl:sticky">
        {latestArticles.map((news, index) => (
          <div key={index} onClick={() => navigate(`/news/${news.id}`)} className="cursor-pointer overflow-hidden">
            <img src={news.gambar} alt={news.judul} className="w-full h-48 object-cover" />
            <div className="p-4">
              <span className="bg-teal-700 text-white text-xs px-2 py-1">
                {news.kategori}
              </span>
              <h2 className="mt-2 text-lg font-semibold">{news.judul}</h2>
              <p className="text-gray-600 text-sm mt-1">{news.waktu}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeritaList;
