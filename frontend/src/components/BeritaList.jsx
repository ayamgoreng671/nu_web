import React from "react";

const BeritaList = () => {
  const berita = [
    {
      kategori: "Fragmen",
      judul: "Persahabatan Pramoedya Ananta Toer dengan Mahbub Djunaidi",
      waktu: "Sabtu, 8 Februari 2025 | 17:00 WIB",
      gambar: "https://storage.nu.or.id/storage/post/1_1/mid/img-6321_1708426425.webp"
    },
    {
      kategori: "Fragmen",
      judul: "Pramoedya Ananta Toer, Ayahnya, dan NU Blora",
      waktu: "Sabtu, 8 Februari 2025 | 11:00 WIB",
      gambar: "https://storage.nu.or.id/storage/post/1_1/mid/img-6321_1708426425.webp"
    },
    {
      kategori: "Fragmen",
      judul: "Sejak Kapan Munas Alim Ulama dan Konbes NU Diselenggarakan?",
      waktu: "Kamis, 6 Februari 2025 | 06:03 WIB",
      gambar: "https://storage.nu.or.id/storage/post/1_1/mid/img-6321_1708426425.webp"
    },
    {
      kategori: "Fragmen",
      judul: "9 Momentum Sejarah Perjuangan NU untuk Agama dan Negara",
      waktu: "Sabtu, 1 Februari 2025 | 15:55 WIB",
      gambar: "https://storage.nu.or.id/storage/post/1_1/mid/img-6321_1708426425.webp"
    },
    {
      kategori: "Fragmen",
      judul: "Januari 69 Tahun Lalu, Kongres Pertama IPPNU di Solo",
      waktu: "Selasa, 28 Januari 2025 | 20:06 WIB",
      gambar: "https://storage.nu.or.id/storage/post/1_1/mid/img-6321_1708426425.webp"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-3xl font-bold border-b-2 border-green-500 pb-2 mb-4">
        Fragmen
      </h2>
      <div className="grid gap-6">
        {berita.map((item, index) => (
          <div key={index} className="flex gap-4 border-b pb-4">
            <img src={item.gambar} alt={item.judul} className="w-24 h-24 object-cover rounded-md" />

            <div className="flex-1">
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                {item.kategori}
              </span>
              <h3 className="text-lg font-semibold mt-1">{item.judul}</h3>
              <p className="text-sm text-gray-500">{item.waktu}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeritaList;
