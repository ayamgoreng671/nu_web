import React from "react";

const BeritaList = () => {
  const newsArticles = [
    {
      category: "Syariah",
      title: "Ketentuan Zakat Fitrah di Tanah Rantau",
      description: "Bagaimana ketentuan membayar zakat di tanah rantau?",
      date: "Senin, 17 Maret 2025 | 17:00 WIB",
      img: "https://placehold.co/600x400", // Replace this later
    },
    {
      category: "Fragmen",
      title: "Kisah Mualaf Belanda dan Tionghoa yang Memeluk Islam lewat Cabang-cabang NU",
      date: "Ahad, 16 Maret 2025 | 23:32 WIB",
      img: "https://placehold.co/200x200", // Replace this later
    },
    {
      category: "Nasional",
      title: "NU Care-LAZISNU PBNU Adakan Pelatihan Guru Bahasa Isyarat",
      date: "Ahad, 16 Maret 2025 | 15:30 WIB",
      img: "https://placehold.co/200x200", // Replace this later
    },
    {
      category: "Tafsir",
      title: "Tafsir Surat Ad-Dukhan Ayat 3: Al-Quran Diturunkan Malam Lailatul Qadar",
      date: "Ahad, 16 Maret 2025 | 10:00 WIB",
      img: "https://placehold.co/300x200", // Replace this later
    },
    {
      category: "Internasional",
      title: "Dakwah Dai Indonesia di Jepang, dari Dapur Menuju Masjid yang Makmur",
      date: "Senin, 17 Maret 2025 | 09:00 WIB",
      img: "https://placehold.co/300x200", // Replace this later
    },
    {
      category: "Ramadhan",
      title: "Kultum Ramadhan: Mari Jadikan Al-Quran sebagai Pedoman Hidup",
      date: "Ahad, 16 Maret 2025 | 15:00 WIB",
      img: "https://placehold.co/300x200", // Replace this later
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6 max-w-5xl">
      <div className="divide-dashed divide-y-3 divide-gray-200 top-0 mt-8 grid aspect-auto w-full grid-cols-4 gap-4 font-roboto sm:grid-cols-1 md:sticky md:grid-cols-3 lg:sticky xl:sticky">
        {newsArticles.map((news, index) => (
          <div key={index} className=" overflow-hidden">
            <img src={news.img} alt={news.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <span className="bg-teal-700 text-white text-xs px-2 py-1">
                {news.category}
              </span>
              <h2 className="mt-2 text-lg font-semibold">{news.title}</h2>
              <p className="text-gray-600 text-sm mt-1">{news.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeritaList;
