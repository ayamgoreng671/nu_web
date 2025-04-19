import React from 'react'

const Topik = () => {
    const berita = [
        "Khutbah Jumat: 3 Persiapan di Bulan Sya’ban, Menyambut Bulan Ramadhan",
        "Khutbah Jumat: Mari Persiapkan Diri Menyambut Ramadhan",
        "Khutbah Jumat: Perbanyak Shalawat di Bulan Sya'ban",
        "Khutbah Jumat: Cara Meraih Ketenangan Hidup"
      ];

      
    
      return (
        <div className="max-w-5xl mx-auto p-4 ">
          {/* Judul */}
          <h2 className="text-2xl font-bold border-teal-700 border-b-2 pb-2 flex items-center">
            Topik <br />
            </h2>
            <span className="ml-2 w-10 h-1 bg-teal-700"></span>
    
          {/* Grid 2 Kolom */}
          <div className="grid grid-cols-4 gap-4 mt-2">
            {berita.map((judul, index) => (
              <div key={index} className="gap-2">
              <img
                src={"https://storage.nu.or.id/storage/post/1_1/mid/img-6321_1708426425.webp"}
                alt={judul}
                className="w-full h-36 object-cover rounded"/>
                <p className="mt-2 text-sm font-semibold text-gray-800 hover:text-teal-700 cursor-pointer">
                {judul}
                </p>
            </div>
            ))}
          </div>
        </div>
      );
    };

export default Topik
