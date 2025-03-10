import React from "react";

const Terpopuler = () => {
  const berita = [
    "Khutbah Jumat: 3 Persiapan di Bulan Sya’ban, Menyambut Bulan Ramadhan",
    "Khutbah Jumat: Mari Persiapkan Diri Menyambut Ramadhan",
    "Khutbah Jumat: Perbanyak Shalawat di Bulan Sya'ban",
    "Khutbah Jumat: Cara Meraih Ketenangan Hidup",
    "Munas NU 2025 Putuskan 3 Hal tentang Penyembelihan dan Distribusi Dam Haji Tamattu",
    "Khutbah Jumat: Segeralah Mengqadha Puasa Ramadhan Tahun Lalu",
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 ">
      {/* Judul */}
      <h2 className="text-2xl font-bold border-green-500 border-b-2 pb-2 flex items-center">
        Terpopuler <br />
        </h2>
        <span className="ml-2 w-10 h-1 bg-green-500"></span>

      {/* Grid 2 Kolom */}
      <div className="grid grid-cols-2 gap-4 mt-2">
        {berita.map((judul, index) => (
          <div key={index} className="flex items-start gap-2">
            <span className="text-green-600 font-bold text-lg">{index + 1}</span>
            <a href="#" className="text-md font-medium">{judul}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Terpopuler;
