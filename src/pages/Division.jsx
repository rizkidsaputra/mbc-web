import { Link } from "react-router-dom" 

const divisions = [
  {
    name: "Cyber Security",
    image: "/assets/CS.png",
    desc: "Keamanan sistem dan data digital, termasuk perlindungan jaringan, enkripsi, dan audit keamanan.",
    to: "/division/cybersecurity",
  },
  {
    name: "Big Data",
    image: "/assets/BD.png",
    desc: "Analisis dan pengolahan data berskala besar untuk mendukung pengambilan keputusan strategis.",
    to: "/division/bigdata",
  },
  {
    name: "Game Tech",
    image: "/assets/GAMETECH.png",
    desc: "Riset dan pengembangan teknologi, desain, dan simulasi dalam industri game.",
    to: "/division/gametech",
  },
  {
    name: "Geographic Information System (GIS)",
    image: "/assets/GIS.png",
    desc: "Sistem informasi geografis untuk pemetaan, analisis spasial, dan visualisasi data geografi.",
    to: "/division/gis",
  },
];

export default function DivisionPage() {
  return (
    <section className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-red-50 to-red-100">
      <div className="mb-8">
        <Link
          to="/"
          className="inline-block mb-4 bg-red-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-transparent hover:text-red-600 hover:border-2 hover:border-red-600 hover:font-bold transition"
        >
          ← Kembali ke Beranda
        </Link>
      </div>

      {/* Judul */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-tight bg-gradient-to-r from-red-600 to-blue-600 text-transparent bg-clip-text">
          Divisi MBC Laboratory
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Empat divisi utama MBC: Cybersecurity, Big Data, Game Tech, dan GIS
        </p>
      </div>

      {/* Grid kartu divisi */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2">
        {divisions.map((division, index) => (
          <Link
            key={index}
            to={division.to}
            className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
          >
            <img
              src={division.image}
              alt={division.name}
              className="w-20 h-20 md:w-35 md:h-35 object-contain mb-4"
            />
            <h4 className="font-semibold text-xl md:text-2xl mb-2 text-gray-800">
              {division.name}
            </h4>
            <p className="text-sm md:text-lg text-gray-600">{division.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
