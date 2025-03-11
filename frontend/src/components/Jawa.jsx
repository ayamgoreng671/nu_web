import React, { useEffect, useState } from "react";

const Jawa = () => {
  const [beritaList, setBeritaList] = useState([]);

  useEffect(() => {
    fetch("/data/berita.json")
      .then((response) => response.json())
      .then((data) => setBeritaList(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-2xl font-bold border-b-2 border-green-500 pb-2 mb-4">
        Berita Terkini
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {beritaList.map((berita, index) => (
          <div key={index} className="grid grid-cols-4 gap-4 border-b pb-4">
            <img src={berita.gambar} alt={berita.judul} className="w-24 h-24 object-cover rounded-md" />
            <div className="col-span-3">
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                {berita.kategori}
              </span>
              <h3 className="text-lg font-semibold mt-1">{berita.judul}</h3>
              <p className="text-sm text-gray-500">{berita.waktu}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jawa;
