import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <section className="h-lvh w-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-10 leading-tight bg-gradient-to-r from-red-600 to-blue-600 text-transparent bg-clip-text">
            Multimedia, Big Data, and Cyber Security Laboratory
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-7 max-w-3xl mx-auto">
            We're More Than <span className="text-red-600 font-bold">Laboratory</span>, We're Partners in Your <span className="text-blue-600 font-bold">Growth</span>
          </p>

          <p className="text-l md:text-xl italic text-gray-500 mb-7 max-w-2xl mx-auto">
            #GoGoMBC #WeAttackWeProtect
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/division"
              className="bg-red-600 text-white text-lg font-medium rounded-full px-8 py-3 hover:bg-white hover:text-red-600 hover:border hover:border-red-600 transition"
            >
              Explore Divisions →
            </Link>

            <Link
              to="/contact"
              className="text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white text-lg font-medium rounded-full px-8 py-3 transition"
            >
              Kontak
            </Link>
          </div>
        </div>
      </section>


      {/* About Section (Putih) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Tentang MBC Laboratory</h2>
            <p className="text-lg text-gray-600 max-w-6xl mx-auto ">
              MBC Laboratory, singkatan dari Multimedia, Big Data, dan Cyber Security Laboratory, merupakan salah satu entitas penelitian yang beroperasi di bawah Kementerian Komunikasi dan Multimedia (KK NCM). Fokus utama laboratorium ini adalah mempelajari dan mengembangkan pengetahuan di bidang Cyber Security, Big Data, dan Multimedia. Didirikan pada tanggal 4 Oktober 2019, MBC Laboratory telah menjadi pusat penelitian yang berdedikasi untuk memahami, mengatasi, dan mengembangkan solusi terkini dalam tiga bidang utamanya.
            </p>
          </div>
        </div>
      </section>

      {/* Visi & Misi Section (Gradasi Merah ke Biru) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Visi & Misi */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div>
                  <h3 className="text-xl font-semibold  mb-2">Visi</h3>
                  <p className="">
                    Menjadi Laboratorium unggulan dalam pengembangan teknologi Multimedia Application, Big Data, dan Cybersecurity dengan mendorong eksplorasi dan merancang riset yang memberikan dampak positif dan mengikuti perkembangan teknologi masa kini serta menjadi lingkungan yang membentuk, mematangkan, dan mempersiapkan skill asisten MBC Laboratory agar dapat bersaing di Industri.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div>
                  <h3 className="text-xl font-semibold  mb-2">Misi</h3>
                  <ol className=" space-y-1 list-decimal list-inside">
                    <li>Menjadi lingkungan yang mendukung pembelajaran dan penelitian jangka panjang.</li>
                    <li>Menciptakan lingkungan yang fokus pada pertumbuhan pribadi dan profesional serta mendukung karier.</li>
                    <li>Menjadi pusat informasi Teknologi, Multimedia, dan Softskill yang berguna bagi mahasiswa.</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Gambar */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/assets/1-1@2x.png"
                  alt="MBC"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Division Section */}
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Division
            </h3>
          </div>

          {/* Grid Services */}
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {[
              { name: "Cybersecurity", icon: "🛡️", desc: "Keamanan sistem dan data digital" },
              { name: "Big Data", icon: "📊", desc: "Analisis data besar dan kompleks" },
              { name: "Game Technology", icon: "🎮", desc: "Pengembangan teknologi dan desain game" },
              { name: "GIS", icon: "🗺️", desc: "Sistem informasi geografis dan pemetaan" },
            ].map((division, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 mb-4 rounded-full bg-gradient-to-r from-red-200 to-blue-200 flex items-center justify-center text-2xl text-white shadow-md">
                  {division.icon}
                </div>
                <h4 className="font-semibold text-lg mb-1">{division.name}</h4>
                <p className="text-sm text-gray-600">{division.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/division"
              className="inline-block bg-red-600 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-white hover:text-red-600 hover:border hover:border-e-red-600 transition"
            >
              Info Selengkapnya
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home