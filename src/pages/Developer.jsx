import { Link } from "react-router-dom";

function Developer() {
  const certificates = [
  {
    img: "/assets/cyberops.png",
    link: "https://drive.google.com/file/d/1FcgM1oTWGCv99ZkuJlmeCv-vyEA8Kn0r/view?usp=sharing",
  },
  {
    img: "/assets/it-specialist.png",
    link: "https://drive.google.com/file/d/1C5psBwBOnArsqzlK1P9RHEMIn0BNQFXL/view?usp=sharing",
  },
  {
    img: "/assets/ccna-ENSA.png",
    link: "https://drive.google.com/file/d/1PNrph3pN2Gtgm7SyrA7CUgr1xc4oaLIf/view?usp=sharing",
  },
  {
    img: "/assets/ccna-ItN.png",
    link: "https://drive.google.com/file/d/16zQGk7ECGq-EOHm6bMAeeAAfYc2teWck/view?usp=sharing",
  },
  {
    img: "/assets/ccna-SRWE.png",
    link: "https://drive.google.com/file/d/1ywt2JvTr8GktJzSpJ4snV0J5RH0RhaTV/view?usp=drive_link",
  },
];

  const skills = [
    { 
      name: "Networking", 
      level: "Advanced", 
      icon: (
        <svg width="35px" height="35px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" fill="none" width="20" height="20"/>
          <g>
          <path d="M18 13h1c.55 0 1 .45 1 1.01v2.98c0 .56-.45 1.01-1 1.01h-4c-.55 0-1-.45-1-1.01v-2.98c0-.56.45-1.01 1-1.01h1v-2h-5v2h1c.55 0 1 .45 1 1.01v2.98c0 .56-.45 1.01-1 1.01H8c-.55 0-1-.45-1-1.01v-2.98c0-.56.45-1.01 1-1.01h1v-2H4v2h1c.55 0 1 .45 1 1.01v2.98C6 17.55 5.55 18 5 18H1c-.55 0-1-.45-1-1.01v-2.98C0 13.45.45 13 1 13h1v-2c0-1.1.9-2 2-2h5V7H8c-.55 0-1-.45-1-1.01V3.01C7 2.45 7.45 2 8 2h4c.55 0 1 .45 1 1.01v2.98C13 6.55 12.55 7 12 7h-1v2h5c1.1 0 2 .9 2 2v2z"/>
          </g>
          </svg>
      ), 
      desc: "Perancangan, konfigurasi, dan pemeliharaan infrastruktur jaringan komputer untuk memastikan konektivitas dan kinerja optimal." 
    },
    { 
      name: "Server Administator", 
      level: "Advanced", 
      icon: (
        <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 7H18.01M15 7H15.01M18 17H18.01M15 17H15.01M6 10H18C18.9319 10 19.3978 10 19.7654 9.84776C20.2554 9.64477 20.6448 9.25542 20.8478 8.76537C21 8.39782 21 7.93188 21 7C21 6.06812 21 5.60218 20.8478 5.23463C20.6448 4.74458 20.2554 4.35523 19.7654 4.15224C19.3978 4 18.9319 4 18 4H6C5.06812 4 4.60218 4 4.23463 4.15224C3.74458 4.35523 3.35523 4.74458 3.15224 5.23463C3 5.60218 3 6.06812 3 7C3 7.93188 3 8.39782 3.15224 8.76537C3.35523 9.25542 3.74458 9.64477 4.23463 9.84776C4.60218 10 5.06812 10 6 10ZM6 20H18C18.9319 20 19.3978 20 19.7654 19.8478C20.2554 19.6448 20.6448 19.2554 20.8478 18.7654C21 18.3978 21 17.9319 21 17C21 16.0681 21 15.6022 20.8478 15.2346C20.6448 14.7446 20.2554 14.3552 19.7654 14.1522C19.3978 14 18.9319 14 18 14H6C5.06812 14 4.60218 14 4.23463 14.1522C3.74458 14.3552 3.35523 14.7446 3.15224 15.2346C3 15.6022 3 16.0681 3 17C3 17.9319 3 18.3978 3.15224 18.7654C3.35523 19.2554 3.74458 19.6448 4.23463 19.8478C4.60218 20 5.06812 20 6 20Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      ), 
      desc: "Manajemen sistem server termasuk instalasi, konfigurasi, keamanan, dan pemantauan performa untuk mendukung operasional IT." 
    },
    { 
      name: "Network Security", 
      level: "Intermediate", 
      icon: (
        <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.5 20H6.2C5.0799 20 4.51984 20 4.09202 19.782C3.71569 19.5903 3.40973 19.2843 3.21799 18.908C3 18.4802 3 17.9201 3 16.8V7.2C3 6.0799 3 5.51984 3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4H15.8C16.9201 4 17.4802 4 17.908 4.21799C18.2843 4.40973 18.5903 4.71569 18.782 5.09202C19 5.51984 19 6.0799 19 7.2V8H3M3 12H11V8M3 16H9M7 4V8M7 12V16M15 4V8M19.8284 19.8284C18.2663 21.3905 15.7337 21.3905 14.1716 19.8284C13.3905 19.0474 13 18.0237 13 17C13 15.9763 13.3905 14.9526 14.1716 14.1716C14.1716 14.1716 14.5 15 15.5 15.5C15.5 14.5 15.75 13 16.9929 12C18 13 19.0456 13.3887 19.8284 14.1716C20.6095 14.9526 21 15.9763 21 17C21 18.0237 20.6095 19.0474 19.8284 19.8284Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      ), 
      desc: "Penerapan kebijakan, firewall, dan alat keamanan jaringan guna melindungi sistem dari akses tidak sah dan serangan siber." 
    },
    { 
      name: "Cyber Security", 
      level: "Intermediate", 
      icon: (
        <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.302 21.6149C11.5234 21.744 11.6341 21.8086 11.7903 21.8421C11.9116 21.8681 12.0884 21.8681 12.2097 21.8421C12.3659 21.8086 12.4766 21.744 12.698 21.6149C14.646 20.4784 20 16.9084 20 12V6.6C20 6.04207 20 5.7631 19.8926 5.55048C19.7974 5.36198 19.6487 5.21152 19.4613 5.11409C19.25 5.00419 18.9663 5.00084 18.3988 4.99413C15.4272 4.95899 13.7136 4.71361 12 3C10.2864 4.71361 8.57279 4.95899 5.6012 4.99413C5.03373 5.00084 4.74999 5.00419 4.53865 5.11409C4.35129 5.21152 4.20259 5.36198 4.10739 5.55048C4 5.7631 4 6.04207 4 6.6V12C4 16.9084 9.35396 20.4784 11.302 21.6149Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      ), 
      desc: "Perlindungan menyeluruh terhadap sistem informasi, termasuk analisis kerentanan, deteksi ancaman, dan respon insiden cyber." 
    },
  ];

  return (
    <section className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50 to-blue-100 ">
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
          Profile Developer
        </h2>
      </div>

      {/* Info Developer */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-red-700 to-blue-700 text-white rounded-xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-8">
            <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center text-3xl font-bold">
              <img src="/assets/rizki.png" alt="Rizki D. Saputra" className="rounded-full flex items-center justify-center"/>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-2">Mohammad Rizki Dwi Saputra</h2>
              <p className="text-xl text-blue-100 mb-4">Network & Cyber Security</p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start text-sm">
                <span className="bg-white/20 px-3 py-1 rounded-full">Ungraduate</span>
                <span className="bg-white/20 px-3 py-1 rounded-full">Networking</span>
                <span className="bg-white/20 px-3 py-1 rounded-full">IT Support</span>
              </div>
            </div>
          </div>

          <div className="bg-white text-gray-700 p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">About Me</h3>
                <p className="leading-relaxed mb-4">
                  Saya adalah mahasiswa S1 Teknologi Informasi di Universitas Telkom dengan minat dan keahlian di bidang Networking dan Cybersecurity. 
                  Berbekal pengalaman sebagai IT Support Technician, saya terbiasa menangani instalasi jaringan, troubleshooting perangkat, 
                  serta memastikan kestabilan sistem. Keahlian ini saya dukung dengan sertifikasi CCNA dan IT Specialist Cybersecurity.
                </p>
                <p className="leading-relaxed">
                  Saya dikenal sebagai pribadi yang cepat belajar, mampu bekerja sama dalam tim,
                   dan memiliki kemampuan problem solving yang baik. Dengan kombinasi latar belakang pendidikan, 
                   pengalaman praktis, dan keterampilan teknis, saya berkomitmen untuk terus berkembang di dunia teknologi informasi, 
                   khususnya dalam menciptakan solusi efisien dan aman di bidang jaringan komputer.
                </p>
              </div>

              <div>
               <h3 className="text-2xl font-semibold text-gray-900 mb-4">Contact Info</h3>
                <ul className="space-y-3">
                  <li>
                    <div className="flex items-center gap-2 text-gray-700">
                      <a
                      href="mailto:rizkidsaputra9@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-black no-underline"
                    >
                      <img src="/assets/gmail.svg" alt="gmail" className="h-5 w-5" />
                      rizkidsaputra9@gmail.com
                    </a>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-2 text-gray-700">
                      <img src="/assets/location.svg" alt="location" className="h-5 w-5" />
                      Sidoarjo, Jawa Timur
                    </div>
                  </li>
                  <li>
                    <a
                      href="https://github.com/rizkidsaputra"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-black no-underline"
                    >
                      <img src="/assets/github.svg" alt="github" className="w-5 h-5" />
                      rizkidsaputra
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://linkedin.com/in/rizki-d-saputra/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-black no-underline "
                    >
                      <img src="/assets/linkedin.svg" alt="linkedin" className="w-5 h-5" />
                      Mohammad Rizki Dwi Saputra
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://instagram.com/rizki_d.saputra"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-black no-underline "
                    >
                      <img src="/assets/instagram.svg" alt="instagram" className="w-5 h-5" />
                      rizki_d.saputra
                    </a>
                  </li>
                </ul>
                 <div className="mt-6">
                  <a
                    href="https://drive.google.com/file/d/1e_epWCaOiOt9-XycS2ZNB0f3RrImWoJg/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-800 text-white rounded-full transition-colors duration-300"
                  >
                    <svg 
                      fill="#ffffff" 
                      width="800px" 
                      height="800px" 
                      viewBox="0 0 1000 1000" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      >
                      <path d="M790 790H208V208h291v-83H208q-35 0-59 24.5T125 208v582q0 35 24 59t59 24h582q35 0 59-24t24-59V499h-83v291zM582 125v83h150L323 617l58 58 409-408v149h83V125H582z"/>
                    </svg>
                    View CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Technical Expertise</h2>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-200 to-blue-200 flex items-center justify-center shadow-md">
                  <div className="">{skill.icon}</div>
                </div>
                <h4 className="font-semibold text-lg mb-1">{skill.name}</h4>
                <div className="text-sm text-red-500 font-medium mb-2">{skill.level}</div>
                <p className="text-sm text-gray-600">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Certificate Section */}
      <section className="py-16">
  <div className="max-w-6xl mx-auto px-4">
    <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-10">
      {/* Certificate Images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:w-2/3">
        {certificates.map((cert, idx) => (
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            key={idx}
            className="transition-transform duration-300 hover:scale-105"
          >
            <img
              src={cert.img}
              alt={`Certificate ${idx + 1}`}
              className="w-[170px] h-[170px] rounded-xl shadow-md"
            />
          </a>
        ))}
      </div>

      {/* Section Title */}
      <div className="md:w-1/3 text-center md:text-right">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">My Certificates</h2>
        
      </div>
    </div>
  </div>
</section>



    </section>
  );
}

export default Developer;
