import Form from "../components/Form";

export default function Contact() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent pb-6">
            Contact MBC Laboratory
          </h1>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Informasi Kontak</h2>

              <div className="space-y-6">
                {/* Alamat */}
                <div className="flex items-start space-x-4">
                  <img src="/assets/location.svg" alt="location" className="w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Alamat Laboratory</h3>
                    <p className="text-gray-600">
                      TULT 13.04 & TULT 11.12 <br />
                      Jl. Telekomunikasi No.1, <br />
                      Sukapura, Kec. Dayeuhkolot, <br />
                      Kabupaten Bandung, Jawa Barat 40267
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <img src="/assets/gmail.svg" alt="email" className="w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <a
                      href="mailto:laboratory.mbc@gmail.com"
                      className="text-gray-600 "
                    >
                      laboratory.mbc@gmail.com
                    </a>
                  </div>
                </div>

                {/* Telepon */}
                <div className="flex items-start space-x-4">
                  <img src="/assets/telephone.svg" alt="telepon" className="w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Telepon</h3>
                    <p className="text-gray-600">+62 21 1234 5678</p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start space-x-4">
                  <img src="/assets/instagram.svg" alt="instagram" className="w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Instagram</h3>
                    <a
                      href="https://instagram.com/mbclab"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 "
                    >
                      @mbclab
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start space-x-4">
                  <img src="/assets/linkedin.svg" alt="linkedin" className="w-6 h-6 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">LinkedIn</h3>
                    <a
                      href="https://id.linkedin.com/company/mbclaboratory"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 "
                    >
                      Multimedia Application, Big Data and Cybersecurity Laboratory
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Maps */}
            <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.3389366293327!2d107.62558207499683!3d-6.9692819930313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9bc3974981d%3A0x613eec0feec9fcf7!2sTelkom%20University%20Landmark%20Tower%20(TULT)!5e0!3m2!1sid!2sid!4v1751535173307!5m2!1sid!2sid"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <Form />
        </div>
      </div>
    </div>
  );
}
