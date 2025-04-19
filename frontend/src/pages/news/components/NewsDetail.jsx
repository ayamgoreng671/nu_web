import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

const NewsDetail = () => {
  const { id } = useParams();
  const [beritaList, setBeritaList] = useState([]);

  useEffect(() => {
    fetch("/data/berita.json")
      .then((response) => response.json())
      .then((data) => setBeritaList(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const detail = beritaList.find((b) => b.id === parseInt(id));

  if (!detail) {
    return <p className="p-4">Berita tidak ditemukan.</p>;
  }

  return (
    <div className="p-4 flex-1">
      <h2 className="text-2xl font-bold">{detail.judul}</h2>
      <p className="mt-2 text-gray-700">{detail.kategori}</p>
    </div>
  );
};

export default NewsDetail
